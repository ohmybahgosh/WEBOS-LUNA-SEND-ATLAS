# System settings: categories, keys and allowed values

Used with `com.webos.settingsservice/getSystemSettings` and `setSystemSettings`.  Key tables are the union across firmware dumps from 9 LG OLED models (C1, C2, C8, C9, CX, G3, G4, G5, G6) published by bscpylgtv.  Not every key exists on every model.

> **Machine-readable:** a 1,954-key settings schema (key, category, dbtype, dimension) dumped from `/etc/palm/description.json` on a webOS 7.0 TV is in [`../catalog/settings-schema-W22O.json`](../catalog/settings-schema-W22O.json).



`ssap://settings/getSystemSettings {category, keys[], subscribe?}` (read; whitelist of keys) and `luna://com.webos.settingsservice/setSystemSettings {category, settings{}, current_app?}` (write, via alert trick; also public `ssap://settings/setSystemSettings` on webOS 9+). Values are almost always **strings** (even numbers: `"backlight":"40"`); exceptions are ints for LGTV Companion `other` keys with `ValFormat:int` (lowLevelAdjustment, blackStabilizer, whiteStabilizer, staticModeColor1-4, lightingBrightness), bools (`erpUserConfirm`, `isAiPictureActing`), arrays (`whiteBalanceRed/Green/Blue` 22 or 20 ints, `adjustingLuminance` 22/20 ints) and objects (`blackLevel` per-colour-system object on `default` input).

**Dimension-qualified categories** (bscpylgtv `set_picture_mode`, `set_picture_settings`): `picture$<input>.<pictureMode>.<2d|3d>.<dynamicRange>` with `x` wildcards, category base `picture` or `aiPicture`. `get/setSystemSettings` also accept `dimension:{input,pictureMode,dynamicRange}` (glasshouse research on G3/webOS 9.2.2: reading another input's mode requires both input and dynamicRange; `no result from DB` otherwise; app on screen reads as input `default`).

Inputs: atv, av1, av2, browser, camera, comp1, comp2, comp3, default, dp1, dp2, dtv, gallery, hdmi1, hdmi1_pc, hdmi2, hdmi2_pc, hdmi3, hdmi3_pc, hdmi4, hdmi4_pc, ip, movie, photo, pictest, rgb, scart, smhl, usbc1, usbc2.
Picture modes (G6 firmware): cinema, dolbyHdrCinema, dolbyHdrCinemaBright, dolbyHdrDarkAmazon, dolbyHdrGame, dolbyHdrPersonalized, dolbyHdrStandard, dolbyHdrVivid, eco, expert1, expert2, filmMaker, game, hdrCinema, hdrCinemaBright, hdrEco, hdrExternal, hdrFilmMaker, hdrGame, hdrPersonalized, hdrStandard, hdrVivid, normal, personalized, photo, sports, vivid. Older/other-model names seen: technicolor, hdrEffect, hdrTechnicolor, dolbyStandard.
Dynamic ranges: dolbyHdr, dolbyHdrALLM, dolbyHdrFMM, hdr, hdrALLM, hdrFMM, sdr, sdrALLM, sdrFMM, technicolorHdr, technicolorHdrALLM.
Sound modes: aiSoundPlus, aiSound, standard, news, music, movie, sports/sport, game, clearVoice (LGTV Companion + homebridge-lgwebos-tv + G6 docs).
Sound outputs: tv_speaker, mastervolume_tv_speaker, external_speaker, external_optical, external_arc, lineout, headphone, tv_external_speaker, tv_external_headphone, bt_soundbar, soundbar, tv_speaker_headphone, tv_speakerbar, wisa_speaker, mobile_phone, builtin_soundbar, bt_audio, tv_speaker_bluetooth, tv_speakerbar_headphone, tv_speaker_external_arc, usb_speaker, tv_speaker_optical_arc, wow_cast, tv_speaker_wow_cast, flex_connector (homebridge-lgwebos-tv constants; bscpylgtv `change_sound_output`).

## LGTV Companion command -> category/key/values (lg_api_commands.h)
| command | category | key | values |
|---|---|---|---|
| wol | network | wolwowlOnOff | true false |
| picturemode | picture | pictureMode | cinema eco expert1 expert2 game normal photo sports technicolor vivid hdrEffect filmMaker hdrCinema hdrCinemaBright hdrExternal hdrGame hdrStandard hdrTechnicolor hdrVivid hdrFilmMaker dolbyHdrCinema dolbyHdrCinemaBright dolbyHdrDarkAmazon dolbyHdrGame dolbyHdrStandard dolbyHdrVivid dolbyStandard |
| backlight | picture | backlight | 0..100 |
| contrast | picture | contrast | 0..100 |
| brightness | picture | brightness | 0..100 |
| color | picture | color | 0..100 |
| sharpness | picture | sharpness | 0..50 |
| colorgamut | picture | colorGamut | auto extended wide srgb native |
| dynamiccontrast | picture | dynamicContrast | off low medium high |
| gamma | picture | gamma | low medium high1 high2 |
| colortemperature | picture | colorTemperature | -50..50 |
| whitebalancecolortemperature | picture | whiteBalanceColorTemperature | cool medium warm1 warm2 warm3 |
| eyecomfortmode | picture | eyeComfortMode | off on |
| dynamiccolor | picture | dynamicColor | off on low medium high |
| peakbrightness | picture | peakBrightness | off low medium high |
| smoothgradation | picture | smoothGradation | off low medium high |
| energysaving | picture | energySaving | auto off min med max screen_off |
| hdrdynamictonemapping | picture | hdrDynamicToneMapping | on off HGIG |
| blacklevel | picture | blackLevel | low medium high limited full |
| dolbyprecisiondetail | picture | dolbyPrecisionDetail | off on |
| ai_brightness | aiPicture | ai_Brightness | off on |
| ai_genre | aiPicture | ai_Genre | off on |
| ai_picture | aiPicture | ai_Picture | off on |
| arcperapp | aspectRatio | arcPerApp | 21x9 16x9 4x3 14x9 32x9 32x12 just_scan original full_wide limited zoom zoom2 cinema_zoom vertZoom allDirZoom twinZoom |
| justscan | aspectRatio | justScan | off on auto |
| alldirzoomhratio | aspectRatio | allDirZoomHRatio | 0..10 |
| alldirzoomvratio | aspectRatio | allDirZoomVRatio | 0..9 |
| alldirzoomhposition | aspectRatio | allDirZoomHPosition | -10..9 |
| alldirzoomvposition | aspectRatio | allDirZoomVPosition | -9..9 |
| vertzoomvposition | aspectRatio | vertZoomVPosition | -8..9 |
| vertzoomvratio | aspectRatio | vertZoomVRatio | 0..9 |
| trumotionmode | picture | truMotionMode | off smooth clear clearPlus cinemaClear natural user |
| trumotionjudder | picture | truMotionJudder | 0..10 |
| trumotionblur | picture | truMotionBlur | 0..10 |
| motionprooled | picture | motionProOLED | off low medium high |
| motionpro | picture | motionPro | off on |
| realcinema | picture | realCinema | off on |
| uhddeepcolor_hdmi1 | other | uhdDeepColorHDMI1 | off on |
| uhddeepcolor_hdmi2 | other | uhdDeepColorHDMI2 | off on |
| uhddeepcolor_hdmi3 | other | uhdDeepColorHDMI3 | off on |
| uhddeepcolor_hdmi4 | other | uhdDeepColorHDMI4 | off on |
| lowleveladjustment | other | lowLevelAdjustment | -30..30 (int) |
| blackstabilizer | other | blackStabilizer | -30..30 (int) |
| whitestabilizer | other | whiteStabilizer | -30..30 (int) |
| bluelight | other | blueLight | off level1 level2 |
| gamemode_hdmi1 | other | gameMode_hdmi1 | off on |
| gamemode_hdmi2 | other | gameMode_hdmi2 | off on |
| gamemode_hdmi3 | other | gameMode_hdmi3 | off on |
| gamemode_hdmi4 | other | gameMode_hdmi4 | off on |
| gameoptimization | other | gameOptimization | off on |
| inputoptimization | other | inputOptimization | auto on standard boost |
| gameoptimization_hdmi1 | other | gameOptimizationHDMI1 | off on |
| gameoptimization_hdmi2 | other | gameOptimizationHDMI2 | off on |
| gameoptimization_hdmi3 | other | gameOptimizationHDMI3 | off on |
| gameoptimization_hdmi4 | other | gameOptimizationHDMI4 | off on |
| freesync | other | freesync | off on |
| freesyncoled_hdmi1 | other | freesyncOLEDHDMI1 | off on |
| freesyncoled_hdmi2 | other | freesyncOLEDHDMI2 | off on |
| freesyncoled_hdmi3 | other | freesyncOLEDHDMI3 | off on |
| freesyncoled_hdmi4 | other | freesyncOLEDHDMI4 | off on |
| hdmipcmode_hdmi1 | other | hdmiPcMode_hdmi1 | off on |
| hdmipcmode_hdmi2 | other | hdmiPcMode_hdmi2 | off on |
| hdmipcmode_hdmi3 | other | hdmiPcMode_hdmi3 | off on |
| hdmipcmode_hdmi4 | other | hdmiPcMode_hdmi4 | off on |
| soundmode | sound | soundMode | aiSoundPlus aiSound standard news music movie sports game |
| soundoutput | sound | soundOutput | tv_speaker external_arc external_optical bt_soundbar mobile_phone lineout headphone tv_speaker_bluetooth tv_external_speaker tv_speaker_headphone wisa_speaker |
| autovolume | sound | autoVolume | off on |
| ambientlight | other | lightingEnable | off on |
| ambientlight_mode | other | lightingMode | dynamic peaceful videoSyncMode soundSyncMode staticMode1 staticMode2 staticMode3 staticMode4 |
| ambientlight_staticmodecolor1 | other | staticModeColor1 | 0..42 (int) |
| ambientlight_staticmodecolor2 | other | staticModeColor2 | 0..42 (int) |
| ambientlight_staticmodecolor3 | other | staticModeColor3 | 0..42 (int) |
| ambientlight_staticmodecolor4 | other | staticModeColor4 | 0..42 (int) |
| ambientlight_brightness | other | lightingBrightness | 1..10 (int) |

Extras in LGTV Companion code: `set_input_type` -> `com.webos.service.eim/setDeviceInfo`; `-set_curve_preset` -> rollingscreen/changeCurve; `-servicemenu_legacy_*` -> category other `svcMenuFlag`; `-settings_picture|other|options` send arbitrary JSON for categories `picture|other|option`; docs/Commandline.md lists example keys for those three categories.

## Public-API (SSAP) subsets, G6 firmware

**Settable via ssap://settings/setSystemSettings:**

* `(empty)`: eulaInfoNetwork, eulaStatus, mobileSetupStatus, localeInfo
* `aspectRatio`: arcPerApp, justScan
* `general`: lastInputApp, physicalLastInputApp, alwaysOn, tvOnScreen, tvInstallMethod, powerOffBySCA3SystemChanged, SCA3SystemCountry, homeAutoLaunch, lifeOnScreenMode, checkHomeAutoLaunchValue, homePromotion
* `lock`: ziggoRaiting, parentalGuidance, systemPin, parentalControl, offHearingProtectFlag, offHearingProtectMaxVolume, offUsageTimeFlag, dailyRepeatFlag, usageTimeStart, usageTimeEnd, inputBlock, applockPerApp, tvRatingChildrenAge, tvRatingChildrenFantasy, tvRatingGeneralAge, tvRatingGeneralDialog, tvRatingGeneralLanguage, tvRatingGeneralSex, tvRatingGeneralViolence, unlockDate, movieRating
* `network`: deviceName, wolwowlOnOff, bleAdvertisingOnOff
* `option`: phlCitySelection, zipcode, livePlus, firstTvSignalStatus, addressInfo, audioGuidance, audioGuidanceSpeed, smartServiceCountryCode2, smartServiceCountryCode3, storeMode, standByLight, addressInfo, country, japanCitySelection, yourMomentsVersion, wallPaperSettings, quickStartMode
* `other`: simplinkEnable, ueiEnable, gameWallpaper, uhdDeepColorHDMI1, uhdDeepColorHDMI2, uhdDeepColorHDMI3, uhdDeepColorHDMI4
* `picture`: brightness, backlight, contrast, color, energySaving, pictureMode, dynamicContrast, peakBrightness, gamma, motionEyeCare, colorGamut, hdrDynamicToneMapping, blackLevel, realCinema, truMotionMode, tint, adjustingLuminance, colorTemperature, whiteBalancePoint, superResolution, sharpness, noiseReduction, mpegNoiseReduction, smoothGradation, dynamicColor, whiteBalanceMethod, whiteBalanceIre10pt, whiteBalanceIre, whiteBalanceRedOffset, whiteBalanceRedGain, whiteBalanceRed10pt, whiteBalanceRed, adjustingLuminance10pt, whiteBalanceGreenOffset, whiteBalanceGreenGain, whiteBalanceGreen10pt, whiteBalanceGreen, whiteBalanceBlueOffset, whiteBalanceBlueGain, whiteBalanceBlue10pt, whiteBalanceBlue, colorManagementColorSystem, colorManagementSaturationRed, colorManagementSaturationGreen, colorManagementSaturationBlue, colorManagementSaturationCyan, colorManagementSaturationMagenta, colorManagementSaturationYellow, colorManagementHueRed, colorManagementHueGreen, colorManagementHueBlue, colorManagementHueCyan, colorManagementHueMagenta, colorManagementHueYellow, colorManagementLuminanceRed, colorManagementLuminanceGreen, colorManagementLuminanceBlue, colorManagementLuminanceCyan, colorManagementLuminanceMagenta, colorManagementLuminanceYellow, whiteBalanceLuminance, eyeComfortMode
* `sound`: avSync, avSyncSpdif, avSyncBypassInput, eArcSupport, lgSoundSync, soundOutput, soundOutputDigital, tvPowerSound, tvSetupConfiguration
* `support`: automaticUpdate
* `time`: timeZone

**Readable via ssap://settings/getSystemSettings:**

* `(empty)`: eulaStatus, eulaInfoNetwork, mobileSetupStatus, localeInfo
* `aspectRatio`: arcPerApp, justScan
* `general`: alwaysOn, tvOnScreen, tvInstallMethod, powerOffBySCA3SystemChanged, SCA3SystemCountry, homeAutoLaunch, lifeOnScreenMode, homePromotion
* `hotelMode`: enableHotelMode
* `lock`: parentalGuidance, ziggoRaiting, parentalControl, offHearingProtectFlag, offHearingProtectMaxVolume, offUsageTimeFlag, dailyRepeatFlag, usageTimeStart, usageTimeEnd, inputBlock, applockPerApp, tvRatingChildrenAge, tvRatingChildrenFantasy, tvRatingGeneralAge, tvRatingGeneralDialog, tvRatingGeneralLanguage, tvRatingGeneralSex, tvRatingGeneralViolence, unlockDate, movieRating
* `network`: deviceName, wolwowlOnOff, bleAdvertisingOnOff
* `option`: audioGuidance, country, zipcode, livePlus, firstTvSignalStatus, addressInfo, phlCitySelection, smartServiceCountryCode3, syncMode, storeMode, standByLight, localeCountryGroup, japanCitySelection, countryBroadcastSystem, yourMomentsVersion, wallPaperSettings, quickStartMode
* `other`: simplinkEnable, ueiEnable, gameWallpaper, uhdDeepColor, uhdDeepColorHDMI1, uhdDeepColorHDMI2, uhdDeepColorHDMI3, uhdDeepColorHDMI4, 444BypassHDMI1, 444BypassHDMI2, 444BypassHDMI3, 444BypassHDMI4
* `picture`: brightness, backlight, contrast, color, energySaving, pictureMode, dynamicContrast, peakBrightness, gamma, blackLevel, motionEyeCare, colorGamut, hdrDynamicToneMapping, realCinema, truMotionMode, tint, adjustingLuminance, colorTemperature, whiteBalancePoint, superResolution, sharpness, noiseReduction, mpegNoiseReduction, smoothGradation, dynamicColor, whiteBalanceMethod, whiteBalanceIre10pt, whiteBalanceIre, whiteBalanceRedOffset, whiteBalanceRedGain, whiteBalanceRed10pt, whiteBalanceRed, adjustingLuminance10pt, whiteBalanceGreenOffset, whiteBalanceGreenGain, whiteBalanceGreen10pt, whiteBalanceGreen, whiteBalanceBlueOffset, whiteBalanceBlueGain, whiteBalanceBlue10pt, whiteBalanceBlue, colorManagementColorSystem, colorManagementSaturationRed, colorManagementSaturationGreen, colorManagementSaturationBlue, colorManagementSaturationCyan, colorManagementSaturationMagenta, colorManagementSaturationYellow, colorManagementHueRed, colorManagementHueGreen, colorManagementHueBlue, colorManagementHueCyan, colorManagementHueMagenta, colorManagementHueYellow, colorManagementLuminanceRed, colorManagementLuminanceGreen, colorManagementLuminanceBlue, colorManagementLuminanceCyan, colorManagementLuminanceMagenta, colorManagementLuminanceYellow, whiteBalanceLuminance, eyeComfortMode
* `sound`: avSync, avSyncSpdif, avSyncBypassInput, digitalAudioPriority, eArcSupport, lgSoundSync, soundOutput, soundOutputDigital, soundMode, tvSetupConfiguration
* `support`: automaticUpdate
* `time`: onTimerVolume, timeZone, timeOffset, offTimerEnable, autoOff2HourOnTimer, automaticStandBy
* `twinTv`: status, role, systemMode

## Full category tables (from bscpylgtv docs/available_settings_{C1,C2,C8,C9,CX,G3,G4,G5,G6}.md)

Each key lists its allowed values: `int min..max step n`, an enumerated list (union across models), or - when the docs list no 'non-trivial values' for it - the default value seen in the dump (shown as `default:`). Ranges/lists differ slightly between models; the union is shown. Models column = number of the 9 firmware dumps containing the key.

#### category `picture` (171 keys)

| key | allowed values / default | models |
|---|---|---|
| DtmMastering10k | int 10..100 step 10 | 5 |
| DtmMastering1k | int 10..100 step 10 | 5 |
| DtmMastering4k | int 10..100 step 10 | 5 |
| DtmMasteringLumMax | int 0..10000 step 1 | 2 |
| DtmMasteringReset | default: False | 2 |
| DtmProfessional | default: False | 5 |
| DtmToneMappingGain | int -5..5 step 1 | 2 |
| RGBWDotPatternMax | int 127..255 step 1 | 9 |
| RGBWDotPatternMin | int 0..126 step 1 | 9 |
| RGBWDotPatternOnOff | default: off | 9 |
| ScreenOff | default: off | 5 |
| _14_9VPosition | int -8..8 step 1 | 9 |
| adjustingLuminance | int -50..50 step 1 | 9 |
| adjustingLuminance10pt | int -50..50 step 1 | 8 |
| aiHdrRemastering | default: off | 2 |
| aiPicture | default: off | 1 |
| aiPictureReset | default: off | 1 |
| ambientLightCompensation | default: off | 8 |
| applyToAllInput | picture, done | 6 |
| aspectRatio | 21x9, 16x9, zoom, caption_zoom, zoom2, cinema_zoom, just_scan, original, 4x3 | 9 |
| aspectRatioActive | default: true | 9 |
| aspectRatioActivePerApp | auto, manual | 9 |
| aspectRatioHdmiCinema | 21x9, 16x9, zoom, zoom2, caption_zoom, cinema_zoom, just_scan, original, full_wide, 4x3, 14x9 | 9 |
| aspectRatioPerApp | original, full_wide, zoom | 9 |
| aspectRatioSettingActivePerApp | auto, manual | 9 |
| aspectRatioTv | 21x9, 16x9, zoom, zoom2, caption_zoom, cinema_zoom, just_scan, original, 4x3 | 9 |
| autoCreatorMode | default: off | 1 |
| avMode | off, cinema, game | 9 |
| backlight | int 0..100 step 1 | 9 |
| blackLevel | auto, low, high | 9 |
| brightness | int 0..100 step 1 | 9 |
| brightnessActive | default: True | 6 |
| captionZoomRatio | int -8..9 step 1 | 9 |
| captionZoomVPosition | int 0..18 step 1 | 9 |
| cinemaVPosition | int -16..16 step 1 | 9 |
| cinemaZoomRatio | int 0..4 step 1 | 9 |
| clarityActive | default: True | 6 |
| color | int 0..100 step 1 | 9 |
| colorActive | default: True | 6 |
| colorFilter | off, red, green, blue | 9 |
| colorGamut | auto, native, wide, extended, dynamic, srgb | 9 |
| colorManagementColorSystem | red, green, blue, cyan, magenta, yellow | 9 |
| colorManagementHueBlue | int -30..30 step 1 | 9 |
| colorManagementHueCyan | int -30..30 step 1 | 9 |
| colorManagementHueGreen | int -30..30 step 1 | 9 |
| colorManagementHueMagenta | int -30..30 step 1 | 9 |
| colorManagementHueRed | int -30..30 step 1 | 9 |
| colorManagementHueYellow | int -30..30 step 1 | 9 |
| colorManagementLuminanceBlue | int -30..30 step 1 | 9 |
| colorManagementLuminanceCyan | int -30..30 step 1 | 9 |
| colorManagementLuminanceGreen | int -30..30 step 1 | 9 |
| colorManagementLuminanceMagenta | int -30..30 step 1 | 9 |
| colorManagementLuminanceRed | int -30..30 step 1 | 9 |
| colorManagementLuminanceYellow | int -30..30 step 1 | 9 |
| colorManagementSaturationBlue | int -30..30 step 1 | 9 |
| colorManagementSaturationCyan | int -30..30 step 1 | 9 |
| colorManagementSaturationGreen | int -30..30 step 1 | 9 |
| colorManagementSaturationMagenta | int -30..30 step 1 | 9 |
| colorManagementSaturationRed | int -30..30 step 1 | 9 |
| colorManagementSaturationYellow | int -30..30 step 1 | 9 |
| colorTemperature | int -50..50 step 1 | 9 |
| colorWeakness | default: off | 2 |
| contrast | int 0..100 step 1 | 9 |
| demandResponse | default: off | 6 |
| displayType | 3840X2160P_60HZ_16X9, 3840X2160P_50HZ_16X9, 1920X1080P_60HZ_16X9, 1920X1080P_50HZ_16X9, 1280X720P_60HZ_16X9, 1280X720P_50HZ_16X9, 3840X2160P_30HZ_16X9, 720X480P_60HZ_4X3, 720X576P_50HZ_4X3 | 5 |
| doNotShowAbcNotification | default: false | 9 |
| doNotShowMecNotification | default: false | 9 |
| dolbyPrecisionDetail | default: off | 5 |
| dynamicColor | off, low, medium, high, user | 9 |
| dynamicContrast | off, low, medium, high | 9 |
| edgeEnhancer | default: on | 9 |
| energySaving | auto, off, min, med, max, screen_off | 9 |
| energySavingAutoMin | int 0..10 step 1 | 7 |
| energySavingModified | default: false | 9 |
| erpUserConfirm | default: False | 9 |
| expertPattern | default: off | 9 |
| expressionEnhancer | off, detail, highlight | 5 |
| externalPqlDbType | none, svl, calman | 9 |
| eyeComfortMode | default: off | 9 |
| filmMakerMode | default: off | 7 |
| filmmakerAmbientLight | default: off | 3 |
| gamma | low, medium, high1, high2, mediumHavingLevel | 9 |
| gammaLevel | int -3..3 step 1 | 3 |
| grassColor | int -5..5 step 1 | 9 |
| hPosition | int -10..10 step 1 | 9 |
| hSharpness | default: 10 | 9 |
| hSize | int -10..10 step 1 | 9 |
| hdrDynamicToneMapping | on, off, HGIG | 9 |
| hdrEffect | default: off | 3 |
| hdrLevel | low, medium, high | 1 |
| hgig | default: on | 3 |
| inputListForCopyCms | default: <complex> | 9 |
| inputListForCopyPsm | default: <complex> | 9 |
| inputListForCopyWb | default: <complex> | 9 |
| isfMode | none, day, night | 9 |
| keyListForCopyCms | default: <complex> | 9 |
| keyListForCopyPsm | default: backlight, contrast, brightness, sharpness, color, tint | 9 |
| keyListForCopyWb | default: <complex> | 9 |
| localDimming | off, low, medium, high | 9 |
| logoLuminanceAdjust | off, light, strong | 9 |
| mediaZoomRatio | int -8..9 step 1 | 9 |
| mediaZoomVPosition | int -18..18 step 1 | 9 |
| memcDelayLevel | none, mid, max | 7 |
| motionEyeCare | default: off | 9 |
| motionPro | default: off | 9 |
| motionProOLED | off, low, medium, high, auto | 8 |
| mpegNoiseReduction | off, low, medium, high, auto | 9 |
| nearBlackDetail | int -10..10 step 1 | 3 |
| noiseReduction | off, low, medium, high, auto | 9 |
| oledPanelSettings | default: off | 9 |
| pcMode | default: {'hdmi1': False, 'hdmi2': False, 'hdmi3': False, 'hdmi4': False} | 9 |
| pcScreenSaver | off, 20min, 1hr, 2hr, 4hr | 5 |
| peakBrightness | off, high, low, medium | 8 |
| personalPictureWizard | default: False | 1 |
| pictureControlLimitation | default: false | 9 |
| pictureMode | personalized, hdrPersonalized, dolbyHdrPersonalized, vivid, hdrVivid, normal, eco, cinema, hdrStandard, hdrEco, hdrCinemaBright, hdrCinema, sports, game, photo, hdrGame, filmMaker, hdrFilmMaker, dolbyHdrVivid, dolbyHdrStandard, dolbyHdrCinemaBright, dolbyHdrCinema, dolbyHdrGame, expert1, expert2 ...(+12) | 9 |
| pictureModeSettingsActive | default: true | 9 |
| pictureModeSettingsActivePerApp | auto, manual | 9 |
| pictureReset | default: False | 1 |
| pictureSettingModified | default: <complex> | 9 |
| pictureSettingsActivePerApp | default: {'pictureModeEnable': 'auto', 'pictureModeSettingsEnable': 'auto'} | 9 |
| pictureTempKey | default: off | 8 |
| precisionHdrMasterPro | default: off | 3 |
| psmListForExpert | default: <complex> | 8 |
| realCinema | default: on | 9 |
| scheduledPixelCleaning | default: off | 5 |
| screenShift | default: on | 9 |
| sharpness | int 0..50 step 1 | 9 |
| skinColor | int -5..5 step 1 | 9 |
| skyColor | int -5..5 step 1 | 9 |
| smoothGradation | off, low, medium, high | 8 |
| sourceRatio | 21x9, 16x9, 4x3, 14x9 | 9 |
| superResolution | off, low, medium, high | 9 |
| tint | int -50..50 step 1 | 9 |
| truMotionBlur | int 0..10 step 1 | 9 |
| truMotionJudder | int 0..10 step 1 | 9 |
| truMotionMode | off, cinemaClear, natural, smooth, user, clear | 9 |
| vPosition | int -10..10 step 1 | 9 |
| vSharpness | default: 10 | 9 |
| vSize | int -10..10 step 1 | 9 |
| videoSource | tv, av1, av2, pictest, comp1, comp2, comp3, rgb, hdmi1, hdmi2, hdmi3, hdmi4, hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, smhl, movie, default, browser | 9 |
| wb10PointsGammaValue | default: <complex> | 8 |
| wb20PointsGammaValue | default: <complex> | 1 |
| wb22PointsGammaValue | default: <complex> | 8 |
| whiteBalanceActive | default: true | 9 |
| whiteBalanceApplyAllInputs | default: off | 9 |
| whiteBalanceBlue | int -50..50 step 1 | 9 |
| whiteBalanceBlue10pt | int -50..50 step 1 | 8 |
| whiteBalanceBlueGain | int -50..50 step 1 | 9 |
| whiteBalanceBlueOffset | int -50..50 step 1 | 9 |
| whiteBalanceCodeValue | default: 23 | 9 |
| whiteBalanceCodeValue10pt | default: 9 | 8 |
| whiteBalanceColorTemperature | cool, medium, warm1, warm2, warm3 | 9 |
| whiteBalanceGreen | int -50..50 step 1 | 9 |
| whiteBalanceGreen10pt | int -50..50 step 1 | 8 |
| whiteBalanceGreenGain | int -50..50 step 1 | 9 |
| whiteBalanceGreenOffset | int -50..50 step 1 | 9 |
| whiteBalanceIre | 1, 2, 3, 5, 7.5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 2.5 | 9 |
| whiteBalanceIre10pt | 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 | 8 |
| whiteBalanceLuminance | int 50..500 step 1 | 9 |
| whiteBalanceMethod | 2, 10, 24, 10code, 24code, 22, 22code, 20, 20code | 9 |
| whiteBalancePattern | inner, outer | 9 |
| whiteBalancePoint | low, high | 9 |
| whiteBalanceRed | int -50..50 step 1 | 9 |
| whiteBalanceRed10pt | int -50..50 step 1 | 8 |
| whiteBalanceRedGain | int -50..50 step 1 | 9 |
| whiteBalanceRedOffset | int -50..50 step 1 | 9 |
| wssZoomVPosition | int -8..8 step 1 | 9 |
| xvycc | default: auto | 9 |
| zoomRatio | int -8..9 step 1 | 9 |
| zoomVPosition | int -18..18 step 1 | 9 |

#### category `sound` (134 keys)

| key | allowed values / default | models |
|---|---|---|
| TTSMixingRatio | int 0..100 step 1 | 9 |
| _3dSoundZooming | default: off | 4 |
| ac4DialogueEnhancer | default: off | 2 |
| aiGameSound | default: on | 1 |
| aiSound | default: off | 8 |
| aiSoundControlMasterKaraokePitch | int -3..3 step 1 | 1 |
| aiSoundControlMasterKaraokeVocal | int -6..0 step 1 | 1 |
| aiSoundControlMasterMode | sports, karaoke | 1 |
| aiSoundControlMasterSportsBackground | int -4..4 step 1 | 1 |
| aiSoundControlMasterSportsVoice | int -4..4 step 1 | 1 |
| aigamesound | default: on | 5 |
| ambientGroupLighting | default: True | 1 |
| ambientLightingBrightness | low, mid, high | 2 |
| analogOut | headphone, external | 9 |
| apdtimer | int 0..15 step 1 | 2 |
| applyToAllInputSSM | sound, done | 5 |
| audioBalance | int -50..50 step 1 | 9 |
| audioDescription | default: off | 9 |
| audioDescriptionAtsc30 | default: off | 5 |
| audioDescriptionVolume | int -15..15 step 1 | 9 |
| audioLanguageFirst | default: eng | 9 |
| audioLanguageSecond | default: spa | 9 |
| auracast | default: off | 3 |
| autoVolume | default: off | 9 |
| autopower | default: on | 3 |
| avSync | default: on | 9 |
| avSyncBtSoundbar | int 0..0 step 1 | 2 |
| avSyncBtSurround | int 0..60 step 1 | 7 |
| avSyncBypass | default: off | 9 |
| avSyncBypassInput | default: off | 9 |
| avSyncSpdif | int 0..60 step 1 | 9 |
| avSyncSpeaker | int 0..60 step 1 | 9 |
| avSyncWisa | int 0..60 step 1 | 8 |
| bass | int -6..6 step 1 | 3 |
| bassPhase | 0degree, 180degree | 2 |
| blegattSoundbar | default: {'connected': False, 'soundbarName': ''} | 3 |
| bluetoothMode | surroundMode, speakerMode | 6 |
| brightnessMaxValue | int 1..100 step 1 | 1 |
| btDotAutoScan | default: off | 2 |
| btDotSignalStrength | low, high | 2 |
| btSpeakerMode | default: off | 9 |
| centerlevel | int -6..6 step 1 | 3 |
| channelNum | int 0..20 step 1 | 2 |
| clearVoice | off, level1, level2, level3 | 9 |
| clearVoiceProLevel | base, high | 1 |
| coSoundOutput | off, tv_speaker, external_speaker, soundbar, bt_soundbar | 9 |
| coSoundOutputState | default: off | 9 |
| currentLightingMode | on, off, ai_lighting, repeat_all, repeat_shuffle, custom, ambient | 2 |
| currentMotion | wave, rotation, glow, slide, flash, breathing, flickering, breeze, voice | 2 |
| currentMotionColor | default, mypick1, mypick2, mypick3 | 2 |
| deviceCntOfBtGeneral | singleConnection, dualConnection | 6 |
| dialogEnhancementAtsc30 | default: off | 5 |
| dialogEnhancementVolumeAtsc30 | int 0..12 step 1 | 5 |
| digitalAudioPriority | mpeg, dolbyDigital, dobyDigitalPlus, heAaC, dra, auto | 9 |
| display | auto, off, on | 3 |
| drc | int 0..2 step 1 | 2 |
| eArcSupport | default: on | 8 |
| enableNetworkStandby | default: True | 2 |
| enableRepeat | default: False | 2 |
| equalizerStatus | on, off, bypass | 7 |
| extwooferlevel | int -15..12 step 1 | 2 |
| forceOutputDDPLUS | default: false | 9 |
| function | bt, wifi, usb, earc | 1 |
| gameTVEqualizer | default: off | 5 |
| gameTVEqualizer10band | int -10..10 step 1 | 5 |
| hdmiArcMode | default: off | 9 |
| headphoneDetection | default: off | 7 |
| hearingAid | off, bluetooth, auracast, external_arc | 5 |
| inputAudioFormatDP1 | bitstream, pcm | 5 |
| inputAudioFormatDP2 | bitstream, pcm | 5 |
| inputAudioFormatHDMI1 | bitstream, pcm | 8 |
| inputAudioFormatHDMI2 | bitstream, pcm | 8 |
| inputAudioFormatHDMI3 | bitstream, pcm | 8 |
| inputAudioFormatHDMI4 | bitstream, pcm | 8 |
| inputAudioFormatUSBC1 | bitstream, pcm | 5 |
| inputAudioFormatUSBC2 | bitstream, pcm | 5 |
| lastfunction | com.webos.service.bluetoothfunction, com.webos.service.wififunction, com.webos.service.audiousbplayer, com.webos.service.arcfunction | 2 |
| lgRadioPlusAuthentication | default:  | 2 |
| lgSoundSync | default: off | 9 |
| lgxboomBudsAutoSearch | default: on | 2 |
| magicSoundModified | default: false | 9 |
| magicSoundTime |  | 9 |
| magicSpaceSound | off, standard, bass, treble, flat | 9 |
| midlevel | int -6..6 step 1 | 3 |
| motionColor | default: <complex> | 2 |
| motionColorPairinfo | default: <complex> | 2 |
| multiAudioOutputWithBt | default: off | 5 |
| muteStatus | default: False | 2 |
| mybtnLighting | default: <complex> | 2 |
| mybtnOthers | default: <complex> | 2 |
| mybtnPlaylist | default: {'playlist': [], 'type': 'none'} | 2 |
| networkStandbyBrightness | low, mid, high | 2 |
| night | default: off | 3 |
| prevSoundOutput | tv_speaker, external_optical, external_arc, bt_soundbar, wisa_speaker, lgSoundSync, lineout, tv_external_speaker, tv_speaker_bluetooth, mobile_phone, tv_speaker_external_arc, tv_speaker_optical_arc, wow_cast, tv_speaker_wow_cast | 7 |
| rearlevel | int -6..6 step 1 | 1 |
| repeatMode | repeat_all, repeat_shuffle | 2 |
| sidelevel | int -6..6 step 1 | 3 |
| slidingSpeaker | openAlways, openPowerOn | 9 |
| slidingSpeakerMelody | default: on | 9 |
| smartMixer | default: True | 2 |
| smartSoundMode | default: off | 9 |
| sound | default: on | 9 |
| soundAlive | default: off | 6 |
| soundEffect | default: on | 9 |
| soundEngineStatus | default: on | 7 |
| soundMode | bass, treble, rock, pop, jazz, classical, aiSoundPlus, standard, movie, news, sports, music, game, bassBlast, aiSound, aiSound_soundbar, newsHigh, game_rts, game_fps, dtsVirtualX, custom, voiceEnhance, bassBoost, customEq, asc, pagode, sertaWego, brazilianPunk | 9 |
| soundModeModified | default: false | 9 |
| soundModeSync | default: on | 6 |
| soundOptimizer | normal, stand, wall_mount | 9 |
| soundOutput | tv_speaker, tv_speakerbar, external_optical, external_arc, bt_soundbar, wisa_speaker, mobile_phone, lineout, builtin_soundbar, headphone, bt_audio, tv_external_speaker, tv_speaker_headphone, tv_speaker_bluetooth, tv_speakerbar_headphone, tv_speaker_external_arc, usb_speaker, tv_speaker_optical_arc, wow_cast, tv_speaker_wow_cast, flex_connector | 9 |
| soundOutputDigital | pcm, auto, passThrough | 9 |
| soundOutputList | default: <complex> | 7 |
| soundOutputs | tv_speaker, external_speaker, soundbar, bt_soundbar, lineout, builtin_soundbar, headphone | 9 |
| spotifyCredentialsBlob | default:  | 2 |
| spotifyUri | default:  | 2 |
| spotifyUsername | default:  | 2 |
| startupSound | default: on | 9 |
| supportATMOS | default: on | 9 |
| supportSoundMode | standard, bassBoost, aiSoundPlus, voiceEnhance, customEq, personalized, newsHigh | 2 |
| surround | default: off | 3 |
| toplevel | int -6..6 step 1 | 3 |
| treble | int -6..6 step 1 | 3 |
| tvPowerSound | default: on | 9 |
| tvSetupConfiguration | stand, wall_mount | 7 |
| uacMode | 1.0, 2.0 | 2 |
| userEqualizer | default: on | 9 |
| userEqualizerValues | int -10..10 step 1 | 9 |
| virtualSurround | default: off | 9 |
| visualImpaired | default: off | 9 |
| volumeControl | low, medium, high | 9 |
| volumeStep | int 0..10 step 1 | 9 |
| wisaSpeakerChannelType | 2, 2.1, 5.1 | 8 |
| wooferLevel | int 1..13 step 1 | 9 |
| wooferlevel | int -15..12 step 1 | 3 |

#### category `option` (202 keys)

| key | allowed values / default | models |
|---|---|---|
| IPControlSecureKey | default:  | 9 |
| _3dModeEstreamer | default: off | 4 |
| a11yQuickList | default: <complex> | 5 |
| additionalAudioSelection | none, audioDescription, cleanAudio, spokenSubtitles | 9 |
| addressInfo | default: not_defined, not_defined, not_defined, not_defined | 9 |
| adjustments | default: {'blackAndWhite': 'off', 'colorInversion': 'off'} | 7 |
| animationGuide | default: on | 9 |
| aodThemeHistory | default: <complex> | 5 |
| appInstallDevice | default: {'deviceId': '', 'driveId': ''} | 9 |
| appUpdateMode | manual, auto | 8 |
| artisticDisplayTimer | off, 5, 10, 30, 60, 120 | 5 |
| audioGuidance | default: on | 9 |
| audioGuidancePitch | veryLow, low, medium, high, veryHigh | 9 |
| audioGuidanceSpeed | veryFast, fast, medium, slow, verySlow | 9 |
| audioGuidanceVolume | veryLow, low, medium, high, veryHigh | 9 |
| autoComplete | default: False | 9 |
| autoSearchStatus | default: {'ftmsStatus': True} | 2 |
| autoSmartServiceCountry | default: on | 9 |
| avatar | default: off | 9 |
| backupPsm | default: {'backupPsm2d': 'hdrStandard'} | 9 |
| backupPsmDolby | default: {'backupPsm2d': 'dolbyHdrDark'} | 9 |
| baloonHelp | default: on | 9 |
| bannerPosition | none, lefttop, righttop, leftbottom, rightbottom | 9 |
| broadcastInfoNoti | default: on | 8 |
| cameraResourcePermission | default:  | 6 |
| channelplus | default: off | 9 |
| channelplusPopup | default: off | 9 |
| checkChangedScreenSaverTimerByUser | default, user | 3 |
| chinaNrtaCatvStbHdmiPort | off, hdmi1, hdmi2, hdmi3, hdmi4 | 1 |
| cicNumber | default: {'country': 'default', 'number': 'none', 'shortName': 'default'} | 9 |
| country | default: other | 9 |
| countryGroup | default: UNDEFINED | 9 |
| countryRegion | default: other | 9 |
| curDemoFile | default: undefined | 9 |
| curvature | default: <complex> | 5 |
| dataService | mheg, ttx | 9 |
| dbgLogUpload | default: False | 6 |
| demoFileList | default: undefined | 9 |
| demoMode | default: on | 9 |
| disclosureAccepted | default: False | 1 |
| disclosureAcceptedVsn | default: N/A | 1 |
| displayMusicWidget | default: True | 9 |
| eStreamerPosition | all, left, right, down | 9 |
| emergencyAlert | default: on | 9 |
| emergencyInformationAtsc30 | default: on | 5 |
| emergencyInformationLanguageAtsc30 | eng, spa, fre | 5 |
| enableIpControl | default: off | 9 |
| enableSDDP | default: off | 9 |
| enableToastPopup | default: on | 9 |
| enabling3dSettingsMenu | default: off | 4 |
| epgPipMode | default: off | 8 |
| estreamerMinimalMode | default: off | 8 |
| estreamerStatus | default: off | 9 |
| faultLogUpload | default: False | 6 |
| favRecommendResetTime | default: {'livetv': '', 'stb': ''} | 3 |
| fileapiResourcePermission | default:  | 3 |
| firstTvSignalStatus | default: undefined | 9 |
| focusEmphasis | default: off | 3 |
| focusedItemEnlarged | default: off | 9 |
| freeviewMode | default: off | 9 |
| freeviewplay | default: off | 8 |
| googleAssistantTTS | default: on | 9 |
| graphicSharpnessLevel | int 0..255 step 1 | 9 |
| hbbTV | on, off, onByUser, offByUser | 9 |
| hbbTvDeviceId | on, off, onByUser, offByUser | 8 |
| hbbTvDnt | default: off | 9 |
| hddEcoMode | default: on | 9 |
| helpOnSettings | default: on | 9 |
| highContrast | default: off | 9 |
| homeSenseAbsence | default: off | 2 |
| homeSenseAccount | default: off | 2 |
| homeSensePresence | default: off | 2 |
| homeWallPaper | opt1, opt2, opt3 | 5 |
| homelegalPopup | default: on | 1 |
| hybridCast | default: off | 9 |
| ibb | default: off | 3 |
| ibbDnt | default: off | 3 |
| inputDevicesSupportStatus | default: <complex> | 9 |
| interactive-service | on, off, onByUser, offByUser | 7 |
| interactive-service-hdmi | on, off, onByUser, offByUser | 6 |
| interactive-service-id | default:  | 6 |
| interactivity | default: off | 9 |
| irBlaster | default: off | 9 |
| ismMethod | normal, orbiter, inversion, whiteWash, colorWash | 9 |
| japanCitySelection | default: Tokyo | 9 |
| lgChannelAutoStart | default: on | 2 |
| lifeOnScreenEnergySaving | auto, off | 5 |
| lifeOnScreenNotification | default: True | 5 |
| lifeOnScreenOnTimer | default:  | 5 |
| lifeOnScreenUsingMotionSensor | default: False | 5 |
| lineView | default: on | 6 |
| liveMenuLaunched | default: False | 9 |
| livePlus | default: off | 9 |
| livePromotion | default: on | 7 |
| localeCountryGroup | default: UNDEFINED | 9 |
| logoLight | off, low, medium, high | 9 |
| longPressInterval | basic, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 | 3 |
| magicNum1 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum2 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum3 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum4 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum5 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum6 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum7 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum8 | default: {'id': '', 'override': False, 'params': {}} | 9 |
| magicNum9 | default: <complex> | 9 |
| magicNumFvp | default: False | 5 |
| magicNumHelpShow | default: True | 9 |
| magnificationValue | 0, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200 | 6 |
| medicationInfoAgreement | agree, disagree | 3 |
| menuLanguage | default: eng | 9 |
| menuTransparency | default: on | 9 |
| mhegGuide | default: off | 9 |
| miracastOverlayAdRecovery | default: off | 9 |
| miracastOverlayStatus | default: off | 9 |
| modeSelectFlag | default: off | 9 |
| motionRecognition | default: off | 9 |
| motionSensorSensitivity | low, medium, high | 6 |
| motionSensorSensitivityForAOD | low, medium, high | 5 |
| multiChannelAudio | default: on | 7 |
| multiViewStatus | default: off | 9 |
| mySketchSettings | default: <complex> | 3 |
| nearbyDevicePermission | default:  | 5 |
| ohtv | default: on | 9 |
| orbit | default: off | 9 |
| password_ipcontrol | default: 828 | 9 |
| personalizedDemoImgList | default: {'list': [], 'userSelected': False} | 5 |
| personalizedDemoString | default: {'longStrIdx': 0, 'shortList': []} | 5 |
| personalizedImgList | default: {'list': [], 'otherUserPreferences': {}, 'userSelected': False} | 5 |
| personalizedString | default: {'longStrIdx': 0, 'shortList': [], 'userNo': ''} | 5 |
| phlCitySelection | default: 0 | 9 |
| play8kVideoOnApps | default: off | 1 |
| pointerAlignment | default: off | 9 |
| pointerShape | a, b, c, d | 9 |
| pointerSize | small, medium, large | 9 |
| pointerSpeed | very slow, slow, normal, fast | 9 |
| powerOnLight | default: off | 9 |
| pqPlus | default: False | 3 |
| promotionOriginEnd | default: undefined | 9 |
| promotionOriginStart | default: undefined | 9 |
| promotionPeriodEnd | default: 0 | 9 |
| promotionPeriodStart | default: 0 | 9 |
| promotionStreamer | default: off | 9 |
| pstreamerUser | default: off | 9 |
| quickStartMode | default: off | 9 |
| remoteSlowInput | default: off | 3 |
| repeatInterval | basic, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 | 3 |
| restoreCurve | default: on | 5 |
| screenMagnification | default: off | 6 |
| screenOff | default: off | 6 |
| screenOffTime | 5, 10, 30, 60, 120, 15 | 6 |
| screenRotation | off, 90, 180, 270 | 9 |
| screenSaverArtEnabled | default: off | 3 |
| screenSaverTimer | 3, 10, 20, 30 | 3 |
| searchAppTTS | default: off | 9 |
| seniorMode | general, simple | 3 |
| serviceCountryForMagicNum | , GB, ETC | 5 |
| setId | int 1..99 step 1 | 9 |
| showCursorAlert | default: True | 3 |
| signLanguageGuidance | default: off | 3 |
| signLanguageGuidanceAvatarType | female, female2, male, male2 | 3 |
| signLanguageGuidancePosition | rightTop, rightMiddle, rightBottom | 3 |
| signLanguageGuidanceSize | large, medium, small | 3 |
| signLanguageGuidanceSpeed | fast, medium, slow | 3 |
| smartServiceCountryCode2 | default: other | 9 |
| smartServiceCountryCode3 | default: other | 9 |
| smartSoundDemo | default: on | 9 |
| soundPlus | default: False | 3 |
| speakToTv | default: off | 9 |
| specialRemote | default: False | 3 |
| standByLight | default: on | 9 |
| storageManager | default: True | 2 |
| storeHDR | default: on | 9 |
| storeLogo | int 0..4294967295 step 1 | 9 |
| storeMode | home, store | 9 |
| storeMode2 | default: on | 9 |
| storeModeVideo | default: off | 9 |
| storeUsbAlarm | default: off | 6 |
| subdivisionCodeOfServiceCountry | , GB-SCT | 9 |
| subtitleLanguageFirst | jpn, eng | 9 |
| subtitleLanguageSecond | jpn, eng | 9 |
| supplementaryAudio | off, audioDescription, spokenSubtitles, allType | 9 |
| supportSettingSafetyMenu | default: False | 1 |
| syncMode | default: off | 8 |
| syncModeTvCondition | master, slave, none | 8 |
| teletextLanguageFirst | spa, eng | 9 |
| teletextLanguageSecond | spa, eng | 9 |
| thirdPartyCookie | on, off, onByUser, offByUser | 3 |
| turnOnByVoice | default: off | 9 |
| usageCare | default: True | 3 |
| usbBuiltInVideo | default: on | 9 |
| virtualKeyboardLanguage | default: en-US | 9 |
| virtualSetTop | default: off | 9 |
| voiceRecognitionLanguage | default: eng | 9 |
| vsn | default: N/A | 9 |
| wakeUpword | LGTV, MYTV | 9 |
| wallPaperHistory | default: <complex> | 5 |
| wallPaperSettings | default: <complex> | 5 |
| watchedListCollection | default: on | 9 |
| webOSPromotionVideo | default: on | 9 |
| yourMomentsVersion | default: 0 | 5 |
| zipcode | default: not_defined | 9 |

#### category `other` (194 keys)

| key | allowed values / default | models |
|---|---|---|
| 444BypassHDMI1 | default: off | 5 |
| 444BypassHDMI2 | default: off | 5 |
| 444BypassHDMI3 | default: off | 5 |
| 444BypassHDMI4 | default: off | 5 |
| 444BypassHDMINone | default: off | 5 |
| activeArtisticDisplayScreenSaver | default: False | 5 |
| amazonHotkeyIsActive | default: True | 7 |
| aodPictureSyncMode | default: on | 5 |
| appReturn | default:  | 9 |
| autoSLZoomWithObjectDetection | default: off | 5 |
| battery25PercentMode | default: off | 5 |
| batteryInstopProtect | default: on | 5 |
| blackStabilizer | int 0..20 step 1 | 6 |
| blueLight | off, level1, level2 | 6 |
| care365 | default: <complex> | 8 |
| cloudEnableQuickGame | default: on | 1 |
| cloudGameUIColor | violet, orange, green | 1 |
| cloudSupportGameOptimizer | default: False | 1 |
| colorimetry | auto, bt709, bt601, bt2020, p3D65 | 6 |
| colorimetryHDMI1 | auto, bt709, bt601, bt2020, p3D65 | 7 |
| colorimetryHDMI2 | auto, bt709, bt601, bt2020, p3D65 | 7 |
| colorimetryHDMI3 | auto, bt709, bt601, bt2020, p3D65 | 7 |
| colorimetryHDMI4 | auto, bt709, bt601, bt2020, p3D65 | 7 |
| contentRecommendation | default: on | 6 |
| crosshair | off, redCross, greenCross, redDot, greenDot | 2 |
| cursorAutoRemover | default: on | 8 |
| customButtonHasPressed | default: False | 2 |
| customLongPress | default: <complex> | 2 |
| customShortPress | default: {'id': '0x71', 'type': 'key'} | 2 |
| darkMode | off, level1, level2 | 5 |
| dolbyVSVDBVer | v1, v2 | 6 |
| dolbyVSVDBVerHDMI1 | v1, v2 | 7 |
| dolbyVSVDBVerHDMI2 | v1, v2 | 7 |
| dolbyVSVDBVerHDMI3 | v1, v2 | 7 |
| dolbyVSVDBVerHDMI4 | v1, v2 | 7 |
| dpPcMode | default: {'dp1': False, 'dp2': False} | 3 |
| enable144HzBooster | default: off | 5 |
| enableALLM | default: on | 5 |
| enableBatteryMenu | default: False | 2 |
| enableDolbyVision | default: on | 1 |
| enableDolbyVisionPC | default: off | 5 |
| enableMotionBooster | default: off | 2 |
| enableQFT | default: off | 3 |
| enableQuickGame | default: on | 6 |
| eotf | auto, sdrGamma, hdrGamma, st2084, hlg | 6 |
| eotfHDMI1 | auto, sdrGamma, hdrGamma, st2084, hlg | 7 |
| eotfHDMI2 | auto, sdrGamma, hdrGamma, st2084, hlg | 7 |
| eotfHDMI3 | auto, sdrGamma, hdrGamma, st2084, hlg | 7 |
| eotfHDMI4 | auto, sdrGamma, hdrGamma, st2084, hlg | 7 |
| epgRowCount | default: 1 | 9 |
| fitLogUsbDump | default: off | 6 |
| flickerPatternCtrl | default: False | 7 |
| fpsCounter | off, topLeft, topRight, bottomRight, bottomLeft | 2 |
| freesync | off, high, wide | 6 |
| freesyncLCDHDMI1 | off, high, wide | 7 |
| freesyncLCDHDMI2 | off, high, wide | 7 |
| freesyncLCDHDMI3 | off, high, wide | 7 |
| freesyncLCDHDMI4 | off, high, wide | 7 |
| freesyncMenuPosition | int 0..4 step 1 | 2 |
| freesyncOLEDHDMI1 | default: off | 7 |
| freesyncOLEDHDMI2 | default: off | 7 |
| freesyncOLEDHDMI3 | default: off | 7 |
| freesyncOLEDHDMI4 | default: off | 7 |
| freesyncSupport | default: off | 7 |
| freeviewTnCPopup | default: off | 9 |
| gameAdjustContrast | int 0..100 step 1 | 5 |
| gameBlackLevel | int 0..100 step 1 | 5 |
| gameColorDepth | int 0..100 step 1 | 5 |
| gameDashboardStatusList | default: fps, vrr_aiGameSound_whiteStabilizer, blackStabilizer, lowLatency | 5 |
| gameGenre | Standard, FPS, RPG, RTS, Sports, USER | 6 |
| gameMode | default: {'hdmi1': 'off', 'hdmi2': 'off', 'hdmi3': 'off', 'hdmi4': 'off'} | 6 |
| gameMonitor | default: off | 2 |
| gameOptimization | default: on | 6 |
| gameOptimizationDP1 | default: on | 5 |
| gameOptimizationDP2 | default: on | 5 |
| gameOptimizationHDMI1 | default: on | 8 |
| gameOptimizationHDMI2 | default: on | 8 |
| gameOptimizationHDMI3 | default: on | 8 |
| gameOptimizationHDMI4 | default: on | 8 |
| gameOptimizationUSBC1 | default: on | 5 |
| gameOptimizationUSBC2 | default: on | 5 |
| gameScreenPosition | top, middle, bottom | 5 |
| gameScreenRatio | 16:9, 21:9, 32:9 | 5 |
| gameScreenSize | full, 32, 27 | 5 |
| gameSettingModified | default: <complex> | 5 |
| gameSharpness | int 0..50 step 1 | 5 |
| gameUIColor | violet, orange, green | 6 |
| hdmiPcMode | default: {'hdmi1': False, 'hdmi2': False, 'hdmi3': False, 'hdmi4': False} | 9 |
| homeAppLaunched | default: off | 5 |
| homeEffectVersion | default: {'id': 'Christmas', 'version': 1.0}, {'id': 'Halloween', 'version': 1.0} | 8 |
| homeQuickGuideLaunched | default: off | 3 |
| homeShelfEdit | default:  | 3 |
| homelegalPopup | default: on | 8 |
| hueSyncAutoEnable | default: False | 5 |
| hueSyncManualEnable | default: False | 5 |
| illuminanceThreshold | int -127..128 step 1 | 6 |
| inputOptimization | auto, on | 6 |
| inputRecoveryPopupShown | default: False | 1 |
| isFirstCapture | default: true | 9 |
| isFirstShowSbmSpeaker | default: True | 3 |
| isHdpOpAppPopupDone | default: False | 5 |
| isOrientationLock | default: False | 2 |
| isSLZoomExecutable | default: False | 5 |
| isSLZoomOn | default: off | 5 |
| isSLZoomOperable | default: False | 5 |
| isfUpdated | default: false | 9 |
| kidsUsageCareLaunched | default: off | 1 |
| lastSbmSpeakerState | default: False | 3 |
| lgLogoDisplay | default: on | 6 |
| lightingAutoBrightness | default: off | 5 |
| lightingBrightness | int 1..10 step 1 | 5 |
| lightingColorMode | whiteColorMode, othersColorMode | 5 |
| lightingEnable | default: off | 5 |
| lightingMode | videoSyncMode, soundSyncMode, dynamic, peaceful, staticMode1, staticMode2, staticMode3, staticMode4 | 5 |
| lightingTnativeBrightness | int 10..100 step 10 | 5 |
| lightingTnativeMode | off, glacierBlue, namibiaSunset, auroraGreen, tropicalLounge | 5 |
| lowLevelAdjustment | int -30..30 step 1 | 8 |
| lowPowerMode | default: off | 5 |
| mapping_info | default: <complex> | 7 |
| masterLuminanceLevel | 540nit, 1000nit, 4000nit | 9 |
| masteringColor | auto, 0, p3D65, bt2020D65, bt709D65 | 6 |
| masteringColorHDMI1 | auto, 0, p3D65, bt2020D65, bt709D65 | 7 |
| masteringColorHDMI2 | auto, 0, p3D65, bt2020D65, bt709D65 | 7 |
| masteringColorHDMI3 | auto, 0, p3D65, bt2020D65, bt709D65 | 7 |
| masteringColorHDMI4 | auto, 0, p3D65, bt2020D65, bt709D65 | 7 |
| masteringPeak | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 6 |
| masteringPeakHDMI1 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| masteringPeakHDMI2 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| masteringPeakHDMI3 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| masteringPeakHDMI4 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxCLL | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 6 |
| maxCLLHDMI1 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxCLLHDMI2 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxCLLHDMI3 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxCLLHDMI4 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxFALL | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 6 |
| maxFALLHDMI1 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxFALLHDMI2 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxFALLHDMI3 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| maxFALLHDMI4 | auto, 0, 400, 540, 700, 1000, 2000, 3000, 4000, 10000 | 7 |
| multiViewLaunchMode | sxs, pip, dual_monitor | 5 |
| mypageQuickGuideLaunched | default: off | 2 |
| netflixHotkeyIsActive | default: True | 7 |
| newKey | default: on | 6 |
| oledCareMode | off, comfortCare, cinemaCare, kidsCare | 6 |
| oledCareRecommendation | default: off | 6 |
| orientationInLockStatus | NotReady, landscape, portrait, reversed_portrait | 2 |
| othersColorMode | int 0..36 step 1 | 5 |
| playbackThreshold | int 0..200 step 1 | 7 |
| pseudoTouchMode | default: on | 5 |
| qmsVrr | default: on | 5 |
| quickSettingsMenuList | default: <complex> | 7 |
| quickSettingsRecentMenu | default:  | 5 |
| screenRemoteAutoShow | default: true | 9 |
| screenRemoteExpanded | default: false | 9 |
| screenRemotePosition | right, left | 9 |
| simplinkAutoPowerOn | default: on | 9 |
| simplinkEnable | default: off | 9 |
| slzoomTargetAreaHeight | int -1..2160 step 1 | 3 |
| slzoomTargetAreaLevel | int -1..10 step 1 | 5 |
| slzoomTargetAreaWidth | int -1..3840 step 1 | 3 |
| slzoomTargetAreaX | int -1..3840 step 1 | 5 |
| slzoomTargetAreaY | int -1..2160 step 1 | 5 |
| soundSyncModeColor | auto, staticMode | 5 |
| soundSyncModeDisplayMode | bar, xbar | 5 |
| soundSyncModeFrequency | low, mid, high | 5 |
| soundSyncModeStaticColor | int 0..42 step 1 | 5 |
| staticModeColor1 | int 0..42 step 1 | 5 |
| staticModeColor2 | int 0..42 step 1 | 5 |
| staticModeColor3 | int 0..42 step 1 | 5 |
| staticModeColor4 | int 0..42 step 1 | 5 |
| supportAirplay | default: False | 9 |
| supportBnoModel | default: False | 8 |
| svcMenuFlag | default: True | 5 |
| touchRemoteLaunchMode | multiTouch, edgeSwipe | 5 |
| ueiEnable | default: off | 8 |
| uhdDeepColor | off, 4k | 6 |
| uhdDeepColor8kHDMI1 | off, 4k, 8k | 8 |
| uhdDeepColor8kHDMI2 | off, 4k, 8k | 8 |
| uhdDeepColor8kHDMI3 | off, 4k, 8k | 8 |
| uhdDeepColor8kHDMI4 | off, 4k, 8k | 8 |
| uhdDeepColorAutoStatusHDMI1 | default: none | 9 |
| uhdDeepColorAutoStatusHDMI2 | default: none | 9 |
| uhdDeepColorAutoStatusHDMI3 | default: none | 9 |
| uhdDeepColorAutoStatusHDMI4 | default: none | 9 |
| uhdDeepColorHDMI1 | default: off | 9 |
| uhdDeepColorHDMI2 | default: off | 9 |
| uhdDeepColorHDMI3 | default: off | 9 |
| uhdDeepColorHDMI4 | default: off | 9 |
| universalControl | default: [] | 2 |
| usbcPcMode | default: {'usbc1': False, 'usbc2': False} | 3 |
| weatherAllowed | default: False | 6 |
| whiteColorMode | int 0..6 step 1 | 5 |
| whiteStabilizer | int 0..20 step 1 | 6 |

#### category `aspectRatio` (14 keys)

| key | allowed values / default | models |
|---|---|---|
| allDirZoomHPosition | int -15..15 step 1 | 9 |
| allDirZoomHRatio | int 0..15 step 1 | 9 |
| allDirZoomVPosition | int -15..15 step 1 | 9 |
| allDirZoomVRatio | int 0..15 step 1 | 9 |
| arcMenuBySystem | default: off | 8 |
| arcPerApp | original | 9 |
| justScan | auto, on, off | 9 |
| twinCinemaVPosition | int -10..10 step 1 | 9 |
| twinZoomHPosition | int -15..15 step 1 | 9 |
| twinZoomHRatio | int 0..15 step 1 | 9 |
| twinZoomVPosition | int -15..15 step 1 | 9 |
| twinZoomVRatio | int 0..15 step 1 | 9 |
| vertZoomVPosition | int -18..18 step 1 | 9 |
| vertZoomVRatio | int -8..9 step 1 | 9 |

#### category `aiPicture` (4 keys)

| key | allowed values / default | models |
|---|---|---|
| ai_Brightness | default: off | 7 |
| ai_Genre | default: off | 7 |
| ai_Picture | default: off | 7 |
| isAiPictureActing | default: False | 6 |

#### category `network` (7 keys)

| key | allowed values / default | models |
|---|---|---|
| allowMobileDeviceAccess | default: True | 9 |
| bleAdvertisingOnOff | default: off | 9 |
| deviceName | default: [LG] webOS TV | 9 |
| ipv6Enable | default: true | 9 |
| miracastTxPlaying | default: False | 6 |
| sscNetworkKey | default: True | 9 |
| wolwowlOnOff | default: false | 9 |

#### category `general` (68 keys)

| key | allowed values / default | models |
|---|---|---|
| SCA3SystemCountry | BRB, BLZ, CRI, ECU, SLV, GTM, GUY, HTI, HND, JAM, NIC, TTO, VEN, PRI, PAN, ___ | 6 |
| absenceRecognition | default: off | 9 |
| adCookie | default: on | 9 |
| aiChannel | default: off | 6 |
| aiNudge | default: on | 8 |
| aiSettingsNudge | default: off | 5 |
| alwaysOn | default: off | 8 |
| alwaysOnDisableEndHour | int 0..24 step 1 | 8 |
| alwaysOnDisableEndMinute | int 0..59 step 1 | 8 |
| alwaysOnDisableStartHour | int 0..24 step 1 | 8 |
| alwaysOnDisableStartMinute | int 0..59 step 1 | 8 |
| autoBackupEnabled | default: False | 1 |
| avmsd | default: off | 9 |
| bendableSound | default: on | 5 |
| blueToothSpeakerMode | default: on | 8 |
| checkForcedInputPowerOn | default: off | 6 |
| checkHomeAutoLaunchValue | default, user | 9 |
| customizedAd | default: off | 9 |
| defaultApps | default: {'home': 'com.webos.app.fullhome'} | 3 |
| doNotSellMyPersonalInformation | default: off | 7 |
| gameAlarm | default:  | 7 |
| generalBackupList | default:  | 1 |
| globalConditions | default: off | 9 |
| homeAutoLaunch | default: on | 9 |
| homeAutoLaunchMode | full, partial | 2 |
| homeBackupList | default:  | 1 |
| homeEffect | default: on | 8 |
| homePromotion | default: on | 9 |
| lastAppHandlerPolicy | idleApp, lastInputApp | 6 |
| lastBackupTime | default: {'date': 0, 'hour': 0, 'minute': 0, 'month': 0, 'year': 0} | 1 |
| lastInputApp | default: com.webos.app.livetv | 9 |
| lastInputAppType | default: DTV | 5 |
| launchEulaByHome | default: False | 8 |
| lgChannelAutoLaunch | default: off | 1 |
| lifeAlarm | default: on | 3 |
| lifeOnScreenMode | none, off, lifeOnScreen, alwaysReady, allEnabled | 5 |
| lmt | default: off | 9 |
| mySportAppList | default:  | 5 |
| mySportTeamList | default:  | 7 |
| nativeConsentAd | default:  | 8 |
| noSignalGuideArea | default: on | 8 |
| noSignalScreenSaver | default: on | 9 |
| opapp | default:  | 3 |
| opappReplaceUI | default:  | 3 |
| personalRecommend | default: {'changedByUser': False, 'value': 'off'} | 9 |
| physicalLastInputApp | default: com.webos.app.livetv | 7 |
| physicalLastInputType | default: DTV | 5 |
| powerOffBySCA3SystemChanged | default: False | 6 |
| powerOnScreen | todays, liveTv | 9 |
| remotePointer | default: on | 3 |
| remoteserverType | prod, dev, dev2 | 7 |
| screenRemotePlacement | left, right | 3 |
| screenSaverAd | default: on | 8 |
| screenSaverEnabled | default: on | 9 |
| screenSaverSensibility | int 0..4294967295 step 1 | 9 |
| selectedInputApp | off, HDMI_1, HDMI_2, HDMI_3, HDMI_4 | 6 |
| sportsAlarm | default: on | 7 |
| sportsPicker | default:  | 6 |
| tnativeShadescreen | shadePoweroff, shadePoweroffon, shadeOff | 5 |
| tnativeSound | default: on | 5 |
| touchLock | default: off | 5 |
| tvInstallMethod | tv, mobile | 6 |
| tvOnScreen | effect, liveTV | 8 |
| tvOnSound | off, veryLow, low, medium, high, veryHigh | 8 |
| voiceLongDistance | default: on | 8 |
| wavBoxPosition | none, front, side, bottom | 5 |
| wavUpperLedFlag | default: on | 5 |
| welcomeFeature | default: on | 8 |

#### category `time` (99 keys)

| key | allowed values / default | models |
|---|---|---|
| absenceTimemachineMode | default: false | 9 |
| autoClock | default: on | 9 |
| autoDeleteMode | default: true | 9 |
| autoOff15Min | default: on | 9 |
| autoOff2HourOnTimer | default: on | 9 |
| autoPowerOff | default: off | 9 |
| autoPowerOff2Hour | default: on | 7 |
| autoPowerOff2HourMute | default: off | 7 |
| autoRecStorageValue | default: {'deviceId': '', 'devicePath': '', 'subDeviceId': ''} | 9 |
| autoRecordMode | default: false | 9 |
| autoUploadMode | default: false | 9 |
| automaticStandBy | 0, 2, 4, 6, 8 | 9 |
| continuePlayMode | default: true | 9 |
| daylightSaving | on, off, auto | 9 |
| dpmsAutoOff | default: off | 5 |
| dualRecordMode | default: false | 9 |
| myStarterInfo | default: {'deviceKey': '', 'deviceName': '', 'deviceType': ''} | 9 |
| noMenuAutoOff15Min | default: on | 7 |
| noOperationAutoOff | off, 3, 6, 12, 24 | 9 |
| noSignalAutoOff | default: on | 9 |
| offTimerEnable | default: off | 9 |
| offTimerFlag | default: off | 9 |
| offTimerHour | int 0..24 step 1 | 9 |
| offTimerMinute | int 0..59 step 1 | 9 |
| offTimerWeekday | int 0..255 step 1 | 9 |
| onTimerAppId | default: com.webos.app.livetv | 9 |
| onTimerAppId2 | default: com.webos.app.livetv | 9 |
| onTimerAppId3 | default: com.webos.app.livetv | 9 |
| onTimerAppId4 | default: com.webos.app.livetv | 9 |
| onTimerAppId5 | default: com.webos.app.livetv | 9 |
| onTimerChannel | default: noChannel | 9 |
| onTimerChannel2 | default: noChannel | 9 |
| onTimerChannel3 | default: noChannel | 9 |
| onTimerChannel4 | default: noChannel | 9 |
| onTimerChannel5 | default: noChannel | 9 |
| onTimerEnable | default: off | 9 |
| onTimerEnable2 | off, on, none | 9 |
| onTimerEnable3 | off, on, none | 9 |
| onTimerEnable4 | off, on, none | 9 |
| onTimerEnable5 | off, on, none | 9 |
| onTimerHour | int 0..24 step 1 | 9 |
| onTimerHour2 | default: 0 | 9 |
| onTimerHour3 | int 0..24 step 1 | 9 |
| onTimerHour4 | int 0..24 step 1 | 9 |
| onTimerHour5 | int 0..24 step 1 | 9 |
| onTimerMinute | int 0..59 step 1 | 9 |
| onTimerMinute2 | default: 0 | 9 |
| onTimerMinute3 | int 0..59 step 1 | 9 |
| onTimerMinute4 | int 0..59 step 1 | 9 |
| onTimerMinute5 | int 0..59 step 1 | 9 |
| onTimerSource | dtv, atv, av1, av2, pictest, comp1, comp2, comp3, rgb, hdmi1, hdmi2, hdmi3, hdmi4, hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, program, scart, smhl | 9 |
| onTimerSource2 | dtv, atv, av1, av2, pictest, comp1, comp2, comp3, rgb, hdmi1, hdmi2, hdmi3, hdmi4, hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, program, scart | 9 |
| onTimerSource3 | dtv, atv, av1, av2, pictest, comp1, comp2, comp3, rgb, hdmi1, hdmi2, hdmi3, hdmi4, hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, program, scart | 9 |
| onTimerSource4 | dtv, atv, av1, av2, pictest, comp1, comp2, comp3, rgb, hdmi1, hdmi2, hdmi3, hdmi4, hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, program, scart | 9 |
| onTimerSource5 | dtv, atv, av1, av2, pictest, comp1, comp2, comp3, rgb, hdmi1, hdmi2, hdmi3, hdmi4, hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, program, scart | 9 |
| onTimerVolume | int 0..100 step 1 | 9 |
| onTimerVolume2 | int 0..100 step 1 | 9 |
| onTimerVolume3 | int 0..100 step 1 | 9 |
| onTimerVolume4 | int 0..100 step 1 | 9 |
| onTimerVolume5 | int 0..100 step 1 | 9 |
| onTimerWeekday | int 0..255 step 1 | 9 |
| onTimerWeekday2 | default: 0 | 9 |
| onTimerWeekday3 | int 0..255 step 1 | 9 |
| onTimerWeekday4 | int 0..255 step 1 | 9 |
| onTimerWeekday5 | int 0..255 step 1 | 9 |
| performanceTestStorageValue | default: {'deviceId': '', 'devicePath': '', 'stickFocus': '', 'subDeviceId': ''} | 9 |
| recordQualityMode | default: true | 9 |
| recordStorageValue | default: {'deviceId': '', 'devicePath': '', 'deviceType': '', 'subDeviceId': ''} | 9 |
| remindAppId | default: com.webos.app.livetv | 7 |
| remindChannel | default: noChannel | 7 |
| remindEnable | default: off | 7 |
| remindVolume | int -1..100 step 1 | 7 |
| saveLivePlaybackMode | default: false | 9 |
| setMyStarter | default: off | 9 |
| sleepTimer | off, 10, 20, 30, 60, 90, 120, 180, 240 | 9 |
| starttime | 0, 5 | 9 |
| stopRecordValue | program, 30, 60, 120, 180, 240, 480, 720, 0 | 9 |
| timeOffset | GMT-12, GMT-11, GMT-10, GMT-9, GMT-8, GMT-7, GMT-6, GMT-5, GMT-4, GMT-3, GMT-2, GMT-1, GMT, GMT+1, GMT+2, GMT+3, GMT+4, GMT+5, GMT+6, GMT+7, GMT+8, GMT+9, GMT+10, GMT+11, GMT+12, GMT+13 | 9 |
| timeZone | Offset | 9 |
| timemachineMode | default: false | 9 |
| tsStorageValue | default: {'deviceId': '', 'devicePath': '', 'subDeviceId': ''} | 9 |
| use24HourFormat | default: False | 2 |
| warmTimerEnable | default: off | 9 |
| warmTimerWeekday1Enable | default: off | 9 |
| warmTimerWeekday2Enable | default: off | 9 |
| warmTimerWeekday3Enable | default: off | 9 |
| warmTimerWeekday4Enable | default: off | 9 |
| warmTimerWeekday5Enable | default: off | 9 |
| warmTimerWeekday6Enable | default: off | 9 |
| warmTimerWeekday7Enable | default: off | 9 |
| warmTimerWeekday8Enable | default: off | 9 |
| warmTimerWeekend1Enable | default: off | 9 |
| warmTimerWeekend2Enable | default: off | 9 |
| warmTimerWeekend3Enable | default: off | 9 |
| warmTimerWeekend4Enable | default: off | 9 |
| warmTimerWeekend5Enable | default: off | 9 |
| warmTimerWeekend6Enable | default: off | 9 |
| warmTimerWeekend7Enable | default: off | 9 |
| warmTimerWeekend8Enable | default: off | 9 |

#### category `lock` (42 keys)

| key | allowed values / default | models |
|---|---|---|
| appallowPerApp | default: False | 1 |
| applockByAge | 4+, 10+, 12+, 14+, 16+, 18+, generalAudience | 9 |
| applockPerApp | default: False | 9 |
| camPinCode | default: N.A | 9 |
| dailyRepeatFlag | default: off | 5 |
| downloadableRrt | default: {'numDimension': 0, 'values': []} | 9 |
| initialPinCode | default: False | 9 |
| inputBlock | int 0..4294967295 step 1 | 9 |
| installedApplockByAge | 4+, 10+, 12+, 16+, 18+, generalAudience | 9 |
| kidsMode | default: False | 1 |
| lockByAge | int 0..4294967295 step 1 | 9 |
| movieRating | off, g, pg, pg13, r, nc-17, x | 9 |
| offHearingProtectFlag | default: off | 5 |
| offHearingProtectMaxVolume | int 10..60 step 1 | 3 |
| offUsageTimeFlag | default: off | 5 |
| parentalControl | default: False | 9 |
| parentalGuidance | off, 4+, 5+, 6+, 7+, 8+, 9+, 10+, 11+, 12+, 13+, 14+, 15+, 16+, 17+, 18+, Programme X | 9 |
| parentalGuidanceAu | off, all, g, pg, m, ma, av, r | 9 |
| parentalGuidanceJp | off, 4+, 5+, 6+, 7+, 8+, 9+, 10+, 11+, 12+, 13+, 14+, 15+, 16+, 17+, 18+, 19+, 20+ | 9 |
| parentalGuidanceNz | off, all, g, pg, m, 16+, 18+, pgr, ao, av, r | 9 |
| parentalGuidanceSg | off, g, pg, pg13, nc16, m18, r21 | 9 |
| pineValueChangePCS | default: False | 3 |
| ratingBR | off, 10+, 12+, 14+, 16+, 18+ | 9 |
| ratingPH | off, G, PG, SPG | 9 |
| ratingSA | off, pg10, 10+, pg13, 13+, 16+, 18+, r18 | 9 |
| secretMode | default: False | 9 |
| systemPin | default: 0000 | 9 |
| systemPinCode | int 0..9999 step 1 | 9 |
| tvRatingChildrenAge | off, y, y7 | 9 |
| tvRatingChildrenFantasy | off, y7 | 9 |
| tvRatingEnglish | off, e, c, c8+, g, pg, 14+, 18+ | 9 |
| tvRatingFrench | off, e, g, 8+, 13+, 16+, 18+ | 9 |
| tvRatingGeneralAge | off, g, pg, 14, ma | 9 |
| tvRatingGeneralDialog | off, pg, 14 | 9 |
| tvRatingGeneralLanguage | off, pg, 14, ma | 9 |
| tvRatingGeneralSex | off, pg, 14, ma | 9 |
| tvRatingGeneralViolence | off, pg, 14, ma | 9 |
| unlockDate | default:  | 5 |
| usageTimeEnd | default:  | 5 |
| usageTimeStart | default:  | 5 |
| vooRating | off, 10+, 12+, 16+, 18+ | 9 |
| ziggoRaiting | off, all, 4+, 5+, 6+, 7+, 8+, 9+, 10+, 11+, 12+, 13+, 14+, 15+, 16+, 17+, 18+ | 9 |

#### category `support` (4 keys)

| key | allowed values / default | models |
|---|---|---|
| automaticUpdate | default: off | 9 |
| launchPUGuideApp | default: False | 4 |
| softwareUpdateEnable | default: true | 9 |
| updateHistory | default:  | 2 |

#### category `twinTv` (21 keys)

| key | allowed values / default | models |
|---|---|---|
| audioMode | wide, split, none, undefined | 9 |
| backlightOffset | default: 100 | 9 |
| bezelOffsetBottom | default: 0 | 9 |
| bezelOffsetLeft | default: 0 | 9 |
| bezelOffsetRight | default: 0 | 9 |
| bezelOffsetTop | default: 0 | 9 |
| dimensionCol | default: -1 | 9 |
| dimensionRow | default: -1 | 9 |
| masterInfo | default: {'col': '-1', 'ip': 'undefined', 'mac': 'undefined', 'row': '-1'} | 9 |
| originalPictureMode | default: normal | 9 |
| originalVividValue | default: <complex> | 9 |
| originalWhiteBalance | default: <complex> | 9 |
| pictureModeSettingsDone | default: True | 9 |
| positionCol | default: -1 | 9 |
| positionRow | default: -1 | 9 |
| role | master, slave, none, undefined | 9 |
| slaveInfo | default:  | 9 |
| status | none, inprogress, complete, undefined | 9 |
| systemMode | wide, split, none, undefined | 9 |
| videoMode | wide, split, none, undefined | 9 |
| wideZoomToast | default: True | 9 |

#### category `3d` (10 keys)

| key | allowed values / default | models |
|---|---|---|
| _3dColorCorrection | default: off | 4 |
| _3dDepth | int 0..20 step 1 | 4 |
| _3dImageCorrection | left_right, right_left | 4 |
| _3dMode | standard, sports, cinema, extreme, manual, auto | 4 |
| _3dNormalImageView | default: off | 4 |
| _3dPatternRecognition | default: on | 4 |
| _3dPerApp | default: <complex> | 4 |
| _3dViewpoint | int -10..10 step 1 | 4 |
| dualPlay | default: off | 4 |
| dualPlayMode | top_bottom, side_side, auto | 4 |

#### category `timer` (6 keys)

| key | allowed values / default | models |
|---|---|---|
| autoPowerOff | default: off | 9 |
| autoPowerOff2Hour | default: on | 7 |
| autoPowerOff2HourMute | default: off | 7 |
| myStarterInfo | default: {'deviceKey': '', 'deviceName': '', 'deviceType': ''} | 9 |
| noMenuAutoOff15Min | default: on | 7 |
| setMyStarter | default: off | 9 |

#### category `timemachine` (14 keys)

| key | allowed values / default | models |
|---|---|---|
| absenceTimemachineMode | default: false | 9 |
| autoDeleteMode | default: true | 9 |
| autoRecStorageValue | default: {'deviceId': '', 'devicePath': '', 'subDeviceId': ''} | 9 |
| autoRecordMode | default: false | 9 |
| autoUploadMode | default: false | 9 |
| continuePlayMode | default: true | 9 |
| dualRecordMode | default: false | 9 |
| performanceTestStorageValue | default: {'deviceId': '', 'devicePath': '', 'stickFocus': '', 'subDeviceId': ''} | 9 |
| recordQualityMode | default: true | 9 |
| recordStorageValue | default: {'deviceId': '', 'devicePath': '', 'deviceType': '', 'subDeviceId': ''} | 9 |
| saveLivePlaybackMode | default: false | 9 |
| stopRecordValue | program, 30, 60, 120, 180, 240, 480, 720, 0 | 9 |
| timemachineMode | default: false | 9 |
| tsStorageValue | default: {'deviceId': '', 'devicePath': '', 'subDeviceId': ''} | 9 |

#### category `soundbar` (43 keys)

| key | allowed values / default | models |
|---|---|---|
| ambientGroupLighting | default: True | 1 |
| ambientLightingBrightness | low, mid, high | 2 |
| apdtimer | int 0..15 step 1 | 2 |
| autopower | default: on | 3 |
| bass | int -6..6 step 1 | 3 |
| bassPhase | 0degree, 180degree | 2 |
| brightnessMaxValue | int 1..100 step 1 | 1 |
| centerlevel | int -6..6 step 1 | 3 |
| channelNum | int 0..20 step 1 | 2 |
| currentLightingMode | on, off, ai_lighting, repeat_all, repeat_shuffle, custom, ambient | 2 |
| currentMotion | wave, rotation, glow, slide, flash, breathing, flickering, breeze, voice | 2 |
| currentMotionColor | default, mypick1, mypick2, mypick3 | 2 |
| display | auto, off, on | 3 |
| drc | int 0..2 step 1 | 2 |
| enableNetworkStandby | default: True | 2 |
| enableRepeat | default: False | 2 |
| extwooferlevel | int -15..12 step 1 | 2 |
| function | bt, wifi, usb, earc | 1 |
| lastfunction | com.webos.service.bluetoothfunction, com.webos.service.wififunction, com.webos.service.audiousbplayer, com.webos.service.arcfunction | 2 |
| lgRadioPlusAuthentication | default:  | 2 |
| midlevel | int -6..6 step 1 | 3 |
| motionColor | default: <complex> | 2 |
| motionColorPairinfo | default: <complex> | 2 |
| muteStatus | default: False | 2 |
| mybtnLighting | default: <complex> | 2 |
| mybtnOthers | default: <complex> | 2 |
| mybtnPlaylist | default: {'playlist': [], 'type': 'none'} | 2 |
| networkStandbyBrightness | low, mid, high | 2 |
| night | default: off | 3 |
| rearlevel | int -6..6 step 1 | 1 |
| repeatMode | repeat_all, repeat_shuffle | 2 |
| sidelevel | int -6..6 step 1 | 3 |
| smartMixer | default: True | 2 |
| soundAlive | default: off | 2 |
| spotifyCredentialsBlob | default:  | 2 |
| spotifyUri | default:  | 2 |
| spotifyUsername | default:  | 2 |
| supportSoundMode | standard, bassBoost, aiSoundPlus, voiceEnhance, customEq, personalized, newsHigh | 2 |
| surround | default: off | 3 |
| toplevel | int -6..6 step 1 | 3 |
| treble | int -6..6 step 1 | 3 |
| uacMode | 1.0, 2.0 | 2 |
| wooferlevel | int -15..12 step 1 | 3 |

#### category `caption` (35 keys)

| key | allowed values / default | models |
|---|---|---|
| aiCaptionBackgroundEnabled | default: False | 2 |
| aiCaptionEnable | default: off | 3 |
| aiCaptionFontSize | small, medium, large | 2 |
| aiCaptionPosition | bottom, top, right, left | 2 |
| aiCaptionSubtitleLanguage | auto, ko, en, de, fr, pt, it, es | 2 |
| caption608PosOption | auto, manual | 7 |
| caption608PosX | default: 0 | 7 |
| caption608PosY | default: 0 | 7 |
| caption708PosOption | auto, manual, autoAi | 7 |
| caption708PosX | default: 0 | 7 |
| caption708PosY | default: 0 | 7 |
| captionAnalog | cc1, cc2, cc3, cc4, t1, t2, t3, t4, eng, kor | 9 |
| captionBgColor | white, black, red, green, blue, cyan, magenta, yellow | 9 |
| captionBgOpacity | flash, translucent, transparent, solid | 9 |
| captionDigital | off, svc1, svc2, svc3, svc4, svc5, svc6, Portuguese, Spanish, English | 9 |
| captionDigitalPosOption | auto, manual, autoAi, splitDown16_9, splitUp16_9 | 5 |
| captionDigitalPosX | default: 0 | 5 |
| captionDigitalPosY | default: 0 | 5 |
| captionEdgeColor | white, black, red, green, blue, cyan, magenta, yellow | 9 |
| captionEdgeType | none, uniform, raised, depressed, left_drop_shadow, right_drop_shadow | 9 |
| captionEnable | default: off | 9 |
| captionFont | font0, font1, font2, font3, font4, font5, font6, font7 | 9 |
| captionSize | small, standard, large | 9 |
| captionStyle | auto, manual | 9 |
| captionTextColor | white, black, red, green, blue, cyan, magenta, yellow | 9 |
| captionTextOpacity | flash, translucent, transparent, solid | 9 |
| captionWindowColor | white, black, red, green, blue, cyan, magenta, yellow | 9 |
| captionWindowOpacity | translucent, transparent, solid | 9 |
| digitalPlusCaptionLanguage | eng, spa, fre, kor, jpn, chi | 9 |
| hardOfHearing | default: off | 9 |
| japanCaptionEnable | off, jpn, eng | 9 |
| japanSuperImposeEnable | off, jpn, eng | 9 |
| naisDevicePaired | default: False | 3 |
| phlCaptionEnable | off, eng, tgl | 9 |
| phlSuperImposeEnable | off, eng, tgl | 9 |

#### category `channel` (47 keys)

| key | allowed values / default | models |
|---|---|---|
| aiFavoriteGroup4stb | A, B, C, D, E, F, G, H | 8 |
| aiFavoriteGroup4tv | A, B, C, D, E, F, G, H | 8 |
| analogSystemColor | multi, pal-m, pal-n, ntsc | 9 |
| audioLanguage | default: <complex> | 9 |
| automaticServiceListUpdate | default: on | 9 |
| autoscanAribFreqBand | UHF, ALL | 9 |
| autoscanAribInitalScan | default: on | 9 |
| autoscanCableBlindsearch | default: off | 9 |
| autoscanCableDigitalOnlySearch | default: off | 9 |
| autoscanCableNetworkscan | default: off | 9 |
| autoscanCableQuickScan | default: off | 9 |
| autoscanCableScan | default: off | 9 |
| autoscanCableSkipScrambleSerarch | default: off | 9 |
| autoscanChannelGroup | primary_channel, all_channel | 9 |
| autoscanFastscanSatellite | on, off, instant | 9 |
| autoscanSatelliteInitialScan | default: off | 9 |
| autoscanSatelliteScan | default: off | 9 |
| autoscanTerrestrialDigitalOnlySearch | default: off | 9 |
| autoscanTerrestrialScan | default: off | 9 |
| autoscanTerrestrialSecamlSearch | default: off | 9 |
| backgroundTuning | default: False | 2 |
| channelMute | default: on | 7 |
| channelsInHome | default: on | 9 |
| digitalPlus | default: {'cableDigitalPlus': False, 'terrestrialDigitalPlus': False} | 9 |
| dualMono | default: <complex> | 9 |
| ewbsTargetChannel | default: noChannel | 7 |
| favoriteGroupName4stb | default: <complex> | 9 |
| favoriteGroupName4tv | default: <complex> | 9 |
| levelSoundSatellite | default: off | 9 |
| levelSoundTerrestrial | default: off | 9 |
| manualscanSatelliteNetworkSearch | default: off | 9 |
| multiAudio | default: <complex> | 9 |
| multiFeed | default: <complex> | 9 |
| objectAudio | default: <complex> | 8 |
| powerSupply | default: off | 9 |
| programListUpdateCable | default: off | 9 |
| programListUpdateSatellite | default: off | 9 |
| recommended | default: off | 9 |
| recordingRestrictions | default: off | 9 |
| satelliteHDSD | HD, SD | 9 |
| signalAttenuation | default: off | 9 |
| signalBeepSound | default: off | 9 |
| signingAtsc30 | default: off | 7 |
| subtitleLanguage | default: <complex> | 9 |
| supportOperatorProfile | default: on | 9 |
| tuningTypeMDUUniversal | Universal, MDU | 9 |
| uhdJackConnected | default: on | 9 |

#### category `cloud` (11 keys)

| key | allowed values / default | models |
|---|---|---|
| cloudBlackStabilizer | int 0..20 step 1 | 1 |
| cloudBlueLight | off, level1, level2 | 1 |
| cloudDarkMode | off, level1, level2 | 1 |
| cloudEnableQuickGame | default: on | 1 |
| cloudGameAdjustContrast | int 0..100 step 1 | 1 |
| cloudGameBlackLevel | int 0..100 step 1 | 1 |
| cloudGameColorDepth | int 0..100 step 1 | 1 |
| cloudGameSharpness | int 0..50 step 1 | 1 |
| cloudGameUIColor | violet, orange, green | 1 |
| cloudSupportGameOptimizer | default: False | 1 |
| cloudWhiteStabilizer | int 0..20 step 1 | 1 |

#### category `push` (5 keys)

| key | allowed values / default | models |
|---|---|---|
| com.webos.app.homeconnect | default: True | 5 |
| com.webos.app.sportsteamsettings | default: True | 5 |
| hidden | default:  | 3 |
| list | default:  | 5 |
| notification | default:  | 5 |

#### category `musicCatch` (2 keys)

| key | allowed values / default | models |
|---|---|---|
| isLegalNoticeShown | default: False | 9 |
| musicCatchStorageInfo | default: {'deviceId': '', 'devicePath': '', 'subDeviceId': ''} | 9 |

#### category `lgchannels` (3 keys)

| key | allowed values / default | models |
|---|---|---|
| isVideoScreenSaverEnabled | default: False | 3 |
| videoScreenSaverAppList | default: com.webos.app.home | 3 |
| videoScreenSaverDisabledByError | default: False | 3 |

#### category `voiceframework` (22 keys)

| key | allowed values / default | models |
|---|---|---|
| aiAssistantState | default: default | 2 |
| amazonAlexaLocale | default:  | 6 |
| audioFeedback | default: False | 8 |
| channelZapping | default: False | 8 |
| countPowerOn | default: 0 | 8 |
| disclosureAccepted | default: False | 8 |
| disclosureAcceptedVsn | default: N/A | 8 |
| easyGuideCount | default: <complex> | 1 |
| enableFarFieldTriggerSound | default: True | 2 |
| epgLastUpdated | default:  | 7 |
| googleAssistantLocale | default:  | 6 |
| googleAssistantStateToken | default:  | 8 |
| selectedService | default:  | 2 |
| supportGoogleAssistant | default: False | 7 |
| supportMasa | default: False | 2 |
| supportNlp | default: False | 8 |
| supportStt | default: False | 8 |
| supportThinQcnNlp | default: False | 2 |
| supportThinQtvNlp | default: False | 7 |
| vidStatus | default: {} | 5 |
| voiceModel | default:  | 7 |
| voice_mic | default: on | 3 |

#### category `(empty string)` (5 keys)

| key | allowed values / default | models |
|---|---|---|
| eulaInfo | default: <complex> | 9 |
| eulaInfoNetwork | default: <complex> | 9 |
| eulaStatus | default: <complex> | 9 |
| localeInfo | default: <complex> | 9 |
| mobileSetupStatus | ready, completed | 8 |

#### category `commercial` (1028 keys; names only - hotel/commercial TV settings)

15MinAutoOff, AV1En, AV2En, HPDControl, HTNGAudioOnlyDisplay, HTNGOSDLock, LGServiceXmlVersion, RGBOverlayInRF, STCLipSyncMaster, aMuteTime, acOn, ackMask, additionalPixelRefresher, adminInput, airplayBrokerMode, airplayBrokerPreSharedKey, airplayBrokerPskIdentity, airplayBrokerQrCode, airplayBrokerReceiverUuid, airplayBrokerServerIp, airplayBrokerServerPort, airplayCaptivePortalAuthToken, airplayGuestWiFiSsid, airplayGuestWifiPassword, airplayOnOff, alarmScreenOption, alarmTimer, alarmTimerHour, alarmTimerMinute, alljoyn, aodClockType, aodDateDay, aodDateInfo, aodDateMonth, aodDateYear, aodEnterCount, aodGuideEnterCount, aodInfoUIVisibleCount, aodInitialMode, aodLastCategory, aodMotionSelectedIdx, aodMovementsTheme, aodSetByTheGuest, aodSlideShowSpeed, aodUserChangeAutoOff, aplAutoControl, appLaunchMode, appLaunchModeDeviceId, appType, aslMode, aspectRatioLock, assistiveMenuList, atsc30Band, atscBand, atscTuneMode, audioOutput, audioPtsOffset, audioSourceDp, audioSourceHdmi1, audioSourceHdmi2, audioVolumeWatt, autoCamport, autoOtaUpdate, autoRearAux, autoRearYC, autoSensing, autoServerIp, autoServerIpv6, autoSet, autoSetDeviceId, autoStart, autoStartAppId, autoTeletext, autoYPrPb, autoplayList, autoplayOnOff, autoplayRepeat, auxInputAll, auxInputIndependently, auxStatus, bLanPowerSaving, backlighting, backupHcapVideoSize, backupViaStorage, backupViaStorageFile, backupViaStorageInterval, backupViaStorageStatus, bandAfc, bannerEn, bckAudioM, bckChTime, bckPtlM, bckSetupM, bckSrcM, bckVideoM, beaconMajor, beaconMinor, beaconMode, beaconType, beaconUuid, bed12, bigUI, blockedPortList, calibrationScheduleCycle, calibrationScheduleDate, calibrationScheduleDayOfWeek, calibrationScheduleHour, calibrationScheduleMin, calibrationScheduleSetting, calibrationScreenPosition, captionDvb, captionLock, care365Enable, castSecurityMode, chNotAvble, chTimeSize, channelLock, channelOverride, checkOnLine, checkScreen, chksumError, chromecastOnOff, chromecastOptIn, cityForWeather, clockType, cloudServerType, cmsProxyIp, cmsProxyMode, cmsProxyPassword, cmsProxyPort, cmsProxyUserName, commer365CareServiceMode, commerServiceOperater, commerSyncMode, commercialFlag, component1En, contentPlayDuration, contentPlayScreenRatio, contentPlayTransitionEffect, contentRotation, contentSync, contentsRotation, contentsSync, crestronAuthenticationOn, crestronAutoDiscovery, crestronControlServerIp, crestronControlServerIpId, crestronControlServerPort, crestronEnable, crestronFusionMethod, crestronFusionPort, crestronFusionURL, crestronMode, crestronPassword, crestronRoomID, crestronSSLOn, crestronUsername, crestronVerifyCertificate, crestronXioEnable, crestronXioURL, customPortalHospitalType, customPortalHotelVideo, customPortalItem, customPortalPipInfo, customPortalType, customPortalVertical, dataCollectionStatus, dateFormat, defaultArc, defaultPortalBgType, defaultPortalHotelName, defaultSoundout, defeatXds, delScreenShareBySoftAP, deleteRemotePcData, destination_ip, destination_port, detectUSBwithDZM, deviceTags, dial, digitalAudioForcedMute, digitalAudioInput, digitalAudioInputList, direction_path, disAudioM, disAudioMenu, disChTime, disPt1M, disSetupM, disVideoM, dispSourceM, dmrEn, doNotClearCP, domainName, downloadProtection, dpmMode, dpmWakeUpControl, dstEndDayOfWeek, dstEndHour, dstEndMonth, dstEndWeek, dstMode, dstStartDayOfWeek, dstStartHour, dstStartMonth, dstStartWeek, dtvChannelUpdate, dvbCBandwidth, dvbCEn, dxpProvisionCode, dxpProvisionStatus, dynamicBrightness, dynamicEdid, easyBrightnessMode, easyBrightnessSchedule, eddyStoneFrame, eddyStoneUrl, eddyStoneUrlExCode, eddyStoneUrlPrefix, eddyStoneUuid, enAlarm, enAudioCol, enChTCol, enNoiseMute, enPtlCol, enSetupCol, enSleepTimer, enSrcCol, enTimer, enVchip, enVideoCol, enVideoMute, enableBootLogo, enableDeviceDiscovery, enableHomeOffice, enableLGApps, enableLgPresenter, enableResetToInitial, enableSnmp, enableSpeaker, enableUsb, enableWifi, enableWired, energySavingMinBacklight, enterpriseCode, epdActivePowerMode, epdAutoRefreshPeriod, epdAutoRefreshTime, epdIdleScreenImage, epdIdleScreenMode, epdPictureMode, epdWakeUpIntervalOnOff, epdWakeUpIntervalTime, epdWhiteWashPeriod, eulaInstallation, eulaInstallationChanged, extClockDimmingPowerOn, extClockDimmingStandBy, extClockDisplay, extClockProCentricInput, extClockProgram, extClockSource, extClockTvInput, extOffsetTTXClock, extSpkVolumeControl, extendSyncMode, externalServerEnable, externalServerIntervalEnable, externalServerIntervalPeriod, externalServerUrl, ezmgr_update_status, factoryReset, factoryWinStatus, failover, failoverPriority, failoverPriority1, failoverPriority2, failoverPriority3, failoverPriority4, failoverPriority5, failoverPriority6, fanControlTableCL, fanControlTableNormal, fanControlTableOL, fanControlTablePSU, fanMode, fanSpeed, flashSize, forAudioM, forChTime, forPtlM, forSetupM, forSrcM, forVideoM, fotaGroup, fqdnAddr, fqdnMode, frntYCEn, functionPre, gostChannel, greetingMessage, grhAdminPassword, grhCheckOutMode, grhCheckOutStatus, grhDailyCheckOutHour, grhDailyCheckOutMinute, grhDeviceType, grhGeneralPassword, grhGroups, grhInitPassword, grhMasterIp, grhPasswordConfigured, grhPmsMode, grhPmsOperation, grhRoomId, grhRoomInfo, grhRoomList, grhRoomNumber, grhSchedule, grhTokens, groupDeviceMode, groupInfo, groupList, guestMenuState, guestSetting, handshkTime, hcapStartChSSID0, hcapStartChSSID1, hcapStartChSSID2, hcapStartChSSID3, hcapStartChSSID4, hcapStartPlpId, hcapStartPolarization, hcapStartRfChBandType, hcapStartRfChType, hcapStartRfFreqHz, hcapStartRfProgNumber, hcapStartSatId, hcapStartSourceIp, hcapStartSymbolRate, hcapTuneCmIpProtocol, hcapVideoSize, hcap_rs232c_mode, hcapalarmStartChType, hcapalarmStartFreq, hcapalarmStartHour, hcapalarmStartIp, hcapalarmStartIpPort, hcapalarmStartIpProgram, hcapalarmStartIpProtocol, hcapalarmStartLogical, hcapalarmStartMajor, hcapalarmStartMinor, hcapalarmStartMinute, hcapalarmStartPlpId, hcapalarmStartPolarization, hcapalarmStartProgramNumber, hcapalarmStartRfBandType, hcapalarmStartSSID0, hcapalarmStartSSID1, hcapalarmStartSSID2, hcapalarmStartSSID3, hcapalarmStartSSID4, hcapalarmStartSatId, hcapalarmStartSourceIp, hcapalarmStartSymbolRate, hcapalarmStartVolume, hdmi1En, hdmi2En, hdmi3En, hdmi4En, hdmiItContents, healthcareAudioControl, healthcareHeadphoneMode, hideOsd, historyIntervalSeconds, holidaySchedule, hospitalLogoName, hospitalMode, hospitalName, hospitalSpeakerCodeVoltage, hospitalSpeakerSelection, hotelDirectoryDetails1, hotelDirectoryDetails2, hotelDirectoryDetails3, hotelDirectoryDetails4, hotelDirectoryDetails5, hotelDirectoryDetails6, hotelDirectoryDetails7, hotelDirectoryName1, hotelDirectoryName2, hotelDirectoryName3, hotelDirectoryName4, hotelDirectoryName5, hotelDirectoryName6, hotelDirectoryName7, hotelDirectoryOnOff, hotelDirectoryPlayList1, hotelDirectoryPlayList2, hotelDirectoryPlayList3, hotelDirectoryPlayList4, hotelDirectoryPlayList5, hotelDirectoryPlayList6, hotelDirectoryPlayList7, hotelLogoName, hotelName, hotel_id, iBeaconMajor, iBeaconMinor, iBeaconUuid, idHTNGKeyLock, idHTNGSettingAudioOnlyDisplay, idHTNGSettingLockChannel, idHTNGSettingLockInput, idHTNGSettingLockMenuEnter, idHTNGSettingLockPower, idHTNGSettingMax, idHTNGSettingOsdDisplayOff, idHTNGSettingWakeUpHour, idHTNGSettingWakeUpInput, idHTNGSettingWakeUpMinute, idHTNGSettingWakeUpSet, idHTNGSettingWakeUpVolume, idHTNGSettingWakeUpVolumeRampUpTime, idbEmailAccount, identifierCode, ieee8021xCACertFile, ieee8021xClientCertFile, ieee8021xPrivateKeyFile, ieee8021xUseCACert, igmpVersion, imAcOn, imAfterAc, imAnalogCc, imAspRatioLock, imAtscBand, imAtscMode, imAutoHdmi1, imAutoHdmi2, imAutoHdmi3, imBackLight, imBannerMode, imBedNum, imChLock, imChNotAvail, imChOverride, imClosedCap, imDefAspRatio, imDefaultAudio, imDigitalCc, imDisAudioM, imDisChBanner, imEnAlarm, imEnTimer, imExtControl, imForceReboot, imHdmi1En, imHdmi2En, imHdmi3En, imInactiveHrs, imInstSeq, imIrFeedback, imIrMode, imKeyLock, imLightLevel, imMaxBlkHrs, imMaxVol, imMinBacklight, imMinVol, imMuteDisable, imMuteIcon, imNoiseMute, imPermBlk, imRemapAux, imSapMenu, imSimplinkEn, imSleepTimer, imStartAux, imStartChMaj, imStartChMin, imStartChType, imStartVol, imTuningBand, imUsbPower, imUseLastVol, imVchip, imVideoMute, inputAutoSwitching, inputSensingAV1, inputSensingAll, inputSensingComp1, inputSensingHDMI1, inputSensingHDMI2, inputSensingHDMI3, insertImage, installerSeq, instantOn, intelligentAuto, interfaceSelection, ipInputType, ipenvFirstEntry, irBankEn, irBlaster, irMode, isBrowserDebugMode, ismBarColor, ismBarDirection, ismBarImage, ismBarTransparency, ismDays, ismEndTime, ismInversionTime, ismMode, ismOrbiterRepeat, ismOrbiterTime, ismPeriod, ismStartTime, ismTime, ismTimer, ismUserImage, istm_reserved_3, istm_reserved_4, istm_reserved_5, istm_reserved_6, istm_reserved_7, keyDefeat, keyLock, keyOperation, keylessOffHours, keylessOffHoursEn, lanDaisyChain, lastForegroundAppId, launcherEditMode, launcher_version, ledCalibrator, ledLayout, ledLight, linkAutoServerIp, linkSecuredConnection, linkServerEnable, linkServerIP, linkServerIPv6, linkServerIpMode, linkServerIpType, linkServerName, linkServerPort, linkServerStatus, loadingSplashImage, localAppUpgrade, localAppUpgradeDeviceId, localeContinent, localeCountry, lockModeFactory, lockModeUSB, log_forwarding_mode, log_level, mainSpeaker, manualNetworkDnsServer, manualNetworkGateway, manualNetworkIpAddress, manualNetworkSubnetMask, manualServerIp, manualServerIpv6, maxBacklight, maxBlockHour, maxVolume, meetingRoomAgenda, meetingRoomAgendaEnabled, meetingRoomName, meetingRoomNameEnabled, meetingRoomNote, meetingRoomNoteEnabled, meetingRoomSolutionEnabled, meetingRoomTime, menuAppId, minBacklight, minVolume, miracastListenMode, mirrorMode, mobileRemoteNotification, mobileRemoteNotificationShown, mobileRemoteOnOff, mobileRemoteRemindLater, moduleHeight, moduleWidth, moodClock, moodClockAutoOnTime, moodClockDoNotDisturbEndTime, moodClockDoNotDisturbSetUp, moodClockDoNotDisturbStartTime, moodClockScreenOffTime, moodClockSetUp, moodClockSkinColor, moodClockSkinPosition, moodClockSkinSize, moodClockSkinTheme, moodClockSkinType, multiDisplayMode, multiEnergySaving, multiOffTimerHour, multiOffTimerMinute, multiOffTimerWeekday, multiOnTimerHour, multiOnTimerMinute, multiOnTimerSource, multiOnTimerWeekday, multiRemoteKey, multiScreenMainInput, multiScreenMode, multiScreenSub1Input, multiScreenSub2Input, multiScreenSub3Input, muteDisable, muteIconStayVisible, nativeEPG, naturalMode, needToNotifyPtc, noActivityOff, noSignalBgImageDownloaded, noSignalImage, noSignalText, ntpServerIpv4, ntpServerIpv6, ntpServerMode, ntpServerType, ntpServerUrl, ntscScancard, ocfRunning, offTimerCount, offTimerSchedule, officeMeetingMode, oldOcv, onOffTimeSchedule, onTimerAppIdPTC, onTimerChannelPTC, onTimerCount, onTimerOperation, onTimerSchedule, onTimerSourcePTC, oneChannelMap, onequicksharePreload, opsConnection, opsPowerControl, opsReady, osdEn, osdPortraitMode, osdPosition, panelCom, panelDelay, panelHandshake, panelMaxVol, panelMinVol, panelOffset, panelStartVol, panelTunerOnDelay, panelType, panelVolRepeat, pbrmEn, pcHSize, pcrOffset, permanentBlk, permanentBlock, pictureId, pillowMode, pincodeBlockedTime, pivotMode, playViaUrl, playViaUrlMode, playingContents, pmMode, pmModeTvSignage, pokeEnable, pollRate, portalMode, powerLight, powerManage, powerOnDelay, powerOnOffHistoroy, powerOnOffHistory, ppvChannelMode, preChannelIndex, preLoadedApp, presentationTimerEnabled, proCentricClockUpdate, proCentricServerType, proInstallationCode, proServerStatus, procCompleteDownloadFlag, procentricClockFreq, procentricClockIPAdd_a, procentricClockIPAdd_b, procentricClockIPAdd_c, procentricClockIPAdd_d, procentricClockIPAddr, procentricClockIPPort, procentricClockServiceID, procentricClockUpdate, procentricDataCarouselEn, procentricDataChannel, procentricDataChannelSlt, procentricIPAddr_a, procentricIPAddr_b, procentricIPAddr_c, procentricIPAddr_d, procentricIPPort, procentricIpv6Address, procentricMediaType, procentricMode, procentricModulation, procentricRFFreq, procentricRFType, procentricServerIpType, procentricSymbol, promotaOnOff, propertyAlternativeLGServiceXml, propertyAlternativeUrl, propertyAppUpdateShutDown, propertyAppUpdateStartUp, propertyApplicationChannelControl, propertyBlockExternalInput, propertyBlockHiddenMenu, propertyBlockHotkey, propertyBlockIr, propertyBlockLauncher, propertyBlockLocalKey, propertyBootSequenceOption, propertyBrowserHttpsSecurityLevel, propertyBrowserNetworkErrorHandling, propertyCecDeviceControl, propertyChannelplus, propertyCountry, propertyDefaultAudioLanguage, propertyDefaultAudioLanguageList, propertyDefaultSubtitleLanguage, propertyDefaultSubtitleLanguageList, propertyDefaultSubtitleLanguageListUsAnalog, propertyDefaultSubtitleLanguageUsAnalog, propertyDst, propertyFullBrowserStartPageUrl, propertyGmtOffsetInMs, propertyHttpsXaitXml, propertyInbandDataServiceHbbtv, propertyInbandDataServiceMheg, propertyInbandDataServiceMhp, propertyIpSupport, propertyKeyDeliveryToSimpLink, propertyLanguage, propertyMuteOnTvInput, propertyNumberOfTuner, propertyOsdLayerId, propertyPcrRecovery, propertyRMSTrustedIP, propertyRcuLowBatteryToast, propertyReserved0, propertyReserved1, propertyReserved2, propertyReserved3, propertyReserved4, propertyReserved5, propertyScreensaverControl, propertySecureMmrPairing, propertySecurityLevel, propertySingleDecoding, propertySmartPairing, propertyStrReserved0, propertyStrReserved1, propertyStrReserved2, propertyStrReserved3, propertyStrReserved4, propertyStrReserved5, propertySupportLanguageList, propertyTvBTSourceUi, propertyTvCaptionUi, propertyTvChannelControl, propertyTvChannelLockUi, propertyTvChannelUi, propertyTvFloatingUi, propertyTvMhegUi, propertyTvPreloadedAppLauncherUi, propertyTvVolumeUi, propertyValidateHcapWebsocket, propertystrReserved2, proximitySensor, proxyAuthentication, proxyBypassList, proxyEnable, proxyMode, proxyServerIpType, proxySingleAddress, proxySinglePassword, proxySinglePort, proxySingleUsername, pseudoPwrOff, ptcMode, ptcPowerOnDefault, ptc_Download_Fail, qiKeycode, quickShutoff, quietMode, radioEn, radioNameDisplay, radiusServerIP, radiusServerKey, radiusServerPort, rbg1En, readerMode, rearYCEn, referenceRgb, remainingBlockHr, remoteJackPack, reorderLaunchPoint, revertCh, rfUpdateTImeMin, rfUpdateTImeMinPre, rfUpdateTime, rfUpdateTimeHr, rfUpdateTimeHrEn, rfUpdateTimeRandomMin, rfWakeUpEventEnable, rfWakeUpEventHour, rfWakeUpEventMin, rgb1En, rjpAvailable, rmsApiKey, rmsEn, roomNumber, rotationAspectRatio, rs232Baudrate, rssAddress, rssScrollSpeed, ruleData, salAuthToken, sapLock, sapMenuEn, scanInversion, scanInversionSync, scanMode, scanModeBelowAppId, scanModeBelowChannelId, scanModeHighestAppId, scanModeHighestChannelId, scanModeLowestAppId, scanModeLowestChannelId, scartOut, sclActiveStatus, sclDisplayMode, screenSharePinEn, screenTouch, secureConnection, selectBanner, sendStatusMailResult, sendToRs232, serverCertificateList, serverIpMode, serverIpPort, serverStatus, serviceIp, setKeyLock, showRSSFeed, showWeatherInfo, siName, siNameNL, siServerIp, signage365CareAccountName, signage365CareAccountNumber, signage365CareInstall, signageMode, signageName, signageSetId, simplinkEn, simplinkOutEnable, sixKeySys, smAttr, smAudio, smMajor, smMinor, smVideo, smartCalibrationColorTemperature, smartEnergy, smartParing, smartShareEn, smoovie, smoovieInputSource, smoovieProgramme, smoovieRing1, smoovieRing2, smoovieStandard, softapChannel, softapChannelWidth, softapDefault, softapDefaultSecurityKey, softapEnable, softapHidden, softapMode, softapOnOff, softapSecurityKey, softapSecurityType, softapSsid, softapTxpower, softapVlanId, speakerOutputForcedMute, splashTime, splitscreenEnable, ssScreenshotEnable, ssScreenshotUploadLock, ssnData, sswSecuredConnection, sswServerEnable, sswServerIpType, sswServerName, sswServerPort, standByMode, startAuxSrc, startChInSm, startChMajorNum, startChannelId, startChnumMinor, startIpAddress, startIpAddress_a, startIpAddress_b, startIpAddress_c, startIpAddress_d, startIpType, startPort, startProgram, startSourceIpAddress_a, startSourceIpAddress_b, startSourceIpAddress_c, startSourceIpAddress_d, startVolume, staticSaving, statusReportAccount, statusReportMode, statusReportRecipient, statusReportSchedule, statusReportUserEmail, stbHdcpRepeaterEnable, stbResolution, stbVideoInterface, stillImageDetecting, superSignTvMode, supportFHD, sustainAspectRatio, tconLocalDimming, temperatureUnit, textMode, tileCol, tileId, tileMode, tileNaturalSize, tileRow, timeSync, timeSyncMode, timeoutEn, timingPulse, tuneAudioPid, tuneAudioType, tuneIPAddr_a, tuneIPAddr_b, tuneIPAddr_c, tuneIPAddr_d, tuneIpType, tunePcrPid, tunePort, tuneProgram, tuneVideoPid, tuneVideoType, tvGuideEn, tvManagerUpdateInfo, tvSpeakerOff, tvlinkHcecControl, tvlinkHcecDeviceID, tvlinkHcecForcedInitialize, tvlinkHcecHotelmode, tvlinkHcecIrDecoding, tvlinkHcecStandby, tvlinkIntOSDString, tvmanagerPin, uPnP, uartPowerOutlet, updateDetectNoti, upnLsb, upnMsb, upnMsb1, upnMsb2, usbAutoPlayBack, usbAutoPlayback, usbAutoPlaybackPath, usbEn, usbPowerControl, useSpeakerSound, vMuteTime, vidOutFormat, videoInterface, videoPtsOffset, vlanIdForAuxLan, vlanIdForLan, vlanOnOff, voiceEnabledApp, volumePreset, webhookCertVeri, webhookFormat, webhookHost, webhookTopic, websiteShortcut1, websiteShortcut2, websiteShortcut3, websiteShortcut4, websiteShortcut5, welcomeHospitalMessage, welcomeMessage, welcomeVideoMode, welcomeVideoPath, whiteBalanceMenuPosition, whiteBalanceRemoteKey, wifiScreenShareEn, wifiZone, wired8021xEap, wired8021xEnable, wired8021xIdentity, wired8021xPassphrase, wired8021xPhase2Auth, wired8021xUIEnable, wolEnable, wolMagicPacket, ycLoopOut, zenithIrCode, zone

#### category `commercialTv` (111 keys; names only - hotel/commercial TV settings)

backupHcapVideoSize, hcapStartChSSID0, hcapStartChSSID1, hcapStartChSSID2, hcapStartChSSID3, hcapStartChSSID4, hcapStartPlpId, hcapStartPolarization, hcapStartRfChBandType, hcapStartRfChType, hcapStartRfFreqHz, hcapStartRfProgNumber, hcapStartSatId, hcapStartSourceIp, hcapStartSymbolRate, hcapTuneCmIpProtocol, hcapVideoSize, hcapalarmStartChType, hcapalarmStartFreq, hcapalarmStartHour, hcapalarmStartIp, hcapalarmStartIpPort, hcapalarmStartIpProgram, hcapalarmStartIpProtocol, hcapalarmStartLogical, hcapalarmStartMajor, hcapalarmStartMinor, hcapalarmStartMinute, hcapalarmStartPlpId, hcapalarmStartPolarization, hcapalarmStartProgramNumber, hcapalarmStartRfBandType, hcapalarmStartSSID0, hcapalarmStartSSID1, hcapalarmStartSSID2, hcapalarmStartSSID3, hcapalarmStartSSID4, hcapalarmStartSatId, hcapalarmStartSourceIp, hcapalarmStartSymbolRate, hcapalarmStartVolume, identifierCode, propertyAlternativeLGServiceXml, propertyAlternativeUrl, propertyAppUpdateShutDown, propertyAppUpdateStartUp, propertyApplicationChannelControl, propertyBlockExternalInput, propertyBlockHiddenMenu, propertyBlockHotkey, propertyBlockIr, propertyBlockLauncher, propertyBlockLocalKey, propertyBootSequenceOption, propertyBrowserHttpsSecurityLevel, propertyBrowserNetworkErrorHandling, propertyCecDeviceControl, propertyChannelplus, propertyCountry, propertyDefaultAudioLanguage, propertyDefaultAudioLanguageList, propertyDefaultSubtitleLanguage, propertyDefaultSubtitleLanguageList, propertyDefaultSubtitleLanguageListUsAnalog, propertyDefaultSubtitleLanguageUsAnalog, propertyDst, propertyFullBrowserStartPageUrl, propertyGmtOffsetInMs, propertyHttpsXaitXml, propertyInbandDataServiceHbbtv, propertyInbandDataServiceMheg, propertyInbandDataServiceMhp, propertyIpSupport, propertyKeyDeliveryToSimpLink, propertyLanguage, propertyMuteOnTvInput, propertyNumberOfTuner, propertyOsdLayerId, propertyPcrRecovery, propertyRMSTrustedIP, propertyRcuLowBatteryToast, propertyReserved0, propertyReserved1, propertyReserved2, propertyReserved3, propertyReserved4, propertyReserved5, propertyScreensaverControl, propertySecureMmrPairing, propertySecurityLevel, propertySingleDecoding, propertySmartPairing, propertyStrReserved0, propertyStrReserved1, propertyStrReserved2, propertyStrReserved3, propertyStrReserved4, propertyStrReserved5, propertySupportLanguageList, propertyTvBTSourceUi, propertyTvCaptionUi, propertyTvChannelControl, propertyTvChannelLockUi, propertyTvChannelUi, propertyTvFloatingUi, propertyTvMhegUi, propertyTvPreloadedAppLauncherUi, propertyTvVolumeUi, propertyValidateHcapWebsocket, propertystrReserved2, siName

#### category `hotelMode` (66 keys; names only - hotel/commercial TV settings)

autoBrowser, autoBrowserUrl, auxSettings, auxSettingsEnabled, avSettings, blankOnRadioProgram, displayRadioName, enableAutoBrowser, enableAuxSetting_av1, enableAuxSetting_av2, enableAuxSetting_av3, enableAuxSetting_comp1, enableAuxSetting_comp2, enableAuxSetting_comp3, enableAuxSetting_hdmi1, enableAuxSetting_hdmi2, enableAuxSetting_hdmi3, enableAuxSetting_hdmi4, enableAuxSetting_rgb, enableChannelUpdate, enableFullscreen, enableFunctionStatus, enableHIDDevice, enableHidKey, enableHotelMode, enableInputSourceChange, enableIrRemote, enableKeylock, enableLimitedInputSrcChange, enableLimitedMode, enableLocalKey, enableMenuKey, enableMrcu, enableOsdDisplay, enableOsdVisibility, enablePowerOnDefault, enablePowerOnDefaultVolume, enableProgramChange, enableSetIdMenu, enableStartVolume, enableSystemProviderMode, enterStationMenu, keyLockedBeforeUnplug, keyManagement, maximumVolume, minimumVolume, noActivityPowerOffHours, password, powerOnAspectRatio, powerOnDefaultAv, powerOnDefaultInput, powerOnDefaultMajor, powerOnDefaultMinor, powerOnDefaultProgramme, powerOnDefaultTuneMode, powerOnDefaultVolume, powerOnStatus, radioProgramCount, radioProgramStart, swUpdateEnable, swUpdateNotice, tvlinkHcecHotelmode, tvlinkHid, tvlinkKeylock, tvlinkMrcu, tvlinkOsdDisplay

## Config keys (`config/getConfigs` `configNames` globs, G6)

`airplay.*`, `amazon-alexa-adapter.*`, `amazon.*`, `audio.*`, `broadcast.*`, `commercial.broadcast.*`, `commercial.com.palm.app.settings.*`, `commercial.com.webos.app.channeledit.*`, `commercial.com.webos.app.firstuse.*`, `commercial.com.webos.app.home.*`, `commercial.com.webos.applicationManager.*`, `commercial.com.webos.service.attachedstoragemanager.*`, `commercial.com.webos.service.sdx.*`, `commercial.com.webos.service.update.*`, `commercial.com.webos.surfacemanager.*`, `commercial.controlServer.*`, `commercial.enterprisecode.*`, `commercial.hdmicec.*`, `commercial.hw.hdmiswitch.*`, `commercial.hw.*`, `commercial.hw.usb.*`, `commercial.media.welcomevideo.*`, `commercial.nativeApp.*`, `commercial.network.*`, `commercial.protocol.*`, `commercial.sdx.*`, `commercial.supersign.cms.*`, `commercial.supersign.control.*`, `commercial.time.*`, `commercial.timer.*`, `commercial.tv.config.*`, `com.palm.app.firstuse.*`, `com.palm.app.settings.*`, `com.palm.app.store-demo.*`, `com.webos.app.camera.*`, `com.webos.app.commercial.contentmanager.*`, `com.webos.app.commercial.*`, `com.webos.app.commercial.officemeetingmode.*`, `com.webos.app.connectionwizard.*`, `com.webos.app.dsmp.*`, `com.webos.app.factorywin.*`, `com.webos.app.familycare.*`, `com.webos.app.favshows.*`, `com.webos.app.home.*`, `com.webos.app.igallery.*`, `com.webos.app.inputcommon.*`, `com.webos.app.lgchannels.*`, `com.webos.app.mediadiscovery.*`, `com.webos.app.quicksettings.*`, `com.webos.app.siappsetting.*`, `com.webos.app.systemmusic.*`, `com.webos.app.tips.*`, `com.webos.applicationManager.*`, `com.webos.authenticationMethods.*`, `com.webos.bootManager.*`, `com.webos.keyaction.*`, `com.webos.keyfilters.*`, `com.webos.memorymanager.*`, `com.webos.service.airplay.*`, `com.webos.service.alwaysready.*`, `com.webos.service.arccontroller.*`, `com.webos.service.attachedstoragemanager.*`, `com.webos.service.btaudiosrc.*`, `com.webos.service.bthidmanager.*`, `com.webos.service.camera.*`, `com.webos.service.commercial.ezimanager.*`, `com.webos.service.commercial.*`, `com.webos.service.commercial.remotemanagerservice.*`, `com.webos.service.commercial.webgateway.*`, `com.webos.service.cbox.*`, `com.webos.service.config.*`, `com.webos.service.datamigrator.*`, `com.webos.service.ecm.*`, `com.webos.service.eim.*`, `com.webos.service.favoriteservice.*`, `com.webos.service.hcapmw.*`, `com.webos.service.fepg.*`, `com.webos.service.homelaunchpoints.*`, `com.webos.service.hybridtv.*`, `com.webos.service.iepg.*`, `com.webos.service.ime.*`, `com.webos.service.irdbmanager.*`, `com.webos.service.jsserver.*`, `com.webos.service.livepick.*`, `com.webos.service.miracast.*`, `com.webos.service.miracasttx.*`, `com.webos.service.mrcu.*`, `com.webos.service.msc.*`, `com.webos.service.nlpmanager.*`, `com.webos.service.nop.*`, `com.webos.service.nudge.*`, `com.webos.service.pbsw.*`, `com.webos.service.pdm.*`, `com.webos.service.photorenderer.*`, `com.webos.service.pqcontroller.*`, `com.webos.service.preloadmanager.*`, `com.webos.service.rollingscreen.*`, `com.webos.service.scd.*`, `com.webos.service.screenmanager.*`, `com.webos.service.time.*`, `com.webos.service.tnm.*`, `com.webos.service.tvpower.*`, `com.webos.service.update.*`, `com.webos.service.utp.*`, `com.webos.service.voiceinput.*`, `com.webos.service.wampluggable.hbbtv.*`, `com.webos.service.wbs.*`, `com.webos.service.wowplay.*`, `com.webos.surfacemanager.*`, `con.webos.service.pbsw.*`, `dvr.*`, `dynamicStreamChange.*`, `extinput-service.*`, `gip.*`, `inputMap.*`, `lg.thinqai.adapter.*`, `mediaCapability.*`, `miracast.*`, `multiview.*`, `operatorApp.*`, `profile.*`, `system.*`, `tv.config.*`, `tv.conti.*`, `tv.hw.*`, `tv.model.*`, `tv.nyx.*`, `tv.rmm.*`, `wee.*`

Example reads: `tv.model.*` (modelname, motionProMode, edidType, hdmiSwitchType, soundModeType, supportHDR, TVBrandName, TVManufacturer), `tv.nyx.*` (firmwareVersion, platformVersion), `tv.hw.*` (panelResolution, displayType, ddrSize), `tv.config.*`, `tv.conti.supportUsedTime`. Writes (`setConfigs {configs:{key:value}}`) e.g. `tv.model.motionProMode: 'OLED Motion'|'OLED Motion Pro'`, `tv.conti.supportUsedTime: true`.

## Caveats / firmware notes

* bscpylgtv marks as 'removed at some point': `set3DOn/Off`, `com.webos.service.tv.power/turnOn|OffScreen` (webOS 4.0 form), `system/turnOn`; and as 'access disabled at some point' (via alert trick): `config/setConfigs`, `tvpower/power/turnOnScreenSaver`, `tvpower/power/reboot`, `tv.power/reboot`, `attachedstoragemanager/ejectDevice`.
* `power/turnOffScreen` / `turnOnScreen` `standbyMode: passive` cannot be reversed over the network.
* `system/turnOff` response is unreliable when Standby+ is off.
* `tv/getChannelList` closes the websocket on TVs without tuned channels (lgtv2, webOS 6.0). `tv/getCurrentChannel` only succeeds in Live TV. `system.launcher/getAppState` -> 403 on webOS 6.0. `com.webos.media/getForegroundAppInfo` -> 404 on webOS 6.0.
* Volume: eARC/ARC soundbars report volume -1 and only accept volumeUp/volumeDown.
* webOS 26 (43.21.60): legacy signed registration and direct `settings/setSystemSettings` rejected; alert route works (LG_Buddy docs).
* Hotel/commercial categories exist in settings dumps of consumer OLEDs too (`commercial`, `commercialTv`, `hotelMode`) but are not documented here beyond key names.
