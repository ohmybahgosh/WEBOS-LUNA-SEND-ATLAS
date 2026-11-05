# `com.webos.service.apluspolicymanager`

Appears to manage an 'A+' content/partial-view policy: launches partial-view apps, toggles situation monitoring and synchronizes a visual ('wow') effect. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`launchPartialViewApp`](#launchpartialviewapp) | public |  | apps | inferred | Launches the partial view app. |
| [`setSituationMonitoring`](#setsituationmonitoring) | public |  | misc | inferred | Sets the situation monitoring. |
| [`synchronizeWoweffect`](#synchronizewoweffect) | public |  | misc | inferred | Handles the synchronize woweffect. |

<a id="launchpartialviewapp"></a>
## `launchPartialViewApp`

`luna://com.webos.service.apluspolicymanager/launchPartialViewApp`

Launches the partial view app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apluspolicymanager/launchPartialViewApp '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsituationmonitoring"></a>
## `setSituationMonitoring`

`luna://com.webos.service.apluspolicymanager/setSituationMonitoring`

Sets the situation monitoring.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apluspolicymanager/setSituationMonitoring '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="synchronizewoweffect"></a>
## `synchronizeWoweffect`

`luna://com.webos.service.apluspolicymanager/synchronizeWoweffect`

Handles the synchronize woweffect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apluspolicymanager/synchronizeWoweffect '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
