# Storage & USB

140 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://com.palm.backup/startBackup`](../services/com.palm.backup.md#startbackup) | root | documented | Starts a manual Palm Backup (after launching com.palm.app.backup) |
| [`luna://com.palm.downloadmanager/download`](../services/com.palm.downloadmanager.md#download) | root | documented | Downloads a URL to /media/internal/downloads |
| [`luna://com.palm.filecache/ChangeType`](../services/com.palm.filecache.md#changetype) | private | inferred | Changes the type. |
| [`luna://com.palm.filecache/CopyCacheObject`](../services/com.palm.filecache.md#copycacheobject) | private | inferred | Copies the cache object. |
| [`luna://com.palm.filecache/DefineType`](../services/com.palm.filecache.md#definetype) | private | inferred | Handles the define type. |
| [`luna://com.palm.filecache/DeleteType`](../services/com.palm.filecache.md#deletetype) | private | inferred | Deletes the type. ⚠️ |
| [`luna://com.palm.filecache/DescribeType`](../services/com.palm.filecache.md#describetype) | public | inferred | Handles the describe type. |
| [`luna://com.palm.filecache/ExpireCacheObject`](../services/com.palm.filecache.md#expirecacheobject) | public | inferred | Handles the expire cache object. |
| [`luna://com.palm.filecache/GetCacheObjectFilename`](../services/com.palm.filecache.md#getcacheobjectfilename) | public | inferred | Returns the cache object filename. |
| [`luna://com.palm.filecache/GetCacheObjectSize`](../services/com.palm.filecache.md#getcacheobjectsize) | public | inferred | Returns the cache object size. |
| [`luna://com.palm.filecache/GetCacheStatus`](../services/com.palm.filecache.md#getcachestatus) | public | inferred | Returns the cache status. |
| [`luna://com.palm.filecache/GetCacheTypes`](../services/com.palm.filecache.md#getcachetypes) | public | inferred | Returns the cache types. |
| [`luna://com.palm.filecache/GetCacheTypeStatus`](../services/com.palm.filecache.md#getcachetypestatus) | public | inferred | Returns the cache type status. |
| [`luna://com.palm.filecache/GetVersion`](../services/com.palm.filecache.md#getversion) | public | inferred | Returns the version. |
| [`luna://com.palm.filecache/InsertCacheObject`](../services/com.palm.filecache.md#insertcacheobject) | public | inferred | Inserts the cache object. |
| [`luna://com.palm.filecache/ResizeCacheObject`](../services/com.palm.filecache.md#resizecacheobject) | public | inferred | Handles the resize cache object. |
| [`luna://com.palm.filecache/SubscribeCacheObject`](../services/com.palm.filecache.md#subscribecacheobject) | public | inferred | Subscribes to the cache object. |
| [`luna://com.palm.filecache/TouchCacheObject`](../services/com.palm.filecache.md#touchcacheobject) | public | inferred | Handles the touch cache object. |
| [`luna://com.palm.storage/diskmode/enterMSM`](../services/com.palm.storage.md#diskmode_entermsm) | root | documented | Enters (and toggles out of) USB mass storage mode |
| [`luna://com.palm.storage/diskmode/queryMSMStatus`](../services/com.palm.storage.md#diskmode_querymsmstatus) | public | inferred | Queries the MSM status (diskmode) |
| [`luna://com.palm.storage/erase/EraseAll`](../services/com.palm.storage.md#erase_eraseall) | root | documented | Erases all storage (part of ##RTN# sequence) ⚠️ |
| [`luna://com.webos.service.attachedstoragemanager/cancelRequest`](../services/com.webos.service.attachedstoragemanager.md#cancelrequest) | private | inferred | Cancels the request. |
| [`luna://com.webos.service.attachedstoragemanager/changeDeviceStatus`](../services/com.webos.service.attachedstoragemanager.md#changedevicestatus) | private | inferred | Changes the device status. |
| [`luna://com.webos.service.attachedstoragemanager/checkDevicePerformance`](../services/com.webos.service.attachedstoragemanager.md#checkdeviceperformance) | private | inferred | Checks the device performance. |
| [`luna://com.webos.service.attachedstoragemanager/cleanDevice`](../services/com.webos.service.attachedstoragemanager.md#cleandevice) | private | inferred | Handles the clean device. |
| [`luna://com.webos.service.attachedstoragemanager/copy`](../services/com.webos.service.attachedstoragemanager.md#copy) | private | inferred | Copies the attachedstoragemanager. |
| [`luna://com.webos.service.attachedstoragemanager/decompress`](../services/com.webos.service.attachedstoragemanager.md#decompress) | private | inferred | Handles the decompress. |
| [`luna://com.webos.service.attachedstoragemanager/delete`](../services/com.webos.service.attachedstoragemanager.md#delete) | private | inferred | Deletes the attachedstoragemanager. ⚠️ |
| [`luna://com.webos.service.attachedstoragemanager/ejectDevice`](../services/com.webos.service.attachedstoragemanager.md#ejectdevice) | private | documented | Eject a USB device |
| [`luna://com.webos.service.attachedstoragemanager/format`](../services/com.webos.service.attachedstoragemanager.md#format) | private | inferred | Formats the attachedstoragemanager. ⚠️ |
| [`luna://com.webos.service.attachedstoragemanager/getChangedContent`](../services/com.webos.service.attachedstoragemanager.md#getchangedcontent) | private | inferred | Returns the changed content. |
| [`luna://com.webos.service.attachedstoragemanager/getCopyStatus`](../services/com.webos.service.attachedstoragemanager.md#getcopystatus) | private | inferred | Returns the copy status. |
| [`luna://com.webos.service.attachedstoragemanager/getFileOperationStatus`](../services/com.webos.service.attachedstoragemanager.md#getfileoperationstatus) | private | inferred | Returns the file operation status. |
| [`luna://com.webos.service.attachedstoragemanager/getProperties`](../services/com.webos.service.attachedstoragemanager.md#getproperties) | private | inferred | Returns the properties. |
| [`luna://com.webos.service.attachedstoragemanager/listContentsByCamera`](../services/com.webos.service.attachedstoragemanager.md#listcontentsbycamera) | private | inferred | Lists the contents by camera. |
| [`luna://com.webos.service.attachedstoragemanager/listDevices`](../services/com.webos.service.attachedstoragemanager.md#listdevices) | ssap | documented | List attached storage devices |
| [`luna://com.webos.service.attachedstoragemanager/listDevices2`](../services/com.webos.service.attachedstoragemanager.md#listdevices2) | private | inferred | Lists the devices 2. |
| [`luna://com.webos.service.attachedstoragemanager/listFolderContents`](../services/com.webos.service.attachedstoragemanager.md#listfoldercontents) | private | inferred | Lists the folder contents. |
| [`luna://com.webos.service.attachedstoragemanager/move`](../services/com.webos.service.attachedstoragemanager.md#move) | private | inferred | Moves the attachedstoragemanager. |
| [`luna://com.webos.service.attachedstoragemanager/refreshDeviceList`](../services/com.webos.service.attachedstoragemanager.md#refreshdevicelist) | private | inferred | Refreshes the device list. |
| [`luna://com.webos.service.attachedstoragemanager/registerDeviceStatus`](../services/com.webos.service.attachedstoragemanager.md#registerdevicestatus) | private | inferred | Registers the device status. |
| [`luna://com.webos.service.attachedstoragemanager/responseDeviceStatus`](../services/com.webos.service.attachedstoragemanager.md#responsedevicestatus) | private | inferred | Handles the response device status. |
| [`luna://com.webos.service.attachedstoragemanager/triggeredActivity`](../services/com.webos.service.attachedstoragemanager.md#triggeredactivity) | private | inferred | Handles the triggered activity. |
| [`luna://com.webos.service.attachedstoragemanager/unregisterDeviceStatus`](../services/com.webos.service.attachedstoragemanager.md#unregisterdevicestatus) | private | inferred | Unregisters the device status. |
| [`luna://com.webos.service.commercial.scapadapter/fs/storageInfo`](../services/com.webos.service.commercial.scapadapter.md#fs_storageinfo) | public | inferred | Handles the storage info (fs) |
| [`luna://com.webos.service.filecache/ChangeType`](../services/com.webos.service.filecache.md#changetype) | public | documented | Allows apps to modify the parameters of a cache type other than its name. You must specify the name of the cache type, and those cache type parameters that have |
| [`luna://com.webos.service.filecache/CopyCacheObject`](../services/com.webos.service.filecache.md#copycacheobject) | public | documented | Enables copying of an object from the file cache to a non-cached location. On successful completion, newPathName will be returned as it may be different than ex |
| [`luna://com.webos.service.filecache/DefineType`](../services/com.webos.service.filecache.md#definetype) | public | documented | Defines a new cache type. This is intended for use by the backup service. Optionally you may specify the default values for the size, cost, and lifetime. These  |
| [`luna://com.webos.service.filecache/DeleteType`](../services/com.webos.service.filecache.md#deletetype) | public | documented | Allows you to delete a previously defined cache type and frees up its space. All objects in the cache must be expired in order to delete a cache type. The app c |
| [`luna://com.webos.service.filecache/DescribeType`](../services/com.webos.service.filecache.md#describetype) | public | documented | Returns cache type details. The DescribeType will return the currently assigned values for all cache type parameters. Note: Filesize as it resides on disk after |
| [`luna://com.webos.service.filecache/ExpireCacheObject`](../services/com.webos.service.filecache.md#expirecacheobject) | public | documented | Objects will normally be automatically expired form the cache as space is needed. If you want to force an item to be removed or if you want to remove items prio |
| [`luna://com.webos.service.filecache/GetCacheObjectFilename`](../services/com.webos.service.filecache.md#getcacheobjectfilename) | public | documented | Allows you to query the original filename of a particular object in a cache type. In order to get the cache object file name the app must specify the path name  |
| [`luna://com.webos.service.filecache/GetCacheObjectSize`](../services/com.webos.service.filecache.md#getcacheobjectsize) | public | documented | Allows you to query a particular object size in a cache type. In order to get the cache object size, the app must specify the pathname of the object. |
| [`luna://com.webos.service.filecache/GetCacheStatus`](../services/com.webos.service.filecache.md#getcachestatus) | public | documented | Give status of the cache as a whole. The GetCacheStatus will return: the number of cache types defined the total space used by the objects in all cache types th |
| [`luna://com.webos.service.filecache/GetCacheTypes`](../services/com.webos.service.filecache.md#getcachetypes) | public | documented | Returns an array of all defined cache types. |
| [`luna://com.webos.service.filecache/GetCacheTypeStatus`](../services/com.webos.service.filecache.md#getcachetypestatus) | public | documented | Allows you to query the status of a particular cache type to obtain: the total space used by the objects in the specified cache type the number of objects in th |
| [`luna://com.webos.service.filecache/GetVersion`](../services/com.webos.service.filecache.md#getversion) | public | documented | Returns the version of the File Cache API. |
| [`luna://com.webos.service.filecache/InsertCacheObject`](../services/com.webos.service.filecache.md#insertcacheobject) | public | documented | Inserts a new object of the specified type into the cache. The fileName parameter is required. It is stored with the object to ensure that the correct extension |
| [`luna://com.webos.service.filecache/ResizeCacheObject`](../services/com.webos.service.filecache.md#resizecacheobject) | public | documented | By calling the ResizeCacheObject you can specify the size of the cached object after it is inserted into the cache. Call this method if the final size of the ob |
| [`luna://com.webos.service.filecache/SubscribeCacheObject`](../services/com.webos.service.filecache.md#subscribecacheobject) | public | documented | Enables you to subscribe an object in the cache and hold a subscription to the object for the duration of your usage. An object cannot be expired from the cache |
| [`luna://com.webos.service.filecache/TouchCacheObject`](../services/com.webos.service.filecache.md#touchcacheobject) | public | documented | Allows you to mark an object as recently used. This decreases the chances of the object from getting expired from the cache when the space is being reclaimed. |
| [`luna://com.webos.service.lowlevelstorage/getData`](../services/com.webos.service.lowlevelstorage.md#getdata) | private | documented | Reads low-level storage (factory/model DB) values by dbid and item name |
| [`luna://com.webos.service.lowlevelstorage/setData`](../services/com.webos.service.lowlevelstorage.md#setdata) | private | inferred | Sets the data. |
| [`luna://com.webos.service.lowlevelstorage/shutdown`](../services/com.webos.service.lowlevelstorage.md#shutdown) | private | inferred | Shuts down the lowlevelstorage. ⚠️ |
| [`luna://com.webos.service.pdm/audioDeviceList`](../services/com.webos.service.pdm.md#audiodevicelist) | unknown | documented | List of audio device(s) connected. |
| [`luna://com.webos.service.pdm/checkUSBPort`](../services/com.webos.service.pdm.md#checkusbport) | private | inferred | Checks the USB port. |
| [`luna://com.webos.service.pdm/dev/getAttachedDeviceList`](../services/com.webos.service.pdm.md#dev_getattacheddevicelist) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only |
| [`luna://com.webos.service.pdm/dev/setDeviceForSession`](../services/com.webos.service.pdm.md#dev_setdeviceforsession) | private | documented | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.management); name only |
| [`luna://com.webos.service.pdm/deviceListInfo`](../services/com.webos.service.pdm.md#devicelistinfo) | unknown | documented | An array containing information about the currently connected device(s). |
| [`luna://com.webos.service.pdm/deviceStatusList`](../services/com.webos.service.pdm.md#devicestatuslist) | unknown | documented | List of the storage and non-storage devices connected and their statuses. |
| [`luna://com.webos.service.pdm/driveStatusList`](../services/com.webos.service.pdm.md#drivestatuslist) | unknown | documented | List of the drives in the connected storage devices and their statuses. |
| [`luna://com.webos.service.pdm/eject`](../services/com.webos.service.pdm.md#eject) | public | documented | Unmounts all drives of the storage device for safe removal. Prerequisite: The storage device must be connected. |
| [`luna://com.webos.service.pdm/format`](../services/com.webos.service.pdm.md#format) | public | documented | Formats the connected drive. |
| [`luna://com.webos.service.pdm/fsck`](../services/com.webos.service.pdm.md#fsck) | public | documented | Checks the file system by performing fsck (File System Check) of the corresponding connected drive. Note : On connecting a USB device with a large number of fil |
| [`luna://com.webos.service.pdm/fsckAlert`](../services/com.webos.service.pdm.md#fsckalert) | private | inferred | Handles the fsck alert. |
| [`luna://com.webos.service.pdm/getAttachedAllDeviceList`](../services/com.webos.service.pdm.md#getattachedalldevicelist) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only |
| [`luna://com.webos.service.pdm/getAttachedDeviceList`](../services/com.webos.service.pdm.md#getattacheddevicelist) | private | inferred | Returns the attached device list. |
| [`luna://com.webos.service.pdm/getAttachedDeviceStatus`](../services/com.webos.service.pdm.md#getattacheddevicestatus) | public | documented | Gets the status information of connected device(s). |
| [`luna://com.webos.service.pdm/getAttachedNonStorageDeviceList`](../services/com.webos.service.pdm.md#getattachednonstoragedevicelist) | public | documented | Gets the status information of connected non-storage device(s). |
| [`luna://com.webos.service.pdm/getAttachedStorageDeviceList`](../services/com.webos.service.pdm.md#getattachedstoragedevicelist) | public | documented | Gets status information of connected storage device(s). |
| [`luna://com.webos.service.pdm/getBuiltInUnknownCount`](../services/com.webos.service.pdm.md#getbuiltinunknowncount) | private | inferred | Returns the built in unknown count. |
| [`luna://com.webos.service.pdm/getExample`](../services/com.webos.service.pdm.md#getexample) | public | documented | Provides debug logs with detailed information of all connected storage and non-storage device list. |
| [`luna://com.webos.service.pdm/getIoPerformance`](../services/com.webos.service.pdm.md#getioperformance) | private | inferred | Returns the io performance. |
| [`luna://com.webos.service.pdm/getSpaceInfo`](../services/com.webos.service.pdm.md#getspaceinfo) | public | documented | Gets the space information of the connected drive. Note : The drive must be mounted. |
| [`luna://com.webos.service.pdm/getTouchPanelDisconnectCount`](../services/com.webos.service.pdm.md#gettouchpaneldisconnectcount) | private | inferred | Returns the touch panel disconnect count. |
| [`luna://com.webos.service.pdm/getTouchRoute`](../services/com.webos.service.pdm.md#gettouchroute) | private | inferred | Returns the touch route. |
| [`luna://com.webos.service.pdm/getUSBResumeDone`](../services/com.webos.service.pdm.md#getusbresumedone) | private | inferred | Returns the USB resume done. |
| [`luna://com.webos.service.pdm/getUSBSwitch`](../services/com.webos.service.pdm.md#getusbswitch) | private | inferred | Returns the USB switch. |
| [`luna://com.webos.service.pdm/isWritableDrive`](../services/com.webos.service.pdm.md#iswritabledrive) | public | documented | Checks the file system attribute of the drive and returns whether it is writable. |
| [`luna://com.webos.service.pdm/mountandFullFsck`](../services/com.webos.service.pdm.md#mountandfullfsck) | public | documented | Mounts the device without performing Fsck. Alternatively, it can be configured to perform Fsck and then mount the device. |
| [`luna://com.webos.service.pdm/netDeviceList`](../services/com.webos.service.pdm.md#netdevicelist) | unknown | documented | List of Communication Device Class (CDC) device(s) connected. |
| [`luna://com.webos.service.pdm/nonStorageDeviceList`](../services/com.webos.service.pdm.md#nonstoragedevicelist) | unknown | documented | List of information about the non-storage devices that are currently connected. |
| [`luna://com.webos.service.pdm/pdmStatistics`](../services/com.webos.service.pdm.md#pdmstatistics) | private | inferred | Handles the pdm statistics. |
| [`luna://com.webos.service.pdm/resetVbus`](../services/com.webos.service.pdm.md#resetvbus) | private | inferred | Resets the vbus. ⚠️ |
| [`luna://com.webos.service.pdm/setTouchRoute`](../services/com.webos.service.pdm.md#settouchroute) | private | inferred | Sets the touch route. |
| [`luna://com.webos.service.pdm/setUSBSwitch`](../services/com.webos.service.pdm.md#setusbswitch) | private | inferred | Sets the USB switch. |
| [`luna://com.webos.service.pdm/setVolumeLabel`](../services/com.webos.service.pdm.md#setvolumelabel) | public | documented | Sets the volume label of the drive. It is supported only when file system type is FAT. |
| [`luna://com.webos.service.pdm/spaceInfo`](../services/com.webos.service.pdm.md#spaceinfo) | unknown | documented | Information about the drive space. |
| [`luna://com.webos.service.pdm/storageDeviceList`](../services/com.webos.service.pdm.md#storagedevicelist) | unknown | documented | List of information about the storage devices that are currently connected. |
| [`luna://com.webos.service.pdm/storageDriveList`](../services/com.webos.service.pdm.md#storagedrivelist) | unknown | documented | List of the drives in storage devices connected. |
| [`luna://com.webos.service.pdm/subDeviceList`](../services/com.webos.service.pdm.md#subdevicelist) | unknown | documented | Contains info of sub-devices Note: Sub-devices are multiple camera or sound devices inside single camera or sound device. |
| [`luna://com.webos.service.pdm/umountAllDrive`](../services/com.webos.service.pdm.md#umountalldrive) | public | documented | Unmounts all drives. |
| [`luna://com.webos.service.pdm/videoDeviceList`](../services/com.webos.service.pdm.md#videodevicelist) | unknown | documented | List of video device(s) connected. |
| [`luna://com.webos.service.pdm/wakeupHdd`](../services/com.webos.service.pdm.md#wakeuphdd) | private | inferred | Handles the wakeup hdd. |
| [`luna://com.webos.service.printing/autoprint`](../services/com.webos.service.printing.md#autoprint) | public | inferred | Handles the autoprint. |
| [`luna://com.webos.service.printing/info/acceptPrinter`](../services/com.webos.service.printing.md#info_acceptprinter) | public | inferred | Handles the accept printer (info) |
| [`luna://com.webos.service.printing/info/defaultPrinter`](../services/com.webos.service.printing.md#info_defaultprinter) | public | inferred | Handles the default printer (info) |
| [`luna://com.webos.service.printing/info/enablePrinter`](../services/com.webos.service.printing.md#info_enableprinter) | public | inferred | Enables the printer (info) |
| [`luna://com.webos.service.printing/info/listPrinters`](../services/com.webos.service.printing.md#info_listprinters) | public | inferred | Lists the printers (info) |
| [`luna://com.webos.service.printing/jobs/all`](../services/com.webos.service.printing.md#jobs_all) | public | inferred | Handles the all (jobs) |
| [`luna://com.webos.service.printing/jobs/cancel`](../services/com.webos.service.printing.md#jobs_cancel) | public | inferred | Cancels the printing (jobs) |
| [`luna://com.webos.service.printing/jobs/cancelAll`](../services/com.webos.service.printing.md#jobs_cancelall) | public | inferred | Cancels the all (jobs) |
| [`luna://com.webos.service.printing/jobs/cancelPrinter`](../services/com.webos.service.printing.md#jobs_cancelprinter) | public | inferred | Cancels the printer (jobs) |
| [`luna://com.webos.service.printing/jobs/completeJobs`](../services/com.webos.service.printing.md#jobs_completejobs) | public | inferred | Completes the jobs (jobs) |
| [`luna://com.webos.service.printing/jobs/move`](../services/com.webos.service.printing.md#jobs_move) | public | inferred | Moves the printing (jobs) |
| [`luna://com.webos.service.printing/jobs/printNow`](../services/com.webos.service.printing.md#jobs_printnow) | public | inferred | Prints the now (jobs) |
| [`luna://com.webos.service.printing/jobs/queue`](../services/com.webos.service.printing.md#jobs_queue) | public | inferred | Handles the queue (jobs) |
| [`luna://com.webos.service.printing/jobs/stop`](../services/com.webos.service.printing.md#jobs_stop) | public | inferred | Stops the printing (jobs) |
| [`luna://com.webos.service.printing/print`](../services/com.webos.service.printing.md#print) | public | inferred | Prints the printing. |
| [`luna://com.webos.service.storageaccess/device/copy`](../services/com.webos.service.storageaccess.md#device_copy) | public | documented | Copies a file or directory from the source location to the destination. |
| [`luna://com.webos.service.storageaccess/device/eject`](../services/com.webos.service.storageaccess.md#device_eject) | public | documented | Ejects the storage device. In case of "cloud" storage type, it acts as a logout operation. Note: This operation is not applicable for "internal" storage type. |
| [`luna://com.webos.service.storageaccess/device/getProperties`](../services/com.webos.service.storageaccess.md#device_getproperties) | public | documented | Gets properties of the given storage provider or the specified file or directory. |
| [`luna://com.webos.service.storageaccess/device/handleExtraCommand`](../services/com.webos.service.storageaccess.md#device_handleextracommand) | public | documented | Handles addtional operation related to various providers. |
| [`luna://com.webos.service.storageaccess/device/list`](../services/com.webos.service.storageaccess.md#device_list) | public | documented | Lists contents of the specified directory. |
| [`luna://com.webos.service.storageaccess/device/move`](../services/com.webos.service.storageaccess.md#device_move) | public | documented | Moves a file or directory from the source location to the destination. |
| [`luna://com.webos.service.storageaccess/device/remove`](../services/com.webos.service.storageaccess.md#device_remove) | public | documented | Deletes the specified file or directory. |
| [`luna://com.webos.service.storageaccess/device/rename`](../services/com.webos.service.storageaccess.md#device_rename) | public | documented | Renames the specified file or directory. |
| [`luna://com.webos.service.storageaccess/files`](../services/com.webos.service.storageaccess.md#files) | unknown | documented | Provides information of the file or directory. |
| [`luna://com.webos.service.storageaccess/listStorageProviders`](../services/com.webos.service.storageaccess.md#liststorageproviders) | public | documented | Provides a list of storages providers and the corresponding drive information. |
| [`luna://com.webos.service.storageaccess/operation`](../services/com.webos.service.storageaccess.md#operation) | unknown | documented | Provides details of the operation. |
| [`luna://com.webos.service.storageaccess/payload`](../services/com.webos.service.storageaccess.md#payload) | unknown | documented | Arguments required for the operation in the form of key value pair |
| [`luna://com.webos.service.storageaccess/storageProviders`](../services/com.webos.service.storageaccess.md#storageproviders) | unknown | documented | Provides information about the storage provider. |
| [`luna://com.webos.service.storagestatistics/check`](../services/com.webos.service.storagestatistics.md#check) | private | inferred | Checks the storagestatistics. |
| [`luna://com.webos.service.storagestatistics/clearAppData`](../services/com.webos.service.storagestatistics.md#clearappdata) | private | inferred | Clears the app data. |
| [`luna://com.webos.service.storagestatistics/getAllAppStats`](../services/com.webos.service.storagestatistics.md#getallappstats) | private | inferred | Returns the all app stats. |
| [`luna://com.webos.service.storagestatistics/getAppStats`](../services/com.webos.service.storagestatistics.md#getappstats) | private | inferred | Returns the app stats. |
| [`luna://com.webos.service.storagestatistics/listInternalLargeFiles`](../services/com.webos.service.storagestatistics.md#listinternallargefiles) | private | inferred | Lists the internal large files. |
| [`luna://com.webos.service.storagestatistics/listLargeApps`](../services/com.webos.service.storagestatistics.md#listlargeapps) | private | inferred | Lists the large apps. |
| [`luna://com.webos.service.storagestatistics/listLargeFiles`](../services/com.webos.service.storagestatistics.md#listlargefiles) | private | inferred | Lists the large files. |
| [`luna://com.webos.service.storagestatistics/removeFile`](../services/com.webos.service.storagestatistics.md#removefile) | private | inferred | Removes the file. ⚠️ |
