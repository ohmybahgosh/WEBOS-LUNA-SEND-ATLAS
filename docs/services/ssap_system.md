# `ssap:system`

SSAP system service (TV remote-control protocol): returns system info and host messages and powers the TV on and off.

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getHostMessage`](#gethostmessage) | ssap |  | system-info | documented | Get host message |
| [`getSystemInfo`](#getsysteminfo) | ssap |  | system-info | documented | Get system info (model name, etc.) |
| [`turnOff`](#turnoff) | ssap |  | power | documented | Power off TV (standby) |
| [`turnOn`](#turnon) | ssap |  | power | documented | Power on TV (removed) |

<a id="gethostmessage"></a>
## `getHostMessage`

`ssap://system/getHostMessage`

Get host message

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://system/getHostMessage","payload":{}}
```

> snabb/webostv: 404 no such service or method on its test TV. The SSAP namespace 'system' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getsysteminfo"></a>
## `getSystemInfo`

`ssap://system/getSystemInfo`

Get system info (model name, etc.)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://system/getSystemInfo","payload":{}}
```

> The SSAP namespace 'system' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmisc.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md)

<a id="turnoff"></a>
## `turnOff`

`ssap://system/turnOff`

Power off TV (standby)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://system/turnOff","payload":{}}
```

> On TVs with Standby+ off the response is unreliable (bscpylgtv does not wait for it). LGTV Companion uses it for 'power off'. The SSAP namespace 'system' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="turnon"></a>
## `turnOn`

`ssap://system/turnOn`

Power on TV (removed)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** removed in newer webOS  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://system/turnOn","payload":{}}
```

> bscpylgtv: removed; 'does not work anymore on newer WebOS versions'. Use Wake-on-LAN instead (TV needs 'TV On With Mobile' enabled). The SSAP namespace 'system' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py)
