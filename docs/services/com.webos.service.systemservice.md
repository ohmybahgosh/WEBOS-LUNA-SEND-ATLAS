# `com.webos.service.systemservice`

Core system service: reads/sets the clock and time zone, queries device and OS info, manages preferences and ringtones, handles backup/restore, and performs factory-erase/wipe operations.

51 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`backup/postRestore`](#backup_postrestore) | public |  | system-info | documented | Restores the platform-specific environment settings from the dump file, previously created by the preBackup method call. Call this method af |
| [`backup/preBackup`](#backup_prebackup) | public |  | system-info | documented | The preBackup method creates dump files containing platform-specific environment settings. Call this method before executing the backup proc |
| [`clock/getTime`](#clock_gettime) | public |  | system-info | documented | The getTime method gets the current time for a specific time source. There are several time data sources on the system: Linux system time, u |
| [`clock/setTime`](#clock_settime) | public |  | system-info | documented | The setTime method is used to set the time. By calling this method you can update any time data source, including Linux system time, network |
| [`deviceInfo/query`](#deviceinfo_query) | public |  | system-info | documented | The query method to get the device system information such as product Id, system number, hardware information, Wi-FI address, battery status |
| [`EasLocalTime`](#easlocaltime) | unknown |  | system-info | documented | This object provides details of the EAS time structure. Example "standardDate": { "month": 12, "day": 3, "dayOfWeek": 2, "hour": 11, "minute |
| [`erase/EraseAll`](#erase_eraseall) | private |  | system-info | inferred | Erases the all (erase) ⚠️ |
| [`erase/EraseDeveloper`](#erase_erasedeveloper) | private |  | system-info | inferred | Erases the developer (erase) ⚠️ |
| [`erase/EraseMedia`](#erase_erasemedia) | private |  | media | inferred | Erases the media (erase) ⚠️ |
| [`erase/EraseVar`](#erase_erasevar) | private |  | system-info | inferred | Erases the var (erase) ⚠️ |
| [`erase/Wipe`](#erase_wipe) | private |  | system-info | inferred | Handles the wipe (erase) ⚠️ |
| [`getPreferences`](#getpreferences) | public | yes | system-info | documented | The getPreferences method retrieves the values for keys specified in a passed array. If subscribe is set to true, then getPreferences sends  |
| [`getPreferenceValues`](#getpreferencevalues) | public |  | system-info | documented | Retrieves a list of valid values for the specified key. If the key is of a type that takes one of a discrete set of valid values, it returns |
| [`ImageConversionResult`](#imageconversionresult) | unknown |  | system-info | documented | Contains details of the converted image. Example { "src": "/usr/lib/luna/system/luna-systemui/images/opensearch-small-icon.png", "dest": "/t |
| [`LocalTime`](#localtime) | unknown |  | system-info | documented | This object provides details of the current system time. Example "localtime": { "month": 12, "day": 16, "hour": 11, "minute": 0, "year": 201 |
| [`osInfo/query`](#osinfo_query) | public |  | system-info | documented | The query method returns operating system information. This method may be used to display the operating system version, API version, build n |
| [`ringtone/addRingtone`](#ringtone_addringtone) | public |  | system-info | documented | Adds a new ringtone on devices that use ringtones. Note: This method is public. It can be used both by the system and third-party applicatio |
| [`ringtone/deleteRingtone`](#ringtone_deleteringtone) | public |  | system-info | documented | Deletes a ringtone. Note: This method is public. It can be used both by the system and third-party applications. |
| [`setPreferences`](#setpreferences) | public |  | system-info | documented | The setPreferences method sets preference keys to specified values. The values are specified by pair: key - value in JSON format. See the ex |
| [`softwareInfo/query`](#softwareinfo_query) | public |  | system-info | documented | Returns details of software deployed on the webOS device. Note: Currently, returns only the nodejs version. |
| [`time/convertDate`](#time_convertdate) | public |  | system-info | documented | The convertDate method converts the given date from one timezone to another. |
| [`time/getBroadcastTime`](#time_getbroadcasttime) | public |  | system-info | documented | The getBroadcastTime method returns the broadcast time. |
| [`time/getCurrentTimeZoneByLocale`](#time_getcurrenttimezonebylocale) | public |  | system-info | documented | Returns the locale info matching the requested locale settings. In particular, the name of the city is returned on the language for which th |
| [`time/getEffectiveBroadcastTime`](#time_geteffectivebroadcasttime) | public | yes | system-info | documented | Returns the effective broadcast time. If no broadcast time info update has been received since boot, the Linux system-wide time is returned. |
| [`time/getNTPTime`](#time_getntptime) | public |  | system-info | documented | The getNTPTime returns the fresh NTP time (the time data transferred by the Network Time Protocol). |
| [`time/getSpecificLocalTime`](#time_getspecificlocaltime) | public |  | input | inferred | Returns the specific local time (time) |
| [`time/getSystemTime`](#time_getsystemtime) | public | yes | system-info | documented | The time/getSystemTime method gets the system time and time zone information. Apps can susbcribe to this method and receive notifications wh |
| [`time/getSystemTimezoneFile`](#time_getsystemtimezonefile) | public |  | system-info | documented | Returns the path to Linux time-zone information file for the currently set zone. This file contains the list of rules that define switching  |
| [`time/getSystemUptime`](#time_getsystemuptime) | public |  | system-info | documented | Returns the number of seconds since the last system boot. This method uses the Linux-specific sysinfo function. |
| [`time/launchTimeChangeApps`](#time_launchtimechangeapps) | public |  | system-info | documented | Executes all methods listed in the timeChangeLaunch list (value of the timeChangeLaunch preference). The timeChangeLaunch list contains all  |
| [`time/micomSynchronized`](#time_micomsynchronized) | private |  | input | inferred | Handles the MICOM synchronized (time) |
| [`time/setAdminTime`](#time_setadmintime) | private |  | input | inferred | Sets the admin time (time) |
| [`time/setBroadcastTime`](#time_setbroadcasttime) | public |  | system-info | documented | Sets the broadcast time which is in the broadcast signal. The system service will be notified that the broadcast time must be changed. |
| [`time/setSystemNetworkTime`](#time_setsystemnetworktime) | public |  | system-info | documented | The setSystemNetworkTime method is used to send a NITZ messages to Luna System Service. A NITZ message contains the local time and date, tim |
| [`time/setSystemTime`](#time_setsystemtime) | public |  | system-info | documented | The setSystemTime method sets the Linux system-wide time effectively overriding any previous synchronization with any time source. Note: thi |
| [`time/setTimeChangeLaunch`](#time_settimechangelaunch) | public |  | system-info | documented | The setTimeChangeLaunch method adds an application to, or removes it from the timeChangeLaunch list. The timeChangeLaunch list contains the  |
| [`time/setTimeWithNTP`](#time_settimewithntp) | public |  | system-info | documented | The setTimeWithNTP methods synchronizes the system time with the NTP. Note: This method call always succeeds. |
| [`TimeSourceOffset`](#timesourceoffset) | unknown |  | system-info | documented | Details about the offset from one of the time-sources. Example "offset": { "source": "system", "value": 0 } |
| [`Timestamp`](#timestamp) | unknown |  | system-info | documented | Contains details of the timestamp. |
| [`timezone/createTimeZoneFromEasData`](#timezone_createtimezonefromeasdata) | public |  | system-info | documented | Create a manual timezone named " Etc/Manual " and specify details of this timezone. After creating the timezone, enable it by using the foll |
| [`timezone/getTimeZoneDataVersion`](#timezone_gettimezonedataversion) | public |  | input | inferred | Returns the time zone data version (timezone) |
| [`timezone/getTimeZoneFromEasData`](#timezone_gettimezonefromeasdata) | public |  | system-info | documented | Gets the time-zone that matches the provided EAS data. This method enables you to determine the time zone by the specified time stamp. |
| [`timezone/getTimeZoneRules`](#timezone_gettimezonerules) | public |  | system-info | documented | The getTimeZoneRules method requests rules for specific time-zone for the specified years. By calling this method you can get the rules of w |
| [`TimeZoneEasRule`](#timezoneeasrule) | unknown |  | system-info | documented | Provides details of structure for creating a timezone rule. Example { "year": 2016, "month": 10, "dayOfWeek": 0, "week": 3, "hour": 2 } |
| [`TimeZoneRule`](#timezonerule) | unknown |  | system-info | documented | Contains the rule to be used when DST(daylight saving time) is enabled for a particular zone. Example { "tz": "Europe/Helsinki", "dstOffset" |
| [`Wallpaper`](#wallpaper) | unknown |  | system-info | documented | Example "wallpaper": { "wallpaperName": "flowers.png", "wallpaperFile": "\/media\/internal\/.wallpapers\/flowers.png", "wallpaperThumbFile": |
| [`wallpaper/convert`](#wallpaper_convert) | public |  | system-info | documented | The convert method converts an image. The type, scaling and centering of the image may be changed. If the resulting image is smaller than th |
| [`wallpaper/deleteWallpaper`](#wallpaper_deletewallpaper) | public |  | system-info | documented | The deleteWallpaper method deletes the specified wallpaper from the list of available wallpapers on the device. |
| [`wallpaper/importWallpaper`](#wallpaper_importwallpaper) | public |  | system-info | documented | The importWallpaper method is used to convert the specified image into a device wallpaper. To convert into a wallpaper the image is either r |
| [`wallpaper/info`](#wallpaper_info) | public |  | system-info | documented | The info method retrieves a wallpaper object using either the wallpaperName or wallpaperFile parameter. |
| [`wallpaper/refresh`](#wallpaper_refresh) | public |  | system-info | documented | The refresh method refreshes the internal list of available wallpapers. Under normal circumstances, there is no need to call refresh directl |

<a id="backup_postrestore"></a>
## `backup/postRestore`

`luna://com.webos.service.systemservice/backup/postRestore`

Restores the platform-specific environment settings from the dump file, previously created by the preBackup method call. Call this method after executing the restore procedure in order to restore platform-specific settings. The dump files are saved into the directory specified by the temp_dir parameter. This method is internal, only system applications can use it. It is not available to third-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `tempDir` | String (required) Directory to store temporarily generated files (files that are to be restored). |
| `files` | string array (required) List of files to restore. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/backup/postRestore '{ "tempDir": "/tmp/", "files": ["/var/luna/preferences/systemprefs_backup.db"] }
```

> ACG: systemsettings.management \| Returns: returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="backup_prebackup"></a>
## `backup/preBackup`

`luna://com.webos.service.systemservice/backup/preBackup`

The preBackup method creates dump files containing platform-specific environment settings. Call this method before executing the backup procedure in order to save these settings. The dump files are saved into the directory specified by the temp_dir parameter or '${localstatedir}/preferences' . The list of the platform-specific settings that are saved in the dump file is specified in the sysservice-backupkeys.json file. Below is an example of this file: [ "useNetworkTime", "useNetworkTimeZone", "timeZone", "timeChangeLaunch", "showcontactmatch", "x_webos_virtualkeyboard_prefs" ] If any of the method parameters is not specified or specified incorrectly, the method will use the default values. This method is internal, only system applications can use it. It is not available to third-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `incrementalKey` | object (optional) This is used primarily for mojodb, backup service will handle other incremental backups. |
| `maxTempBytes` | number (optional) The allowed size of upload. It is currently set at 10MB. |
| `tempDir` | String (optional) Directory to store temporarily generated files. |

**Returns:**

| Field | Type / notes |
|---|---|
| `description` | String (required) Describes the backup. |
| `version` | String (required) Version of the backup. |
| `files` | string array (required) List of files included in the backup. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/backup/preBackup '{}
```

> ACG: systemsettings.management \| Returns: description:String; version:String; files:string array \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="clock_gettime"></a>
## `clock/getTime`

`luna://com.webos.service.systemservice/clock/getTime`

The getTime method gets the current time for a specific time source. There are several time data sources on the system: Linux system time, user time, network-broadcast time and more. When calling this method, you can specify the desired time data source in the source parameter. The complete list of the data sources is listed in the source parameter description below. Any application can use this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (optional) Time-source to access (default "system") Supported sources: system - Linux system-wide time (always available) manual - Last time set manually by user sdp - time received with session initialization to server (ex. device membership registration) ntp - time periodically or by request received from NTP (Network Time Protocol) service nitz - time received over NITZ (Network Identity |
| `manualOverride` | Boolean (optional) If manualOverride set to false means that source shouldn't be overriden by manual time when useNetworkTime is turned to false (use the time user specified manually). If useNetworkTime is set to false and manualOverride is set to true , get time specified in source parameter. If useNetworkTime is set to false and manualOverride is set to false , ignore the time in the source para |
| `fallback` | String (optional) Fall-back time source to use when requested one is missing. If not set and time-source specified in "source" is missing request will fail (unless overridden by manual time). |

**Returns:**

| Field | Type / notes |
|---|---|
| `source` | String (required) Actual time source associated with result (either one specified in source or in fallback or manual if overridden). |
| `utc` | Number (optional) Seconds since epoch for UTC. |
| `offset` | Object: TimeSourceOffset (optional) Offset from some other time source (usually from system). |
| `systemTimeSource` | String (optional) If system-wide system time is returned and this field is present, it will denote last time source used for system time synchronization. |
| `priority` | Number (optional) Priority of returned time source (with higher level overrides one with lower). |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/clock/getTime '{}
```

> ACG: time.query \| Returns: returnValue:Boolean; source:String; utc:Number; offset:Object: TimeSourceOffset; systemTimeSource:String; priority:Number; timestamp:Object: Timestamp; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="clock_settime"></a>
## `clock/setTime`

`luna://com.webos.service.systemservice/clock/setTime`

The setTime method is used to set the time. By calling this method you can update any time data source, including Linux system time, network-broadcasted time, user time and others. Any application can use this method. After this method is called, the system services receives a notification about the time update.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `utc` | Number (required) Seconds since epoch in UTC time-zone. Note: Either utc field or available field is mandatory. |
| `source` | String (optional) Time source associated with time info update (default "manual"). Only those sources that are listed in the timeSources Preference key can be set. |
| `available` | Boolean (required) Availability flag. Set to false to specify that source is not available. Note: Either available field or utc field is mandatory. |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to utc field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `errorCode` | Number (optional) Error Code Number |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/clock/setTime '{"utc":1448556562}
```

> ACG: time.management,systemsettings.management \| Returns: returnValue:Boolean; errorText:String; errorCode:Number \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="deviceinfo_query"></a>
## `deviceInfo/query`

`luna://com.webos.service.systemservice/deviceInfo/query`

The query method to get the device system information such as product Id, system number, hardware information, Wi-FI address, battery status and others. Please refer to the return values table below for a complete list of the system parameters. Note: This method must not be used by 3rd-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `parameters` | String array (optional) List of requested parameters. If not specified, all available parameters wiil be returned. Accepted parameters: battery_challange keyboard_type board_type product_id serial_number installer storage_size modem_present hardware_id ram_size hardware_revision wired_addr wifi_addr last_reset_type radio_type storage_free battery_response device_name nduid bt_addr device_id |

**Returns:**

| Field | Type / notes |
|---|---|
| `battery\_challange` | String (optional) Battery challenge. Currently, the " not supported" value is always returned. Note: There is a typo in the parameter name. Use the spelling as given in this table. |
| `keyboard\_type` | String (optional) Refers to the keyboard built into the device. Example: virtual |
| `board\_type` | String (optional) Board type. |
| `product\_id` | String (optional) Product ID. |
| `serial\_number` | String (optional) Serial number. |
| `installer` | String (optional) Tool used to install the image. Currently, the " not supported" value is always returned. |
| `storage\_size` | String (optional) Storage size. |
| `modem\_present` | String (optional) Modem availability. Note: This parameter is "not supported", even though the response shows this value as "N" to indicate modem is not present. |
| `hardware\_id` | String (optional) Hardware ID. |
| `ram\_size` | String (optional) RAM size. |
| `hardware\_revision` | String (optional) Hardware revision. |
| `wired\_addr` | String (optional) Wired/Ethernet MAC address. |
| `wifi\_addr` | String (optional) WiFi MAC address. |
| `last\_reset\_type` | String (optional) Reason code for last reboot (may come from /proc/cmdline). Currently, the " not supported" value is always returned. |
| `radio\_type` | String (optional) Internal ID code for the radio type. Currently, the " not supported" value is always returned. |
| `storage\_free` | String (optional) Free storage size. Currently, the " not supported" value is always returned. |
| `battery\_response` | String (optional) Battery response. Currently, the " not supported" value is always returned. |
| `device\_name` | String (optional) Device name. |
| `nduid` | String (optional) NDUID. |
| `bt\_addr` | String (optional) Bluetooth address. |
| `device\_id` | String (optional) ID for uniquely identifying the device |
| `errorCode` | Number (optional) The error code for the failed operation. Note:If the method fails, the errorText is always returned but the errorCode is returned only for specific errors.. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/deviceInfo/query '{}
```

> ACG: systemsettings.query \| Returns: battery_challange:String; keyboard_type:String; board_type:String; product_id:String; serial_number:String; installer:String; storage_size:String; modem_present:String; hardware_id:String; ram_size:String; hardware_revision:String; wired_addr:String; wifi_addr:String; returnValue:Boolean; last_reset_type:String; radio_type:String; storage_free:String; battery_response:String; device_name:String; nduid:String; bt_addr:String; device_id:String; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="easlocaltime"></a>
## `EasLocalTime`

`luna://com.webos.service.systemservice/EasLocalTime`

This object provides details of the EAS time structure. Example "standardDate": { "month": 12, "day": 3, "dayOfWeek": 2, "hour": 11, "minute": 0, "year": 2014, "second": 38 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/EasLocalTime '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="erase_eraseall"></a>
## `erase/EraseAll` ⚠️ DANGEROUS

`luna://com.webos.service.systemservice/erase/EraseAll`

Erases the all (erase)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/erase/EraseAll '{}'
```

> ACG groups: settings, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="erase_erasedeveloper"></a>
## `erase/EraseDeveloper` ⚠️ DANGEROUS

`luna://com.webos.service.systemservice/erase/EraseDeveloper`

Erases the developer (erase)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/erase/EraseDeveloper '{}'
```

> ACG groups: settings, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="erase_erasemedia"></a>
## `erase/EraseMedia` ⚠️ DANGEROUS

`luna://com.webos.service.systemservice/erase/EraseMedia`

Erases the media (erase)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/erase/EraseMedia '{}'
```

> ACG groups: settings, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="erase_erasevar"></a>
## `erase/EraseVar` ⚠️ DANGEROUS

`luna://com.webos.service.systemservice/erase/EraseVar`

Erases the var (erase)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/erase/EraseVar '{}'
```

> ACG groups: settings, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="erase_wipe"></a>
## `erase/Wipe` ⚠️ DANGEROUS

`luna://com.webos.service.systemservice/erase/Wipe`

Handles the wipe (erase)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/erase/Wipe '{}'
```

> ACG groups: settings, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpreferences"></a>
## `getPreferences`

`luna://com.webos.service.systemservice/getPreferences`

The getPreferences method retrieves the values for keys specified in a passed array. If subscribe is set to true, then getPreferences sends an update if the key values change. This method queries system preference values and custom user values.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) If subscribe is set to true, then getPreferences sends an update if the key values have changed. |
| `keys` | string array (required) An array of key names. A key is a system preference or custom user key (see overview of this API for details). Accepted key names: locale region ringtone useNetworkTime useNetworkTimeZone timeZone timeFormat timeChangeLaunch timeDriftPeriodHr wallpaper |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/getPreferences '{"keys": ["locale"]}
```

> ACG: systemsettings.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="getpreferencevalues"></a>
## `getPreferenceValues`

`luna://com.webos.service.systemservice/getPreferenceValues`

Retrieves a list of valid values for the specified key. If the key is of a type that takes one of a discrete set of valid values, it returns that set. Otherwise, it returns nothing for the key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Key name to fetch preference values for. Accepted key names: locale region ringtone useNetworkTime useNetworkTimeZone timeZone timeFormat wallpaper |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `\[key name\]` | Any array (optional) Contains the set returned for the specified key name in command parameters. |
| `syszones` | Any array (optional) Provides ZoneID with the respective time offset for different time zones. |
| `mccInfo` | Any array (optional) Provides a 3 digit mobile country code \[mcc\], which signifies details of the region. Example: "mcc" : 460. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/getPreferenceValues '{"key": "useNetworkTime" }
```

> ACG: systemsettings.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; [key name]:Any array; syszones:Any array; mccInfo:Any array \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="imageconversionresult"></a>
## `ImageConversionResult`

`luna://com.webos.service.systemservice/ImageConversionResult`

Contains details of the converted image. Example { "src": "/usr/lib/luna/system/luna-systemui/images/opensearch-small-icon.png", "dest": "/tmp/convertedimage.png", "destType": "jpg" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/ImageConversionResult '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="localtime"></a>
## `LocalTime`

`luna://com.webos.service.systemservice/LocalTime`

This object provides details of the current system time. Example "localtime": { "month": 12, "day": 16, "hour": 11, "minute": 0, "year": 2014, "second": 38 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/LocalTime '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="osinfo_query"></a>
## `osInfo/query`

`luna://com.webos.service.systemservice/osInfo/query`

The query method returns operating system information. This method may be used to display the operating system version, API version, build name and date and so on. This method is available for both internal and third-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `parameters` | String array (optional) List of requested parameters. If not specified, all available parameters will be returned. The available parameters are those listed under the Name column under the Return section below (with the exception of errorCode and errorText ). |

**Returns:**

| Field | Type / notes |
|---|---|
| `core\_os\_kernel\_version` | String (optional) Core OS kernel version info |
| `core\_os\_name` | String (optional) Core OS name |
| `core\_os\_release` | String (optional) Core OS release info |
| `core\_os\_release\_codename` | String (optional) Core OS release codename |
| `webos\_build\_datetime` | String (optional) The UTC timestamp reflecting when the current image was built. The string is in the format "YYYYMMDDhhmmss". |
| `webos\_build\_id` | String (optional) webOS build ID |
| `webos\_imagename` | String (optional) webOS imagename |
| `webos\_name` | String (optional) webOS name |
| `webos\_prerelease` | String (optional) webOS prerelease info |
| `webos\_release` | String (optional) webOS release info |
| `webos\_release\_codename` | String (optional) webOS release codename |
| `webos\_manufacturing\_version` | String (optional) webOS manufacting version |
| `encryption\_key\_type` | String (optional) Encryption key type |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/osInfo/query '{ "parameters":[ "webos_name", "webos_release", "webos_build_id" ] }
```

> ACG: systemsettings.query \| Returns: core_os_kernel_version:String; core_os_name:String; core_os_release:String; core_os_release_codename:String; webos_build_datetime:String; webos_build_id:String; webos_imagename:String; webos_name:String; webos_prerelease:String; webos_release:String; webos_release_codename:String; webos_manufacturing_version:String; encryption_key_type:String; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="ringtone_addringtone"></a>
## `ringtone/addRingtone`

`luna://com.webos.service.systemservice/ringtone/addRingtone`

Adds a new ringtone on devices that use ringtones. Note: This method is public. It can be used both by the system and third-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `filePath` | String (required) Absolute path to the ringtone file. Note: The ringtone file needs to be copied manually to the target prior to using this API |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/ringtone/addRingtone '{"filePath": "/usr/palm/sounds/ringtone.mp3" }
```

> ACG: systemsettings.management \| Returns: returnValue:Boolean \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="ringtone_deleteringtone"></a>
## `ringtone/deleteRingtone`

`luna://com.webos.service.systemservice/ringtone/deleteRingtone`

Deletes a ringtone. Note: This method is public. It can be used both by the system and third-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `filePath` | String (required) Absolute path to the ringtone file. The directory must be given only as "/media/internal/ringtones/" Note: The ringtone file needs to be added via addRingtone API prior to using this API. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/ringtone/deleteRingtone '{"filePath": "/media/internal/ringtones/ringtone.mp3" }
```

> ACG: systemsettings.management \| Returns: returnValue:Boolean \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="setpreferences"></a>
## `setPreferences`

`luna://com.webos.service.systemservice/setPreferences`

The setPreferences method sets preference keys to specified values. The values are specified by pair: key - value in JSON format. See the example below. Note: This method is public. It can be used both by the system and third-party applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `param208` | Object (optional) Each such param represents a key-value pair of preference name and its value. Existing key values are: locale region ringtone useNetworkTime useNetworkTimeZone timeZone timeFormat timeDriftPeriodHr wallpaper New key will be created if any other key is specified. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/setPreferences '{ "timeZone": {"ZoneID":"Europe/Kiev"}, "timeFormat": "HH12" }
```

> ACG: systemsettings.management \| Returns: returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="softwareinfo_query"></a>
## `softwareInfo/query`

`luna://com.webos.service.systemservice/softwareInfo/query`

Returns details of software deployed on the webOS device. Note: Currently, returns only the nodejs version.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 15+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `parameters` | String array (optional) List of requested parameters. Possible values: nodejs_versions Note: If no value is specified, all available parameters are returned: |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |
| `nodejs\_versions` | String array (optional) Versions of nodejs that are available on the webOS device. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/softwareInfo/query '{ "parameters":[ "nodejs_versions" ] }
```

> ACG: software.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; nodejs_versions:String array \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_convertdate"></a>
## `time/convertDate`

`luna://com.webos.service.systemservice/time/convertDate`

The convertDate method converts the given date from one timezone to another.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `date` | String (required) Date to convert as a string in format: "Y-m-d H:M:S". |
| `source_tz` | String (required) Source timezone. |
| `dest_tz` | String (required) Destination timezone. |

**Returns:**

| Field | Type / notes |
|---|---|
| `date` | String (required) The date in the destination timezone if the call was successful. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/convertDate '{ "date": "1982-12-06 17:25:33", "source_tz": "America/Los_Angeles", "dest_tz":"America/New_York" }'
```

> ACG: time.management \| Returns: date:String; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_getbroadcasttime"></a>
## `time/getBroadcastTime`

`luna://com.webos.service.systemservice/time/getBroadcastTime`

The getBroadcastTime method returns the broadcast time.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `utc` | Number (required) Seconds since epoch for UTC time-zone |
| `local` | Number (optional) Seconds since epoch with offset according to broadcast regional offsets table |
| `localtime` | Object: LocalTime (optional) Calendar representation of local time |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getBroadcastTime '{}
```

> ACG: time.query \| Returns: utc:Number; local:Number; localtime:Object: LocalTime; timestamp:Object: Timestamp; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_getcurrenttimezonebylocale"></a>
## `time/getCurrentTimeZoneByLocale`

`luna://com.webos.service.systemservice/time/getCurrentTimeZoneByLocale`

Returns the locale info matching the requested locale settings. In particular, the name of the city is returned on the language for which the code is specified in the locale request parameter.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `locale` | String (required) Requested locale code. For example: "en" - English, "de" - German, "ko" - Korean. Note: If an invalid locale code is specified, the method returns default time zone locale data. |

**Returns:**

| Field | Type / notes |
|---|---|
| `timeZone` | Object: TimeZone (required) Timezone matching the given parameters. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getCurrentTimeZoneByLocale '{"locale":"ko"}
```

> ACG: time.query \| Returns: timeZone:Object: TimeZone; returnValue:Boolean \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_geteffectivebroadcasttime"></a>
## `time/getEffectiveBroadcastTime`

`luna://com.webos.service.systemservice/time/getEffectiveBroadcastTime`

Returns the effective broadcast time. If no broadcast time info update has been received since boot, the Linux system-wide time is returned.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: true - Get notifications false - Notifications are not required ​ Default value: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `adjustedUtc` | Number (required) Seconds since epoch suitable for converting from UTC to local time which corresponds with appropriate broadcast regional offset table entry |
| `local` | Number (required) Seconds since epoch with offset according to broadcast regional offsets table |
| `localtime` | Object: LocalTime (optional) Calendar representation of local time. |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `systemTimeSource` | String (optional) Time source used for last system time synchronization. Note: This field is only provided when the systemTime feature is configured. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getEffectiveBroadcastTime '{}
```

> ACG: time.query \| Returns: subscribed:Boolean; adjustedUtc:Number; local:Number; localtime:Object: LocalTime; timestamp:Object: Timestamp; returnValue:Boolean; errorCode:Number; errorText:String; systemTimeSource:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_getntptime"></a>
## `time/getNTPTime`

`luna://com.webos.service.systemservice/time/getNTPTime`

The getNTPTime returns the fresh NTP time (the time data transferred by the Network Time Protocol).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `utc` | Number (optional) Seconds since epoch for UTC time-zone |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getNTPTime '{ }
```

> ACG: time.query \| Returns: utc:Number; subscribed:Boolean; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_getspecificlocaltime"></a>
## `time/getSpecificLocalTime`

`luna://com.webos.service.systemservice/time/getSpecificLocalTime`

Returns the specific local time (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getSpecificLocalTime '{}'
```

> ACG groups: public, settings, time.query, private, time, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="time_getsystemtime"></a>
## `time/getSystemTime`

`luna://com.webos.service.systemservice/time/getSystemTime`

The time/getSystemTime method gets the system time and time zone information. Apps can susbcribe to this method and receive notifications when the time zone changes and/or the system time changes by a significant amount (currently 5 min.). This method does not generate errors, however if the LSSubscriptionAdd method, which is used inside the getSystemTime method, returns an error, this error is reported.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) If the app wants to receive notifications when the time zone changes and/or the system time changes by a system-defined threshold, it should set subscribe to true. The current system-defined threshold is 5 minutes. If the app does not wish to receive notifications of change in time zone and/or the system time changes, it should set subscribe ​ to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `isDST` | Boolean (optional) Indicates whether the system is currently using Daylight Saving Time (DST). The possible values: - True- System is using DST - False - System is not using DST Note: This field is not provided if the DST information is not available. |
| `localtime` | Object: LocalTime (required) The object that contains information about the current system time. |
| `offset` | Number (required) The number of minutes from UTC. This can be negative for time zones west of UTC, and positive for time zones east of UTC. |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp |
| `timezone` | String (required) The current system time zone. It has the same format as the TZ environment variable. For information, see http://www.gnu.org/software/libc/manual/html\_node/TZ-Variable.html |
| `timeZoneFile` | String (required) Linux zone information file for the currently set zone. For more information, see: http://linux.die.net/man/5/tzfile |
| `TZ` | String (required) Contains the time zone abbreviation in the standard Unix format, for example PDT (which stands for Pacific Daylight Time). The time zone corresponds to the current time zone of the system. |
| `utc` | Number (required) The number of milliseconds since Epoch (midnight of January 1, 1970 UTC), also know as the Unix time. |
| `systemTimeSource` | String (required) It will denote the time source used for system time synchronization. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getSystemTime '{}
```

> ACG: time.query \| Returns: errorCode:Number; errorText:String; isDST:Boolean; localtime:Object: LocalTime; offset:Number; returnValue:Boolean; subscribed:Boolean; timestamp:Object: Timestamp; timezone:String; timeZoneFile:String; TZ:String; utc:Number; systemTimeSource:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_getsystemtimezonefile"></a>
## `time/getSystemTimezoneFile`

`luna://com.webos.service.systemservice/time/getSystemTimezoneFile`

Returns the path to Linux time-zone information file for the currently set zone. This file contains the list of rules that define switching to and from daylight saving time. In particular, the time-zone information file defines when the time shift occurs in each particular year. Note: A call to this method always succeeds. This method does not return returnValue.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `timeZoneFile` | String (required) Path to the system timezone file. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getSystemTimezoneFile '{}
```

> ACG: time.query \| Returns: subscribed:String; timeZoneFile:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_getsystemuptime"></a>
## `time/getSystemUptime`

`luna://com.webos.service.systemservice/time/getSystemUptime`

Returns the number of seconds since the last system boot. This method uses the Linux-specific sysinfo function.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. It contains the POSIX errno value. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `uptime` | Number (optional) Number of seconds since last system boot. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/getSystemUptime '{}
```

> ACG: time.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; uptime:Number \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_launchtimechangeapps"></a>
## `time/launchTimeChangeApps`

`luna://com.webos.service.systemservice/time/launchTimeChangeApps`

Executes all methods listed in the timeChangeLaunch list (value of the timeChangeLaunch preference). The timeChangeLaunch list contains all applications that must be executed when the switching to/from the daylight saving time occurs. These applications are executed automatically, you should not call the launchTimeChangeApps method. However, if for some reason you need to execute these applications apart from the schedule, you can call the the launchTimeChangeApps method. Note: This method call always succeeds.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/launchTimeChangeApps '{}
```

> ACG: time.management \| Returns: subscribed:String; returnValue:Boolean \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_micomsynchronized"></a>
## `time/micomSynchronized`

`luna://com.webos.service.systemservice/time/micomSynchronized`

Handles the MICOM synchronized (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/micomSynchronized '{}'
```

> ACG groups: settings, private, time, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="time_setadmintime"></a>
## `time/setAdminTime`

`luna://com.webos.service.systemservice/time/setAdminTime`

Sets the admin time (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/setAdminTime '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_setbroadcasttime"></a>
## `time/setBroadcastTime`

`luna://com.webos.service.systemservice/time/setBroadcastTime`

Sets the broadcast time which is in the broadcast signal. The system service will be notified that the broadcast time must be changed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `utc` | Number (required) UTC time in seconds since epoch. |
| `local` | Number (required) Seconds since epoch with local time offset (according to broadcast regional offsets table). |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to utc field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/setBroadcastTime '{"utc": 1418745990, "local": 1418727638 }
```

> ACG: time.management \| Returns: returnValue:Number; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_setsystemnetworktime"></a>
## `time/setSystemNetworkTime`

`luna://com.webos.service.systemservice/time/setSystemNetworkTime`

The setSystemNetworkTime method is used to send a NITZ messages to Luna System Service. A NITZ message contains the local time and date, time zone and DST offset, as well as network provider identity. NITZ can be used to update the system clock of network devices. This method is called by the service, which receives the time data from the service provider.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sec` | String (required) GMT second. |
| `min` | String (required) GMT minute. |
| `hour` | String (required) GMT hour. |
| `mday` | String (required) Day of the month. |
| `mon` | String (required) Month of the year, 0 - 11. |
| `year` | String (required) Year calculated from 1900, for example 2012 - 1900 = 112. |
| `offset` | String (required) Offset from GMT time in minutes. |
| `mcc` | String (required) Country code. |
| `mnc` | String (required) Network code assign to carrier within a country |
| `tzvalid` | Boolean (required) Is set to true of if timezone is valid. If false, mcc and offset are used to calculate time. |
| `timevalid` | Boolean (required) Is time valid. |
| `dstvalid` | Boolean (required) Is daylight saving time in use. |
| `dst` | Number (int32_t) (required) If this is 1, month needs to be set within the timeframe of DaylightSavingTime (~April - ~Septermber). If this is 0, months needs to be specified outside of DaylightSavingTime ( ~November - February). |
| `timestamp` | String (required) Timestamp of current time. Can be number of ticks from system boot. The number is used to calculate delay of message delivery |
| `tilIgnore` | Boolean (required) Set as true if you wish to test this service with a fake NITZ message. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -f -n 1 luna://com.webos.service.systemservice/time/setSystemNetworkTime '{ "sec":"30", "min":"15", "offset":"-480", "hour":"2", "dst":1, "tzvalid":true, "dstvalid":true, "mon":"6", "year":"111", "timevalid":true, "mday":"1", "mcc":"310", "mnc":"26", "tilIgnore":true, "timestamp":"123" }
```

> ACG: time.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_setsystemtime"></a>
## `time/setSystemTime`

`luna://com.webos.service.systemservice/time/setSystemTime`

The setSystemTime method sets the Linux system-wide time effectively overriding any previous synchronization with any time source. Note: this API might not change system time returned by getSystemTime . It depends on manualOverride and useNetworkTime preferences.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `utc` | Number (required) The number of milliseconds since Epoch (midnight of January 1, 1970 UTC), aka - Unix time. |
| `timestamp` | Object: Timestamp (optional) Monotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to the utc field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/setSystemTime '{"utc": 1418745990 }
```

> ACG: time.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_settimechangelaunch"></a>
## `time/setTimeChangeLaunch`

`luna://com.webos.service.systemservice/time/setTimeChangeLaunch`

The setTimeChangeLaunch method adds an application to, or removes it from the timeChangeLaunch list. The timeChangeLaunch list contains the applications that are automatically executed by the system when the switch to or from the daylight saving time occurs.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Application ID. |
| `active` | Boolean (required) If true, adds the application to the launch list. If false, the application is removed. |
| `parameters` | Object (required) Launch parameters for the application. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/setTimeChangeLaunch '{ "appId": "com.webos.app.someApp", "active": true, "parameters": { "param1": "foo", "param2": "bar" } }
```

> ACG: time.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="time_settimewithntp"></a>
## `time/setTimeWithNTP`

`luna://com.webos.service.systemservice/time/setTimeWithNTP`

The setTimeWithNTP methods synchronizes the system time with the NTP. Note: This method call always succeeds.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/time/setTimeWithNTP '{}
```

> ACG: time.management \| Returns: returnValue:Boolean \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timesourceoffset"></a>
## `TimeSourceOffset`

`luna://com.webos.service.systemservice/TimeSourceOffset`

Details about the offset from one of the time-sources. Example "offset": { "source": "system", "value": 0 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/TimeSourceOffset '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timestamp"></a>
## `Timestamp`

`luna://com.webos.service.systemservice/Timestamp`

Contains details of the timestamp.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/Timestamp '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timezone_createtimezonefromeasdata"></a>
## `timezone/createTimeZoneFromEasData`

`luna://com.webos.service.systemservice/timezone/createTimeZoneFromEasData`

Create a manual timezone named " Etc/Manual " and specify details of this timezone. After creating the timezone, enable it by using the following command: luna-send -n 1 -f luna://com.webos.service.systemservice/setPreferences '{"timeZone": {"ZoneID": "Etc/Manual"}}'

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `bias` | Number (optional) Number of minutes that the manual timezone is offset from Coordinated Universal Time (UTC). |
| `standardDate` | Object: TimeZoneEasRule (optional) Date and local time when Daylight Saving Time (DST) transitions to standard time. Note: This field must be specified in combination with the daylightDate parameter. If either of these parameters is not specified, both the fields are ignored. |
| `standardBias` | Number (optional) The bias value to be used during local time translations that occur during standard time. This value is added to the value of the bias parameter to form the bias used during standard time. Default value: 0 (in most time zones this value is 0) Note: This parameter is ignored if the standardDate parameter is not specified. |
| `daylightDate` | Object: TimeZoneEasRule (optional) Date and local time when standard time transitions to Daylight Saving Time (DST). Note: This field must be specified in combination with the standardDate parameter. If either of these parameters is not specified, both fields are ignored. |
| `daylightBias` | Number (optional) The bias value to be used during local time translations that occur during daylight saving time. This value is added to the value of the bias parameter to form the bias used during daylight saving time. Default value: -60 (in most time zones this value is -60) Note: This parameter is ignored if the daylightDate parameter is not specified. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/setPreferences '{"timeZone": {"ZoneID": "Etc/Manual"}}
```

> ACG: time.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timezone_gettimezonedataversion"></a>
## `timezone/getTimeZoneDataVersion`

`luna://com.webos.service.systemservice/timezone/getTimeZoneDataVersion`

Returns the time zone data version (timezone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/timezone/getTimeZoneDataVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timezone_gettimezonefromeasdata"></a>
## `timezone/getTimeZoneFromEasData`

`luna://com.webos.service.systemservice/timezone/getTimeZoneFromEasData`

Gets the time-zone that matches the provided EAS data. This method enables you to determine the time zone by the specified time stamp.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `bias` | Number (required) Number of minutes that a time zone is offset from Coordinated Universal Time (UTC). |
| `standardDate` | Object: EasLocalTime (optional) Object containing date and time information in standard time. If any of the fields for EasLocalTime structure are missing or out of range, this field is ignored as not specified. This field should be specified in combination with daylightDate . If either standardDate or daylightDate is not specified, both fields are ignored as not specified. |
| `standardBias` | Number (optional) The standardBias is the bias value to be used for local time translations that occur during standard time. This value is added to the value of the bias member to form the bias used during standard time. In most time zones, the value is zero. This field is not used in calculations for the moment. |
| `daylightDate` | Object: EasLocalTime (optional) The daylightDate is an object containing the date and time information in daylight saving time. If any of the fields for EasLocalTime structure are missing or out of range, this field is ignored as not specified. This field should be specified in combination with standardDate . If either standardDate or daylightDate is not specified, both are ignored as not specifie |
| `daylightBias` | Number (optional) The dayLightBias is the bias value to be used for local time translations that occur during daylight saving time. This value is added to the value of the bias member to form the bias used during daylight saving time. In most time zones, the value is –60. This field is not used in calculations for the moment. |

**Returns:**

| Field | Type / notes |
|---|---|
| `timeZone` | String (optional) The timezone matching the given parameters. Note: When there are multiple locations that match the specified "bias", the entry that first appears in the preferences is returned. For example, Gibraltar and Brussles, both have offset from UTC as 60. So, if bias is given as "-60", the |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/timezone/getTimeZoneFromEasData '{ "bias": 0 }
```

> ACG: time.query \| Returns: timeZone:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timezone_gettimezonerules"></a>
## `timezone/getTimeZoneRules`

`luna://com.webos.service.systemservice/timezone/getTimeZoneRules`

The getTimeZoneRules method requests rules for specific time-zone for the specified years. By calling this method you can get the rules of when and how the daylight time switching occurs at the specified year.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `tz` | String (required) The timezone for which to get information. |
| `years` | Number array (optional) Array of years for which to get information. If not specified, information for the current year is returned. |

**Returns:**

| Field | Type / notes |
|---|---|
| `results` | Object array: TimeZoneRule (optional) Object array for the results. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/timezone/getTimeZoneRules '[ {"tz": "Europe/Helsinki", "years": [2012, 2010]} ]
```

> ACG: time.query \| Returns: results:Object array: TimeZoneRule; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timezoneeasrule"></a>
## `TimeZoneEasRule`

`luna://com.webos.service.systemservice/TimeZoneEasRule`

Provides details of structure for creating a timezone rule. Example { "year": 2016, "month": 10, "dayOfWeek": 0, "week": 3, "hour": 2 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/TimeZoneEasRule '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="timezonerule"></a>
## `TimeZoneRule`

`luna://com.webos.service.systemservice/TimeZoneRule`

Contains the rule to be used when DST(daylight saving time) is enabled for a particular zone. Example { "tz": "Europe/Helsinki", "dstOffset": 10800, "dstStart": 1332637200, "dstEnd": 1351386000, "utcOffset": 7200, "year": 2012, "hasDstChange": true }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/TimeZoneRule '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="wallpaper"></a>
## `Wallpaper`

`luna://com.webos.service.systemservice/Wallpaper`

Example "wallpaper": { "wallpaperName": "flowers.png", "wallpaperFile": "\/media\/internal\/.wallpapers\/flowers.png", "wallpaperThumbFile": "\/media\/internal\/.wallpapers\/thumbs\/flowers.png" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/Wallpaper '{}'
```

> Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="wallpaper_convert"></a>
## `wallpaper/convert`

`luna://com.webos.service.systemservice/wallpaper/convert`

The convert method converts an image. The type, scaling and centering of the image may be changed. If the resulting image is smaller than the original, black is added to the edges so that the resulting image is the same size as the original. If the resulting image would be bigger than the original, the image is cropped. JPG, PNG and BMP files are supported.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Path to the source file. Note: The wallpaper file needs to be copied manually to the target prior to using this API |
| `destType` | String (required) Type for the destination file. Can be jpg , png or bmp . |
| `dest` | String (optional) Path for the destination file. |
| `focusX` | Number (optional) The horizontal coordinate of the new center of the image, from 0.0 (left edge) to 1.0 (right edge). A value of 0.5 preserves the current horizontal center of the image. |
| `focusY` | Number (optional) The vertical coordinate of the new center of the image, from 0.0 (top edge) to 1.0 (bottom edge). A value of 0.5 preserves the current vertical center of the image. |
| `scale` | Number (optional) Scale factor for the image, must be greater than zero. |

**Returns:**

| Field | Type / notes |
|---|---|
| `conversionResult` | Object: ImageConversionResult (required) Object containing information of the converted image. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/wallpaper/convert '{ "source": "/var/rootdirs/home/root/Capture.PNG", "dest":"/var/rootdirs/home/root/test.jpg", "destType" : "jpg" }
```

> ACG: systemsettings.management \| Returns: conversionResult:Object: ImageConversionResult; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="wallpaper_deletewallpaper"></a>
## `wallpaper/deleteWallpaper`

`luna://com.webos.service.systemservice/wallpaper/deleteWallpaper`

The deleteWallpaper method deletes the specified wallpaper from the list of available wallpapers on the device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `wallpaperName` | String (required) The wallpaperName attribute of the wallpaper object to delete. Note: The wallpaper file should have been copied and imported in the target prior to using this API |

**Returns:**

| Field | Type / notes |
|---|---|
| `wallpaper` | Object: Wallpaper (optional) A wallpaper object corresponding with the deleted wallpaper |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/wallpaper/deleteWallpaper '{ "wallpaperName": "record-large.png" }
```

> ACG: systemsettings.management \| Returns: wallpaper:Object: Wallpaper; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="wallpaper_importwallpaper"></a>
## `wallpaper/importWallpaper`

`luna://com.webos.service.systemservice/wallpaper/importWallpaper`

The importWallpaper method is used to convert the specified image into a device wallpaper. To convert into a wallpaper the image is either re-centered and cropped, or scaled. Once the image has been converted, the wallpaper is stored in the internal list of wallpapers on the device, and is available until deleted using deleteWallpaper method. Focus Parameter Scale Parameter Conversion Method Yes No The image is re-centered at the point specified by the focus parameters and cropped. Gaps are filled with Black color if the image does not reach the edge of the screen. No Yes The image is scaled and then cropped Yes Yes The image is first scaled and then re-centered and cropped No No Scales the image to fill the screen

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `target` | String (required) Path to the image file. |
| `focusX` | Number (optional) Represents the horizontal coordinates of the new center of the image from 0.0 (left edge) to 1.0 (right edge). A value of 0.5 preserves the current horizontal center of the image. |
| `focusY` | Number (optional) The vertical coordinate of the new center of the image, from 0.0 (top edge) to 1.0 (bottom edge). A value of 0.5 preserves the current vertical center of the image. |
| `scale` | Number (optional) Scale parameter determines the new size of the image, must be greater than zero. |

**Returns:**

| Field | Type / notes |
|---|---|
| `wallpaper` | Object: Wallpaper (optional) A wallpaper object. This object can be passed to setPreferences to set the wallpaper key. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/wallpaper/importWallpaper '{ "target": "/media/internal/.wallpapers/flowers.png" }
```

> ACG: systemsettings.management \| Returns: wallpaper:Object: Wallpaper; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="wallpaper_info"></a>
## `wallpaper/info`

`luna://com.webos.service.systemservice/wallpaper/info`

The info method retrieves a wallpaper object using either the wallpaperName or wallpaperFile parameter.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `wallpaperName` | String (optional) Wallpaper name. Either this, or wallpaperFile is required. Note: The wallpaper file needs to be copied manually to the target prior to using this API |
| `wallpaperFile` | String (optional) Wallpaper's full path including the file name. Either this, or wallpaperName is required. Note: The wallpaper file needs to be copied manually to the target prior to using this API |

**Returns:**

| Field | Type / notes |
|---|---|
| `wallpaper` | Object: Wallpaper (optional) A wallpaper object. This object can be passed to setPreferences to set the wallpaper key. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/wallpaper/info '{ "wallpaperFile": "/media/internal/.wallpapers/flowers.png" }
```

> ACG: systemsettings.management \| Returns: wallpaper:Object: Wallpaper; returnValue:Boolean; errorText:String \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)

<a id="wallpaper_refresh"></a>
## `wallpaper/refresh`

`luna://com.webos.service.systemservice/wallpaper/refresh`

The refresh method refreshes the internal list of available wallpapers. Under normal circumstances, there is no need to call refresh directly. Note: This method call always succeeds.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/wallpaper/refresh '{}
```

> ACG: systemsettings.management \| Returns: returnValue:Boolean \| Service: Provides access to the webOS system settings such as: Backup options Getting device information Getting and modifying the date and time settings Setting ringtones Wallpaper Local formats

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-systemservice/)
