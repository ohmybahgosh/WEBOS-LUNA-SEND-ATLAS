# `com.webos.service.pushclient`

Push/MQTT client: creates and destroys connections, registers services, publishes to and subscribes/unsubscribes from topics, and reports MQTT connection status. _(inferred from the service's methods)_

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`createConnection`](#createconnection) | public |  | network | inferred | Creates the connection. |
| [`deregisterService`](#deregisterservice) | public |  | network | inferred | Handles the deregister service. |
| [`destroyConnection`](#destroyconnection) | public |  | network | inferred | Handles the destroy connection. |
| [`getMqttConnectionStatus`](#getmqttconnectionstatus) | public |  | network | inferred | Returns the mqtt connection status. |
| [`getServiceInfo`](#getserviceinfo) | private |  | network | inferred | Returns the service info. |
| [`getStatus`](#getstatus) | public |  | network | inferred | Returns the status. |
| [`listSubscribedTopics`](#listsubscribedtopics) | public |  | input | inferred | Lists the subscribed topics. |
| [`publish`](#publish) | public |  | network | inferred | Handles the publish. |
| [`publishTopics`](#publishtopics) | private |  | input | inferred | Handles the publish topics. |
| [`registerService`](#registerservice) | public |  | network | inferred | Registers the service. |
| [`subscribeToTopics`](#subscribetotopics) | public |  | input | inferred | Subscribes to the to topics. |
| [`unsubscribeFromTopics`](#unsubscribefromtopics) | public |  | input | inferred | Unsubscribes from the from topics. |

<a id="createconnection"></a>
## `createConnection`

`luna://com.webos.service.pushclient/createConnection`

Creates the connection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/createConnection '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deregisterservice"></a>
## `deregisterService`

`luna://com.webos.service.pushclient/deregisterService`

Handles the deregister service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/deregisterService '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="destroyconnection"></a>
## `destroyConnection`

`luna://com.webos.service.pushclient/destroyConnection`

Handles the destroy connection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/destroyConnection '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmqttconnectionstatus"></a>
## `getMqttConnectionStatus`

`luna://com.webos.service.pushclient/getMqttConnectionStatus`

Returns the mqtt connection status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/getMqttConnectionStatus '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserviceinfo"></a>
## `getServiceInfo`

`luna://com.webos.service.pushclient/getServiceInfo`

Returns the service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/getServiceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.pushclient/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/getStatus '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listsubscribedtopics"></a>
## `listSubscribedTopics`

`luna://com.webos.service.pushclient/listSubscribedTopics`

Lists the subscribed topics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/listSubscribedTopics '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="publish"></a>
## `publish`

`luna://com.webos.service.pushclient/publish`

Handles the publish.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/publish '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="publishtopics"></a>
## `publishTopics`

`luna://com.webos.service.pushclient/publishTopics`

Handles the publish topics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/publishTopics '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerservice"></a>
## `registerService`

`luna://com.webos.service.pushclient/registerService`

Registers the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/registerService '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribetotopics"></a>
## `subscribeToTopics`

`luna://com.webos.service.pushclient/subscribeToTopics`

Subscribes to the to topics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/subscribeToTopics '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unsubscribefromtopics"></a>
## `unsubscribeFromTopics`

`luna://com.webos.service.pushclient/unsubscribeFromTopics`

Unsubscribes from the from topics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pushclient/unsubscribeFromTopics '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
