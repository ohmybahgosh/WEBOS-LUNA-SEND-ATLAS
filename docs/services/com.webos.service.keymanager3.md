# `com.webos.service.keymanager3`

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`abort`](#abort) | public |  | security | Aborts an in-progress operation. |
| [`begin`](#begin) | public |  | security | Starts a crypto operation and returns a handle. |
| [`beginSecKey`](#beginseckey) | private |  | input | Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented). |
| [`deriveKey`](#derivekey) | public |  | input | Method on com.webos.service.keymanager3 (from on-device permission registry; parameters undocumented). |
| [`exportKey`](#exportkey) | public |  | security | Gets the public key of a key pair. |
| [`finish`](#finish) | public |  | security | Completes the operation and returns result. |
| [`finishQuick`](#finishquick) | private |  | input | Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented). |
| [`generateKey`](#generatekey) | public |  | security | Generates a key for algorithms supported by keymanager3. |
| [`importKey`](#importkey) | public |  | security | Imports an externally generated key. |
| [`importSecKey`](#importseckey) | private |  | input | Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented). |
| [`removeAppKeys`](#removeappkeys) | private |  | input | Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented). ⚠️ |
| [`removeKey`](#removekey) | public |  | security | Deletes a key. |
| [`removeUninstalledAppKeys`](#removeuninstalledappkeys) | private |  | input | Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented). ⚠️ |
| [`update`](#update) | public |  | security | Feeds data to an operation handle. |
| [`updateQuick`](#updatequick) | private |  | input | Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented). |

<a id="abort"></a>
## `abort`

`luna://com.webos.service.keymanager3/abort`

Aborts an in-progress operation.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/abort '{"handle":"3901299957133494448"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="begin"></a>
## `begin`

`luna://com.webos.service.keymanager3/begin`

Starts a crypto operation and returns a handle.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) |
| `params` | Object (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/begin '{"name":"AES256","params":{"type":"AES","mode":["CBC"],"purpose":["encrypt"],"padding":["PKCS7"]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="beginseckey"></a>
## `beginSecKey`

`luna://com.webos.service.keymanager3/beginSecKey`

Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/beginSecKey '{}'
```

> ACG groups: all, securitykey.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="derivekey"></a>
## `deriveKey`

`luna://com.webos.service.keymanager3/deriveKey`

Method on com.webos.service.keymanager3 (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/deriveKey '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="exportkey"></a>
## `exportKey`

`luna://com.webos.service.keymanager3/exportKey`

Gets the public key of a key pair.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/exportKey '{"name":"RSA1024"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="finish"></a>
## `finish`

`luna://com.webos.service.keymanager3/finish`

Completes the operation and returns result.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | String (required) |
| `data` | String (optional) base64 |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/finish '{"handle":"13123551428131904409","data":"dGVzdCBmaW5pc2ggZGF0YQ=="}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="finishquick"></a>
## `finishQuick`

`luna://com.webos.service.keymanager3/finishQuick`

Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/finishQuick '{}'
```

> ACG groups: securitykey.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="generatekey"></a>
## `generateKey`

`luna://com.webos.service.keymanager3/generateKey`

Generates a key for algorithms supported by keymanager3.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) |
| `params` | Object (required) type,size,mode,purpose,padding |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/generateKey '{"name":"AES256","params":{"type":"AES","size":256,"mode":["ECB","CBC"],"purpose":["encrypt","decrypt"],"padding":["PKCS7"]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="importkey"></a>
## `importKey`

`luna://com.webos.service.keymanager3/importKey`

Imports an externally generated key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) |
| `data` | String (required) base64 |
| `params` | Object (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/importKey '{"name":"AES256","data":"BASE64KEY","params":{"type":"AES","size":256,"mode":["CBC"],"purpose":["encrypt","decrypt"],"padding":["PKCS7"]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="importseckey"></a>
## `importSecKey`

`luna://com.webos.service.keymanager3/importSecKey`

Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/importSecKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeappkeys"></a>
## `removeAppKeys` ⚠️ DANGEROUS

`luna://com.webos.service.keymanager3/removeAppKeys`

Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/removeAppKeys '{}'
```

> ACG groups: private, all, securitykey.management. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removekey"></a>
## `removeKey`

`luna://com.webos.service.keymanager3/removeKey`

Deletes a key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/removeKey '{"name":"AES256"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="removeuninstalledappkeys"></a>
## `removeUninstalledAppKeys` ⚠️ DANGEROUS

`luna://com.webos.service.keymanager3/removeUninstalledAppKeys`

Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/removeUninstalledAppKeys '{}'
```

> ACG groups: private, all, securitykey.management. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="update"></a>
## `update`

`luna://com.webos.service.keymanager3/update`

Feeds data to an operation handle.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | String (required) |
| `data` | String (required) base64 |

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/update '{"handle":"10699227874884526357","data":"dGVzdCB1cGRhdGUgZGF0YQ=="}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/keymanager3)

<a id="updatequick"></a>
## `updateQuick`

`luna://com.webos.service.keymanager3/updateQuick`

Method on com.webos.service.keymanager3 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.keymanager3/updateQuick '{}'
```

> ACG groups: securitykey.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
