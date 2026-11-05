# `com.webos.service.bus`

Luna service-bus management: registers clients for signals, queries service API versions and permissions, checks whether a call is allowed, and manages API-permission manifests.

11 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addManifestsDir`](#addmanifestsdir) | public |  | misc | documented | Adds a directory containing manifests (security configuration files). Note: Only services present in the "hub.configuration" security group  |
| [`addOneManifest`](#addonemanifest) | public |  | misc | documented | Adds manifest file data to hub security configuration. Only services present in the "hub.configuration" security group are allowed to call t |
| [`ApiPermissionsObject`](#apipermissionsobject) | unknown |  | misc | documented | Describe the group to which methods of the service belong. The properties of this object serve as patterns for methods (including their cate |
| [`getServiceAPIVersions`](#getserviceapiversions) | public |  | misc | documented | Gets service API version from the ls-hub. API version will be returned as a value of "versions" object. Value may have any type. It depends  |
| [`isCallAllowed`](#iscallallowed) | public |  | misc | documented | Checks that call is allowed from specified requester to specified URI. |
| [`queryServicePermissions`](#queryservicepermissions) | public |  | misc | documented | Queries a service to: Obtain the set of rules that are relevant to the service. List the API that are required (client permissions) List the |
| [`removeManifestsDir`](#removemanifestsdir) | public |  | misc | documented | Removes manifests directory which were added by the addManifestsDir method. Note: Only services present in the "hub.configuration" security  |
| [`removeOneManifest`](#removeonemanifest) | public |  | misc | documented | Removes manifest file data from hub security configuration. Only services present in the "hub.configuration" security group are allowed to c |
| [`signal/addmatch`](#signal_addmatch) | public |  | misc | documented | Registers a client to receive signals from webOS services matching the category and method specified in the parameters. If method parameter  |
| [`signal/registerServerStatus`](#signal_registerserverstatus) | public |  | misc | documented | Registers a client to receive the signal sent by the bus, when a service is registered/unregistered on the bus. |
| [`signal/registerServiceCategory`](#signal_registerservicecategory) | public |  | misc | documented | Registers a client to the signal sent by the bus, when a service adds the specified category. This method does not register the specified ca |

<a id="addmanifestsdir"></a>
## `addManifestsDir`

`luna://com.webos.service.bus/addManifestsDir`

Adds a directory containing manifests (security configuration files). Note: Only services present in the "hub.configuration" security group are allowed to call this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `prefix` | String (optional) Prefix that adjust relative paths for manifests directory path and paths in manifests to absolute |
| `dirpath` | String (required) Directory path (treated as relative if prefix is specified or absolute if not) |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure in operation. |

```sh
luna-send -n 1 -f -m "com.webos.some.trusted.service" luna://com.webos.service.bus/addManifestsDir '{"prefix": "/prefix", "dirpath": "path/to/manifests"}
```

> ACG: servicebus.configuration \| Returns: returnValue:Boolean; errorText:String \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="addonemanifest"></a>
## `addOneManifest`

`luna://com.webos.service.bus/addOneManifest`

Adds manifest file data to hub security configuration. Only services present in the "hub.configuration" security group are allowed to call this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `path` | String (required) Path to the manifest file. |
| `prefix` | String (required) Prefix that will be applied to all entries in the manifest file and their internal data . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure in operation |

```sh
luna-send -n 1 -f -m "com.webos.some.not_trusted.service" luna://com.webos.service.bus/addOneManifest '{"prefix": "/prefix", "path": "path/to/manifest.json"}
```

> ACG: servicebus.configuration \| Returns: returnValue:Boolean; errorText:String \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="apipermissionsobject"></a>
## `ApiPermissionsObject`

`luna://com.webos.service.bus/ApiPermissionsObject`

Describe the group to which methods of the service belong. The properties of this object serve as patterns for methods (including their categories) and the values for these properties are set of groups for the methods matching the patterns.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bus/ApiPermissionsObject '{}'
```

> Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="getserviceapiversions"></a>
## `getServiceAPIVersions`

`luna://com.webos.service.bus/getServiceAPIVersions`

Gets service API version from the ls-hub. API version will be returned as a value of "versions" object. Value may have any type. It depends from the JSON object, which is set as a version for a particular service name in a role file. If service doesn't have service info, "returnValue" will be set to false and "unknown" list will contain the name.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `services` | String array (required) A list of service names, which versions we are requesting for. |

**Returns:**

| Field | Type / notes |
|---|---|
| `versions` | Object (required) An object with keys as service names, and values as corresponding versions. |
| `unknown` | String array (optional) A list of unknown/invalid service names. |

```sh
luna-send -n 1 -f luna://com.webos.service.bus/getServiceAPIVersions '{"services": ["com.palm.systemservice", "com.webos.unknown_service"]}
```

> ACG: servicebus.communication \| Returns: returnValue:Boolean; versions:Object; unknown:String array \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="iscallallowed"></a>
## `isCallAllowed`

`luna://com.webos.service.bus/isCallAllowed`

Checks that call is allowed from specified requester to specified URI.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) Uri that will be called by specified requester |
| `requester` | String (required) Requester that will call specified uri. |

**Returns:**

| Field | Type / notes |
|---|---|
| `allowed` | Boolean (required) Indicates if call is allowed. Possible values are: - true: Call is allowed. - false: Call is not allowed. |

```sh
luna-send -n 1 -f luna://com.webos.service.bus/isCallAllowed '{"requester": "com.webos.customer", "uri": "luna://com.webos.product/method"}
```

> ACG: servicebus.communication \| Returns: returnValue:Boolean; allowed:Boolean \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="queryservicepermissions"></a>
## `queryServicePermissions`

`luna://com.webos.service.bus/queryServicePermissions`

Queries a service to: Obtain the set of rules that are relevant to the service. List the API that are required (client permissions) List the API that are provided (API permissions). The API permissions are compiled from the .api.json files and the client permissions are compiled from the .perm.json files and from service registration in run time. Note: This method must be used for debugging a service. Do not use it in your runtime application.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `service` | String (required) Name of the service to be queried. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `client` | String array (required) Description of client permissions: list of groups to which the requested service has access. |
| `api` | Object: ApiPermissionsObject (required) Description of API permissions as a JSON object. Note: Check example below. |

```sh
luna-send -n 1 -f luna://com.webos.service.bus/queryServicePermissions '{"service": "com.webos.booster"}
```

> ACG: servicebus.communication \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; client:String array; api:Object: ApiPermissionsObject \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="removemanifestsdir"></a>
## `removeManifestsDir`

`luna://com.webos.service.bus/removeManifestsDir`

Removes manifests directory which were added by the addManifestsDir method. Note: Only services present in the "hub.configuration" security group are allowed to call this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `prefix` | String (optional) Prefix that adjust relative paths for manifests directory path and paths in manifests to absolute |
| `dirpath` | String (required) Directory path (treated as relative if prefix is specified or absolute if not) |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure in operation |

```sh
luna-send -n 1 -f luna://com.webos.service.bus/removeManifestsDir '{"prefix": "/prefix", "dirpath": "path/to/manifests"}
```

> ACG: servicebus.configuration \| Returns: returnValue:Boolean; errorText:String \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="removeonemanifest"></a>
## `removeOneManifest`

`luna://com.webos.service.bus/removeOneManifest`

Removes manifest file data from hub security configuration. Only services present in the "hub.configuration" security group are allowed to call this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `path` | String (required) Path to the manifest file. |
| `prefix` | String (required) Prefix that will be applied for all files in the manifest file. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure in operation |

```sh
luna-send -n 1 -f luna://com.webos.service.bus/removeOneManifest '{"prefix": "/prefix", "path": "path/to/manifest.json"}
```

> ACG: servicebus.configuration \| Returns: returnValue:Boolean; errorText:String \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="signal_addmatch"></a>
## `signal/addmatch`

`luna://com.webos.service.bus/signal/addmatch`

Registers a client to receive signals from webOS services matching the category and method specified in the parameters. If method parameter is not specified then the client will be registered to receive all signals matching the category.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (required) Specifies a category name. A category represents a set of signals. |
| `method` | String (optional) S pecifies a signal name from the category. Examples of signals in the category /com/palm/bluetooth/gap: /com/palm/bluetooth/gap/radioon /com/palm/bluetooth/gap/radiooff /com/palm/bluetooth/gap/visibleon /com/palm/bluetooth/gap/visibleoff /com/palm/bluetooth/gap/searchon /com/palm/bluetooth/gap/searchoff If the signal name specified in the method parameter is /com/palm/bluetooth/ |

```sh
luna-send -i luna://com.webos.service.bus/signal/addmatch '{"category": "/com/palm/power"}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="signal_registerserverstatus"></a>
## `signal/registerServerStatus`

`luna://com.webos.service.bus/signal/registerServerStatus`

Registers a client to receive the signal sent by the bus, when a service is registered/unregistered on the bus.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serviceName` | String (required) Name of a service that the client wants to be notified, when it is registered/unregistered on the bus. |

**Returns:**

| Field | Type / notes |
|---|---|
| `serviceName` | String (required) Name of the service. |
| `connected` | Boolean (required) If service is registered, connected contains true. If service is unregistered, connected contains false. |

```sh
luna-send -i luna://com.webos.service.bus/signal/registerServerStatus '{"serviceName": "com.webos.service.sleep"}
```

> ACG: servicebus.communication \| Returns: serviceName:String; connected:Boolean \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)

<a id="signal_registerservicecategory"></a>
## `signal/registerServiceCategory`

`luna://com.webos.service.bus/signal/registerServiceCategory`

Registers a client to the signal sent by the bus, when a service adds the specified category. This method does not register the specified category but registers a client interested to receive the signal when the category is added to the service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serviceName` | String (required) Name of the service that a client wants to be notified, when the specified category is added to that service. Example : com.webos.service.systemservice |
| `category` | String (optional) Category name. Example: /recognition/finger Example: If the values in the above example parameters are used then the client will receive the signal if com.webos.service.systemservice registers the /recognition/finger category . |

**Returns:**

| Field | Type / notes |
|---|---|
| `category name` | String array (optional) List of registered methods in the category. |

```sh
luna-send -i luna://com.webos.service.bus/signal/registerServiceCategory '{"serviceName": "com.palm.sleep"}
```

> ACG: None \| Returns: category name:String array \| Service: The service provides: an interface for clients to register to signals from other clients methods for receiving from com.webos.service.bus data about registered clients. methods for configuring com.web

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bus/)
