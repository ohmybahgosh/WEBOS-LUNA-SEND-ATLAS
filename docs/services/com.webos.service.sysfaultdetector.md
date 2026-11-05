# `com.webos.service.sysfaultdetector`

System fault detector exposing a single method that lists system-inspection information. Narrow diagnostic role. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`listSystemInspectionInfo`](#listsysteminspectioninfo) | private |  | misc | inferred | Lists the system inspection info. |

<a id="listsysteminspectioninfo"></a>
## `listSystemInspectionInfo`

`luna://com.webos.service.sysfaultdetector/listSystemInspectionInfo`

Lists the system inspection info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sysfaultdetector/listSystemInspectionInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
