# `com.webos.service.connectionmanager`

Manages wired and Wi-Fi network connections: reports status and info, sets the default interface, configures IPv4/IPv6, DNS, proxy and tethering, and reports Wake-on-LAN state.

29 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkinternetstatus`](#checkinternetstatus) | private |  | network | inferred | Handles the checkinternetstatus. |
| [`findProxyForURL`](#findproxyforurl) | public |  | connection | documented | Provides the proxy server that was used to reach the target URL. |
| [`getHistory`](#gethistory) | private |  | connection | inferred | Returns the history. |
| [`getinfo`](#getinfo) | public | yes | connection | documented | Gets the MAC addresses for the Wi-Fi and wired interfaces. When subscribed, getInfo periodically checks for any changes in interface MAC add |
| [`getStatus`](#getstatus) | public | yes | connection | documented | Provides the current status of Wi-Fi and wired network connections on the system. |
| [`getUserStatus`](#getuserstatus) | private |  | network | inferred | Returns the user status. |
| [`getwolwowlstatus`](#getwolwowlstatus) | private |  | connection | inferred | Handles the getwolwowlstatus. |
| [`InterfaceInfo`](#interfaceinfo) | unknown |  | connection | documented | This object provides detailed information about the interfaces details Sample "InterfaceInfo" object : { "name" : "eth0", "netmask": "255.25 |
| [`InterfaceMacInfo`](#interfacemacinfo) | unknown |  | connection | documented | Provides interfaces MAC address and name Sample InterfaceMacinfo object : { "name":"eth0", "macAddress":"AA:BB:CC:DD:EE:FF" } |
| [`ipInfo`](#ipinfo) | unknown |  | connection | documented | The object containing IP configuration information. An example would look like: { "subnet": "255.255.255.0", "dns": [ "192.168.100.10" ], "a |
| [`monitorActivity`](#monitoractivity) | public | yes | connection | documented | Monitors the data activity on the wired, Wi-Fi and WAN interfaces for bytes received or transmitted, errors, packets and dropped packets. A  |
| [`proxyInfo`](#proxyinfo) | unknown |  | connection | documented | This object contains the actual system configuration for proxy servers. Sample "proxyInfo" object: { "servers": ["10.10.10.10:80"], "method" |
| [`setDefaultInterface`](#setdefaultinterface) | public |  | connection | documented | Allows to set the default interface. This API allows to change the current default interface with another interface which is in connected st |
| [`setdns`](#setdns) | public |  | connection | documented | Changes the DNS servers for the network. If a SSID value is not provided in the request then the modifications are applied to the wired conn |
| [`setEthernetTethering`](#setethernettethering) | private |  | network | inferred | Sets the ethernet tethering. |
| [`setipv4`](#setipv4) | public |  | connection | documented | Modifies the parameters of an IPv4 connection (wired or Wi-Fi). If a SSID value is not provided in the request, the modifications are applie |
| [`setipv6`](#setipv6) | public |  | connection | documented | Modifies the parameters of an IPv6 connection (wired or Wi-Fi). If a SSID value is not provided in the request then the modifications are ap |
| [`setProxy`](#setproxy) | public |  | connection | documented | Specifies the proxy server for the network. |
| [`setstate`](#setstate) | public |  | connection | documented | Enables or disables the state of either or both the Wi-Fi and wired connections on the system. Note : While all parameters are optional, at  |
| [`setTechnologyState`](#settechnologystate) | public |  | connection | documented | Enables or disables the available connection interfaces which can be: Wired (ethernet) Wi-Fi Note : If a technology is not available on the  |
| [`tv/createVirtualLan`](#tv_createvirtuallan) | private |  | network | inferred | Creates the virtual lan (TV) |
| [`tv/getWolWowlStatus`](#tv_getwolwowlstatus) | private |  | network | documented | Gets Wake-on-LAN / Wake-on-WLAN status |
| [`tv/setExternalWanStatus`](#tv_setexternalwanstatus) | private |  | network | inferred | Sets the external wan status (TV) |
| [`tv/setMacAddress`](#tv_setmacaddress) | private |  | connection | inferred | Sets the MAC address (TV) |
| [`tv/setWolWowlStatus`](#tv_setwolwowlstatus) | private |  | network | documented | Sets Wake-on-LAN / Wake-on-WLAN status |
| [`wifi`](#wifi) | unknown |  | connection | documented | The wifi object provides details on the status of the Wi-Fi connection. If the Wi-Fi connection is available then all the fields of this obj |
| [`wifiInfo`](#wifiinfo) | unknown |  | connection | documented | This object contains the MAC address for the WI-Fi interface. An example object would like this: { "macAddress": "aa:bb:cc:dd:ee" } |
| [`wired`](#wired) | unknown |  | connection | documented | The wired object provides details on the status of the wired connections. If the wired connection is available then all the fields of this o |
| [`wiredInfo`](#wiredinfo) | unknown |  | connection | documented | The object containing the MAC address of the wired interface. |

<a id="checkinternetstatus"></a>
## `checkinternetstatus`

`luna://com.webos.service.connectionmanager/checkinternetstatus`

Handles the checkinternetstatus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/checkinternetstatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, networking, networking.internal, networking.query, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="findproxyforurl"></a>
## `findProxyForURL`

`luna://com.webos.service.connectionmanager/findProxyForURL`

Provides the proxy server that was used to reach the target URL.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `url` | String (required) The complete URL to be checked for proxy access. |
| `host` | String (required) The hostname component of a URL for convenience |

**Returns:**

| Field | Type / notes |
|---|---|
| `proxy` | String (optional) The proxy address for the target URL. For example, "PROXY <proxy1>:1080". For directly connected sites, the value "DIRECT" is returned. |
| `errorCode` | String (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/findProxyForURL '{ "url":"http://www.lge.com", "host":"www.lge.com" }
```

> ACG: networkconnection.query \| Returns: proxy:String; returnValue:String; errorCode:String; errorText:String \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="gethistory"></a>
## `getHistory`

`luna://com.webos.service.connectionmanager/getHistory`

Returns the history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `Message` |  |
| `errorList` |  |
| `totalErrorCount` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/getHistory '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinfo"></a>
## `getinfo`

`luna://com.webos.service.connectionmanager/getinfo`

Gets the MAC addresses for the Wi-Fi and wired interfaces. When subscribed, getInfo periodically checks for any changes in interface MAC addresses and notifies subscribers when changes are detected. The check interval is 1 second.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to be notified of changes in interfaces. Possible values are: true: Subscribed. false (Default): Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `wifiInfo` | Object: wifiInfo (optional) Information about the Wi-Fi interface. |
| `wiredInfo` | Object: wiredInfo (optional) Information about the wired interface. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/getinfo '{}
```

> ACG: networkconnection.query \| Returns: wifiInfo:Object: wifiInfo; wiredInfo:Object: wiredInfo; returnValue:Boolean; subscribed:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services \|\| aiowebostv GET_CONNECTION_INFO; lgtv2 uses it internally; snabb/webostv saw 404 on its (older) TV.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/hobbyquaker/lgtv2/blob/master/index.js)

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.connectionmanager/getStatus`

Provides the current status of Wi-Fi and wired network connections on the system.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS OSE API level 23+; webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to this method to get notified on changes to the status of the network connection. Possible values are: true: Subscribed. false (Default): Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `isInternetConnectionAvailable` | Boolean (required) Indicates if internet connection is available. Possible values are: - true - Internet connection available - false - Internet connection is unavailable |
| `wifi` | Object: wifi (required) Information about the Wi-Fi connection. |
| `wired` | Object: wired (required) Information about the wired connection. |
| `offlineMode` | String (optional) Indicates if the system is offline. Possible values are: - enabled- System is offline - disabled- System is online |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/getStatus '{}
```

> ACG: networkconnection.query \| Returns: isInternetConnectionAvailable:Boolean; wifi:Object: wifi; wired:Object: wired; offlineMode:String; subscribed:Boolean; returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services \|\| ACG: networkconnection.query \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/), [2](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md)

<a id="getuserstatus"></a>
## `getUserStatus`

`luna://com.webos.service.connectionmanager/getUserStatus`

Returns the user status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `bluetooth` |  |
| `cellular` |  |
| `checkingInternet` |  |
| `connected` |  |
| `connectedContexts` |  |
| `dns1` |  |
| `enabled` |  |
| `gateway` |  |
| `interfaceName` |  |
| `ipAddress` |  |
| `isInternetConnectionAvailable` |  |
| `netmask` |  |
| `offlineMode` |  |
| `onInternet` |  |
| `plugged` |  |
| `proxyinfo` |  |
| `state` |  |
| `tetheringEnabled` |  |
| `wan` |  |
| `wifi` |  |
| `wifiDirect` |  |
| `wired` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/getUserStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: activities.callbacks, private, networking, public, networking.internal, networking.query, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getwolwowlstatus"></a>
## `getwolwowlstatus`

`luna://com.webos.service.connectionmanager/getwolwowlstatus`

Handles the getwolwowlstatus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/getwolwowlstatus '{}'
```

> ACG groups: networking.query. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="interfaceinfo"></a>
## `InterfaceInfo`

`luna://com.webos.service.connectionmanager/InterfaceInfo`

This object provides detailed information about the interfaces details Sample "InterfaceInfo" object : { "name" : "eth0", "netmask": "255.255.255.0", "dns1": "192.168.100.10", "dns2": "8.8.8.8", "ipAddress": "192.168.100.204", "dns3": "8.8.4.4", "onInternet": "yes", "method": "dhcp", "state": "connected", "gateway": "192.168.100.1", "interfaceName": "eth0", "plugged": true, "proxyInfo" : { "servers": ["10.10.10.10:80"], "method": "manual", "excludes": ["www.lge.com"] } "checkingInternet":false }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/InterfaceInfo '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="interfacemacinfo"></a>
## `InterfaceMacInfo`

`luna://com.webos.service.connectionmanager/InterfaceMacInfo`

Provides interfaces MAC address and name Sample InterfaceMacinfo object : { "name":"eth0", "macAddress":"AA:BB:CC:DD:EE:FF" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/InterfaceMacInfo '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="ipinfo"></a>
## `ipInfo`

`luna://com.webos.service.connectionmanager/ipInfo`

The object containing IP configuration information. An example would look like: { "subnet": "255.255.255.0", "dns": [ "192.168.100.10" ], "address": "192.168.100.204", "gateway": "192.168.100.1", "interface": "eth0" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/ipInfo '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="monitoractivity"></a>
## `monitorActivity`

`luna://com.webos.service.connectionmanager/monitorActivity`

Monitors the data activity on the wired, Wi-Fi and WAN interfaces for bytes received or transmitted, errors, packets and dropped packets. A data counter will be started as soon as there is even a single subscriber and the counter will be stopped if the subscriber count drops to 0.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications. false : Not subscribed Note : This parameter needs to be set to true else the method will fail and return an error. |

**Returns:**

| Field | Type / notes |
|---|---|
| `sampleInterval` | Number (optional) Indicates the time duration for sampling the data activity in msec. |
| `wired` | Object: dataStats (optional) Indicates the data activity for the wired interface. |
| `wifi` | Object: dataStats (optional) Indicates the data activity for Wi-Fi interface. |
| `wan` | Object: dataStats (optional) Indicates the data activity for Wan interface. |

```sh
luna-send -i -f luna://com.webos.service.connectionmanager/monitorActivity '{"subscribe":true}
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean; subscribed:Boolean; sampleInterval:Number; wired:Object: dataStats; wifi:Object: dataStats; wan:Object: dataStats \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="proxyinfo"></a>
## `proxyInfo`

`luna://com.webos.service.connectionmanager/proxyInfo`

This object contains the actual system configuration for proxy servers. Sample "proxyInfo" object: { "servers": ["10.10.10.10:80"], "method": "manual", "excludes": ["www.lge.com"] }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/proxyInfo '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="setdefaultinterface"></a>
## `setDefaultInterface`

`luna://com.webos.service.connectionmanager/setDefaultInterface`

Allows to set the default interface. This API allows to change the current default interface with another interface which is in connected state, for the same technology. For example, ethernet has multiple interfaces like eth0, eth1, eth2. If currently eth0 is the default interface and eth1, eth2 have 'state' field as 'connected' in getStatus() method, then either eth1 and eth2 can be set as default interfaces. Note : Should be used only to change the current state of the interface. It does not retain/persist the interface state due to other events or action.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ifName` | String (required) Interface that is to be made as the default. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setDefaultInterface '{"ifName": "<ifName>"}'
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="setdns"></a>
## `setdns`

`luna://com.webos.service.connectionmanager/setdns`

Changes the DNS servers for the network. If a SSID value is not provided in the request then the modifications are applied to the wired connection. If interface option is not provided operation will be performed on default interface

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `dns` | String array (required) Contains the IP addresses of the DNS servers that need to be changed. |
| `ssid` | String (optional) Indicates the SSID of the Wi-Fi connection to be modified. |
| `interfaceName` | String (optional) Interface on which operation needs to be performed. If not provided operation will be performed on default interface |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setdns '{"dns":["203.0.113.10"]}
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="setethernettethering"></a>
## `setEthernetTethering`

`luna://com.webos.service.connectionmanager/setEthernetTethering`

Sets the ethernet tethering.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setEthernetTethering '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, networking, networking.internal, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setipv4"></a>
## `setipv4`

`luna://com.webos.service.connectionmanager/setipv4`

Modifies the parameters of an IPv4 connection (wired or Wi-Fi). If a SSID value is not provided in the request, the modifications are applied to the wired connection only. If interface option is not provided operation will be performed on default interface. Note: At least one of the following parameters must be provided: SSID , address , netmask or gateway .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `method` | String (required) Specifies the way the IPv4 parameter should be changed. Note: If method is set as "manual", Any other optional parameter is mandatory. Possible values are: dhcp manual |
| `address` | String (optional) If specified, sets a new IP address. |
| `netmask` | String (optional) If specified, sets a new netmask. |
| `gateway` | String (optional) If specified, sets a new gateway IP address. |
| `ssid` | String (optional) Specifies the Wi-Fi connection to modify. If absent, the wired connection is changed. |
| `interfaceName` | String (optional) Interface on which operation needs to be performed. If not provided operation will be performed on default interface |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setipv4 '{ "ssid": "MyTestAP", "method": "manual", "address": "192.168.1.42", "netmask": "255.255.255.0", "gateway": "192.168.1.1" }
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="setipv6"></a>
## `setipv6`

`luna://com.webos.service.connectionmanager/setipv6`

Modifies the parameters of an IPv6 connection (wired or Wi-Fi). If a SSID value is not provided in the request then the modifications are applied to the wired connection only. If interface option is not provided operation will be performed on default interface. Note : At least one of the following parameters must be provided: method , address , prefixLength or gateway.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (optional) If specified, sets a new IP address. Note: If method is set as "manual", the address field is mandatory. |
| `gateway` | String (optional) If specified, sets a new gateway IP address. |
| `method` | String (required) The method parameter specifies the way the IPv4 parameter should be changed. The allowed values are: auto manual |
| `prefixLength` | Number (int32_t) (optional) If specified, sets the prefixLength for the IPv6 address. |
| `ssid` | String (optional) Specifies the Wi-Fi connection to modify. If absent, the wired connection is changed. |
| `interfaceName` | String (optional) Interface on which operation needs to be performed. If not provided operation will be performed on default interface. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setipv6 '{ "ssid": "MyTestAP", "method": "manual", "address": "2001:db8:85a3:8d3:1319:8a2e:370:7348" }
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="setproxy"></a>
## `setProxy`

`luna://com.webos.service.connectionmanager/setProxy`

Specifies the proxy server for the network.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `method` | String (required) The method to get the actual system configuration for proxy servers. Possible values are: direct - Direct access. No proxy information required to be specified. auto - Automatically configure the proxy. Uses the "url" parameter. manual - Manually configure the proxy information. Uses the "servers" parameter and optionally the "excludes" parameter. |
| `url` | String (optional) Automatic proxy configuration URL. If no URL is specified, DHCP/WPAD auto-discover will be tried. If DHCP/WPAD auto-discover methods also fail, then method will be set to "direct". Note: Used when method is set to "auto". |
| `servers` | String array (optional) List of proxy URIs. An URI without a protocol will be interpreted as the generic proxy URI. Note: Used when method is set to "manual". |
| `excludes` | String array (optional) List of hosts which can be accessed directly. Note: Used when method is set to "manual". |
| `ssid` | String (optional) The SSID of the Wi-Fi connection for which the proxy must be set. If no value is provided, the proxy is applied to the wired connection. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setProxy '{ "method":"direct" }
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="setstate"></a>
## `setstate`

`luna://com.webos.service.connectionmanager/setstate`

Enables or disables the state of either or both the Wi-Fi and wired connections on the system. Note : While all parameters are optional, at least one parameter is required , or the method will return error.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `wifi` | String (optional) Set it to enabled to enable Wi-Fi. Set it to disabled to disable Wi-Fi. Any other value will result in an error. |
| `wired` | String (optional) Set it to enabled to enable wired. Set it to disabled to disable wired. Any other value will lead to an error. |
| `offlineMode` | String (optional) Set it to enabled to enable offline mode. Set it to disabled to disable offline mode. Any other value will lead to an error. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setstate '{"wifi":"enabled"}
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="settechnologystate"></a>
## `setTechnologyState`

`luna://com.webos.service.connectionmanager/setTechnologyState`

Enables or disables the available connection interfaces which can be: Wired (ethernet) Wi-Fi Note : If a technology is not available on the device, an error will be returned. The current status of the connection interfaces are reported through the getStatus method. Only one of the listed properties is allowed to be specified.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enabled` | String array (optional) List of technologies to enable. The array can contain: wifi , ethernet. |
| `disabled` | String array (optional) List of technologies to disable. The array can contain: wifi , ethernet. |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/setTechnologyState '{"enabled":["wifi"]}
```

> ACG: networkconnection.management \| Returns: returnValue:Boolean \| Service: Manages wired and wireless network connections across webOS apps and services

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="tv_createvirtuallan"></a>
## `tv/createVirtualLan`

`luna://com.webos.service.connectionmanager/tv/createVirtualLan`

Creates the virtual lan (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/tv/createVirtualLan '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tv_getwolwowlstatus"></a>
## `tv/getWolWowlStatus`

`luna://com.webos.service.connectionmanager/tv/getWolWowlStatus`

Gets Wake-on-LAN / Wake-on-WLAN status

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | boolean (assumed, unverified) |

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/tv/getWolWowlStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, networking, networking.internal, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Powback audit lists setWolWowlStatus/getWolWowlStatus; the same TV reports wolwowlOnOff in getstatus.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="tv_setexternalwanstatus"></a>
## `tv/setExternalWanStatus`

`luna://com.webos.service.connectionmanager/tv/setExternalWanStatus`

Sets the external wan status (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/tv/setExternalWanStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tv_setmacaddress"></a>
## `tv/setMacAddress`

`luna://com.webos.service.connectionmanager/tv/setMacAddress`

Sets the MAC address (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/tv/setMacAddress '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setwolwowlstatus"></a>
## `tv/setWolWowlStatus`

`luna://com.webos.service.connectionmanager/tv/setWolWowlStatus`

Sets Wake-on-LAN / Wake-on-WLAN status

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/tv/setWolWowlStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.connectionmanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, networking, networking.internal, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Param names not read; likely a boolean toggle.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="wifi"></a>
## `wifi`

`luna://com.webos.service.connectionmanager/wifi`

The wifi object provides details on the status of the Wi-Fi connection. If the Wi-Fi connection is available then all the fields of this object will contain relevant information. If the Wi-Fi connection is not available then the state field of this object will be set to disconnected , and is the only value that is returned to the calling app. An example object would look like this: { "netmask": "255.255.255.0", "dns1": "192.168.1.1", "ipAddress": "192.168.1.61", "onInternet": "yes", "method": "dhcp", "ssid": "TestAP", "state": "connected", "gateway": "192.168.1.1", "interfaceName": "wlan0", "proxyInfo" : { "servers": ["10.10.10.10:80"], "method": "manual", "excludes": ["www.lge.com"] } }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/wifi '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="wifiinfo"></a>
## `wifiInfo`

`luna://com.webos.service.connectionmanager/wifiInfo`

This object contains the MAC address for the WI-Fi interface. An example object would like this: { "macAddress": "aa:bb:cc:dd:ee" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/wifiInfo '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="wired"></a>
## `wired`

`luna://com.webos.service.connectionmanager/wired`

The wired object provides details on the status of the wired connections. If the wired connection is available then all the fields of this object contain the relevant information. If the wired connection is not available then the state field of this object will be set to disconnected and is the only value that is returned to the calling app. An example would look like: { "netmask":"255.255.255.0", "dns1":"192.168.100.10", "dns2":"8.8.8.8", "ipAddress":"192.168.100.204", "dns3":"8.8.4.4", "onInternet":"yes", "method":"dhcp", "state":"connected", "gateway":"192.168.100.1", "interfaceName":"eth0", "plugged":true, "proxyInfo":{ "servers":[ "10.10.10.10:80" ], "method":"manual", "excludes":[ "www.lge.com" ] }, "interface":[ { "name":"eth0", "netmask":"255.255.255.0", "dns1":"192.168.100.10", "dns2":"8.8.8.8", "ipAddress":"192.168.100.204", "dns3":"8.8.4.4", "onInternet":"yes", "method":"dhcp"

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/wired '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)

<a id="wiredinfo"></a>
## `wiredInfo`

`luna://com.webos.service.connectionmanager/wiredInfo`

The object containing the MAC address of the wired interface.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.connectionmanager/wiredInfo '{}'
```

> Service: Manages wired and wireless network connections across webOS apps and services \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-connectionmanager/)
