# `com.webos.service.contentminer`

Appears to collect or provide content/recommendation data, managing a personal key and returning content data. Purpose. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`clearPersonalKey`](#clearpersonalkey) | public |  | misc | documented | Clears the personal key. |
| [`getContentData`](#getcontentdata) | public |  | misc | documented | Returns the content data. |
| [`setPersonalKey`](#setpersonalkey) | public |  | misc | documented | Sets the personal key. |

<a id="clearpersonalkey"></a>
## `clearPersonalKey`

`luna://com.webos.service.contentminer/clearPersonalKey`

Clears the personal key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Clear content data for a given application ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.contentminer/clearPersonalKey '{}'
```

> ACG groups: contents.internal, private, public, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontentdata"></a>
## `getContentData`

`luna://com.webos.service.contentminer/getContentData`

Returns the content data.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Get content data for a given application ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.contentminer/getContentData '{}'
```

> ACG groups: contents.internal, private, public, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpersonalkey"></a>
## `setPersonalKey`

`luna://com.webos.service.contentminer/setPersonalKey`

Sets the personal key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Get content data for a given application ID. |
| `key` | String (required) unique key for app personalization |
| `expiredTime` | Number (optional) valid until |

```sh
luna-send -n 1 -f luna://com.webos.service.contentminer/setPersonalKey '{}'
```

> ACG groups: contents.internal, private, public, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
