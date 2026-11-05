# `com.webos.service.nettools`

Network tools service: provides standard diagnostics such as ping/ping6, arping, HTTP checks, hostname resolution, VLAN creation, and get/set hostname.

12 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`arping`](#arping) | public |  | network | documented | Performs an ARP request to resolve IP address to mac address which can then be used to detect IP address conflicts. The implementation uses  |
| [`checkhttp`](#checkhttp) | public |  | network | documented | Creates a TCP socket and checks if it can successfully connect to the hostURL using the standard http port (port 80). |
| [`createVlan`](#createvlan) | public |  | network | documented | Creates a VLAN for the provided index and interface. |
| [`deleteVlan`](#deletevlan) | public |  | network | documented | Provided VLAN index will be deleted for the provided interface, if present. |
| [`detailping`](#detailping) | private |  | network | inferred | Handles the detailping. |
| [`detailping6`](#detailping6) | private |  | network | inferred | Handles the detailping 6. |
| [`gethostname`](#gethostname) | public | yes | network | documented | Gets the hostname for the system. The implementation uses a call to gethostname() in glibc. |
| [`interface`](#interface) | unknown |  | network | documented | Provides the name of interface Sample example for "interface" object : { "name":"eth0" } |
| [`ping`](#ping) | public |  | network | documented | "Ping" an IPv4 network address or hostname to determine if it is reachable. The maximum wait time is 5 seconds. The implementation uses a ca |
| [`ping6`](#ping6) | public |  | network | documented | Pings an IPv6 network address or host name to determine if it is reachable. The maximum amount of time the ping waits for a reply is 5 secon |
| [`resolvehostname`](#resolvehostname) | public |  | network | documented | Performs a DNS request to resolve hostname to list all IP addresses that it maps to. This will return IPv4 or IPv6 addresses depending upon  |
| [`sethostname`](#sethostname) | public |  | network | documented | Sets a new hostname for the system. The implementation uses a call to sethostname() in glibc. |

<a id="arping"></a>
## `arping`

`luna://com.webos.service.nettools/arping`

Performs an ARP request to resolve IP address to mac address which can then be used to detect IP address conflicts. The implementation uses a call to the system arping utility: "arping -c 1 -f -I ifName ipaddress". arping is part of the iputils package available from http://www.skbuff.net/iputils/.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ifName` | String (required) Indicates the network interface to use for the arping command. Example: eth0 |
| `ipAddress` | String (required) Indicates the IP address for which the mac address needs to be resolved Example: 192.168.1.100 |

**Returns:**

| Field | Type / notes |
|---|---|
| `foundMacAddress` | String (optional) Indicates any MAC address if found for the IP address. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/arping '{ "ifName":"eth0", "ipAddress":"10.195.248.213" }
```

> ACG: nettools.operation \| Returns: returnValue:Boolean; foundMacAddress:String; errorText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="checkhttp"></a>
## `checkhttp`

`luna://com.webos.service.nettools/checkhttp`

Creates a TCP socket and checks if it can successfully connect to the hostURL using the standard http port (port 80).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `hostUrl` | String (required) Indicates the URL on which to test the http connection. The URL must start with "www." and must end with one of the following: .org .com .net .gov .edu .jp .int .mil Example: www.lge.com |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorrText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/checkhttp '{ "hostUrl":"www.lge.com" }
```

> ACG: nettools.operation \| Returns: returnValue:Boolean; errorrText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="createvlan"></a>
## `createVlan`

`luna://com.webos.service.nettools/createVlan`

Creates a VLAN for the provided index and interface.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `index` | String (required) VLAN ID, range 1 ~ 4094. |
| `interface` | Object: interface (required) Interface details to create VLAN tag. |
| `method` | String (optional) "dhcp" or "manual" |
| `address` | String (optional) Sets a new IP address. Note: Only when 'method' is specified as 'manual'. |
| `netmask` | String (optional) Sets a new netmask. Note: Only when 'method' is specified as 'manual'. |
| `gateway` | String (optional) Sets a new gateway IP address. Note: Only when 'method' is specified as 'manual'. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/createVlan '{ "interface":{ "name":"eth0" }, "index":9 }
```

> ACG: nettools.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="deletevlan"></a>
## `deleteVlan`

`luna://com.webos.service.nettools/deleteVlan`

Provided VLAN index will be deleted for the provided interface, if present.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `index` | String (required) VLAN ID, range 1 ~ 4094. |
| `interface` | Object: interface (required) Interface details to delete VLAN tag |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/deleteVlan '{ "interface":{ "name":"eth0" }, "index":9 }
```

> ACG: nettools.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="detailping"></a>
## `detailping`

`luna://com.webos.service.nettools/detailping`

Handles the detailping.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/detailping '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="detailping6"></a>
## `detailping6`

`luna://com.webos.service.nettools/detailping6`

Handles the detailping 6.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/detailping6 '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gethostname"></a>
## `gethostname`

`luna://com.webos.service.nettools/gethostname`

Gets the hostname for the system. The implementation uses a call to gethostname() in glibc.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribe to get the notifications. Possible values are: true : Subscribed for notifications false : Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `hostname` | String (required) Indicates the current hostname of the system. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/gethostname '{}
```

> ACG: nettools.operation \| Returns: returnValue:Boolean; hostname:String; errorText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="interface"></a>
## `interface`

`luna://com.webos.service.nettools/interface`

Provides the name of interface Sample example for "interface" object : { "name":"eth0" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/interface '{}'
```

> Service: Provides a selection of standard network tools. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="ping"></a>
## `ping`

`luna://com.webos.service.nettools/ping`

"Ping" an IPv4 network address or hostname to determine if it is reachable. The maximum wait time is 5 seconds. The implementation uses a call to the system ping command: "ping -c 1 -w 5 hostname ifName". Note: To ping an IPv6 address, use the ping6() method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `hostname` | String (required) Indicates the hostname or network address to ping. Network address must be IPv4, IPv6 is not supported. Example: www.lge.com or 10.10.1.1 |
| `ifName` | String (optional) Interface on which to issue the ping. Example: eth0 Note : If unspecified it will use the interface with the default gateway. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section of this method for details. |
| `ipaddress` | String (optional) Indicates the IP address requested for ping. |
| `time` | Number (optional) Indicates the time taken for the ping response. |
| `hostname` | String (optional) Indicates the hostname or network address used for ping. |
| `bytes` | Number (optional) Indicates the number of bytes - Ping packet size. |
| `ttl` | Number (optional) Indicates the time to live. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/ping '{ "hostname":"127.0.0.1", "ifName":"lo" }
```

> ACG: nettools.operation \| Returns: returnValue:Boolean; errorText:String; ipaddress:String; time:Number; hostname:String; bytes:Number; ttl:Number \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="ping6"></a>
## `ping6`

`luna://com.webos.service.nettools/ping6`

Pings an IPv6 network address or host name to determine if it is reachable. The maximum amount of time the ping waits for a reply is 5 seconds. Internally, the implementation uses a call to the system ping command: "ping6 -c 1 -w 5 hostname ifName". Note: To ping an IPv4 address, use the ping() method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `hostname` | String (required) Indicates the hostname or the network address to ping. Note : It must be a valid IPv6 address. Example : ac78::cgff:baff:eghh:hh05 |
| `ifName` | String (optional) Indicates the interface through which the ping is to be issued. Example : eth0 Note : By default, the ping is issued on the default gateway. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" of this method for details. |
| `ipaddress` | String (optional) Indicates the IP address of the system that is pinged. |
| `time` | Number (optional) Indicates the time taken for the ping response in milliseconds. |
| `hostname` | String (optional) Indicates the hostname or network address that is pinged. |
| `bytes` | Number (optional) Indicates the ping packet size in bytes. |
| `ttl` | Number (optional) Indicates the time to live. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/ping6 '{ "hostname":"fe80::a8bb:ccff:fedd:ee01" }
```

> ACG: nettools.operation \| Returns: returnValue:Boolean; errorText:String; ipaddress:String; time:Number; hostname:String; bytes:Number; ttl:Number \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="resolvehostname"></a>
## `resolvehostname`

`luna://com.webos.service.nettools/resolvehostname`

Performs a DNS request to resolve hostname to list all IP addresses that it maps to. This will return IPv4 or IPv6 addresses depending upon what the network interface supports. The implementation uses a call to the POSIX.1-2001 getaddrinfo() function, please refer to RFC 2553 (https://www.ietf.org/rfc/rfc2553.txt).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `hostname` | String (required) Indicates the hostname to be resolved. The hostname must start with "www." and must end with one of the following: .org .com .net .gov .edu .jp .int .mil Example: www.lge.com |

**Returns:**

| Field | Type / notes |
|---|---|
| `resolvedIpAddress` | String array (optional) Indicates the list of resolved IP addresses. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/resolvehostname '{ "hostname":"www.lge.com" }
```

> ACG: nettools.operation \| Returns: returnValue:Boolean; resolvedIpAddress:String array; errorText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)

<a id="sethostname"></a>
## `sethostname`

`luna://com.webos.service.nettools/sethostname`

Sets a new hostname for the system. The implementation uses a call to sethostname() in glibc.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `hostname` | String (required) Indicates the new hostname for the system. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.nettools/sethostname '{ "hostname":"nnnn6" }
```

> ACG: nettools.management \| Returns: returnValue:Boolean; errorText:String \| Service: Provides a selection of standard network tools.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-nettools/)
