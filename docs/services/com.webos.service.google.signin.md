# `com.webos.service.google.signin`

Google sign-in helper; starts and stops the Google authentication flow. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`start`](#start) | private |  | misc | documented | Starts the google signin. |
| [`stop`](#stop) | private |  | misc | documented | Stops the google signin. |

<a id="start"></a>
## `start`

`luna://com.webos.service.google.signin/start`

Starts the google signin.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) Google OAuth2 client ID. |
| `clientSecret` | String (required) Google OAuth2 client secret. |
| `scopes` | Array (required) OAuth2 scopes to request. |
| `appReturn` | Object (required) App launch descriptor to return to with the resulting token info. |
| `listenPort` | Integer (optional) Local redirect/listen port (default 8080). |

```sh
luna-send -n 1 -f luna://com.webos.service.google.signin/start '{}'
```

> ACG groups: com.webos.service.google.signin, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Runs a Google OAuth2 sign-in flow in the TV browser and launches `appReturn` with the resulting tokens.  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.google.signin/stop`

Stops the google signin.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.google.signin/stop '{}'
```

> ACG groups: com.webos.service.google.signin, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Takes no request parameters.  Stops the sign-in flow and closes the local server.  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
