# `com.webos.service.wifi`

Wi-Fi service: finds available networks, connects and disconnects, manages saved profiles, WPS and enterprise security, and reports country code, status and diagnostics.

88 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`bssInfo`](#bssinfo) | unknown |  | network | documented | Information on one station in a Basic Service Set. Example "bssInfo": { "frequency": 2462, "bssid": "AA:BB:CC:DD:EE:FF", "signal": -65 } |
| [`cancel`](#cancel) | public |  | network | documented | Cancels an ongoing connection attempt. Once the connection is canceled, the state is switched back to idle and the credentials are not saved |
| [`cancelwps`](#cancelwps) | public |  | network | documented | Cancels an ongoing WPS connection attempt. |
| [`changeNetwork`](#changenetwork) | public |  | network | documented | Allows users to change the properties of already stored Wi-Fi profiles . For non-enterprise networks, only the passphrase can be changed for |
| [`connect`](#connect) | public |  | network | documented | Connects to a given SSID, which can be an open network requiring no passphrase (i.e no security field in its argument), hidden network(requi |
| [`createwpspin`](#createwpspin) | public |  | network | documented | Generates an 8 digit random PIN required for the WPS PIN connection method. |
| [`deleteprofile`](#deleteprofile) | public |  | network | documented | Deletes the profile with the given profile ID. |
| [`enterpriseSecurity`](#enterprisesecurity) | unknown |  | network | documented | Different security fields for connecting to enterprise networks. Example "enterpriseSecurity": { "eapType": "tls", "identity": "work", "pass |
| [`findnetworks`](#findnetworks) | public | yes | network | documented | Lists all the available Wi-Fi access points found in the area (from a previous Wi-Fi scan) and lists their details like SSID Name, available |
| [`getconnectedprofile`](#getconnectedprofile) | private |  | network | inferred | Handles the getconnectedprofile. |
| [`getCountryCode`](#getcountrycode) | public |  | network | documented | Gets the current country code of the Wi-Fi adapter. Format of the country code follows the alpha-2 code of ISO-3166-1. |
| [`getmultichannelschedmode`](#getmultichannelschedmode) | private |  | network | inferred | Handles the getmultichannelschedmode. |
| [`getNetworks`](#getnetworks) | public | yes | network | documented | Returns a list of available, configured but not available (out of range) networks without triggering an active scan. The users can subscribe |
| [`getprofile`](#getprofile) | public |  | network | documented | Lists the profile with the given profile ID on the system. |
| [`getprofilelist`](#getprofilelist) | public |  | network | documented | Lists all the stored Wi-Fi profiles on the system. |
| [`getstatus`](#getstatus) | public | yes | network | documented | Returns the following: The current status of Wi-Fi connection on the system. If the system is connected to an access point, then the details |
| [`getTSF`](#gettsf) | private |  | network | inferred | Returns the TSF. |
| [`getwifidiagnostics`](#getwifidiagnostics) | private |  | network | inferred | Handles the getwifidiagnostics. |
| [`ipInfo`](#ipinfo) | unknown |  | network | documented | IP information for the connected network i.e. connected Wi-Fi interface returned as a response from the getstatus method. Example "ipInfo":  |
| [`networkInfo`](#networkinfo) | unknown |  | network | documented | Information of each of the networks found by the findNetworks, getNetworks or getstatus method. Example "networkInfo": { "available": true,  |
| [`p2p/addservice`](#p2p_addservice) | public |  | network | documented | Adds a Wi-Fi Direct service. |
| [`p2p/cancel`](#p2p_cancel) | public |  | network | documented | Cancels any ongoing Wi-Fi direct connection attempts. If there is no ongoing connection attempt then this method does nothing. |
| [`p2p/connect`](#p2p_connect) | public |  | network | documented | Connects to a given Wi-Fi direct peer. |
| [`p2p/createautogo`](#p2p_createautogo) | private |  | network | inferred | Handles the createautogo (p 2 p) |
| [`p2p/creategroup`](#p2p_creategroup) | public |  | network | documented | Creates an autonomous Wi-Fi direct group. |
| [`p2p/deleteprofile`](#p2p_deleteprofile) | public |  | network | documented | Deletes a persistent profile for a specific MAC address or all profiles and also disconnect the peer(s) if connected. |
| [`p2p/deleteservice`](#p2p_deleteservice) | public |  | network | documented | Deletes a Wi-Fi Direct service. |
| [`p2p/disconnect`](#p2p_disconnect) | public |  | network | documented | Disconnects the given Wi-Fi direct peer. |
| [`p2p/disconnectgroup`](#p2p_disconnectgroup) | public |  | network | documented | Disconnects a P2P group. |
| [`p2p/findservice`](#p2p_findservice) | public |  | network | documented | Finds all the Wi-Fi Direct services or a specific service based on a service type. Peer-to-peer must be enabled for this method to work. Onc |
| [`p2p/getdevicename`](#p2p_getdevicename) | public |  | network | documented | Gets the device name used for Wi-Fi direct communication, which appears as the peer name for this device on the other neighboring Wi-Fi dire |
| [`p2p/getgrouppeers`](#p2p_getgrouppeers) | public |  | network | documented | Gets the list of peers for an existing Wi-Fi direct group. |
| [`p2p/getgroups`](#p2p_getgroups) | public | yes | network | documented | Gets information about all Wi-Fi Direct groups. Callers can subscribe to this method to be notified of any changes in the list of groups. |
| [`p2p/getp2prequests`](#p2p_getp2prequests) | public | yes | network | documented | Subscribe the caller for notifications of the incoming Wi-Fi direct connection requests. |
| [`p2p/getpeers`](#p2p_getpeers) | public | yes | network | documented | Gets information about the Wi-Fi Direct peers. Callers can subscribe to this method to be notified of changes in the list of neighboring pee |
| [`p2p/getstate`](#p2p_getstate) | public | yes | network | documented | Gets the current state of Wi-Fi direct connection on this device. |
| [`p2p/getwifidisplayinfo`](#p2p_getwifidisplayinfo) | public |  | network | documented | Gets the Wi-Fi display parameters. |
| [`p2p/invite`](#p2p_invite) | public |  | network | documented | Invites a Wi-Fi direct peer to the group to which this device belongs. |
| [`p2p/rejectpeer`](#p2p_rejectpeer) | public |  | network | documented | Reject a connection attempt from a peer (specified with a device address). This is a mechanism to reject a pending GO Negotiation with a pee |
| [`p2p/setdevicename`](#p2p_setdevicename) | public |  | network | documented | Sets the device name for the Wi-Fi direct communication. This name appears as peer name for this device on other neighboring Wi-Fi direct de |
| [`p2p/setgointent`](#p2p_setgointent) | public |  | network | documented | Changes the group owner intent value used by Miracast service. Miracast service uses this API when TV needs to change the role in the P2P (P |
| [`p2p/setlistenchannel`](#p2p_setlistenchannel) | public |  | network | documented | Before any connection can be formed, P2P devices have to find each other. For this they alternately listen and send probe requests with addi |
| [`p2p/setlistenparams`](#p2p_setlistenparams) | public |  | network | documented | Control P2P extended listen parameters like period and interval, which determines the frequency at which the TV is listening for new connect |
| [`p2p/setstate`](#p2p_setstate) | public |  | network | documented | Enables or disables the Wi-Fi Direct connection, as well as to set listen and persistent modes. |
| [`p2p/settethering`](#p2p_settethering) | public |  | network | documented | Enables or disables a groups' tethering property. |
| [`p2p/setwifidisplayinfo`](#p2p_setwifidisplayinfo) | public |  | network | documented | Sets the Wi-Fi display parameters. |
| [`p2p/wfds/advertiseService`](#p2p_wfds_advertiseservice) | private |  | network | inferred | Handles the advertise service (p 2 p wfds) |
| [`p2p/wfds/boundPort`](#p2p_wfds_boundport) | private |  | network | inferred | Handles the bound port (p 2 p wfds) |
| [`p2p/wfds/cancelAdvertiseService`](#p2p_wfds_canceladvertiseservice) | private |  | network | inferred | Cancels the advertise service (p 2 p wfds) |
| [`p2p/wfds/closeSession`](#p2p_wfds_closesession) | private |  | network | inferred | Closes the session (p 2 p wfds) |
| [`p2p/wfds/confirmSession`](#p2p_wfds_confirmsession) | private |  | network | inferred | Handles the confirm session (p 2 p wfds) |
| [`p2p/wfds/connectSessions`](#p2p_wfds_connectsessions) | private |  | network | inferred | Connects the sessions (p 2 p wfds) |
| [`p2p/wfds/createContext`](#p2p_wfds_createcontext) | private |  | network | inferred | Creates the context (p 2 p wfds) |
| [`p2p/wfds/findService`](#p2p_wfds_findservice) | private |  | network | inferred | Handles the find service (p 2 p wfds) |
| [`p2p/wfds/getSession`](#p2p_wfds_getsession) | private |  | network | inferred | Returns the session (p 2 p wfds) |
| [`p2p/wfds/getStatus`](#p2p_wfds_getstatus) | private |  | network | inferred | Returns the status (p 2 p wfds) |
| [`p2p/wfds/releaseContext`](#p2p_wfds_releasecontext) | private |  | network | inferred | Releases the context (p 2 p wfds) |
| [`p2p/wfds/releasePort`](#p2p_wfds_releaseport) | private |  | network | inferred | Releases the port (p 2 p wfds) |
| [`p2p/wfds/setServiceStatus`](#p2p_wfds_setservicestatus) | private |  | network | inferred | Sets the service status (p 2 p wfds) |
| [`p2p/wfds/setSessionReady`](#p2p_wfds_setsessionready) | private |  | network | inferred | Sets the session ready (p 2 p wfds) |
| [`scan`](#scan) | public |  | network | documented | Triggers a manual scan for the Wi-Fi networks. It should not be used together with the findnetworks method as using both at the same time wi |
| [`security`](#security) | unknown |  | network | documented | This object is used to provide security information for establishing a connection. Example "security": { "securityType": "psk", "simpleSecur |
| [`securityType`](#securitytype) | unknown |  | network | documented | A list of array types. Example "securityType": [ "open", "psk", "wps" ] |
| [`setCountryCode`](#setcountrycode) | public |  | network | documented | Sets the current country code of the Wi-Fi adapter. This affects the allowed Wi-Fi channel for both AP (Access Point) and STA (Station) mode |
| [`setmultichannelschedmode`](#setmultichannelschedmode) | private |  | network | inferred | Handles the setmultichannelschedmode. |
| [`setPassthroughParams`](#setpassthroughparams) | private |  | network | inferred | Sets the passthrough params. |
| [`setstate`](#setstate) | public |  | network | documented | Enables or disables Wi-Fi on the system by enabling/disabling the Wi-Fi interface. |
| [`simpleSecurity`](#simplesecurity) | unknown |  | network | documented | Connection information for a simple connection. Example "simpleSecurity": { "passKey": "1234" } |
| [`startwps`](#startwps) | public |  | network | documented | Starts the WPS authentication process. If wpsPin argument is provided then the WPS-PIN method will be used, else WPS-PBC method will be used |
| [`tethering/getMaxStationCount`](#tethering_getmaxstationcount) | public |  | network | documented | Gets the maximum number of stations allowed to connect to the AP. |
| [`tethering/getState`](#tethering_getstate) | public | yes | network | documented | Gets the current Wi-Fi tethering state. |
| [`tethering/getStationCount`](#tethering_getstationcount) | public | yes | network | documented | Gets the number of devices that are connected to the signage softAP. |
| [`tethering/getvlan`](#tethering_getvlan) | private |  | network | inferred | Handles the getvlan (tethering) |
| [`tethering/setMaxStationCount`](#tethering_setmaxstationcount) | public |  | network | documented | Sets the maximum number of stations allowed to connect to the AP. |
| [`tethering/setState`](#tethering_setstate) | public |  | network | documented | Sets the Wi-Fi tethering state. Wi-Fi tethering can either be enabled or disabled. At least the ssid field needs to be set before enabling t |
| [`tethering/setvlan`](#tethering_setvlan) | private |  | network | inferred | Handles the setvlan (tethering) |
| [`tv/factoryWifiSearchResult`](#tv_factorywifisearchresult) | private |  | network | inferred | Handles the factory wifi search result (TV) ⚠️ |
| [`tv/resetWifiSearchResult`](#tv_resetwifisearchresult) | private |  | network | inferred | Resets the wifi search result (TV) ⚠️ |
| [`wearable/getSleepMode`](#wearable_getsleepmode) | private |  | power-mgmt | inferred | Returns the sleep mode (wearable) |
| [`wearable/scanLps`](#wearable_scanlps) | private |  | network | inferred | Scans for lps (wearable) |
| [`wearable/setSleepMode`](#wearable_setsleepmode) | private |  | power-mgmt | inferred | Sets the sleep mode (wearable) |
| [`WifiGroupInfo`](#wifigroupinfo) | unknown |  | network | documented | This object contains information on a Wi-Fi peer-to-peer group. Example "groupInfo": { "frequency": 5180, "owner": true, "ssid": "DIRECT-vG- |
| [`WifiGroups`](#wifigroups) | unknown |  | network | documented | Group information. |
| [`WifiPeerInfo`](#wifipeerinfo) | unknown |  | network | documented | This object contains information on a peer-to-peer client. Example "peerInfo": { "connected": true, "configMethod": 128, "deviceAddress": "A |
| [`WifiPeers`](#wifipeers) | unknown |  | network | documented | List of peers and the related info. |
| [`wifiProfile`](#wifiprofile) | unknown |  | network | documented | A Wi-Fi profile stores all information for a previously successfully connected wireless network. However, it does not store critical securit |
| [`WifiWfdInfo`](#wifiwfdinfo) | unknown |  | network | documented | This object contains information on the Wi-Fi Direct settings of a Wi-Fi Peer connection. It is used in Wi-Fi Peer Info and is only present  |
| [`wpsInfo`](#wpsinfo) | unknown |  | network | documented | WPS information to connect to the peer. Example "wpsInfo":{ "wps":true, "wpspin": "1234" } |

<a id="bssinfo"></a>
## `bssInfo`

`luna://com.webos.service.wifi/bssInfo`

Information on one station in a Basic Service Set. Example "bssInfo": { "frequency": 2462, "bssid": "AA:BB:CC:DD:EE:FF", "signal": -65 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/bssInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.wifi/cancel`

Cancels an ongoing connection attempt. Once the connection is canceled, the state is switched back to idle and the credentials are not saved. If no connection attempt is in progress then calling this method will do nothing.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/cancel '{}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="cancelwps"></a>
## `cancelwps`

`luna://com.webos.service.wifi/cancelwps`

Cancels an ongoing WPS connection attempt.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/cancelwps '{}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="changenetwork"></a>
## `changeNetwork`

`luna://com.webos.service.wifi/changeNetwork`

Allows users to change the properties of already stored Wi-Fi profiles . For non-enterprise networks, only the passphrase can be changed for now. In the future when the support to enterprise networks will be added, this API will be extended to change the other properties as well.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `profileId` | Number (required) ID of the profile that needs to be changed. |
| `passKey` | String (required) The new passkey to be used for the profile. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/changeNetwork '{"profileId": 777, "passKey": "4321" }
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="connect"></a>
## `connect`

`luna://com.webos.service.wifi/connect`

Connects to a given SSID, which can be an open network requiring no passphrase (i.e no security field in its argument), hidden network(requiring wasCreatedWithJoinOther field set to true in its argument), secure networks (authenticating with the specified passphrase), or enterprise networks(currently supported EAP methods are: PEAP, TLS and TTLS). Upon successful connection, the Wi-Fi profile is saved on the system along with its SSID and security details. On the other hand, if the connection is unsuccessful but the parameter storeProfile is set to true then the Wi-Fi profile is still saved on the system along with the connman .config file, which enables connman to connect to this network once it is available. To connect to an already known network i.e a saved profile , the profileId parameter should be set.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ssid` | String (optional) SSID of the desired network. Required for all connections except when using a known profile ( profileId parameter is set). |
| `wasCreatedWithJoinOther` | Boolean (optional) Indicates whether to connect to a hidden network. Possible values are: true - Connect to a hidden network false - Connect to a non-hidden network Default value : false |
| `storeProfile` | Boolean (optional) Indicates whether to store a profile for the network when it is not available (i.e out of range). Possible values are: true - Store a profile false - Ignore a profile Default value: true |
| `security` | Object: security (optional) Set to connect to a secured network. |
| `profileId` | number (optional) ID of the desired profile, which can be obtained from the getprofilelist call. Required to connect with a known profile. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/connect '{ "ssid":"XXX", "security":{ "securityType":"psk", "simpleSecurity":{ "passKey":"1234" } } }
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="createwpspin"></a>
## `createwpspin`

`luna://com.webos.service.wifi/createwpspin`

Generates an 8 digit random PIN required for the WPS PIN connection method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `wpspin` | String (required) An 8 digit random WPS pin. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/createwpspin '{}
```

> ACG: wifi.management \| Returns: wpspin:String; returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="deleteprofile"></a>
## `deleteprofile`

`luna://com.webos.service.wifi/deleteprofile`

Deletes the profile with the given profile ID.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `profileId` | String (required) ID of the profile to be deleted. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/deleteprofile '{"profileId": 777}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="enterprisesecurity"></a>
## `enterpriseSecurity`

`luna://com.webos.service.wifi/enterpriseSecurity`

Different security fields for connecting to enterprise networks. Example "enterpriseSecurity": { "eapType": "tls", "identity": "work", "passphrase": "1234", "caCertFile": "/etc/cert/ca.pem", "clientCertFile": "/etc/cert/user.pem", "privateKeyFile": "/etc/cert/user.prv", "privateKeyPassphrase": "4321" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/enterpriseSecurity '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="findnetworks"></a>
## `findnetworks`

`luna://com.webos.service.wifi/findnetworks`

Lists all the available Wi-Fi access points found in the area (from a previous Wi-Fi scan) and lists their details like SSID Name, available Security Types, Signal Strength and Connection Status. Callers can subscribe to this method to be notified of any changes. As long as there are subscribers to this method, periodic scans will be triggered.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications of change in the list of found networks. Possible values are: true: Subscribed. false (Default): Not subscribed. |
| `interval` | Number (optional) Interval in milliseconds which is used to trigger a scan for new networks. Only the first subscriber is allowed to specify an interval. If any other subscriber provides an interval and error is returned. The default interval is 15000 milliseconds (15 seconds). |

**Returns:**

| Field | Type / notes |
|---|---|
| `foundNetworks` | Object: networkInfo (required) List of found networks. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/findnetworks '{"interval": 15000}
```

> ACG: wifi.query \| Returns: foundNetworks:Object: networkInfo; subscribed:Boolean; returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="getconnectedprofile"></a>
## `getconnectedprofile`

`luna://com.webos.service.wifi/getconnectedprofile`

Handles the getconnectedprofile.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getconnectedprofile '{}'
```

> ACG groups: networking, private, all, networking.query, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcountrycode"></a>
## `getCountryCode`

`luna://com.webos.service.wifi/getCountryCode`

Gets the current country code of the Wi-Fi adapter. Format of the country code follows the alpha-2 code of ISO-3166-1.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `countryCode` | String (required) Current country code of the Wi-Fi adapter. For possible values, see List of ISO 3166 country codes. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getCountryCode '{}
```

> ACG: None \| Returns: countryCode:String; returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="getmultichannelschedmode"></a>
## `getmultichannelschedmode`

`luna://com.webos.service.wifi/getmultichannelschedmode`

Handles the getmultichannelschedmode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getmultichannelschedmode '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnetworks"></a>
## `getNetworks`

`luna://com.webos.service.wifi/getNetworks`

Returns a list of available, configured but not available (out of range) networks without triggering an active scan. The users can subscribe to this method to be notified when there is a change in the list of networks found.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications of change in the list of found networks. Possible values are: true: Subscribed. false (Default): Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `foundNetworks` | Object array: networkInfo (required) List of networks found. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getNetworks '{}
```

> ACG: wifi.privilegedquery \| Returns: foundNetworks:Object array: networkInfo; returnValue:Boolean; subscribed:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="getprofile"></a>
## `getprofile`

`luna://com.webos.service.wifi/getprofile`

Lists the profile with the given profile ID on the system.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `profileId` | String (required) ID of the profile to be listed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `wifiProfile` | Object: wifiProfile (required) Profile corresponding to the given ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getprofile '{"profileId": 777}
```

> ACG: wifi.privilegedquery \| Returns: wifiProfile:Object: wifiProfile; returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="getprofilelist"></a>
## `getprofilelist`

`luna://com.webos.service.wifi/getprofilelist`

Lists all the stored Wi-Fi profiles on the system.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `profileList` | Object: wifiProfile (required) List of stored profiles. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getprofilelist '{}
```

> ACG: wifi.privilegedquery \| Returns: profileList:Object: wifiProfile; returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="getstatus"></a>
## `getstatus`

`luna://com.webos.service.wifi/getstatus`

Returns the following: The current status of Wi-Fi connection on the system. If the system is connected to an access point, then the details of the access point. If the service is online, then the IP related information like address, gateway, DNS etc. Callers can subscribe to this method to be notified of any changes in the Wi-Fi connection status. In case there is no subscription, then it will just return the current status once.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications when Wi-Fi connection status changes. Possible values are: true: Subscribed. false (Default): Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `status` | String (required) Indicates the status of the Wi-Fi. Possible values are: - serviceEnabled: Wi-Fi is enabled - serviceDisabled: Wi-Fi is disabled - connectionStateChanged: Wi-Fi connection is established |
| `networkInfo` | Object: networkInfo (optional) Provides information on the current Wi-Fi network. Applicable only if the Wi-Fi is connected. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getstatus {}
```

> ACG: wifi.query \| Returns: status:String; networkInfo:Object: networkInfo; subscribed:Boolean; returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="gettsf"></a>
## `getTSF`

`luna://com.webos.service.wifi/getTSF`

Returns the TSF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getTSF '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwifidiagnostics"></a>
## `getwifidiagnostics`

`luna://com.webos.service.wifi/getwifidiagnostics`

Handles the getwifidiagnostics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/getwifidiagnostics '{}'
```

> ACG groups: networking, private, all, networking.query, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ipinfo"></a>
## `ipInfo`

`luna://com.webos.service.wifi/ipInfo`

IP information for the connected network i.e. connected Wi-Fi interface returned as a response from the getstatus method. Example "ipInfo": { "interface": "wifi0", "ip": "192.168.1.2", "subnet": "255.255.255.0", "gateway": "192.168.1.1", "dns": ["192.168.1.1"] }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/ipInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="networkinfo"></a>
## `networkInfo`

`luna://com.webos.service.wifi/networkInfo`

Information of each of the networks found by the findNetworks, getNetworks or getstatus method. Example "networkInfo": { "available": true, "signalLevel": 49, "signalBars": 1, "displayName": "xxx", "supported": true, "ssid": "xxx", "availableSecurityTypes": [ "psk", "wps" ], "connectState ": "ipConfigured", "bssInfo":[ { "frequency": 2462, "bssid": "AA:BB:CC:DD:EE:FF", "signal": -65 } ] }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/networkInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_addservice"></a>
## `p2p/addservice`

`luna://com.webos.service.wifi/p2p/addservice`

Adds a Wi-Fi Direct service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `type` | String (required) Service type.Valid service types are upnp or bonjour . |
| `description` | String (optional) Description. Required for upnp service type. |
| `query` | String (optional) Bonjour query. Required for bonjour service type. |
| `response` | String (optional) Bonjour response. Required for bonjour service type. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/addservice '{"type": "upnp", "description": "printer" }
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_cancel"></a>
## `p2p/cancel`

`luna://com.webos.service.wifi/p2p/cancel`

Cancels any ongoing Wi-Fi direct connection attempts. If there is no ongoing connection attempt then this method does nothing.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/cancel '{}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_connect"></a>
## `p2p/connect`

`luna://com.webos.service.wifi/p2p/connect`

Connects to a given Wi-Fi direct peer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `peerAddress` | String (required) Device address of the peer to connect. |
| `wpsInfo` | Object: wpsInfo (required) WPS information for peer connection. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/connect '{"peerAddress": "AA:BB:CC:DD:EE:FF","wpsInfo":{"wps":true}}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_createautogo"></a>
## `p2p/createautogo`

`luna://com.webos.service.wifi/p2p/createautogo`

Handles the createautogo (p 2 p)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/createautogo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_creategroup"></a>
## `p2p/creategroup`

`luna://com.webos.service.wifi/p2p/creategroup`

Creates an autonomous Wi-Fi direct group.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ssid` | String (required) SSID of group to create. |
| `passPhrase` | String (required) Passphrase for connecting to this group. A valid passphrase should have 8 to 63 characters. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/creategroup '{"ssid": "group1", "passPhrase": "12345678" }
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_deleteprofile"></a>
## `p2p/deleteprofile`

`luna://com.webos.service.wifi/p2p/deleteprofile`

Deletes a persistent profile for a specific MAC address or all profiles and also disconnect the peer(s) if connected.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `deviceAddress` | String (required) Device address or 'all' to delete all existing profiles. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/deleteprofile '{"deviceAddress": "all" }
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_deleteservice"></a>
## `p2p/deleteservice`

`luna://com.webos.service.wifi/p2p/deleteservice`

Deletes a Wi-Fi Direct service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `type` | String (required) Service type. Valid service types are upnp or bonjour . |
| `description` | String (optional) Description. Required for upnp service type. |
| `query` | String (optional) Bonjour query. Required for bonjour service type. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/deleteservice '{"type": "upnp", "description": "printer" }
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_disconnect"></a>
## `p2p/disconnect`

`luna://com.webos.service.wifi/p2p/disconnect`

Disconnects the given Wi-Fi direct peer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `peerAddress` | String (required) Device address of the peer to disconnect. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/disconnect '{"peerAddress": "AA:BB:CC:DD:EE:FF"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_disconnectgroup"></a>
## `p2p/disconnectgroup`

`luna://com.webos.service.wifi/p2p/disconnectgroup`

Disconnects a P2P group.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ssid` | String (required) Name of the group to disconnect. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/disconnectgroup '{"ssid": "group1"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_findservice"></a>
## `p2p/findservice`

`luna://com.webos.service.wifi/p2p/findservice`

Finds all the Wi-Fi Direct services or a specific service based on a service type. Peer-to-peer must be enabled for this method to work. Once this method is executed the response will be sent to the subscribers of the getpeers method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `type` | String (required) Service type. Valid service types are upnp or bonjour . |
| `address` | String (optional) A peer to search. If omitted then search for all peers. |
| `version` | number (optional) Version number. Required for upnp service type. |
| `description` | String (optional) Description. Required for upnp service type. |
| `query` | String (optional) Bonjour query. Required for bonjour service type. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/findservice '{"type": "upnp", "description": "", "version": 10 }
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getdevicename"></a>
## `p2p/getdevicename`

`luna://com.webos.service.wifi/p2p/getdevicename`

Gets the device name used for Wi-Fi direct communication, which appears as the peer name for this device on the other neighboring Wi-Fi direct devices.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceName` | String (required) The P2P device name. |
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/getdevicename '{}
```

> ACG: wifi.privilegedquery \| Returns: deviceName:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getgrouppeers"></a>
## `p2p/getgrouppeers`

`luna://com.webos.service.wifi/p2p/getgrouppeers`

Gets the list of peers for an existing Wi-Fi direct group.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ssid` | String (required) Name of the group. |

**Returns:**

| Field | Type / notes |
|---|---|
| `peers` | Object array: WifiPeers (optional) An array of Wi-Fi Peer Info objects. If there are no peers found then this array will be empty. |
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/getgrouppeers '{"ssid": "DIRECT-vG-[LG] webOS TV WEBOS1"}'
```

> ACG: wifi.privilegedquery \| Returns: peers:Object array: WifiPeers; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getgroups"></a>
## `p2p/getgroups`

`luna://com.webos.service.wifi/p2p/getgroups`

Gets information about all Wi-Fi Direct groups. Callers can subscribe to this method to be notified of any changes in the list of groups.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) To be notified if a group is added, set subscribe to true . To be notified if a group is deleted, set subscribe to false . The default value of subscribe is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `groups` | Object array: WifiGroups (optional) Array of objects containing information on Wi-Fi Direct groups. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/getgroups '{}
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; groups:Object array: WifiGroups; errorText:String; errorCode:Number; subscribed:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getp2prequests"></a>
## `p2p/getp2prequests`

`luna://com.webos.service.wifi/p2p/getp2prequests`

Subscribe the caller for notifications of the incoming Wi-Fi direct connection requests.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe to be notified about any incoming Wi-Fi direct connections. Possible values are: true - Subscribe for changes. false - Not subscribed. Default value: false Note: Setting subscribe to false will be a no-op , since nothing will be done by this method then. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `deviceType` | String (optional) Type of the remote device that initiates incoming p2p connection. |

```sh
luna-send -i -f luna://com.webos.service.wifi/p2p/getp2prequests '{"subscribe":true}
```

> ACG: wifi.privilegedquery \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; deviceType:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getpeers"></a>
## `p2p/getpeers`

`luna://com.webos.service.wifi/p2p/getpeers`

Gets information about the Wi-Fi Direct peers. Callers can subscribe to this method to be notified of changes in the list of neighboring peers.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe and get notified of the changes in the list of peers found. Possible values are: true - Subscribe for changes. false - Not subscribed. Default value : false |
| `scan` | Boolean (optional) Indicates if a new scan is to be triggered. Possible values are: true - Runs an active scan. false - Avoids an active scan. Default value : true |

**Returns:**

| Field | Type / notes |
|---|---|
| `peers` | Object array: WifiPeers (optional) Array of objects containing information about the available peers. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -i -f luna://com.webos.service.wifi/p2p/getpeers '{"subscribe":true}
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; subscribed:Boolean; peers:Object array: WifiPeers; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getstate"></a>
## `p2p/getstate`

`luna://com.webos.service.wifi/p2p/getstate`

Gets the current state of Wi-Fi direct connection on this device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Possible values are: true false Default value: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `P2P` | String (required) If P2P is enabled then this value is enabled, otherwise it is disabled. |
| `listenState` | String (required) If listening for incoming connections is enabled then this value is enabled , otherwise disabled. |
| `persistentMode` | String (required) If persistent state is enabled then this value enabled" , "disabled" otherwise. |
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/getstate '{}
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; P2P:String; listenState:String; persistentMode:String; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_getwifidisplayinfo"></a>
## `p2p/getwifidisplayinfo`

`luna://com.webos.service.wifi/p2p/getwifidisplayinfo`

Gets the Wi-Fi display parameters.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `enabled` | Boolean (required) true if Wi-Fi Display feature is enabled, false otherwise. |
| `wfdDeviceType` | String (optional) Device type. One of the following: source, primary-sink, secondary-sink, or dual-role. |
| `wfdSessionAvail` | Boolean (optional) true if Wi-Fi Direct Session is enabled, false otherwise. |
| `wfdRtspPort` | number (optional) Session management control port. |
| `wfdCpSupport` | Boolean (optional) true if Content Protection using HDCP System 2.0/2.1 enabled, false otherwise. |
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/getwifidisplayinfo '{}
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; enabled:Boolean; wfdDeviceType:String; wfdSessionAvail:Boolean; wfdRtspPort:number; wfdCpSupport:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_invite"></a>
## `p2p/invite`

`luna://com.webos.service.wifi/p2p/invite`

Invites a Wi-Fi direct peer to the group to which this device belongs.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `peerAddress` | String (required) Device address of the peer to invite. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/invite '{"peerAddress": "AA:BB:CC:DD:EE:FF" }
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_rejectpeer"></a>
## `p2p/rejectpeer`

`luna://com.webos.service.wifi/p2p/rejectpeer`

Reject a connection attempt from a peer (specified with a device address). This is a mechanism to reject a pending GO Negotiation with a peer and request to automatically block any further connection or discovery of the peer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `peerAddress` | String (required) Device address of the peer to reject the connection attempt from. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/rejectpeer '{"peerAddress": "AA:BB:CC:DD:EE:FF"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_setdevicename"></a>
## `p2p/setdevicename`

`luna://com.webos.service.wifi/p2p/setdevicename`

Sets the device name for the Wi-Fi direct communication. This name appears as peer name for this device on other neighboring Wi-Fi direct devices.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `deviceName` | String (required) Device name to be used. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/setdevicename '{"deviceName": "TV1"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_setgointent"></a>
## `p2p/setgointent`

`luna://com.webos.service.wifi/p2p/setgointent`

Changes the group owner intent value used by Miracast service. Miracast service uses this API when TV needs to change the role in the P2P (Peer-to-Peer) group. Note(s): Subscription is not supported in this API. WiFi and P2P must be enabled to use this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `GOIntent` | Number (required) The intent value to be set. webOS device becomes GO (Group Owner) when its intent value is higher than the peer device. webOS device becomes GC (Group Client) when its intent value is lower than the peer device. Default value of the webOS TV is 1. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 luna://com.webos.service.wifi/p2p/setgointent '{"GOIntent":10}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_setlistenchannel"></a>
## `p2p/setlistenchannel`

`luna://com.webos.service.wifi/p2p/setlistenchannel`

Before any connection can be formed, P2P devices have to find each other. For this they alternately listen and send probe requests with additional P2P information elements on so-called social channels , which are channels 1, 6 and 11 in the 2.4GHz band. This method can be used to set the desired channel, which by default is channel 11.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `listenChannel` | Number (required) Set listen channel. ( Default value is 11) |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/setlistenchannel '{"listenChannel" : 6}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_setlistenparams"></a>
## `p2p/setlistenparams`

`luna://com.webos.service.wifi/p2p/setlistenparams`

Control P2P extended listen parameters like period and interval, which determines the frequency at which the TV is listening for new connections and the time duration for each listen state.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `period` | Number (required) Set the listen state period in ms (Time for which the device will listen each time) Default value is 50 ms. |
| `interval` | Number (required) Set the listen state interval in ms (Frequency at whcih the device will listen) . Default value is 400 ms. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/setlistenparams '{"period" : 100, "interval": 500}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_setstate"></a>
## `p2p/setstate`

`luna://com.webos.service.wifi/p2p/setstate`

Enables or disables the Wi-Fi Direct connection, as well as to set listen and persistent modes.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `P2P` | String (optional) Set to enabled to enable the Wi-Fi direct connection and disabled to disable the Wi-Fi direct connection. |
| `listenState` | String (optional) Set the Wi-Fi direct listen state to either enabled or disabled . Enabling listen state will make this device visible on other Wi-Fi direct devices so that it can initiate connection to them. |
| `persistentMode` | String (optional) Set the P2P persistent mode to enabled or disabled . Enabling persistent mode will save any group created on this device across reboots. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/setstate '{"P2P": "enabled", "listenState": "disabled", "persistentMode": "disabled"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_settethering"></a>
## `p2p/settethering`

`luna://com.webos.service.wifi/p2p/settethering`

Enables or disables a groups' tethering property.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ssid` | String (required) SSID of the group. |
| `tethering` | Boolean (required) To enable tethering , set tethering to true . To disable tethering , set tethering to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/settethering '{"ssid": "group1", "tethering": true }
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_setwifidisplayinfo"></a>
## `p2p/setwifidisplayinfo`

`luna://com.webos.service.wifi/p2p/setwifidisplayinfo`

Sets the Wi-Fi display parameters.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enabled` | Boolean (required) Set to true to enable the Wi-Fi Display feature and false to disable. Note: If set to false , other parameters are disregarded. |
| `deviceType` | String (optional) Device type. Possible device types are : source, primary-sink, secondary-sink, or dual-role. |
| `sessionAvailable` | Boolean (optional) Set to true to enable Wi-Fi Direct Session, false to disable. |
| `rtspPort` | number (optional) Session management control port. |
| `cpSupport` | Boolean (optional) Set to true to enable Content Protection using HDCP System 2.0/2.1 and false to disable. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/setwifidisplayinfo '{"enabled": true, "deviceType": "primary-sink", "sessionAvailable": true, "rtspPort": 7236, "cpSupport": false}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="p2p_wfds_advertiseservice"></a>
## `p2p/wfds/advertiseService`

`luna://com.webos.service.wifi/p2p/wfds/advertiseService`

Handles the advertise service (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/advertiseService '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_boundport"></a>
## `p2p/wfds/boundPort`

`luna://com.webos.service.wifi/p2p/wfds/boundPort`

Handles the bound port (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/boundPort '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_canceladvertiseservice"></a>
## `p2p/wfds/cancelAdvertiseService`

`luna://com.webos.service.wifi/p2p/wfds/cancelAdvertiseService`

Cancels the advertise service (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/cancelAdvertiseService '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_closesession"></a>
## `p2p/wfds/closeSession`

`luna://com.webos.service.wifi/p2p/wfds/closeSession`

Closes the session (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/closeSession '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_confirmsession"></a>
## `p2p/wfds/confirmSession`

`luna://com.webos.service.wifi/p2p/wfds/confirmSession`

Handles the confirm session (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/confirmSession '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_connectsessions"></a>
## `p2p/wfds/connectSessions`

`luna://com.webos.service.wifi/p2p/wfds/connectSessions`

Connects the sessions (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/connectSessions '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_createcontext"></a>
## `p2p/wfds/createContext`

`luna://com.webos.service.wifi/p2p/wfds/createContext`

Creates the context (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/createContext '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_findservice"></a>
## `p2p/wfds/findService`

`luna://com.webos.service.wifi/p2p/wfds/findService`

Handles the find service (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/findService '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_getsession"></a>
## `p2p/wfds/getSession`

`luna://com.webos.service.wifi/p2p/wfds/getSession`

Returns the session (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/getSession '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_getstatus"></a>
## `p2p/wfds/getStatus`

`luna://com.webos.service.wifi/p2p/wfds/getStatus`

Returns the status (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/getStatus '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_releasecontext"></a>
## `p2p/wfds/releaseContext`

`luna://com.webos.service.wifi/p2p/wfds/releaseContext`

Releases the context (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/releaseContext '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_releaseport"></a>
## `p2p/wfds/releasePort`

`luna://com.webos.service.wifi/p2p/wfds/releasePort`

Releases the port (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/releasePort '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_setservicestatus"></a>
## `p2p/wfds/setServiceStatus`

`luna://com.webos.service.wifi/p2p/wfds/setServiceStatus`

Sets the service status (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/setServiceStatus '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2p_wfds_setsessionready"></a>
## `p2p/wfds/setSessionReady`

`luna://com.webos.service.wifi/p2p/wfds/setSessionReady`

Sets the session ready (p 2 p wfds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/p2p/wfds/setSessionReady '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan"></a>
## `scan`

`luna://com.webos.service.wifi/scan`

Triggers a manual scan for the Wi-Fi networks. It should not be used together with the findnetworks method as using both at the same time will result in errors. This method will trigger a scan and return immediately. Results of the scan are posted to the subscribers of findnetworks and getNetworks .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/scan '{}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="security"></a>
## `security`

`luna://com.webos.service.wifi/security`

This object is used to provide security information for establishing a connection. Example "security": { "securityType": "psk", "simpleSecurity": {"passKey": "1234"} }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/security '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="securitytype"></a>
## `securityType`

`luna://com.webos.service.wifi/securityType`

A list of array types. Example "securityType": [ "open", "psk", "wps" ]

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/securityType '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="setcountrycode"></a>
## `setCountryCode`

`luna://com.webos.service.wifi/setCountryCode`

Sets the current country code of the Wi-Fi adapter. This affects the allowed Wi-Fi channel for both AP (Access Point) and STA (Station) modes. Format of the country code follows the alpha-2 code of ISO-3166-1.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `countryCode` | String (required) Alpha-2 country code. For possible values, see List of ISO 3166 country codes . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the Error Codes Reference section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/setCountryCode '{"countryCode":"US"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="setmultichannelschedmode"></a>
## `setmultichannelschedmode`

`luna://com.webos.service.wifi/setmultichannelschedmode`

Handles the setmultichannelschedmode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/setmultichannelschedmode '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpassthroughparams"></a>
## `setPassthroughParams`

`luna://com.webos.service.wifi/setPassthroughParams`

Sets the passthrough params.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/setPassthroughParams '{}'
```

> ACG groups: networking, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setstate"></a>
## `setstate`

`luna://com.webos.service.wifi/setstate`

Enables or disables Wi-Fi on the system by enabling/disabling the Wi-Fi interface.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `state` | String (required) Indicates whether to enable Wi-Fi. Possible values are: enabled: Enable Wi-Fi disabled: Disable Wi-Fi |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/setstate '{"state": "disabled"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="simplesecurity"></a>
## `simpleSecurity`

`luna://com.webos.service.wifi/simpleSecurity`

Connection information for a simple connection. Example "simpleSecurity": { "passKey": "1234" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/simpleSecurity '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="startwps"></a>
## `startwps`

`luna://com.webos.service.wifi/startwps`

Starts the WPS authentication process. If wpsPin argument is provided then the WPS-PIN method will be used, else WPS-PBC method will be used.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `wpsPin` | String (optional) Pin for WPS-PIN mode. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/startwps '{"wpsPin": "64889467"}
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="tethering_getmaxstationcount"></a>
## `tethering/getMaxStationCount`

`luna://com.webos.service.wifi/tethering/getMaxStationCount`

Gets the maximum number of stations allowed to connect to the AP.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `maxStationCount` | Number (required) Number of stations allowed to connect to the AP. Range : 1 ~ 254. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the Error Codes Reference section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tethering/getMaxStationCount '{}
```

> ACG: wifi.query \| Returns: maxStationCount:Number; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="tethering_getstate"></a>
## `tethering/getState`

`luna://com.webos.service.wifi/tethering/getState`

Gets the current Wi-Fi tethering state.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications when there is a change in the list of found peers. Possible values are: true: Subscribed. false (Default): Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `enabled` | Boolean (required) Indicates if Wi-Fi tethering is enabled or disabled. |
| `ssid` | String (optional) The identifier used as SSID for Wi-Fi tethering. This field cannot be set when Wi-Fi tethering is enabled. |
| `securityType` | String (optional) Security type to use for authenticating clients. Possible values are: - open: When open is used, the passphrase is cleared. - psk: When PSK is used, the passphrase needs to be set before enabling Wi-Fi tethering. |
| `timeout` | Number (required) A timeout in minutes after which the Wi-Fi tethering is disabled, when no client is connected. Default value is 5 minutes. |
| `channel` | Number (optional) Channel of the SoftAP |
| `ipAddress` | String (optional) IP address of the SoftAP |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tethering/getState '{}
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; subscribed:Boolean; enabled:Boolean; ssid:String; securityType:String; timeout:Number; channel:Number; ipAddress:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="tethering_getstationcount"></a>
## `tethering/getStationCount`

`luna://com.webos.service.wifi/tethering/getStationCount`

Gets the number of devices that are connected to the signage softAP.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to this method to get notified when a device connects or disconnects from the signage softAP. Possible values are: true: Subscribed. false (Default): Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `stationCount` | Number (required) Number of devices that are connected to the signage softAP. |
| `connectedStations` | String array (required) MAC addresses of the connected clients. |

```sh
luna-send -i -f luna://com.webos.service.wifi/tethering/getStationCount '{"subscribe":true}
```

> ACG: wifi.privilegedquery \| Returns: returnValue:Boolean; subscribed:Boolean; stationCount:Number; connectedStations:String array \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="tethering_getvlan"></a>
## `tethering/getvlan`

`luna://com.webos.service.wifi/tethering/getvlan`

Handles the getvlan (tethering)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tethering/getvlan '{}'
```

> ACG groups: networking, networking.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tethering_setmaxstationcount"></a>
## `tethering/setMaxStationCount`

`luna://com.webos.service.wifi/tethering/setMaxStationCount`

Sets the maximum number of stations allowed to connect to the AP.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `maxStationCount` | Number (required) Number of stations allowed to connect to the AP. Range : 1 ~ 254. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the Error Codes Reference section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tethering/setMaxStationCount '{"maxStationCount" : 1}
```

> ACG: wifi.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="tethering_setstate"></a>
## `tethering/setState`

`luna://com.webos.service.wifi/tethering/setState`

Sets the Wi-Fi tethering state. Wi-Fi tethering can either be enabled or disabled. At least the ssid field needs to be set before enabling tethering. This can be done either with a separate setState call or within the enable call. The "ssid", "securityType" and "passPhrase" configuration values are persisted across device reboots. Note: Although all parameters are optional, at least one parameter needs to be specified.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enabled` | Boolean (optional) Enable or disable Wi-Fi tethering. |
| `ssid` | String (optional) The identifier used as SSID for Wi-Fi tethering. This field cannot be set when Wi-Fi tethering is enabled. |
| `securityType` | String (optional) Security type to use for authenticating clients. Possible values are: open: When open is used, the passphrase is cleared. psk: When PSK is used, the passphrase needs to be set before enabling Wi-Fi tethering. |
| `passPhrase` | String (optional) The passphrase used to authenticate the new clients when Wi-Fi tethering is enabled. This field cannot be set when Wi-Fi tethering is enabled. A valid passphrase should have 8 to 63 characters. |
| `timeout` | Number (optional) A timeout in minutes after which the Wi-Fi tethering is disabled, when no client is connected. Default value is 5 minutes. |
| `channel` | String (optional) Channel of the softap to be used for Wi-Fi tethering. Note : If value greater than 11 is set, channel is automatically set to 6. The value can range from 1 to 11. |
| `ipAddress` | String (optional) IP address of the SoftAP |

```sh
luna-send -n 1 luna://com.webos.service.wifi/tethering/setState '{ "enabled":true, "securityType":"open", "ssid":"MyTestAP", "timeout":60 }
```

> ACG: wifi.management \| Returns: returnValue:Boolean \| Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="tethering_setvlan"></a>
## `tethering/setvlan`

`luna://com.webos.service.wifi/tethering/setvlan`

Handles the setvlan (tethering)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tethering/setvlan '{}'
```

> ACG groups: networking, networking.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tv_factorywifisearchresult"></a>
## `tv/factoryWifiSearchResult` ⚠️ DANGEROUS

`luna://com.webos.service.wifi/tv/factoryWifiSearchResult`

Handles the factory wifi search result (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tv/factoryWifiSearchResult '{}'
```

> ACG groups: networking, private, all, networking.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_resetwifisearchresult"></a>
## `tv/resetWifiSearchResult` ⚠️ DANGEROUS

`luna://com.webos.service.wifi/tv/resetWifiSearchResult`

Resets the wifi search result (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/tv/resetWifiSearchResult '{}'
```

> ACG groups: networking, private, all, networking.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="wearable_getsleepmode"></a>
## `wearable/getSleepMode`

`luna://com.webos.service.wifi/wearable/getSleepMode`

Returns the sleep mode (wearable)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/wearable/getSleepMode '{}'
```

> ACG groups: networking, networking.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wearable_scanlps"></a>
## `wearable/scanLps`

`luna://com.webos.service.wifi/wearable/scanLps`

Scans for lps (wearable)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/wearable/scanLps '{}'
```

> ACG groups: networking, networking.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wearable_setsleepmode"></a>
## `wearable/setSleepMode`

`luna://com.webos.service.wifi/wearable/setSleepMode`

Sets the sleep mode (wearable)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/wearable/setSleepMode '{}'
```

> ACG groups: networking, networking.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wifigroupinfo"></a>
## `WifiGroupInfo`

`luna://com.webos.service.wifi/WifiGroupInfo`

This object contains information on a Wi-Fi peer-to-peer group. Example "groupInfo": { "frequency": 5180, "owner": true, "ssid": "DIRECT-vG-[LG] webOS TV WEBOS1", "tethering": false, "persistent": true }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/WifiGroupInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="wifigroups"></a>
## `WifiGroups`

`luna://com.webos.service.wifi/WifiGroups`

Group information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/WifiGroups '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="wifipeerinfo"></a>
## `WifiPeerInfo`

`luna://com.webos.service.wifi/WifiPeerInfo`

This object contains information on a peer-to-peer client. Example "peerInfo": { "connected": true, "configMethod": 128, "deviceAddress": "AA:BB:CC:DD:EE:FF", "peerIp": "192.168.16.2", "deviceName": "Test Test's G3", "groupOwner": false, "wfdInfo": { "wfdSessionAvail": true, "wfdCpSupport": true, "wfdDeviceType": "source", "wfdRtspPort": 8554 }, "signalLevel": 76 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/WifiPeerInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="wifipeers"></a>
## `WifiPeers`

`luna://com.webos.service.wifi/WifiPeers`

List of peers and the related info.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/WifiPeers '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="wifiprofile"></a>
## `wifiProfile`

`luna://com.webos.service.wifi/wifiProfile`

A Wi-Fi profile stores all information for a previously successfully connected wireless network. However, it does not store critical security things like the passphrase. Example "wifiProfile": { "profileId": 777, "ssid": "xxx", "security": { "securityType": [ "psk", "wps" ] } }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/wifiProfile '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="wifiwfdinfo"></a>
## `WifiWfdInfo`

`luna://com.webos.service.wifi/WifiWfdInfo`

This object contains information on the Wi-Fi Direct settings of a Wi-Fi Peer connection. It is used in Wi-Fi Peer Info and is only present when the connection uses Wi-Fi Direct. Example "WifiWfdInfo": { "wfdDeviceType": "sink", "wfdSessionAvail": true, "wfdCpSupport": true, "wfdRtspPort": 4321 }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/WifiWfdInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)

<a id="wpsinfo"></a>
## `wpsInfo`

`luna://com.webos.service.wifi/wpsInfo`

WPS information to connect to the peer. Example "wpsInfo":{ "wps":true, "wpspin": "1234" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.wifi/wpsInfo '{}'
```

> Service: Manages Wi-Fi connections on a webOS device. It provides an interface to find available Wi-Fi networks and handle connecting and disconnecting the device from those networks. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-wifi/)
