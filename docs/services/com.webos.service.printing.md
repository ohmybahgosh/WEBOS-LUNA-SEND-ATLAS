# `com.webos.service.printing`

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`autoprint`](#autoprint) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`configuration/addPrinter`](#configuration_addprinter) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`configuration/deletePrinter`](#configuration_deleteprinter) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). ⚠️ |
| [`configuration/disable`](#configuration_disable) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`configuration/enable`](#configuration_enable) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`configuration/findPrinter`](#configuration_findprinter) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`configuration/setDefaultPrinter`](#configuration_setdefaultprinter) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`configuration/setOptions`](#configuration_setoptions) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`info/acceptPrinter`](#info_acceptprinter) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`info/defaultPrinter`](#info_defaultprinter) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`info/displayConfig`](#info_displayconfig) | public |  | settings | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`info/enablePrinter`](#info_enableprinter) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`info/listPrinters`](#info_listprinters) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/all`](#jobs_all) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/cancel`](#jobs_cancel) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/cancelAll`](#jobs_cancelall) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/cancelPrinter`](#jobs_cancelprinter) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/completeJobs`](#jobs_completejobs) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/move`](#jobs_move) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/printNow`](#jobs_printnow) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/queue`](#jobs_queue) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`jobs/stop`](#jobs_stop) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |
| [`print`](#print) | public |  | storage | Method on com.webos.service.printing (from on-device permission registry; parameters undocumented). |

<a id="autoprint"></a>
## `autoprint`

`luna://com.webos.service.printing/autoprint`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/autoprint '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_addprinter"></a>
## `configuration/addPrinter`

`luna://com.webos.service.printing/configuration/addPrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/addPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_deleteprinter"></a>
## `configuration/deletePrinter` ⚠️ DANGEROUS

`luna://com.webos.service.printing/configuration/deletePrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/deletePrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_disable"></a>
## `configuration/disable`

`luna://com.webos.service.printing/configuration/disable`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/disable '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_enable"></a>
## `configuration/enable`

`luna://com.webos.service.printing/configuration/enable`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/enable '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_findprinter"></a>
## `configuration/findPrinter`

`luna://com.webos.service.printing/configuration/findPrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/findPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setdefaultprinter"></a>
## `configuration/setDefaultPrinter`

`luna://com.webos.service.printing/configuration/setDefaultPrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/setDefaultPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setoptions"></a>
## `configuration/setOptions`

`luna://com.webos.service.printing/configuration/setOptions`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/setOptions '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_acceptprinter"></a>
## `info/acceptPrinter`

`luna://com.webos.service.printing/info/acceptPrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/acceptPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_defaultprinter"></a>
## `info/defaultPrinter`

`luna://com.webos.service.printing/info/defaultPrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/defaultPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_displayconfig"></a>
## `info/displayConfig`

`luna://com.webos.service.printing/info/displayConfig`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/displayConfig '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_enableprinter"></a>
## `info/enablePrinter`

`luna://com.webos.service.printing/info/enablePrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/enablePrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_listprinters"></a>
## `info/listPrinters`

`luna://com.webos.service.printing/info/listPrinters`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/listPrinters '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_all"></a>
## `jobs/all`

`luna://com.webos.service.printing/jobs/all`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/all '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_cancel"></a>
## `jobs/cancel`

`luna://com.webos.service.printing/jobs/cancel`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/cancel '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_cancelall"></a>
## `jobs/cancelAll`

`luna://com.webos.service.printing/jobs/cancelAll`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/cancelAll '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_cancelprinter"></a>
## `jobs/cancelPrinter`

`luna://com.webos.service.printing/jobs/cancelPrinter`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/cancelPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_completejobs"></a>
## `jobs/completeJobs`

`luna://com.webos.service.printing/jobs/completeJobs`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/completeJobs '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_move"></a>
## `jobs/move`

`luna://com.webos.service.printing/jobs/move`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/move '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_printnow"></a>
## `jobs/printNow`

`luna://com.webos.service.printing/jobs/printNow`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/printNow '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_queue"></a>
## `jobs/queue`

`luna://com.webos.service.printing/jobs/queue`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/queue '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_stop"></a>
## `jobs/stop`

`luna://com.webos.service.printing/jobs/stop`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/stop '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="print"></a>
## `print`

`luna://com.webos.service.printing/print`

Method on com.webos.service.printing (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.printing/print '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
