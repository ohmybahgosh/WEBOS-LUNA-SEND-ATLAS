# `com.palm.certificatemanager`

Manages X.509 certificates and certificate revocation lists (CRLs): adds, deletes, and lists certificates, retrieves certificate details, and reports status.

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addcertificate`](#addcertificate) | private |  | misc | inferred | Handles the addcertificate. |
| [`addcrl`](#addcrl) | private |  | misc | inferred | Handles the addcrl. |
| [`deletecertificate`](#deletecertificate) | private |  | misc | inferred | Handles the deletecertificate. ⚠️ |
| [`getcertificatedetails`](#getcertificatedetails) | private |  | misc | inferred | Handles the getcertificatedetails. |
| [`getstatus`](#getstatus) | private |  | misc | inferred | Handles the getstatus. |
| [`listcertificates`](#listcertificates) | private |  | misc | inferred | Handles the listcertificates. |

<a id="addcertificate"></a>
## `addcertificate`

`luna://com.palm.certificatemanager/addcertificate`

Handles the addcertificate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.certificatemanager/addcertificate '{}'
```

> ACG groups: private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="addcrl"></a>
## `addcrl`

`luna://com.palm.certificatemanager/addcrl`

Handles the addcrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.certificatemanager/addcrl '{}'
```

> ACG groups: private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletecertificate"></a>
## `deletecertificate` ⚠️ DANGEROUS

`luna://com.palm.certificatemanager/deletecertificate`

Handles the deletecertificate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.certificatemanager/deletecertificate '{}'
```

> ACG groups: private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcertificatedetails"></a>
## `getcertificatedetails`

`luna://com.palm.certificatemanager/getcertificatedetails`

Handles the getcertificatedetails.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.certificatemanager/getcertificatedetails '{}'
```

> ACG groups: private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getstatus`

`luna://com.palm.certificatemanager/getstatus`

Handles the getstatus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.certificatemanager/getstatus '{}'
```

> ACG groups: private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listcertificates"></a>
## `listcertificates`

`luna://com.palm.certificatemanager/listcertificates`

Handles the listcertificates.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.certificatemanager/listcertificates '{}'
```

> ACG groups: private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
