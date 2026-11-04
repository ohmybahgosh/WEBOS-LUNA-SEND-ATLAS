# `com.palm.systemservice`

10 methods.  Platforms seen: HP webOS, Palm, all, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`deviceInfo/query`](#deviceinfo_query) | unknown |  | system-info | Returns device info keys |
| [`getPreferences`](#getpreferences) | private |  | system-info | Method on com.palm.systemservice (from on-device permission registry; parameters undocumented). |
| [`getPreferenceValues`](#getpreferencevalues) | private |  | system-info | Method on com.palm.systemservice (from on-device permission registry; parameters undocumented). |
| [`osInfo/query`](#osinfo_query) | public |  | system-info | Returns OS info keys such as webos_release, webos_manufacturing_version, device_name |
| [`setPreferences`](#setpreferences) | root |  | settings | Sets system preferences (wallpaper, airplaneMode) |
| [`time/getEffectiveBroadcastTime`](#time_geteffectivebroadcasttime) | private |  | tv-broadcast | Method on com.palm.systemservice (from on-device permission registry; parameters undocumented). |
| [`time/getSpecificLocalTime`](#time_getspecificlocaltime) | private |  | input | Method on com.palm.systemservice (from on-device permission registry; parameters undocumented). |
| [`time/getSystemTime`](#time_getsystemtime) | public | yes | system-info | Returns the system time; subscribable for timezone or >5 min time changes. |
| [`time/setSystemTime`](#time_setsystemtime) | private |  | input | Method on com.palm.systemservice (from on-device permission registry; parameters undocumented). |
| [`wallpaper/importWallpaper`](#wallpaper_importwallpaper) | root |  | ui | Imports an image as wallpaper |

<a id="deviceinfo_query"></a>
## `deviceInfo/query`

`luna://com.palm.systemservice/deviceInfo/query`

Returns device info keys

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `parameters` | string[] |

```sh
luna-send -n 1 luna://com.palm.systemservice/deviceInfo/query '{"parameters":[]}'
```

> Parameters unread.

Sources: [1](https://github.com/thebestbradley/webos-phoenix/blob/HEAD/apps/shared/luna/src/types.ts)

<a id="getpreferences"></a>
## `getPreferences`

`luna://com.palm.systemservice/getPreferences`

Method on com.palm.systemservice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.systemservice/getPreferences '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpreferencevalues"></a>
## `getPreferenceValues`

`luna://com.palm.systemservice/getPreferenceValues`

Method on com.palm.systemservice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.systemservice/getPreferenceValues '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="osinfo_query"></a>
## `osInfo/query`

`luna://com.palm.systemservice/osInfo/query`

Returns OS info keys such as webos_release, webos_manufacturing_version, device_name

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `parameters` | string[] |
| `subscribe` | boolean |

```sh
luna-send-pub -n 1 -f luna://com.palm.systemservice/osInfo/query '{"parameters":["device_name","webos_manufacturing_version","webos_release"]}'
```

> Alias com.webos.service.systemservice/osInfo/query also seen. deviceInfo/query exists under both.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts), [2](https://gist.github.com/Ircama/1f29c2d2def75da6604756a3c91a8ab4)

<a id="setpreferences"></a>
## `setPreferences`

`luna://com.palm.systemservice/setPreferences`

Sets system preferences (wallpaper, airplaneMode)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `wallpaper` | object {wallpaperName,wallpaperFile} |
| `airplaneMode` | boolean |

```sh
luna-send -n 1 palm://com.palm.systemservice/setPreferences '{"airplaneMode":true}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="time_geteffectivebroadcasttime"></a>
## `time/getEffectiveBroadcastTime`

`luna://com.palm.systemservice/time/getEffectiveBroadcastTime`

Method on com.palm.systemservice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.systemservice/time/getEffectiveBroadcastTime '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_getspecificlocaltime"></a>
## `time/getSpecificLocalTime`

`luna://com.palm.systemservice/time/getSpecificLocalTime`

Method on com.palm.systemservice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.systemservice/time/getSpecificLocalTime '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_getsystemtime"></a>
## `time/getSystemTime`

`luna://com.palm.systemservice/time/getSystemTime`

Returns the system time; subscribable for timezone or >5 min time changes.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.palm.systemservice/time/getSystemTime '{"subscribe":false}'
```

> Returns utc, localtime{year,month,day,hour,minute,second}, offset, timezone, TZ, timeZoneFile, NITZValid.

Sources: [1](https://webostv.developer.lge.com/develop/references/system-service)

<a id="time_setsystemtime"></a>
## `time/setSystemTime`

`luna://com.palm.systemservice/time/setSystemTime`

Method on com.palm.systemservice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.systemservice/time/setSystemTime '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wallpaper_importwallpaper"></a>
## `wallpaper/importWallpaper`

`luna://com.palm.systemservice/wallpaper/importWallpaper`

Imports an image as wallpaper

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `target` | string path |

```sh
luna-send -n 1 palm://com.palm.systemservice/wallpaper/importWallpaper '{"target":"/media/internal/wallpapers/your_file.jpg"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
