# `com.webos.service.rosbridge`

5 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`call`](#call) | public |  | misc | Calls service in ROS 2 world. |
| [`list`](#list) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group rosbridge.info); name only |
| [`publish`](#publish) | public |  | misc | Publishes topic message from LS2 (webOS luna bus) to ROS 2. |
| [`status`](#status) | unknown |  | misc | Registered in webOS OSE sysbus api.json (ACG group rosbridge.info); name only |
| [`subscribe`](#subscribe) | public | yes | misc | Subscribe topic message from ROS 2 world. |

<a id="call"></a>
## `call`

`luna://com.webos.service.rosbridge/call`

Calls service in ROS 2 world.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of ROS 2 message. |
| `type` | String (required) ROS 2 type name. |
| `message` | Object (required) ROS 2 message. The JSON schema depends on ROS 2 message structure. |

```sh
luna-send -n 1 -f luna://com.webos.service.rosbridge/call '{ "name":"add_two_ints", "type":"example_interfaces/srv/AddTwoInts", "message": { "a": 100, "b": 200} }
```

> ACG: rosbridge.service \| Returns: returnValue:Boolean; errorText:String \| Service: Allows an app on a webOS device to communicate with a service running on a ROS 2 device. Supported Functionality: webOS web app can subscribe/publish topic to ROS 2. webOS web app can call service in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-rosbridge/)

<a id="list"></a>
## `list`

`luna://com.webos.service.rosbridge/list`

Registered in webOS OSE sysbus api.json (ACG group rosbridge.info); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rosbridge/list '{}'
```

> Listed under ACG group "rosbridge.info" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.rosbridge/blob/master/files/sysbus/com.webos.service.rosbridge.api.json)

<a id="publish"></a>
## `publish`

`luna://com.webos.service.rosbridge/publish`

Publishes topic message from LS2 (webOS luna bus) to ROS 2.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of ROS 2 message. |
| `type` | String (required) ROS 2 type name. |
| `message` | Object (required) ROS 2 message. The JSON schema depends on the ROS 2 message structure. |

```sh
luna-send -i -f luna://com.webos.service.rosbridge/subscribe '{ "name":"topic_test", "type":"std_msgs/msg/String", "subscribe":true }'
```

> ACG: rosbridge.topic \| Returns: returnValue:Boolean; errorText:String \| Service: Allows an app on a webOS device to communicate with a service running on a ROS 2 device. Supported Functionality: webOS web app can subscribe/publish topic to ROS 2. webOS web app can call service in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-rosbridge/)

<a id="status"></a>
## `status`

`luna://com.webos.service.rosbridge/status`

Registered in webOS OSE sysbus api.json (ACG group rosbridge.info); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rosbridge/status '{}'
```

> Listed under ACG group "rosbridge.info" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.rosbridge/blob/master/files/sysbus/com.webos.service.rosbridge.api.json)

<a id="subscribe"></a>
## `subscribe`

`luna://com.webos.service.rosbridge/subscribe`

Subscribe topic message from ROS 2 world.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of ROS 2 message. |
| `type` | String (required) ROS 2 type name. |
| `subscribe` | Boolean (required) Subscribe for notifications. This should always to be to true. |

```sh
luna-send -i -f luna://com.webos.service.rosbridge/subscribe '{ "name":"topic_test", "type":"std_msgs/msg/String", "subscribe":true }'
```

> ACG: rosbridge.topic \| Returns: returnValue:Boolean; subscribed:Boolean; errorText:String \| Service: Allows an app on a webOS device to communicate with a service running on a ROS 2 device. Supported Functionality: webOS web app can subscribe/publish topic to ROS 2. webOS web app can call service in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-rosbridge/)
