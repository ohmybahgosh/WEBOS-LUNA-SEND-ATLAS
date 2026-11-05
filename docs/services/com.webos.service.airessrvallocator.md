# `com.webos.service.airessrvallocator`

Opaque resource allocator; appears to allocate and release a shared resource and report allocation events based on its allocate/release/getEvent methods. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`allocate`](#allocate) | private |  | misc | inferred | Handles the allocate. |
| [`getEvent`](#getevent) | private |  | misc | inferred | Returns the event. |
| [`release`](#release) | private |  | misc | inferred | Releases the airessrvallocator. |

<a id="allocate"></a>
## `allocate`

`luna://com.webos.service.airessrvallocator/allocate`

Handles the allocate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airessrvallocator/allocate '{}'
```

> ACG groups: airessrvallocator.operation. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getevent"></a>
## `getEvent`

`luna://com.webos.service.airessrvallocator/getEvent`

Returns the event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airessrvallocator/getEvent '{}'
```

> ACG groups: airessrvallocator.operation. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="release"></a>
## `release`

`luna://com.webos.service.airessrvallocator/release`

Releases the airessrvallocator.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airessrvallocator/release '{}'
```

> ACG groups: airessrvallocator.operation. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
