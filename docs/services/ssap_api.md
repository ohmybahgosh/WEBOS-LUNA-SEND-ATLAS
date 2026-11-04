# `ssap:api`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getServiceList`](#getservicelist) | ssap |  | misc | List the SSAP namespaces exposed to this client |

<a id="getservicelist"></a>
## `getServiceList`

`ssap://api/getServiceList`

List the SSAP namespaces exposed to this client

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://api/getServiceList","payload":{}}
```

> Old TV example (snabb/webostv): api v1, audio v1, media.controls v1, media.viewer v1, pairing v1, system v1, system.launcher v1, system.notifications v1, tv v1, webapp v2. The SSAP namespace 'api' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmisc.go)
