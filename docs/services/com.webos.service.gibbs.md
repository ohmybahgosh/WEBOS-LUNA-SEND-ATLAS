# `com.webos.service.gibbs`

Appears to be a broadcast core service; plays channel files and registers broadcast data. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`file/play`](#file_play) | private |  | tv-broadcast | inferred | Plays the gibbs (file) |
| [`file/registerDataMfu`](#file_registerdatamfu) | private |  | tv-broadcast | inferred | Registers the data mfu (file) |
| [`file/setDefaultChList`](#file_setdefaultchlist) | private |  | tv-broadcast | inferred | Sets the default channel list (file) |

<a id="file_play"></a>
## `file/play`

`luna://com.webos.service.gibbs/file/play`

Plays the gibbs (file)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs/file/play '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="file_registerdatamfu"></a>
## `file/registerDataMfu`

`luna://com.webos.service.gibbs/file/registerDataMfu`

Registers the data mfu (file)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs/file/registerDataMfu '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="file_setdefaultchlist"></a>
## `file/setDefaultChList`

`luna://com.webos.service.gibbs/file/setDefaultChList`

Sets the default channel list (file)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs/file/setDefaultChList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
