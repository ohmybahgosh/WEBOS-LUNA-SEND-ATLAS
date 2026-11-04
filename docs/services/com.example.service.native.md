# `com.example.service.native`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`hello`](#hello) | private |  | misc | Method on com.example.service.native (from on-device permission registry; parameters undocumented). |
| [`hello_dev`](#hello_dev) | private |  | misc | Method on com.example.service.native (from on-device permission registry; parameters undocumented). |
| [`hello_oem`](#hello_oem) | private |  | misc | Method on com.example.service.native (from on-device permission registry; parameters undocumented). |
| [`hello_partner`](#hello_partner) | private |  | misc | Method on com.example.service.native (from on-device permission registry; parameters undocumented). |

<a id="hello"></a>
## `hello`

`luna://com.example.service.native/hello`

Method on com.example.service.native (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.example.service.native/hello '{}'
```

> ACG groups: native.example. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello_dev"></a>
## `hello_dev`

`luna://com.example.service.native/hello_dev`

Method on com.example.service.native (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.example.service.native/hello_dev '{}'
```

> ACG groups: native.example.dev. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello_oem"></a>
## `hello_oem`

`luna://com.example.service.native/hello_oem`

Method on com.example.service.native (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.example.service.native/hello_oem '{}'
```

> ACG groups: native.example.oem. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello_partner"></a>
## `hello_partner`

`luna://com.example.service.native/hello_partner`

Method on com.example.service.native (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.example.service.native/hello_partner '{}'
```

> ACG groups: native.example.part. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
