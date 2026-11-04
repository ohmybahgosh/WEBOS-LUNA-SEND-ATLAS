# `com.webos.service.location`

18 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`bounds`](#bounds) | unknown |  | location | Indicates the bounding box of the viewport within which to bias geocode results more prominently. |
| [`components`](#components) | unknown |  | location | Indicates the component filter for which a geocode has to be generated. |
| [`getAllLocationHandlers`](#getalllocationhandlers) | public | yes | location | Gets a list of the available location handlers, along with each handler's attributes including name and state. |
| [`getGeoCodeLocation`](#getgeocodelocation) | public |  | location | Transforms a given street address or other description of a location into a coordinate (latitude, longitude). Important points: Supports Goo |
| [`getGpsSatelliteData`](#getgpssatellitedata) | public | yes | location | Gets the satellite information. Prerequisite : The GPS feature of the device has to be powered ON . |
| [`getGpsStatus`](#getgpsstatus) | public | yes | location | Gets the current status of the GPS engine. Used for notifying device users that the GPS engine has started or stopped. GPS engine is started |
| [`getLocationHandlerDetails`](#getlocationhandlerdetails) | public |  | location | Gets the details of the given location handler (Location service provider). |
| [`getLocationUpdates`](#getlocationupdates) | public | yes | location | Requests a single location fix based on the given criteria. If the subscription value is set to true, it requests for continuous location fi |
| [`getNmeaData`](#getnmeadata) | public | yes | location | Gets a NMEA sentence from a GPS receiver. |
| [`getReverseLocation`](#getreverselocation) | public |  | location | Transforms a given coordinate (latitude, longitude) into a (partial) address. Note: The amount of detail in a reverse geocoded location desc |
| [`getState`](#getstate) | public | yes | location | Gets the current state of the given handler. Application settings can use this to update location settings. |
| [`handler`](#handler) | unknown |  | location | Contains a handler's name and state. |
| [`location`](#location) | unknown |  | location | Indicates the object of location for mock. |
| [`mock/disable`](#mock_disable) | public |  | location | Disables the mock location of the given provider. |
| [`mock/enable`](#mock_enable) | public |  | location | Enables a mock location of the given provider. |
| [`mock/setLocation`](#mock_setlocation) | public |  | location | Sets a mock location for the given provider. |
| [`satellite`](#satellite) | unknown |  | location | Contains satellite information. |
| [`setState`](#setstate) | public |  | location | Enables or disables a location service provider in the setting menu. |

<a id="bounds"></a>
## `bounds`

`luna://com.webos.service.location/bounds`

Indicates the bounding box of the viewport within which to bias geocode results more prominently.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.location/bounds '{}'
```

> Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="components"></a>
## `components`

`luna://com.webos.service.location/components`

Indicates the component filter for which a geocode has to be generated.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.location/components '{}'
```

> Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getalllocationhandlers"></a>
## `getAllLocationHandlers`

`luna://com.webos.service.location/getAllLocationHandlers`

Gets a list of the available location handlers, along with each handler's attributes including name and state.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: true: Get notifications. false: Notifications are not required. Default: true |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getAllLocationHandlers '{}
```

> ACG: location.query \| Returns: handlers:Object array: handler; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getgeocodelocation"></a>
## `getGeoCodeLocation`

`luna://com.webos.service.location/getGeoCodeLocation`

Transforms a given street address or other description of a location into a coordinate (latitude, longitude). Important points: Supports Google Geocoding API. Prerequisite: Set up the Geocoding API key as described in Google Geocoding API Key . Enable network location provider state by: # luna-send -f -n 1 luna://com.webos.service.location/ setState '{"Handler":"network","state":true}' For more details, see Google official documents .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates formatted user-readable address lines. Note: Either address or component parameter is required for the getGeoCodeLocation service to transform the address successfully. |
| `components` | Object array: components (required) Indicates the component filter required. Note: Either address or component parameter is required for the getGeoCodeLocation service to transform the address successfully. |
| `bounds` | Object array: bounds (optional) The bounding box of the viewport within which to bias geocode results more prominently. |
| `language` | String (optional) Indicates the language through which the results are displayed. |
| `region` | String (optional) Indicates the region code, specified as a ccTLD ("top-level domain") a two-character value. |

```sh
luna-send -f -n 1 luna://com.webos.service.location/setState '{"Handler":"network","state":true}
```

> ACG: location.query \| Returns: response:object; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getgpssatellitedata"></a>
## `getGpsSatelliteData`

`luna://com.webos.service.location/getGpsSatelliteData`

Gets the satellite information. Prerequisite : The GPS feature of the device has to be powered ON .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates whether to subscribe to related events. Possible values are: true : Subscribe. false : Do not subscribe. Default: true |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getGpsSatelliteData '{}
```

> ACG: location.query \| Returns: returnValue:Boolean; errorCode:Number; visibleSatellites:Number; satellites:Object array: satellite; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getgpsstatus"></a>
## `getGpsStatus`

`luna://com.webos.service.location/getGpsStatus`

Gets the current status of the GPS engine. Used for notifying device users that the GPS engine has started or stopped. GPS engine is started when a method that needs the engine to work is called. GPS engine is turned off when all the received requests have been handled or canceled, thus when there is nothing left for it to do. System-wise, when all luna-commands related to the engine starting are canceled, the GPS engine is powered OFF . Prerequisite: For getGpsStatus method to work, the GPS feature of the device has to be powered ON .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: true: Get notifications. false: Notifications are not required. Default: true |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getGpsStatus '{}
```

> ACG: location.query \| Returns: state:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getlocationhandlerdetails"></a>
## `getLocationHandlerDetails`

`luna://com.webos.service.location/getLocationHandlerDetails`

Gets the details of the given location handler (Location service provider).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `Handler` | String (required) Indicates the location of the service provider. Possible values are: gps network |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getLocationHandlerDetails '{ "Handler":"gps" }
```

> ACG: location.query \| Returns: accuracy:Number; powerRequirement:Number; requiresNetwork:Boolean; requiresCell:Boolean; monetaryCost:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getlocationupdates"></a>
## `getLocationUpdates`

`luna://com.webos.service.location/getLocationUpdates`

Requests a single location fix based on the given criteria. If the subscription value is set to true, it requests for continuous location fixes. Note: Timeout period for getLocationUpdates is 12 minutes. This method will enable location handlers according to the criteria passed in the request. setState method should be used to enable a handler.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: true: Get notifications. false: Notifications are not required. It will however provide only a single response, but only when updates are available Default: true |
| `minimumInterval` | Number (optional) Indicates the minimum time interval between location updates. Possible Range: 0 <= minimumInterval <= 3600000(in milliseconds). |
| `minimumDistance` | Number (optional) Indicates the minimum distance between location updates. Possible Range: 0 <= minimumDistance <= 60000(in metres). |
| `Handler` | String (optional) Indicates the type of location service provider. Possible values are : "gps" "network" "passive" |
| `responseTimeout` | Number (optional) Indicates the response timeout (time until the first position fix is returned ). Possible Range: 0 <= responseTimeout <= 720(in seconds). |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getLocationUpdates '{ "Handler":"gps" }
```

> ACG: location.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; timestamp:Number (int64_t); latitude:Number (double); longitude:Number (double); altitude:Number (double); direction:Number (double); speed:Number (double); horizAccuracy:Number (double); vertAccuracy:Number (double) \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getnmeadata"></a>
## `getNmeaData`

`luna://com.webos.service.location/getNmeaData`

Gets a NMEA sentence from a GPS receiver.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates whether to subscribe to related events. true : Subscribe. false : Do not subscribe. Default: true |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getNmeaData '{}
```

> ACG: location.query \| Returns: returnValue:Boolean; errorCode:Number; timestamp:Number (int64_t); nmea:String; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getreverselocation"></a>
## `getReverseLocation`

`luna://com.webos.service.location/getReverseLocation`

Transforms a given coordinate (latitude, longitude) into a (partial) address. Note: The amount of detail in a reverse geocoded location description may vary. For example, one location might contain the full street address of the closest building, while another location might contain only a city name and postal code. Important points: Supports Google Reverse Geocoding API. Prerequisite: Set up the Geocoding API key as described in Overview of the API > Google Geocoding API Key . Enable network location provider state by: # luna-send -f -n 1 luna://com.webos.service.location/ setState '{"Handler":"network","state":true}' For more details, see Google official documents .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `latitude` | Number (double) (required) Indicates latitude. Possible range: -90.0 ~ 90.0(in degrees). |
| `longitude` | Number (double) (required) Indicates longitude. Possible range: -180.0 ~ 180.0.(in degrees). |
| `language` | String (optional) Indicates the language in which the address(result) is returned. |
| `result_type` | array (optional) Indicates the type of address. |
| `location_type` | array (optional) Indicates the type of location. |

```sh
luna-send -f -n 1 luna://com.webos.service.location/setState '{"Handler":"network","state":true}
```

> ACG: location.query \| Returns: response:object; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.location/getState`

Gets the current state of the given handler. Application settings can use this to update location settings.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `Handler` | String (required) Indicates the type of location service provider. Possible values are : gps network |
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: true: Get notifications. false: Notifications are not required. Default: true |

```sh
luna-send -f -n 1 luna://com.webos.service.location/getState '{"Handler":"network"}
```

> ACG: location.query \| Returns: state:Number; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="handler"></a>
## `handler`

`luna://com.webos.service.location/handler`

Contains a handler's name and state.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.location/handler '{}'
```

> Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="location"></a>
## `location`

`luna://com.webos.service.location/location`

Indicates the object of location for mock.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.location/location '{}'
```

> Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="mock_disable"></a>
## `mock/disable`

`luna://com.webos.service.location/mock/disable`

Disables the mock location of the given provider.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Indicates the name of the location service provider. Possible values are : gps network |

```sh
luna-send -n 1 -f luna://com.webos.service.location/mock/disable'{ "name":"gps" }
```

> ACG: location.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="mock_enable"></a>
## `mock/enable`

`luna://com.webos.service.location/mock/enable`

Enables a mock location of the given provider.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the location service provider. Possible values: gps network |

```sh
luna-send -n 1 -f luna://com.webos.service.location/mock/enable '{ "name":"gps" }
```

> ACG: location.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="mock_setlocation"></a>
## `mock/setLocation`

`luna://com.webos.service.location/mock/setLocation`

Sets a mock location for the given provider.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Indicates the name of the location service provider. Possible values are : gps network NOTE: If ' name' field is set as network so for every mock/setLocation we need to call getLocationUpdates API with subscription false. (Since it different from GPS handler we wont get continuous reponse when subscription is true) |
| `location` | Object: location (required) Indicates the information about a mock location. |

```sh
luna-send -n 1 -f luna://com.webos.service.location/mock/setLocation '{ "name":"gps", "location": { "speed":-1, "longitude":127.034097, "horizAccuracy":30, "verAccuracy":2, "heading":-1, "timestamp":1410827340157, "altitude":-1, "latitude":37.460605 } }
```

> ACG: location.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="satellite"></a>
## `satellite`

`luna://com.webos.service.location/satellite`

Contains satellite information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.location/satellite '{}'
```

> Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)

<a id="setstate"></a>
## `setState`

`luna://com.webos.service.location/setState`

Enables or disables a location service provider in the setting menu.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `Handler` | String (required) Indicates the type of location service provider. Possible values are : gps network |
| `state` | Boolean (required) Indicates whether to enable the location of the service provider. Possible values are: true : Enables the given location service provider. false : Disables the given location service provider. |

```sh
luna-send -f -n 1 luna://com.webos.service.location/setState '{ "Handler":"gps", "state":true }
```

> ACG: location.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides basic location services for single or multiple position fixes. This service connects to Luna bus to interact with other system components (e.g. apps, services) that require location services.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-location/)
