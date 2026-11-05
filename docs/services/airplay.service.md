# `airplay.service`

Apple AirPlay and HomeKit integration: manages the AirPlay mirroring window, position and audio state, handles MFi authentication keys, and shows HomeKit settings pages. _(inferred from the service's methods)_

19 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeAppPosition`](#changeappposition) | public |  | media | inferred | Changes the app position. |
| [`changeAudioState`](#changeaudiostate) | public |  | audio | inferred | Changes the audio state. |
| [`changeWindowSize`](#changewindowsize) | public |  | media | inferred | Changes the window size. |
| [`changeWindowType`](#changewindowtype) | public |  | media | inferred | Changes the window type. |
| [`exit`](#exit) | public |  | media | inferred | Exits the airplay. |
| [`getAudioState`](#getaudiostate) | public |  | audio | inferred | Returns the audio state. |
| [`getStatus`](#getstatus) | public |  | media | inferred | Returns the status. |
| [`mfiKeyDownload`](#mfikeydownload) | private |  | media | inferred | Handles the mfi key download. |
| [`mfiKeyInfo`](#mfikeyinfo) | private |  | media | inferred | Handles the mfi key info. |
| [`mfiKeyVerify`](#mfikeyverify) | private |  | media | inferred | Handles the mfi key verify. |
| [`mfiKeyWrite`](#mfikeywrite) | private |  | media | inferred | Handles the mfi key write. |
| [`notifyMinimizedAppState`](#notifyminimizedappstate) | private |  | media | inferred | Notifies of the minimized app state. |
| [`notifyMirroringState`](#notifymirroringstate) | private |  | media | inferred | Notifies of the mirroring state. |
| [`reset`](#reset) | private |  | media | inferred | Resets the airplay. ⚠️ |
| [`setHomekitInfo`](#sethomekitinfo) | private |  | media | inferred | Sets the homekit info. |
| [`sharedKeyDelete`](#sharedkeydelete) | private |  | media | inferred | Handles the shared key delete. ⚠️ |
| [`showAirplayPage`](#showairplaypage) | public |  | media | inferred | Shows the airplay page. |
| [`showHomekitSettingPage`](#showhomekitsettingpage) | public |  | media | inferred | Shows the homekit setting page. |
| [`test`](#test) | public |  | media | inferred | Tests the airplay. |

<a id="changeappposition"></a>
## `changeAppPosition`

`luna://airplay.service/changeAppPosition`

Changes the app position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/changeAppPosition '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changeaudiostate"></a>
## `changeAudioState`

`luna://airplay.service/changeAudioState`

Changes the audio state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/changeAudioState '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changewindowsize"></a>
## `changeWindowSize`

`luna://airplay.service/changeWindowSize`

Changes the window size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/changeWindowSize '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changewindowtype"></a>
## `changeWindowType`

`luna://airplay.service/changeWindowType`

Changes the window type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/changeWindowType '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="exit"></a>
## `exit`

`luna://airplay.service/exit`

Exits the airplay.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/exit '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiostate"></a>
## `getAudioState`

`luna://airplay.service/getAudioState`

Returns the audio state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/getAudioState '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://airplay.service/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/getStatus '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mfikeydownload"></a>
## `mfiKeyDownload`

`luna://airplay.service/mfiKeyDownload`

Handles the mfi key download.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/mfiKeyDownload '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeyinfo"></a>
## `mfiKeyInfo`

`luna://airplay.service/mfiKeyInfo`

Handles the mfi key info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/mfiKeyInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeyverify"></a>
## `mfiKeyVerify`

`luna://airplay.service/mfiKeyVerify`

Handles the mfi key verify.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/mfiKeyVerify '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeywrite"></a>
## `mfiKeyWrite`

`luna://airplay.service/mfiKeyWrite`

Handles the mfi key write.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/mfiKeyWrite '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyminimizedappstate"></a>
## `notifyMinimizedAppState`

`luna://airplay.service/notifyMinimizedAppState`

Notifies of the minimized app state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/notifyMinimizedAppState '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifymirroringstate"></a>
## `notifyMirroringState`

`luna://airplay.service/notifyMirroringState`

Notifies of the mirroring state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/notifyMirroringState '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reset"></a>
## `reset` ⚠️ DANGEROUS

`luna://airplay.service/reset`

Resets the airplay.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/reset '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sethomekitinfo"></a>
## `setHomekitInfo`

`luna://airplay.service/setHomekitInfo`

Sets the homekit info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/setHomekitInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sharedkeydelete"></a>
## `sharedKeyDelete` ⚠️ DANGEROUS

`luna://airplay.service/sharedKeyDelete`

Handles the shared key delete.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/sharedKeyDelete '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="showairplaypage"></a>
## `showAirplayPage`

`luna://airplay.service/showAirplayPage`

Shows the airplay page.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/showAirplayPage '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showhomekitsettingpage"></a>
## `showHomekitSettingPage`

`luna://airplay.service/showHomekitSettingPage`

Shows the homekit setting page.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/showHomekitSettingPage '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://airplay.service/test`

Tests the airplay.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.service/test '{}'
```

> ACG groups: private, all, airplay.service, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
