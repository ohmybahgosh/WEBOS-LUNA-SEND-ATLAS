# Calibration API (externalpq)


Payload for set: `{command, profileNo:0, programID:1, [picMode], [data (base64), dataCount, dataType, dataOpt]}`. dataType map: uint8 = `unsigned char`, uint16 = `unsigned integer16`, float32 = `float`. dataOpt: 0 apply, 1 apply+save, 2 reset (empty array). Get: `{command}` -> `{data, dataCount, dataType}`. Workflow: `CAL_START` (with picMode) -> upload -> `CAL_END`. Picture modes for CAL_START: SDR cinema, expert1, expert2, game, technicolorExpert, filmMaker; HDR10 hdr_cinema, hdr_game, hdr_technicolorExpert, hdr_filmMaker; Dolby Vision dolby_cinema_bright(1), dolby_cinema_dark(2), dolby_game(4). 3D LUT size from `model_name[7:11]` of `getCurrentSWInformation`: 17pt for W18H-W26H, 33pt for W18O-W26O plus W24G/W25G/W26G; DoVi config version 2018 for W18*, 2019 for W19-W26. Commands:

* `CAL_START` - start calibration session; payload {command, profileNo:0, programID:1, picMode} (picMode in SDR: cinema, expert1, expert2, game, technicolorExpert, filmMaker; HDR10: hdr_cinema, hdr_game, hdr_technicolorExpert, hdr_filmMaker; DoVi: dolby_cinema_bright(1), dolby_cinema_dark(2), dolby_game(4))
* `CAL_END` - end calibration session
* `1D_DPG_EN` - 1D LUT enable flag; uint16 scalar 0/1
* `1D_DPG_DATA` - upload 1D LUT; uint16 shape (3,1024) (R,G,B x 1024 points)
* `GET_1D_DPG_DATA` - read 1D LUT; shape (3,1024) uint16
* `BT709_3D_LUT_DATA` - upload BT.709 3D LUT; uint16 shape (N,N,N,3), N=17 or 33 depending on chip (model_name chars 7-11: W18H..W26H=17pt; W18O..W26O/W24G/W25G/W26G=33pt)
* `BT2020_3D_LUT_DATA` - upload BT.2020 3D LUT; same shape as BT709
* `GET_3D_LUT_DATA` - read 3D LUT
* `BRIGHTNESS_UI_DATA` - set brightness UI value 0-100 (uint16 scalar)
* `CONTRAST_UI_DATA` - set contrast UI value 0-100 (uint16 scalar)
* `BACKLIGHT_UI_DATA` - set backlight/OLED light UI value 0-100 (uint16 scalar)
* `COLOR_UI_DATA` - set color UI value 0-100 (uint16 scalar)
* `1D_2_2_EN` - gamma-to-linear 1D transform enable flag (uint16 scalar); GET_1D_2_2_EN reads
* `1D_0_45_EN` - linear-to-gamma 1D transform enable flag (uint16 scalar); GET_1D_0_45_EN reads
* `3BY3_GAMUT_EN` - 3x3 gamut transform enable flag (uint16 scalar)
* `BT709_3BY3_GAMUT_DATA` - 3x3 gamut matrix, float32 shape (3,3)
* `BT2020_3BY3_GAMUT_DATA` - 3x3 gamut matrix, float32 shape (3,3)
* `HDR_3BY3_GAMUT_DATA` - HDR 3x3 gamut matrix (2019-era models), float32 (3,3)
* `GET_3BY3_GAMUT_DATA` - read SDR 3x3 matrix
* `GET_HDR_3BY3_GAMUT_DATA` - read HDR 3x3 matrix
* `DOLBY_CFG_DATA` - upload Dolby Vision config (text of DolbyVision_UserDisplayConfiguration.txt, CRLF, as uint8 bytes); bscpylgtv does NOT recommend this, use USB upload + pqcontroller/setProperties instead
* `1D_TONEMAP_PARAM` - HDR10 tone-map parameters, uint16 x7: [luminance(100-4000), mastering_peak_1(100-10000), rolloff_1(0-100), peak_2, rolloff_2, peak_3, rolloff_3]; picture modes hdr_*
* `PTN_SINGLE_WINBOX_ATTR` - iTPG window pattern: fillR/G/B 0-1023, winId 0-9, width 100-7680, height 56-4320, startX 0-7579, startY 0-4263, programID 1
* `PTN_SINGLE_GRADATION_ATTR` - iTPG gradation bars: barId 0-3, strideSize 0-7680, startR/G/B 0-1023, stepR/G/B 0-512, programID 1
* `PTN_CTRL` - iTPG enable: enable 'true'/'false' (string on newer firmware, bool on older), numOfBox 0-10, ptnType 0 windowBoxes|1 gradationBarsVertical|2 gradationBarsHorizontal, programID 1

Other calibration-adjacent luna calls (alert trick): `com.webos.service.oledepl/setTemporalPeakControl {enable}`, `.../setGlobalStressReduction {enable}` (In-Start service menu), `com.webos.service.pqcontroller/setWhiteBalance {colorTemp:'cool|medium|warm', gain:[r,g,b], offset:[r,g,b]}`, `.../setProperties {dolbyCfgAlertReturn:'Update|Restore'}`. USB Dolby Vision config file `DolbyVision_UserDisplayConfiguration.txt`.

