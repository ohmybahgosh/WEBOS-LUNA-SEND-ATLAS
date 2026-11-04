# `com.webos.service.downloadmanager`

18 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`allow1x`](#allow1x) | public |  | network |  |
| [`cancelAllDownloads`](#cancelalldownloads) | public |  | network |  |
| [`cancelDownload`](#canceldownload) | public |  | network | Cancel a download that is in progress. |
| [`cancelUpload`](#cancelupload) | public |  | network | Cancel an upload that is in progress. See the cancelDownload method for detailed documentation. |
| [`clearHistory`](#clearhistory) | public |  | network | Clear the download history for a specific application or for all downloads or uploads. |
| [`deleteDownloadedFile`](#deletedownloadedfile) | public |  | network | Delete a downloaded file based on the ticket number. The ticket number is a unique ID returned from the download method. |
| [`download`](#download) | public | yes | network |  |
| [`downloads`](#downloads) | unknown |  | network | Array containing downloads |
| [`downloadStatusQuery`](#downloadstatusquery) | public | yes | network |  |
| [`getAllHistory`](#getallhistory) | public |  | network | Get the download or upload history for a specific application. |
| [`getTicketHistory`](#gettickethistory) | private |  | apps | Method on com.webos.service.downloadmanager (from on-device permission registry; parameters undocumented). |
| [`is1xMode`](#is1xmode) | public |  | network | Determine if the network connection is in 1x mode. |
| [`items`](#items) | unknown |  | network | Objects of items which describe information of download history. |
| [`listPending`](#listpending) | public |  | network | Return the list of all downloads that are currently in progress. |
| [`pauseDownload`](#pausedownload) | public |  | network | Pause a download. Note that only downloads started with canHandlePause:true can be paused; otherwise, calling pauseDownload on a downloading |
| [`postParameters`](#postparameters) | unknown |  | network | An object containing key/data/content triplets to support parameters required by the server to which the file is uploaded. |
| [`resumeDownload`](#resumedownload) | public | yes | network |  |
| [`upload`](#upload) | public | yes | network | Upload a file to the target URI. If subscribe is set to false , the onSuccess handler is called only once after the initial request. To be n |

<a id="allow1x"></a>
## `allow1x`

`luna://com.webos.service.downloadmanager/allow1x`



- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `value` | Boolean (required) Indicates whether 1x mode is to be enabled. Possible values are: true - Enable 1x mode false - Disable 1x mode |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/allow1x '{"value" : true}
```

> ACG: download.management \| Returns: returnValue:Boolean; value:Boolean; errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="cancelalldownloads"></a>
## `cancelAllDownloads`

`luna://com.webos.service.downloadmanager/cancelAllDownloads`



- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/cancelAllDownloads '{}
```

> ACG: download.operation \| Returns: returnValue:Boolean \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="canceldownload"></a>
## `cancelDownload`

`luna://com.webos.service.downloadmanager/cancelDownload`

Cancel a download that is in progress.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ticket` | Number (int64_t) (required) Download ID to be canceled. The download ID is returned from the download method. |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/cancelDownload '{"ticket" : 1}
```

> ACG: download.management \| Returns: ticket:Number (int64_t); returnValue:Boolean; aborted:Boolean; completed:Boolean; completionStatusCode:Number (int8_t); errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="cancelupload"></a>
## `cancelUpload`

`luna://com.webos.service.downloadmanager/cancelUpload`

Cancel an upload that is in progress. See the cancelDownload method for detailed documentation.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ticket` | Number (int64_t) (required) Upload ID to be canceled. The upload ID is returned from the upload method. |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/cancelUpload '{"ticket" : 1}
```

> ACG: download.management \| Returns: ticket:Number (int64_t); returnValue:Boolean; aborted:Boolean; completed:Boolean; completionStatusCode:Number (int8_t); errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="clearhistory"></a>
## `clearHistory`

`luna://com.webos.service.downloadmanager/clearHistory`

Clear the download history for a specific application or for all downloads or uploads.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `owner` | String (optional) ID of owner requesting the download. |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/clearHistory '{"owner" : "/var/run/ls2/5Htp9Q"}
```

> ACG: download.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number (int8_t) \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="deletedownloadedfile"></a>
## `deleteDownloadedFile`

`luna://com.webos.service.downloadmanager/deleteDownloadedFile`

Delete a downloaded file based on the ticket number. The ticket number is a unique ID returned from the download method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ticket` | Number (int64_t) (required) Download ID of the file to be deleted. |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/deleteDownloadedFile '{"ticket" : 124}
```

> ACG: download.management \| Returns: ticket:String; returnValue:Boolean; errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="download"></a>
## `download`

`luna://com.webos.service.downloadmanager/download`



- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appendTargetFile` | Boolean (optional) If appendTargetFile is set to true and if the target file already exists, download manager appends download data, not creates a new one. |
| `authToken` | String (optional) Used for curl in "Auth-Token:". |
| `autoResume` | Boolean (optional) If autoResume is set to false , paused task will not be recovered automatically. |
| `canHandlePause` | Boolean (optional) To enable pause the download, set canHandlePause to true . Otherwise, set canHandlePause to false . Note that only downloads started with canHandlePause:true can be paused; otherwise, calling pauseDownload on a downloading file will act like a "cancel". |
| `cookieHeader` | String (optional) cookieHeader. |
| `cookieToken` | String (optional) cookieToken. |
| `deviceId` | String (optional) Used for curl in "Device-Id:". |
| `e_rangeHigh` | String (optional) Must be bigger than e_rangeLow. Not used now. |
| `e_rangeLow` | String (optional) Offset in number of bytes that you want the transfer to start from. Used for curl option (refer curl_easy_setopt(), CURLOPT_RESUME_FROM_LARGE). |
| `interface` | String (optional) Can have one of the following values: wired wifi wan btpan |
| `keepFilenameOnRedirect` | Boolean (optional) To follow redirects until it downloads the actual file, set keepFilenameOnRedirect to true . To not follow redirects, set keepFilenameOnRedirect to false . |
| `mime` | String (optional) Mime type of the target. It is not used in curl now, instead "application/x-binary" is set, as described at http://www.webmaster-toolkit.com/mime-types.shtml. |
| `param376` | String (optional) Description here |
| `subscribe` | Boolean (optional) To get informed when download status has been changed, set subscribe to true . Otherwise, set subscribe to false . |
| `target` | String (required) Target URL to download. |
| `targetDir` | String (optional) Directory where to save the downloaded file. |
| `targetFilename` | String (optional) File name to use when saving the downloaded file. If targetFilename is not specified, the file name specified in target is default. If there is the same file name, download manager will internally generate a unique name. |

```sh
luna-send -f -i luna://com.webos.service.downloadmanager/download '{"target" : "http://www.google.co.kr"}
```

> ACG: download.management \| Returns: returnValue:Boolean; subscribed:Boolean; ticket:String; url:String; target:String; errorCode:String; errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="downloads"></a>
## `downloads`

`luna://com.webos.service.downloadmanager/downloads`

Array containing downloads

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/downloads '{}'
```

> Service: Manages file upload and download on the device. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="downloadstatusquery"></a>
## `downloadStatusQuery`

`luna://com.webos.service.downloadmanager/downloadStatusQuery`



- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ticket` | Number (int64_t) (required) Download ID of the file to get the download status. |
| `subscribe` | Boolean (optional) To get informed when download status has been changed, set subscribe to true . Otherwise, set subscribe to false . |

```sh
luna-send -f -i luna://com.webos.service.downloadmanager/downloadStatusQuery '{"ticket" : 125}'
```

> ACG: download.management \| Returns: ticket:Number (int64_t); url:String; amountReceived:Number (int32_t); e_amountReceived:String; amountTotal:Number (int32_t); e_amountTotal:String; returnValue:Boolean; subscribed:Boolean; errorText:String; owner:String; interface:String; state:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="getallhistory"></a>
## `getAllHistory`

`luna://com.webos.service.downloadmanager/getAllHistory`

Get the download or upload history for a specific application.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `owner` | String (required) ID of owner requesting download or upload. |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/getAllHistory '{"owner" : "/var/run/ls2/5Htp9Q"}'
```

> ACG: download.operation \| Returns: returnValue:Boolean; errorText:String; items:Object: items \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="gettickethistory"></a>
## `getTicketHistory`

`luna://com.webos.service.downloadmanager/getTicketHistory`

Method on com.webos.service.downloadmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/getTicketHistory '{}'
```

> ACG groups: networking.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="is1xmode"></a>
## `is1xMode`

`luna://com.webos.service.downloadmanager/is1xMode`

Determine if the network connection is in 1x mode.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/is1xMode '{}
```

> ACG: download.management \| Returns: returnValue:Boolean; 1x:Boolean \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="items"></a>
## `items`

`luna://com.webos.service.downloadmanager/items`

Objects of items which describe information of download history.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/items '{}'
```

> Service: Manages file upload and download on the device. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="listpending"></a>
## `listPending`

`luna://com.webos.service.downloadmanager/listPending`

Return the list of all downloads that are currently in progress.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/listPending '{}
```

> ACG: download.management \| Returns: returnValue:Boolean; count:String; downloads:Object: downloads \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="pausedownload"></a>
## `pauseDownload`

`luna://com.webos.service.downloadmanager/pauseDownload`

Pause a download. Note that only downloads started with canHandlePause:true can be paused; otherwise, calling pauseDownload on a downloading file will act like a "cancel".

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ticket` | Number (int8_t) (required) Download ID to pause. |

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/pauseDownload '{"ticket" : 135}'
```

> ACG: download.management \| Returns: returnValue:Boolean; errorCode:String; errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="postparameters"></a>
## `postParameters`

`luna://com.webos.service.downloadmanager/postParameters`

An object containing key/data/content triplets to support parameters required by the server to which the file is uploaded.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.downloadmanager/postParameters '{}'
```

> Service: Manages file upload and download on the device. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="resumedownload"></a>
## `resumeDownload`

`luna://com.webos.service.downloadmanager/resumeDownload`



- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ticket` | Number (int8_t) (required) Download ID to resume. |
| `authToken` | String (optional) Used for curl in "Auth-Token". |
| `deviceId` | String (optional) used for curl in "Device-Id". |
| `subscribe` | Boolean (optional) To get informed when download status has been changed, set subscribe to true . Otherwise, set subscribe to false . |

```sh
luna-send -f -i luna://com.webos.service.downloadmanager/resumeDownload '{"ticket" : 135}'
```

> ACG: download.management \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:String; errorText:String \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)

<a id="upload"></a>
## `upload`

`luna://com.webos.service.downloadmanager/upload`

Upload a file to the target URI. If subscribe is set to false , the onSuccess handler is called only once after the initial request. To be notified when the upload is complete, set subscribe to true and onSuccess will be called periodically with progress updates. The upload is complete when the handler receives a response with completed:true .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `url` | String (required) URL where to upload the file. |
| `fileName` | String (required) Path to the local file to be uploaded. |
| `fileLabel` | String (optional) The label portion of the file name (as opposed to the file extension). |
| `contentType` | String (optional) The MIME type of the file, as described at http://www.webmaster-toolkit.com/mime-types.shtml. |
| `postParameters` | Object: postParameters (optional) An object containing key/data/content triplets to support parameters required by the server to which the file is uploaded. |
| `subscribe` | Boolean (optional) To get informed when upload status has been changed, set subscribe to true . Otherwise, set subscribe to false . |

```sh
luna-send -i -f luna://com.webos.service.downloadmanager/upload '{"url":"http://www.google.co.kr","fileName":"/media/internal/downloads/test.txt"}'
```

> ACG: download.management \| Returns: returnValue:Boolean; ticket:Number (int64_t); subscribed:Boolean; errorText:String; errorCode:Number (int8_t) \| Service: Manages file upload and download on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-downloadmanager/)
