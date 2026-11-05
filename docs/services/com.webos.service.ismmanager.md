# `com.webos.service.ismmanager`

ISM (image-sticking-minimization) manager: launches and closes the ISM routine and refreshes its contents. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeISM`](#closeism) | private |  | system-info | inferred | Closes the ISM. |
| [`launchISM`](#launchism) | private |  | apps | inferred | Launches the ISM. |
| [`refreshISMContents`](#refreshismcontents) | private |  | system-info | inferred | Refreshes the ISM contents. |

<a id="closeism"></a>
## `closeISM`

`luna://com.webos.service.ismmanager/closeISM`

Closes the ISM.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ismmanager/closeISM '{}'
```

> ACG groups: ismmanager.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchism"></a>
## `launchISM`

`luna://com.webos.service.ismmanager/launchISM`

Launches the ISM.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ismmanager/launchISM '{}'
```

> ACG groups: ismmanager.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="refreshismcontents"></a>
## `refreshISMContents`

`luna://com.webos.service.ismmanager/refreshISMContents`

Refreshes the ISM contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ismmanager/refreshISMContents '{}'
```

> ACG groups: ismmanager.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
