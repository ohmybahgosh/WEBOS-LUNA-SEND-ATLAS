# `com.webos.appInstallService`

7 methods.  Platforms seen: all, webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`details`](#details) | unknown |  | misc | Describes the progress on all operations that are managed by com.webos.appInstallService. |
| [`dev/install`](#dev_install) | public | yes | misc | Installs an ipk file which exists in local repository of a device. Note: This method is available only in developer mode (devmode). To enabl |
| [`dev/remove`](#dev_remove) | public | yes | misc | Removes apps from a device that are installed using dev/install method. Note: This method is available only in developer mode (devmode). To  |
| [`install`](#install) | public | yes | misc | Installs an app on a device. |
| [`installLocal`](#installlocal) | private |  | apps | Installs an app from a local IPK (non-dev variant; name seen only) |
| [`remove`](#remove) | public | yes | misc | Removes an installed app from a device. |
| [`status`](#status) | public | yes | misc | Monitors the status of all installed and removed apps that are operating in the com.webos.appInstallService. |

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
- **Confidence:** documented, community

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
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the app to be removed. |
| `subscribe` | Boolean (optional) Subscribe and get notified when the app removal status changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.appInstallService/dev/remove '{ "id":"my_first_app", "subscribe":true }
```

> ACG: applicationinstall.devmode \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This API carries out the application installation and provides information of the application being installed.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/), [2](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts), [3](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-install/src/remove.rs)

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

<a id="installlocal"></a>
## `installLocal`

`luna://com.webos.appInstallService/installLocal`

Installs an app from a local IPK (non-dev variant; name seen only)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.appInstallService/installLocal '{}'
```

> Only the method name appeared in search hits; parameters unread.

Sources: [1](https://github.com/Kyusoo-Kim/memo/blob/HEAD/public/db.json)

<a id="remove"></a>
## `remove`

`luna://com.webos.appInstallService/remove`

Removes an installed app from a device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, all  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the app to be removed. |
| `subscribe` | Boolean (optional) Subscribe and get notified when the app removal status changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.appInstallService/remove '{"id":"com.test.app.hello", "subscribe":true}
```

> ACG: applicationinstall.management \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This API carries out the application installation and provides information of the application being installed. \|\| Seen in webOS Phoenix tests (OSE-like environment).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/), [2](https://github.com/thebestbradley/webos-phoenix/blob/HEAD/tools/test-marketplace.cjs)

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

```sh
luna-send -n 1 -f luna://com.webos.appInstallService/status '{}
```

> ACG: applicationinstall.management \| Returns: returnValue:Boolean; subscribed:Boolean; status:Object: status; errorCode:Number; errorText:String \| Service: This API carries out the application installation and provides information of the application being installed.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-appinstallservice/)
