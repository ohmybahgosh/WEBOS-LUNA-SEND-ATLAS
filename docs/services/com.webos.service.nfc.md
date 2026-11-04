# `com.webos.service.nfc`

34 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`adapter/getStatus`](#adapter_getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`adapter/setState`](#adapter_setstate) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`card/getStatus`](#card_getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`card/getTransaction`](#card_gettransaction) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`dynamicTag/getStatus`](#dynamictag_getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`dynamicTag/setState`](#dynamictag_setstate) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`dynamicTag/writeNDEF`](#dynamictag_writendef) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`ese/close`](#ese_close) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`ese/open`](#ese_open) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`ese/transceive`](#ese_transceive) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`formattag`](#formattag) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). ⚠️ |
| [`getstatus`](#getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`gettransaction`](#gettransaction) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`handover/getStatus`](#handover_getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`internal/choose`](#internal_choose) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`internal/disableRFEmission`](#internal_disablerfemission) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`internal/enableRFEmission`](#internal_enablerfemission) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`internal/testSWPConnection`](#internal_testswpconnection) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`peer/getStatus`](#peer_getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`peer/receiveNDEF`](#peer_receivendef) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`peer/sendNDEF`](#peer_sendndef) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`pushp2p`](#pushp2p) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`readtag`](#readtag) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`receivep2p`](#receivep2p) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`rfetest`](#rfetest) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`setexclusivemode`](#setexclusivemode) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`setreadonlytag`](#setreadonlytag) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`setstate`](#setstate) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`swpselftest`](#swpselftest) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`tag/getStatus`](#tag_getstatus) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`tag/readNDEF`](#tag_readndef) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`tag/writeNDEF`](#tag_writendef) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`transceivetag`](#transceivetag) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |
| [`writetag`](#writetag) | public |  | connection | Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented). |

<a id="adapter_getstatus"></a>
## `adapter/getStatus`

`luna://com.webos.service.nfc/adapter/getStatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/adapter/getStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="adapter_setstate"></a>
## `adapter/setState`

`luna://com.webos.service.nfc/adapter/setState`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/adapter/setState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="card_getstatus"></a>
## `card/getStatus`

`luna://com.webos.service.nfc/card/getStatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/card/getStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="card_gettransaction"></a>
## `card/getTransaction`

`luna://com.webos.service.nfc/card/getTransaction`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/card/getTransaction '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dynamictag_getstatus"></a>
## `dynamicTag/getStatus`

`luna://com.webos.service.nfc/dynamicTag/getStatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/dynamicTag/getStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dynamictag_setstate"></a>
## `dynamicTag/setState`

`luna://com.webos.service.nfc/dynamicTag/setState`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/dynamicTag/setState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dynamictag_writendef"></a>
## `dynamicTag/writeNDEF`

`luna://com.webos.service.nfc/dynamicTag/writeNDEF`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/dynamicTag/writeNDEF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ese_close"></a>
## `ese/close`

`luna://com.webos.service.nfc/ese/close`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/ese/close '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ese_open"></a>
## `ese/open`

`luna://com.webos.service.nfc/ese/open`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/ese/open '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ese_transceive"></a>
## `ese/transceive`

`luna://com.webos.service.nfc/ese/transceive`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/ese/transceive '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="formattag"></a>
## `formattag` ⚠️ DANGEROUS

`luna://com.webos.service.nfc/formattag`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/formattag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getstatus`

`luna://com.webos.service.nfc/getstatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/getstatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gettransaction"></a>
## `gettransaction`

`luna://com.webos.service.nfc/gettransaction`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/gettransaction '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="handover_getstatus"></a>
## `handover/getStatus`

`luna://com.webos.service.nfc/handover/getStatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/handover/getStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_choose"></a>
## `internal/choose`

`luna://com.webos.service.nfc/internal/choose`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/internal/choose '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_disablerfemission"></a>
## `internal/disableRFEmission`

`luna://com.webos.service.nfc/internal/disableRFEmission`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/internal/disableRFEmission '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_enablerfemission"></a>
## `internal/enableRFEmission`

`luna://com.webos.service.nfc/internal/enableRFEmission`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/internal/enableRFEmission '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_testswpconnection"></a>
## `internal/testSWPConnection`

`luna://com.webos.service.nfc/internal/testSWPConnection`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/internal/testSWPConnection '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="peer_getstatus"></a>
## `peer/getStatus`

`luna://com.webos.service.nfc/peer/getStatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/peer/getStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="peer_receivendef"></a>
## `peer/receiveNDEF`

`luna://com.webos.service.nfc/peer/receiveNDEF`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/peer/receiveNDEF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="peer_sendndef"></a>
## `peer/sendNDEF`

`luna://com.webos.service.nfc/peer/sendNDEF`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/peer/sendNDEF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pushp2p"></a>
## `pushp2p`

`luna://com.webos.service.nfc/pushp2p`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/pushp2p '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="readtag"></a>
## `readtag`

`luna://com.webos.service.nfc/readtag`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/readtag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="receivep2p"></a>
## `receivep2p`

`luna://com.webos.service.nfc/receivep2p`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/receivep2p '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfetest"></a>
## `rfetest`

`luna://com.webos.service.nfc/rfetest`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/rfetest '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setexclusivemode"></a>
## `setexclusivemode`

`luna://com.webos.service.nfc/setexclusivemode`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/setexclusivemode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setreadonlytag"></a>
## `setreadonlytag`

`luna://com.webos.service.nfc/setreadonlytag`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/setreadonlytag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setstate"></a>
## `setstate`

`luna://com.webos.service.nfc/setstate`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/setstate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="swpselftest"></a>
## `swpselftest`

`luna://com.webos.service.nfc/swpselftest`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/swpselftest '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tag_getstatus"></a>
## `tag/getStatus`

`luna://com.webos.service.nfc/tag/getStatus`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/tag/getStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tag_readndef"></a>
## `tag/readNDEF`

`luna://com.webos.service.nfc/tag/readNDEF`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/tag/readNDEF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tag_writendef"></a>
## `tag/writeNDEF`

`luna://com.webos.service.nfc/tag/writeNDEF`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/tag/writeNDEF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="transceivetag"></a>
## `transceivetag`

`luna://com.webos.service.nfc/transceivetag`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/transceivetag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="writetag"></a>
## `writetag`

`luna://com.webos.service.nfc/writetag`

Method on com.webos.service.nfc (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nfc/writetag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
