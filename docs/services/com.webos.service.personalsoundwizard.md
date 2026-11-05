# `com.webos.service.personalsoundwizard`

Personal sound wizard service that gets and sets sound-bar status and personalization settings. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getSoundBarStatus`](#getsoundbarstatus) | private |  | db | inferred | Returns the sound bar status. |
| [`getStatus`](#getstatus) | private |  | misc | inferred | Returns the status. |
| [`setSoundBarStatus`](#setsoundbarstatus) | private |  | db | inferred | Sets the sound bar status. |
| [`setStatus`](#setstatus) | private |  | misc | inferred | Sets the status. |

<a id="getsoundbarstatus"></a>
## `getSoundBarStatus`

`luna://com.webos.service.personalsoundwizard/getSoundBarStatus`

Returns the sound bar status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.personalsoundwizard/getSoundBarStatus '{}'
```

> ACG groups: com.webos.service.personalsoundwizard.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.personalsoundwizard/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.personalsoundwizard/getStatus '{}'
```

> ACG groups: com.webos.service.personalsoundwizard.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsoundbarstatus"></a>
## `setSoundBarStatus`

`luna://com.webos.service.personalsoundwizard/setSoundBarStatus`

Sets the sound bar status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.personalsoundwizard/setSoundBarStatus '{}'
```

> ACG groups: com.webos.service.personalsoundwizard.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setstatus"></a>
## `setStatus`

`luna://com.webos.service.personalsoundwizard/setStatus`

Sets the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.personalsoundwizard/setStatus '{}'
```

> ACG groups: com.webos.service.personalsoundwizard.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
