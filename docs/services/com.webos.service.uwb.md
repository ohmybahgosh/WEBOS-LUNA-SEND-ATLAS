# `com.webos.service.uwb`

16 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`closeSession`](#closesession) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`getPairedSessions`](#getpairedsessions) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`getRangingInfo`](#getranginginfo) | public | yes | misc | Retrieves ranging info for a session. Subscribe to this API to get a continuous notification of the ranging data. |
| [`getStatus`](#getstatus) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`getUwbServiceState`](#getuwbservicestate) | public | yes | misc | Retrieves the state of the UWB service. If subscribe is set to true, the method sends an update if the values change. |
| [`getUwbSpecificInfo`](#getuwbspecificinfo) | public | yes | misc | Provides the capabilities and features of the device (supported UWB protocols and parameters). |
| [`openSession`](#opensession) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`rangingDataCommon`](#rangingdatacommon) | unknown |  | misc | Ranging information for common standard protocol. |
| [`rangingDataLgeAirCond`](#rangingdatalgeaircond) | unknown |  | misc | Ranging information for LGE Air Conditioner product. |
| [`rangingInfo`](#ranginginfo) | unknown |  | misc | Ranging information received from UWB module. |
| [`receivedCommonData`](#receivedcommondata) | unknown |  | misc | Provide a ranging information from the UWB module. |
| [`setState`](#setstate) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`startDiscovery`](#startdiscovery) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`startRanging`](#startranging) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`stopDiscovery`](#stopdiscovery) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`stopRanging`](#stopranging) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |

<a id="closesession"></a>
## `closeSession`

`luna://com.webos.service.uwb/closeSession`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/closeSession '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="getpairedsessions"></a>
## `getPairedSessions`

`luna://com.webos.service.uwb/getPairedSessions`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/getPairedSessions '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="getranginginfo"></a>
## `getRangingInfo`

`luna://com.webos.service.uwb/getRangingInfo`

Retrieves ranging info for a session. Subscribe to this API to get a continuous notification of the ranging data.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/getRangingInfo '{}
```

> ACG: uwb.operation \| Returns: sessionId:Number; rangingInfo:Object: rangingInfo; subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.uwb/getStatus`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/getStatus '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="getuwbservicestate"></a>
## `getUwbServiceState`

`luna://com.webos.service.uwb/getUwbServiceState`

Retrieves the state of the UWB service. If subscribe is set to true, the method sends an update if the values change.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications on changes in the values. Possible values are: true : Subscribed. false : Not subscribed. |

```sh
luna-send -f -n 1 luna://com.webos.service.uwb/getUwbServiceState '{}
```

> ACG: uwb.operation \| Returns: serviceAvailability:Boolean; stateChangeReason:String; returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="getuwbspecificinfo"></a>
## `getUwbSpecificInfo`

`luna://com.webos.service.uwb/getUwbSpecificInfo`

Provides the capabilities and features of the device (supported UWB protocols and parameters).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/getUwbSpecificInfo '{}
```

> ACG: uwb.operation \| Returns: modState:Boolean; fwVersion:String; fwCrc:String; returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="opensession"></a>
## `openSession`

`luna://com.webos.service.uwb/openSession`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/openSession '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="rangingdatacommon"></a>
## `rangingDataCommon`

`luna://com.webos.service.uwb/rangingDataCommon`

Ranging information for common standard protocol.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/rangingDataCommon '{}'
```

> Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="rangingdatalgeaircond"></a>
## `rangingDataLgeAirCond`

`luna://com.webos.service.uwb/rangingDataLgeAirCond`

Ranging information for LGE Air Conditioner product.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/rangingDataLgeAirCond '{}'
```

> Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="ranginginfo"></a>
## `rangingInfo`

`luna://com.webos.service.uwb/rangingInfo`

Ranging information received from UWB module.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/rangingInfo '{}'
```

> Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="receivedcommondata"></a>
## `receivedCommonData`

`luna://com.webos.service.uwb/receivedCommonData`

Provide a ranging information from the UWB module.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/receivedCommonData '{}'
```

> Service: Provides UWB ( Ultra Wideband ) service for wireless connectivity based on IEEE 802.15.4a/z. This service connects to Luna bus to interact with other system components that require UWB services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-uwb/)

<a id="setstate"></a>
## `setState`

`luna://com.webos.service.uwb/setState`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/setState '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="startdiscovery"></a>
## `startDiscovery`

`luna://com.webos.service.uwb/startDiscovery`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/startDiscovery '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="startranging"></a>
## `startRanging`

`luna://com.webos.service.uwb/startRanging`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/startRanging '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="stopdiscovery"></a>
## `stopDiscovery`

`luna://com.webos.service.uwb/stopDiscovery`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/stopDiscovery '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)

<a id="stopranging"></a>
## `stopRanging`

`luna://com.webos.service.uwb/stopRanging`

Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.uwb/stopRanging '{}'
```

> Listed under ACG group "uwb.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.uwb/blob/master/files/sysbus/com.webos.service.uwb.api.json.in)
