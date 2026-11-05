# `com.webos.service.preferences`

Preferences store: reads and writes per-app and system property key/value settings and supports their backup and restore.

17 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`appProperties/getAllAppProperties`](#appproperties_getallappproperties) | public |  | settings | documented | The getAllAppProperties gets all properties set to an application as an object array. Note: If the getAllAppProperties method succeeds, ther |
| [`appProperties/getAllAppPropertiesObj`](#appproperties_getallapppropertiesobj) | public |  | settings | documented | The getAllAppPropertiesObj method gets all properties set to an application as an object. |
| [`appProperties/getAppKeys`](#appproperties_getappkeys) | public |  | settings | documented | The getAppKeys method returns all property keys for an application as a string array. Note: If the getAppKeys method succeeds, there will be |
| [`appProperties/getAppKeysObj`](#appproperties_getappkeysobj) | public |  | settings | documented | The getAppKeys method returns all property keys for an application as a JSON object. |
| [`appProperties/getAppProperty`](#appproperties_getappproperty) | public |  | settings | documented | The getAppProperty method returns an application property for a specific key. |
| [`appProperties/removeAppProperty`](#appproperties_removeappproperty) | public |  | settings | documented | The getAppProperty method removes an application property. |
| [`appProperties/setAppProperty`](#appproperties_setappproperty) | public |  | settings | documented | Add or change an application property. |
| [`backup/postRestore`](#backup_postrestore) | public |  | settings | documented | postRestore method restores the application/services preferences from lunaprefs_backup.db provided in the parameter. |
| [`backup/preBackup`](#backup_prebackup) | public |  | settings | documented | preBackup method takes backup of application/services preferences stored in "/var/preferences" path. |
| [`systemProperties/Get`](#systemproperties_get) | public |  | settings | documented | The systemProperties/Get method has been deprecated. Use systemProperties/getSysProperty instead. |
| [`systemProperties/getAllSysProperties`](#systemproperties_getallsysproperties) | public |  | settings | documented | The getAllSysProperties method returns all system properties as an object array. Note: The call is always sucessful, except when an internal |
| [`systemProperties/getAllSysPropertiesObj`](#systemproperties_getallsyspropertiesobj) | public |  | settings | documented | The getAllSysPropertiesObj method returns all system properties as an object. Note: On a successful return, there will be no returnValue and |
| [`systemProperties/getSomeSysProperties`](#systemproperties_getsomesysproperties) | public |  | settings | documented | The getSomeSysProperties method takes an object array of property keys and returns an array of objects with key-value pairs for each of the  |
| [`systemProperties/getSomeSysPropertiesObj`](#systemproperties_getsomesyspropertiesobj) | public |  | settings | documented | The getSomeSysPropertiesObj method takes an object array of property keys and returns an object containing an array of objects with key-valu |
| [`systemProperties/getSysKeys`](#systemproperties_getsyskeys) | public |  | settings | documented | The getSysKeys method returns a the list of system property keys as a string array. Note: This function does not return a JSON object. This  |
| [`systemProperties/getSysKeysObj`](#systemproperties_getsyskeysobj) | public |  | settings | documented | The getSysKeysObj method returns a the list of system property keys as a JSON object. This method is always successful, it never reports any |
| [`systemProperties/getSysProperty`](#systemproperties_getsysproperty) | public |  | settings | documented | The getSysProperty method returns a system property. |

<a id="appproperties_getallappproperties"></a>
## `appProperties/getAllAppProperties`

`luna://com.webos.service.preferences/appProperties/getAllAppProperties`

The getAllAppProperties gets all properties set to an application as an object array. Note: If the getAllAppProperties method succeeds, there will be no returnValue and the returned object will only be an array of JSON objects containing key/value pairs.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) ID of the application to fetch properties for. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `None` | Object array (optional) The array of application property objects. Each application property object contains a single element: - key - the property name (string) - value - the property value (string) See the return example for details. Note: The name of the property ' None' indicates that the return |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/getAllAppProperties '{"appId": "com.webos.service.preferences"}'
```

> ACG: preferences.applicationpropertyquery \| Returns: returnValue:Boolean; errorText:String; None:Object array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="appproperties_getallapppropertiesobj"></a>
## `appProperties/getAllAppPropertiesObj`

`luna://com.webos.service.preferences/appProperties/getAllAppPropertiesObj`

The getAllAppPropertiesObj method gets all properties set to an application as an object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) appId is the id of the application to fetch properties for. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `values` | Object array (optional) values is an array of objects with key/value pairs that contain the individual application settings. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/getAllAppPropertiesObj '{"appId": "com.webos.service.app.calendar"}'
```

> ACG: preferences.applicationpropertyquery \| Returns: returnValue:Boolean; errorText:String; values:Object array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="appproperties_getappkeys"></a>
## `appProperties/getAppKeys`

`luna://com.webos.service.preferences/appProperties/getAppKeys`

The getAppKeys method returns all property keys for an application as a string array. Note: If the getAppKeys method succeeds, there will be no returnValue and the returned object will only be an array of strings.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) appId is the id of the application to fetch property keys for. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `None` | String array (optional) An array of property keys. Each array element is the property name. Note: The name of the property ' None' indicates that the return value does not have a property name. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/getAppKeys '{"appId": "com.webos.rdxd"}'
```

> ACG: preferences.applicationpropertyquery \| Returns: returnValue:Boolean; errorText:String; None:String array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="appproperties_getappkeysobj"></a>
## `appProperties/getAppKeysObj`

`luna://com.webos.service.preferences/appProperties/getAppKeysObj`

The getAppKeys method returns all property keys for an application as a JSON object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) appId is the id of the application to fetch property keys for. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `values` | string array (optional) values is a an array containing the keys for the application settings. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/getAppKeysObj '{"appId": "com.webos.rdxd"}'
```

> ACG: preferences.applicationpropertyquery \| Returns: returnValue:Boolean; errorText:String; values:string array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="appproperties_getappproperty"></a>
## `appProperties/getAppProperty`

`luna://com.webos.service.preferences/appProperties/getAppProperty`

The getAppProperty method returns an application property for a specific key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) appId is the id of the application to fetch properties for. |
| `key` | String (required) key is the key of the property to be fetched. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Contains the error text if the getAppProperty method fails. The getAppProperty method will return errorText only if it fails. |
| `key` | object (optional) Contains the value for the requested key. Note: The name of the property will be the same as the requested key, not the word 'key'. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/getAppProperty '{"appId": "com.webos.rdxd", "key": "reportIdNum"}'
```

> ACG: preferences.applicationpropertyquery \| Returns: returnValue:Boolean; errorText:String; key:object \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="appproperties_removeappproperty"></a>
## `appProperties/removeAppProperty`

`luna://com.webos.service.preferences/appProperties/removeAppProperty`

The getAppProperty method removes an application property.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) appId is the id of the application to fetch properties for. |
| `key` | String (required) key is the key of the property to be removed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Ð¡ontains the error text if the removeAppProperty method fails. The removeAppProperty method will return errorText only if it fails. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/removeAppProperty '{"appId":"testApp", "key":"testKey"}'
```

> ACG: preferences.operation \| Returns: returnValue:Boolean; errorText:String \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="appproperties_setappproperty"></a>
## `appProperties/setAppProperty`

`luna://com.webos.service.preferences/appProperties/setAppProperty`

Add or change an application property.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) appId is the id of the application to fetch properties for. |
| `key` | String (required) key is the key of the property that is to be added or changed. |
| `value` | object (required) value is the value that the property is to be set to. Must be a JSON object. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Ð¡ontains the error text if the setAppProperty method fails. The setAppProperty method will return errorText only if it fails. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/appProperties/setAppProperty '{"appId":"testApp", "key":"testKey", "value":{"testValueKey":"testValue"}}'
```

> ACG: preferences.operation \| Returns: returnValue:Boolean; errorText:String \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="backup_postrestore"></a>
## `backup/postRestore`

`luna://com.webos.service.preferences/backup/postRestore`

postRestore method restores the application/services preferences from lunaprefs_backup.db provided in the parameter.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `tempDir` | String (required) Directory path where lunaprefs_backup.db is present. |
| `files` | String array (required) Array containing the backedup db names from which preferences data will be restored. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Contains the error text if the backup/postRestore method fails. The backup/postRestore method will return errorText only if it fails. |
| `errorPayload` | String (optional) Will contain error payload of luna-send message if call fails. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/backup/postRestore '{"tempDir":"/var/","files":["/var/preferences/lunaprefs_backup.db"]}'
```

> ACG: preferences.management \| Returns: returnValue:Boolean; errorText:String; errorPayload:String \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="backup_prebackup"></a>
## `backup/preBackup`

`luna://com.webos.service.preferences/backup/preBackup`

preBackup method takes backup of application/services preferences stored in "/var/preferences" path.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `tempDir` | String (optional) Path where backup database file is to be stored. |

**Returns:**

| Field | Type / notes |
|---|---|
| `backupFile` | String (required) Full file name of backup database. |
| `files` | String array (optional) Deprecated: Array of all backed-up db paths. |
| `errorPayload` | String (optional) Will contain error payload of luna-send message if call fails (if tempDir is not of type String). |
| `errorText` | String (optional) Contains the error text if the backup/preBackup method fails. The backup/preBackup method will return errorText only if it fails. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/backup/preBackup '{}'
```

> ACG: preferences.management \| Returns: returnValue:Boolean; backupFile:String; files:String array; errorPayload:String; errorText:String \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_get"></a>
## `systemProperties/Get`

`luna://com.webos.service.preferences/systemProperties/Get`

The systemProperties/Get method has been deprecated. Use systemProperties/getSysProperty instead.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/Get '{}'
```

> ACG: preferences.systempropertyquery \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getallsysproperties"></a>
## `systemProperties/getAllSysProperties`

`luna://com.webos.service.preferences/systemProperties/getAllSysProperties`

The getAllSysProperties method returns all system properties as an object array. Note: The call is always sucessful, except when an internal webOS error occurs (more details can be found in the syslog). If the call is successful, only an object array is returned. returnValue and errorText are returned only if the call fails.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) errorText contains the error text if the getAllSysProperties method fails. The getAllSysProperties method will return errorText only if it fails. |
| `None` | Object array (optional) The array of system property objects. Each system property object contains a single element: - key - the property name (string) - value - the property value (string) See the return example for details. Note: The name of the property ' None' indicates that the return value doe |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getAllSysProperties {}
```

> ACG: preferences.systempropertyquery \| Returns: returnValue:Boolean; errorText:String; None:Object array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getallsyspropertiesobj"></a>
## `systemProperties/getAllSysPropertiesObj`

`luna://com.webos.service.preferences/systemProperties/getAllSysPropertiesObj`

The getAllSysPropertiesObj method returns all system properties as an object. Note: On a successful return, there will be no returnValue and the returned object will only be an array of JSON objects containing key/value pairs.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Ð¡ontains the error text if the getAllSysPropertiesObj method fails. The getAllSysPropertiesObj method will return errorText only if it fails. |
| `values` | preferences array (optional) values is an array of objects with key/value pairs that contain the individual system settings. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getAllSysPropertiesObj {}
```

> ACG: preferences.systempropertyquery \| Returns: returnValue:Boolean; errorText:String; values:preferences array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getsomesysproperties"></a>
## `systemProperties/getSomeSysProperties`

`luna://com.webos.service.preferences/systemProperties/getSomeSysProperties`

The getSomeSysProperties method takes an object array of property keys and returns an array of objects with key-value pairs for each of the keys. The getSomeSysProperties method returns the equivalent to what getSysProperty would have returned for each key. If one of the keys fails, an error is returned in that element of the array but the rest go through. Note: On a successful return, there will be no returnValue and the returned object will only be an array of JSON objects containing key/value pairs.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) A JSON array of keys for which the key-value pairs are returned. Note: The parameter is an array: ["k1", "k2"], and not an object: [{"key": "k1"}, {"key": "k2"}] |

**Returns:**

| Field | Type / notes |
|---|---|
| `None` | Object array (optional) The array of system property objects. Each system property object contains a single element: - key - the property name (string) - value - the property value (string) See the return example for details. Note: In case the method fails, the key will contain the errorText, and th |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getSomeSysProperties '[{"key": "com.webos.service.properties.browserOsName"}, {"key": "com.webos.service.properties.deviceName"}]'
```

> ACG: preferences.systempropertyquery \| Returns: None:Object array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getsomesyspropertiesobj"></a>
## `systemProperties/getSomeSysPropertiesObj`

`luna://com.webos.service.preferences/systemProperties/getSomeSysPropertiesObj`

The getSomeSysPropertiesObj method takes an object array of property keys and returns an object containing an array of objects with key-value pairs for each of the keys. The getSomeSysPropertiesObj method returns the equivalent to what getSysProperty would have returned for each key. If one of the keys fails, an error is returned in that element of the array but the rest go through.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String array (required) A JSON array of keys for which the key-value pairs are returned. Note: The parameter is an array: ["k1", "k2"], and not an object: [{"key": "k1"}, {"key": "k2"}] |

**Returns:**

| Field | Type / notes |
|---|---|
| `values` | preferences array (optional) values will contain an array of objects containing key/value pairs. Note: In case the method fails, the key will contain the errorText, and the value will contain a more detailed error message for that errorText. See the example below. Single or multiple errors can be re |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getSomeSysPropertiesObj '[{"key": "com.webos.service.properties.browserOsName"}, {"key": "com.webos.service.properties.deviceName"}]'
```

> ACG: preferences.systempropertyquery \| Returns: returnValue:Boolean; values:preferences array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getsyskeys"></a>
## `systemProperties/getSysKeys`

`luna://com.webos.service.preferences/systemProperties/getSysKeys`

The getSysKeys method returns a the list of system property keys as a string array. Note: This function does not return a JSON object. This method is always successful, it never reports any errors.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `None` | String array (optional) An array of system property keys. Each array element has a key name. See the return example for details. Note: The name of the property ' None' indicates that the return value does not have a property name. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getSysKeys {}
```

> ACG: preferences.systempropertyquery \| Returns: None:String array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getsyskeysobj"></a>
## `systemProperties/getSysKeysObj`

`luna://com.webos.service.preferences/systemProperties/getSysKeysObj`

The getSysKeysObj method returns a the list of system property keys as a JSON object. This method is always successful, it never reports any errors.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `values` | string array (optional) values is an array of strings containing the system keys. The system keys may be different depending on the OS, build, device, etc. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getSysKeysObj {}
```

> ACG: preferences.systempropertyquery \| Returns: returnValue:Boolean; values:string array \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)

<a id="systemproperties_getsysproperty"></a>
## `systemProperties/getSysProperty`

`luna://com.webos.service.preferences/systemProperties/getSysProperty`

The getSysProperty method returns a system property.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) key is the key of the system property that is to be fetched. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Contains the error text if the getSysProperty method fails. The getSysProperty method will return errorText only if it fails. |
| `key` | object (optional) Contains the value for the requested key. Note: The name of the property will be the same as the requested key, not the word 'key'. |

```sh
luna-send -n 1 -f luna://com.webos.service.preferences/systemProperties/getSysProperty '{"key": "com.webos.service.properties.browserOsName"}'
```

> ACG: preferences.systempropertyquery \| Returns: returnValue:Boolean; errorText:String; key:object \| Service: Enables applications to manage system and application properties. Note: This service must be used only if existing system applications are already using it. Else, use "com.webos.service.systemservice"

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-preferences/)
