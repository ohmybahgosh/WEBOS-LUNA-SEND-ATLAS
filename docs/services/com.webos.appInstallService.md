# `com.webos.appInstallService`

Application install service: installs, removes, and cancels app and service packages (including local, dev, and group installs), queries install capacity, and manages Luna config files.

22 methods.  Platforms seen: all, webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancel`](#cancel) | private |  | apps | inferred | Cancels the app install service. |
| [`commercial/installInternal`](#commercial_installinternal) | private |  | apps | inferred | Installs the internal (commercial) |
| [`createLSConfigFiles`](#createlsconfigfiles) | private |  | settings | inferred | Creates the LS config files. |
| [`details`](#details) | unknown |  | misc | documented | Describes the progress on all operations that are managed by com.webos.appInstallService. |
| [`dev/install`](#dev_install) | public | yes | misc | documented | Installs an ipk file which exists in local repository of a device. Note: This method is available only in developer mode (devmode). To enabl |
| [`dev/remove`](#dev_remove) | public | yes | misc | documented | Removes apps from a device that are installed using dev/install method. Note: This method is available only in developer mode (devmode). To  |
| [`group/install`](#group_install) | private |  | apps | inferred | Installs the app install service (group) |
| [`group/queryInstallCapacity`](#group_queryinstallcapacity) | private |  | apps | inferred | Queries the install capacity (group) |
| [`group/status`](#group_status) | private |  | apps | inferred | Handles the status (group) |
| [`install`](#install) | public | yes | misc | documented | Installs an app on a device. |
| [`installInternal`](#installinternal) | private |  | apps | inferred | Installs the internal. |
| [`installLocal`](#installlocal) | private |  | apps | documented | Installs an app from a local IPK (non-dev variant; name seen only) |
| [`installLocalNoVerify`](#installlocalnoverify) | public |  | apps | inferred | Installs the local no verify. |
| [`installService`](#installservice) | private |  | apps | inferred | Installs the service. |
| [`pause`](#pause) | private |  | apps | inferred | Pauses the app install service. |
| [`queryInstallCapacity`](#queryinstallcapacity) | private |  | apps | inferred | Queries the install capacity. |
| [`remove`](#remove) | public | yes | misc | documented | Removes an installed app from a device. |
| [`removeLSConfigFiles`](#removelsconfigfiles) | private |  | settings | inferred | Removes the LS config files. ⚠️ |
| [`resume`](#resume) | private |  | apps | inferred | Resumes the app install service. |
| [`status`](#status) | public | yes | misc | documented | Monitors the status of all installed and removed apps that are operating in the com.webos.appInstallService. |
| [`system/installLocal`](#system_installlocal) | private |  | apps | inferred | Installs the local (system) |
| [`uninstallService`](#uninstallservice) | private |  | apps | inferred | Uninstalls the service. |

<a id="cancel"></a>
## `cancel`

`luna://com.webos.appInstallService/cancel`

Cancels the app install service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/cancel '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="commercial_installinternal"></a>
## `commercial/installInternal`

`luna://com.webos.appInstallService/commercial/installInternal`

Installs the internal (commercial)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/commercial/installInternal '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createlsconfigfiles"></a>
## `createLSConfigFiles`

`luna://com.webos.appInstallService/createLSConfigFiles`

Creates the LS config files.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/createLSConfigFiles '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="details"></a>
## `details`

`luna://com.webos.appInstallService/details`

Describes the progress on all operations that are managed by com.webos.appInstallService.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/details '{}'
```

> Service: This API carries out the application installation and provides information of the application being installed. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/)

<a id="dev_install"></a>
## `dev/install`

`luna://com.webos.appInstallService/dev/install`

Installs an ipk file which exists in local repository of a device. Note: This method is available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of an app to be installed. Note : If an app is being installed with the same id, the request will be ignored. |
| `ipkUrl` | String (required) The path of the ipk file to be installed. Note : This must be the absolute path of the file. For example, " /media/internal/downloads/com.yourdomain.app.ipk ". |
| `subscribe` | Boolean (optional) Subscribe and get notified when the status of installation changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.appInstallService/dev/install '{ "id":"my_first_app", "ipkUrl":"/media/internal/downloads/com.test.app.hello_0.0.1_all.ipk", "subscribe":true }
```

> ACG: applicationinstall.devmode \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This API carries out the application installation and provides information of the application being installed. \|\| Reply stream ends with a message containing "installed" or "failed". Ctrl+C needed to end luna-send-pub. As root pass -a com.webos.appInstallService (webos-homebar) when called from custom scripts.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/), [2](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [3](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/README.md), [4](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/tools/install.sh), [5](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-install/src/install.rs)

<a id="dev_remove"></a>
## `dev/remove`

`luna://com.webos.appInstallService/dev/remove`

Removes apps from a device that are installed using dev/install method. Note: This method is available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the app to be removed. |
| `subscribe` | Boolean (optional) Subscribe and get notified when the app removal status changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.appInstallService/dev/remove '{ "id":"my_first_app", "subscribe":true }
```

> ACG: applicationinstall.devmode \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This API carries out the application installation and provides information of the application being installed.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/), [2](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts), [3](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-install/src/remove.rs)

<a id="group_install"></a>
## `group/install`

`luna://com.webos.appInstallService/group/install`

Installs the app install service (group)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/group/install '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="group_queryinstallcapacity"></a>
## `group/queryInstallCapacity`

`luna://com.webos.appInstallService/group/queryInstallCapacity`

Queries the install capacity (group)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/group/queryInstallCapacity '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="group_status"></a>
## `group/status`

`luna://com.webos.appInstallService/group/status`

Handles the status (group)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/group/status '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="install"></a>
## `install`

`luna://com.webos.appInstallService/install`

Installs an app on a device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the app to be installed. Note : The ID must be unique. |
| `subscribe` | Boolean (optional) Subscribe and get notified when the installation status changes. Possible values are: true: Subscribed. false: Not subscribed. |
| `ipkUrl` | String (required) The path of the ipk file to be installed. Note : This must be the absolute path. For example, " /media/internal/downloads/com.yourdomain.app.ipk ". |

```sh
luna-send -i -f luna://com.webos.appInstallService/install '{ "id":"com.test.app.hello", "ipkUrl":"/media/internal/downloads/com.test.app.hello_0.0.1_all.ipk", "subscribe":true }
```

> ACG: applicationinstall.management \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This API carries out the application installation and provides information of the application being installed.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/)

<a id="installinternal"></a>
## `installInternal`

`luna://com.webos.appInstallService/installInternal`

Installs the internal.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/installInternal '{}'
```

> ACG groups: appinstalld.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="installlocal"></a>
## `installLocal`

`luna://com.webos.appInstallService/installLocal`

Installs an app from a local IPK (non-dev variant; name seen only)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.appInstallService/installLocal '{}'
```

> Only the method name appeared in search hits; parameters unread.

Sources: [1](https://github.com/Kyusoo-Kim/memo/blob/HEAD/public/db.json)

<a id="installlocalnoverify"></a>
## `installLocalNoVerify`

`luna://com.webos.appInstallService/installLocalNoVerify`

Installs the local no verify.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/installLocalNoVerify '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="installservice"></a>
## `installService`

`luna://com.webos.appInstallService/installService`

Installs the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/installService '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.appInstallService/pause`

Pauses the app install service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/pause '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="queryinstallcapacity"></a>
## `queryInstallCapacity`

`luna://com.webos.appInstallService/queryInstallCapacity`

Queries the install capacity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/queryInstallCapacity '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="remove"></a>
## `remove`

`luna://com.webos.appInstallService/remove`

Removes an installed app from a device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, all  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the app to be removed. |
| `subscribe` | Boolean (optional) Subscribe and get notified when the app removal status changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.appInstallService/remove '{"id":"com.test.app.hello", "subscribe":true}
```

> ACG: applicationinstall.management \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This API carries out the application installation and provides information of the application being installed. \|\| Seen in webOS Phoenix tests (OSE-like environment).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/), [2](https://github.com/thebestbradley/webos-phoenix/blob/HEAD/tools/test-marketplace.cjs)

<a id="removelsconfigfiles"></a>
## `removeLSConfigFiles` ⚠️ DANGEROUS

`luna://com.webos.appInstallService/removeLSConfigFiles`

Removes the LS config files.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/removeLSConfigFiles '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="resume"></a>
## `resume`

`luna://com.webos.appInstallService/resume`

Resumes the app install service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/resume '{}'
```

> ACG groups: appinstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.appInstallService/status`

Monitors the status of all installed and removed apps that are operating in the com.webos.appInstallService.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe and get notified when the status changes. Possible values are: true - Subscribed for changes. false - Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `status` | Object: status (required) Contains the list of apps that are currently being installed and removed. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/status '{}
```

> ACG: applicationinstall.management \| Returns: returnValue:Boolean; subscribed:Boolean; status:Object: status; errorCode:Number; errorText:String \| Service: This API carries out the application installation and provides information of the application being installed.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/)

<a id="system_installlocal"></a>
## `system/installLocal`

`luna://com.webos.appInstallService/system/installLocal`

Installs the local (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/system/installLocal '{}'
```

> ACG groups: appinstalld.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="uninstallservice"></a>
## `uninstallService`

`luna://com.webos.appInstallService/uninstallService`

Uninstalls the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/uninstallService '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
