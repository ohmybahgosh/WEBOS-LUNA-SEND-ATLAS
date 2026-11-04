# `com.webos.service.faultmanager`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getFaultDetectedStatus`](#getfaultdetectedstatus) | private |  | misc | Lists faults detected during the current boot (keyed by pid and faultTime) |

<a id="getfaultdetectedstatus"></a>
## `getFaultDetectedStatus`

`luna://com.webos.service.faultmanager/getFaultDetectedStatus`

Lists faults detected during the current boot (keyed by pid and faultTime)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.faultmanager/getFaultDetectedStatus '{}'
```

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/e2e/hc_e2e/steps/popups.py)
