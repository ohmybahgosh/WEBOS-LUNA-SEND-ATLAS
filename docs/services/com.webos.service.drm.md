# `com.webos.service.drm`

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getRightsError`](#getrightserror) | public | yes | security | Returns DRM rights error info on license errors during playback. |
| [`isLoaded`](#isloaded) | public |  | security | Checks whether a DRM client exists for an app ID. |
| [`load`](#load) | public |  | security | Creates a DRM client instance for the type. |
| [`sendDrmMessage`](#senddrmmessage) | public |  | security | Sends a DRM message to the DRM service. |
| [`unload`](#unload) | public |  | security | Removes a DRM client instance. |

<a id="getrightserror"></a>
## `getRightsError`

`luna://com.webos.service.drm/getRightsError`

Returns DRM rights error info on license errors during playback.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |
| `subscribe` | Boolean (required) |

```sh
luna-send -i -f luna://com.webos.service.drm/getRightsError '{"clientId":"LE3bZyIZzY","subscribe":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="isloaded"></a>
## `isLoaded`

`luna://com.webos.service.drm/isLoaded`

Checks whether a DRM client exists for an app ID.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/isLoaded '{"appId":"com.yourdomain.yourapp"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="load"></a>
## `load`

`luna://com.webos.service.drm/load`

Creates a DRM client instance for the type.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `drmType` | String (required) e.g. playready |
| `appId` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/load '{"drmType":"playready","appId":"com.yourdomain.yourapp"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="senddrmmessage"></a>
## `sendDrmMessage`

`luna://com.webos.service.drm/sendDrmMessage`

Sends a DRM message to the DRM service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |
| `msgType` | String (required) |
| `msg` | String (required) |
| `drmSystemId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/sendDrmMessage '{"clientId":"LE3bZyIZzY","msgType":"application/vnd.ms-playready.initiator+xml","msg":"<PlayReadyInitiator/>","drmSystemId":"urn:dvb:casystemid:19219"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="unload"></a>
## `unload`

`luna://com.webos.service.drm/unload`

Removes a DRM client instance.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/unload '{"clientId":"LE3bZyIZzY"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)
