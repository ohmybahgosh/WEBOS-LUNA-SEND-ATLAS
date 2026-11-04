# Picture

5 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.webos.service.pqcontroller/getInfo`](../services/com.webos.service.pqcontroller.md#getinfo) | private | Reads PQ info, e.g. ambient lux |
| [`luna://com.webos.service.pqcontroller/setProperties`](../services/com.webos.service.pqcontroller.md#setproperties) | private | Set picture-quality controller properties; used to trigger USB Dolby Vision config Update/Restore |
| [`luna://com.webos.service.pqcontroller/setWhiteBalance`](../services/com.webos.service.pqcontroller.md#setwhitebalance) | private | Set white balance in Ez-Adjust service menu ⚠️ |
| [`ssap://externalpq/getExternalPqData`](../services/ssap_externalpq.md#getexternalpqdata) | ssap | Read back calibration data |
| [`ssap://externalpq/setExternalPqData`](../services/ssap_externalpq.md#setexternalpqdata) | ssap | Calibration/picture-quality upload API (CalMAN/ColourSpace style): set 1D/3D LUTs, gamut matrices, UI values, tone-map, iTPG patterns |
