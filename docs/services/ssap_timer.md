# `ssap:timer`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getSettings`](#getsettings) | ssap |  | misc | Timer settings (read) |
| [`setSettings`](#setsettings) | ssap |  | misc | Timer settings (write) |

<a id="getsettings"></a>
## `getSettings`

`ssap://timer/getSettings`

Timer settings (read)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://timer/getSettings","payload":{}}
```

> Unimplemented TODO in snabb/webostv; payload unknown. The SSAP namespace 'timer' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="setsettings"></a>
## `setSettings`

`ssap://timer/setSettings`

Timer settings (write)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://timer/setSettings","payload":{}}
```

> Unimplemented TODO in snabb/webostv; payload unknown. The SSAP namespace 'timer' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)
