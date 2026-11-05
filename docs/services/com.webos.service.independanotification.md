# `com.webos.service.independanotification`

Integration with the Independa elder-care/video-call platform: launches the service, handles incoming video-call decline, photo icons and power-state notifications. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkResponse`](#checkresponse) | public |  | notifications | inferred | Checks the response. |
| [`closeService`](#closeservice) | public |  | notifications | inferred | Closes the service. |
| [`declineVideoCall`](#declinevideocall) | public |  | notifications | inferred | Handles the decline video call. |
| [`deletePhotoIcon`](#deletephotoicon) | public |  | notifications | inferred | Deletes the photo icon. ⚠️ |
| [`launchIndependa`](#launchindependa) | public |  | notifications | inferred | Launches the independa. |
| [`notifyPowerState`](#notifypowerstate) | public |  | notifications | inferred | Notifies of the power state. |
| [`pauseService`](#pauseservice) | public |  | notifications | inferred | Pauses the service. |
| [`setServiceLangauge`](#setservicelangauge) | public |  | notifications | inferred | Sets the service langauge. |
| [`startService`](#startservice) | public |  | notifications | inferred | Starts the service. |

<a id="checkresponse"></a>
## `checkResponse`

`luna://com.webos.service.independanotification/checkResponse`

Checks the response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/checkResponse '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="closeservice"></a>
## `closeService`

`luna://com.webos.service.independanotification/closeService`

Closes the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/closeService '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="declinevideocall"></a>
## `declineVideoCall`

`luna://com.webos.service.independanotification/declineVideoCall`

Handles the decline video call.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/declineVideoCall '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletephotoicon"></a>
## `deletePhotoIcon` ⚠️ DANGEROUS

`luna://com.webos.service.independanotification/deletePhotoIcon`

Deletes the photo icon.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/deletePhotoIcon '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchindependa"></a>
## `launchIndependa`

`luna://com.webos.service.independanotification/launchIndependa`

Launches the independa.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/launchIndependa '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifypowerstate"></a>
## `notifyPowerState`

`luna://com.webos.service.independanotification/notifyPowerState`

Notifies of the power state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/notifyPowerState '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pauseservice"></a>
## `pauseService`

`luna://com.webos.service.independanotification/pauseService`

Pauses the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/pauseService '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setservicelangauge"></a>
## `setServiceLangauge`

`luna://com.webos.service.independanotification/setServiceLangauge`

Sets the service langauge.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/setServiceLangauge '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startservice"></a>
## `startService`

`luna://com.webos.service.independanotification/startService`

Starts the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.independanotification/startService '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
