# `com.webos.service.airessrvallocator`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`allocate`](#allocate) | private |  | misc | Method on com.webos.service.airessrvallocator (from on-device permission registry; parameters undocumented). |
| [`getEvent`](#getevent) | private |  | misc | Method on com.webos.service.airessrvallocator (from on-device permission registry; parameters undocumented). |
| [`release`](#release) | private |  | misc | Method on com.webos.service.airessrvallocator (from on-device permission registry; parameters undocumented). |

<a id="allocate"></a>
## `allocate`

`luna://com.webos.service.airessrvallocator/allocate`

Method on com.webos.service.airessrvallocator (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airessrvallocator/allocate '{}'
```

> ACG groups: airessrvallocator.operation. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getevent"></a>
## `getEvent`

`luna://com.webos.service.airessrvallocator/getEvent`

Method on com.webos.service.airessrvallocator (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airessrvallocator/getEvent '{}'
```

> ACG groups: airessrvallocator.operation. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="release"></a>
## `release`

`luna://com.webos.service.airessrvallocator/release`

Method on com.webos.service.airessrvallocator (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airessrvallocator/release '{}'
```

> ACG groups: airessrvallocator.operation. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
