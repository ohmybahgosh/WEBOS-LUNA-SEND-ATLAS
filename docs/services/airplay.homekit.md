# `airplay.homekit`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`reset`](#reset) | private |  | media | Method on airplay.homekit (from on-device permission registry; parameters undocumented). ⚠️ |
| [`subscribePairingEvent`](#subscribepairingevent) | private |  | media | Method on airplay.homekit (from on-device permission registry; parameters undocumented). |
| [`subscribeSetupCodeChanged`](#subscribesetupcodechanged) | private |  | media | Method on airplay.homekit (from on-device permission registry; parameters undocumented). |

<a id="reset"></a>
## `reset` ⚠️ DANGEROUS

`luna://airplay.homekit/reset`

Method on airplay.homekit (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://airplay.homekit/reset '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribepairingevent"></a>
## `subscribePairingEvent`

`luna://airplay.homekit/subscribePairingEvent`

Method on airplay.homekit (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://airplay.homekit/subscribePairingEvent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribesetupcodechanged"></a>
## `subscribeSetupCodeChanged`

`luna://airplay.homekit/subscribeSetupCodeChanged`

Method on airplay.homekit (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://airplay.homekit/subscribeSetupCodeChanged '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
