# `com.webos.service.printing`

Printing service: adds, removes and configures printers, sets the default printer and options, and manages print jobs (list, cancel, complete). _(inferred from the service's methods)_

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`autoprint`](#autoprint) | public |  | storage | inferred | Handles the autoprint. |
| [`configuration/addPrinter`](#configuration_addprinter) | public |  | settings | inferred | Adds the printer (configuration) |
| [`configuration/deletePrinter`](#configuration_deleteprinter) | public |  | settings | inferred | Deletes the printer (configuration) ⚠️ |
| [`configuration/disable`](#configuration_disable) | public |  | settings | inferred | Disables the printing (configuration) |
| [`configuration/enable`](#configuration_enable) | public |  | settings | inferred | Enables the printing (configuration) |
| [`configuration/findPrinter`](#configuration_findprinter) | public |  | settings | inferred | Handles the find printer (configuration) |
| [`configuration/setDefaultPrinter`](#configuration_setdefaultprinter) | public |  | settings | inferred | Sets the default printer (configuration) |
| [`configuration/setOptions`](#configuration_setoptions) | public |  | settings | inferred | Sets the options (configuration) |
| [`info/acceptPrinter`](#info_acceptprinter) | public |  | storage | inferred | Handles the accept printer (info) |
| [`info/defaultPrinter`](#info_defaultprinter) | public |  | storage | inferred | Handles the default printer (info) |
| [`info/displayConfig`](#info_displayconfig) | public |  | settings | inferred | Handles the display config (info) |
| [`info/enablePrinter`](#info_enableprinter) | public |  | storage | inferred | Enables the printer (info) |
| [`info/listPrinters`](#info_listprinters) | public |  | storage | inferred | Lists the printers (info) |
| [`jobs/all`](#jobs_all) | public |  | storage | inferred | Handles the all (jobs) |
| [`jobs/cancel`](#jobs_cancel) | public |  | storage | inferred | Cancels the printing (jobs) |
| [`jobs/cancelAll`](#jobs_cancelall) | public |  | storage | inferred | Cancels the all (jobs) |
| [`jobs/cancelPrinter`](#jobs_cancelprinter) | public |  | storage | inferred | Cancels the printer (jobs) |
| [`jobs/completeJobs`](#jobs_completejobs) | public |  | storage | inferred | Completes the jobs (jobs) |
| [`jobs/move`](#jobs_move) | public |  | storage | inferred | Moves the printing (jobs) |
| [`jobs/printNow`](#jobs_printnow) | public |  | storage | inferred | Prints the now (jobs) |
| [`jobs/queue`](#jobs_queue) | public |  | storage | inferred | Handles the queue (jobs) |
| [`jobs/stop`](#jobs_stop) | public |  | storage | inferred | Stops the printing (jobs) |
| [`print`](#print) | public |  | storage | inferred | Prints the printing. |

<a id="autoprint"></a>
## `autoprint`

`luna://com.webos.service.printing/autoprint`

Handles the autoprint.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/autoprint '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_addprinter"></a>
## `configuration/addPrinter`

`luna://com.webos.service.printing/configuration/addPrinter`

Adds the printer (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/addPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_deleteprinter"></a>
## `configuration/deletePrinter` ⚠️ DANGEROUS

`luna://com.webos.service.printing/configuration/deletePrinter`

Deletes the printer (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/deletePrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_disable"></a>
## `configuration/disable`

`luna://com.webos.service.printing/configuration/disable`

Disables the printing (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/disable '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_enable"></a>
## `configuration/enable`

`luna://com.webos.service.printing/configuration/enable`

Enables the printing (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/enable '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_findprinter"></a>
## `configuration/findPrinter`

`luna://com.webos.service.printing/configuration/findPrinter`

Handles the find printer (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/findPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setdefaultprinter"></a>
## `configuration/setDefaultPrinter`

`luna://com.webos.service.printing/configuration/setDefaultPrinter`

Sets the default printer (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/setDefaultPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setoptions"></a>
## `configuration/setOptions`

`luna://com.webos.service.printing/configuration/setOptions`

Sets the options (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/configuration/setOptions '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_acceptprinter"></a>
## `info/acceptPrinter`

`luna://com.webos.service.printing/info/acceptPrinter`

Handles the accept printer (info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/acceptPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_defaultprinter"></a>
## `info/defaultPrinter`

`luna://com.webos.service.printing/info/defaultPrinter`

Handles the default printer (info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/defaultPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_displayconfig"></a>
## `info/displayConfig`

`luna://com.webos.service.printing/info/displayConfig`

Handles the display config (info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/displayConfig '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_enableprinter"></a>
## `info/enablePrinter`

`luna://com.webos.service.printing/info/enablePrinter`

Enables the printer (info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/enablePrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info_listprinters"></a>
## `info/listPrinters`

`luna://com.webos.service.printing/info/listPrinters`

Lists the printers (info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/info/listPrinters '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_all"></a>
## `jobs/all`

`luna://com.webos.service.printing/jobs/all`

Handles the all (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/all '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_cancel"></a>
## `jobs/cancel`

`luna://com.webos.service.printing/jobs/cancel`

Cancels the printing (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/cancel '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_cancelall"></a>
## `jobs/cancelAll`

`luna://com.webos.service.printing/jobs/cancelAll`

Cancels the all (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/cancelAll '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_cancelprinter"></a>
## `jobs/cancelPrinter`

`luna://com.webos.service.printing/jobs/cancelPrinter`

Cancels the printer (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/cancelPrinter '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_completejobs"></a>
## `jobs/completeJobs`

`luna://com.webos.service.printing/jobs/completeJobs`

Completes the jobs (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/completeJobs '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_move"></a>
## `jobs/move`

`luna://com.webos.service.printing/jobs/move`

Moves the printing (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/move '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_printnow"></a>
## `jobs/printNow`

`luna://com.webos.service.printing/jobs/printNow`

Prints the now (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/printNow '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_queue"></a>
## `jobs/queue`

`luna://com.webos.service.printing/jobs/queue`

Handles the queue (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/queue '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="jobs_stop"></a>
## `jobs/stop`

`luna://com.webos.service.printing/jobs/stop`

Stops the printing (jobs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/jobs/stop '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="print"></a>
## `print`

`luna://com.webos.service.printing/print`

Prints the printing.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.printing/print '{}'
```

> ACG groups: all, com.webos.service.printing.group, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
