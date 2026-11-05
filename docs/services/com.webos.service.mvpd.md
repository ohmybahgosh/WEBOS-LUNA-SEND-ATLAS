# `com.webos.service.mvpd`

MVPD (pay-TV operator) service: manages the operator channel list, initial/last channel, parental-control ratings, operator settings and state, and IGMP options. _(inferred from the service's methods)_

21 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`channel/getAppReady`](#channel_getappready) | private |  | tv-broadcast | inferred | Returns the app ready (channel) |
| [`channel/getInitialChannel`](#channel_getinitialchannel) | public |  | tv-broadcast | inferred | Returns the initial channel (channel) |
| [`channel/setChannelList`](#channel_setchannellist) | public |  | tv-broadcast | inferred | Sets the channel list (channel) |
| [`channel/setInitialChannel`](#channel_setinitialchannel) | private |  | tv-broadcast | inferred | Sets the initial channel (channel) |
| [`channel/setLastChannel`](#channel_setlastchannel) | public |  | tv-broadcast | inferred | Sets the last channel (channel) |
| [`notifyMediaId`](#notifymediaid) | public |  | media | inferred | Notifies of the media ID. |
| [`rating/setParentalControl`](#rating_setparentalcontrol) | public |  | tv-broadcast | inferred | Sets the parental control (rating) |
| [`rating/setProgramList`](#rating_setprogramlist) | public |  | tv-broadcast | inferred | Sets the program list (rating) |
| [`setting/clear`](#setting_clear) | public |  | tv-broadcast | inferred | Clears the mvpd (setting) |
| [`setting/get`](#setting_get) | public |  | tv-broadcast | inferred | Returns the mvpd (setting) |
| [`setting/getAll`](#setting_getall) | public |  | tv-broadcast | inferred | Returns the all (setting) |
| [`setting/set`](#setting_set) | public |  | tv-broadcast | inferred | Sets the mvpd (setting) |
| [`state/clearAll`](#state_clearall) | public |  | tv-broadcast | inferred | Clears the all (state) |
| [`state/get`](#state_get) | public |  | tv-broadcast | inferred | Returns the mvpd (state) |
| [`state/getAll`](#state_getall) | public |  | tv-broadcast | inferred | Returns the all (state) |
| [`state/set`](#state_set) | private |  | tv-broadcast | inferred | Sets the mvpd (state) |
| [`system/setIGMPTos`](#system_setigmptos) | private |  | tv-broadcast | inferred | Sets the IGMP tos (system) |
| [`system/setIGMPVersion`](#system_setigmpversion) | public |  | tv-broadcast | inferred | Sets the IGMP version (system) |
| [`system/setTcpMem`](#system_settcpmem) | private |  | tv-broadcast | inferred | Sets the tcp mem (system) |
| [`vendor/addMvpd`](#vendor_addmvpd) | public |  | tv-broadcast | inferred | Adds the mvpd (vendor) |
| [`vendor/removeMvpd`](#vendor_removemvpd) | public |  | tv-broadcast | inferred | Removes the mvpd (vendor) ⚠️ |

<a id="channel_getappready"></a>
## `channel/getAppReady`

`luna://com.webos.service.mvpd/channel/getAppReady`

Returns the app ready (channel)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/getAppReady '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_getinitialchannel"></a>
## `channel/getInitialChannel`

`luna://com.webos.service.mvpd/channel/getInitialChannel`

Returns the initial channel (channel)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/getInitialChannel '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_setchannellist"></a>
## `channel/setChannelList`

`luna://com.webos.service.mvpd/channel/setChannelList`

Sets the channel list (channel)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/setChannelList '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_setinitialchannel"></a>
## `channel/setInitialChannel`

`luna://com.webos.service.mvpd/channel/setInitialChannel`

Sets the initial channel (channel)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/setInitialChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_setlastchannel"></a>
## `channel/setLastChannel`

`luna://com.webos.service.mvpd/channel/setLastChannel`

Sets the last channel (channel)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/setLastChannel '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifymediaid"></a>
## `notifyMediaId`

`luna://com.webos.service.mvpd/notifyMediaId`

Notifies of the media ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/notifyMediaId '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rating_setparentalcontrol"></a>
## `rating/setParentalControl`

`luna://com.webos.service.mvpd/rating/setParentalControl`

Sets the parental control (rating)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/rating/setParentalControl '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rating_setprogramlist"></a>
## `rating/setProgramList`

`luna://com.webos.service.mvpd/rating/setProgramList`

Sets the program list (rating)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/rating/setProgramList '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_clear"></a>
## `setting/clear`

`luna://com.webos.service.mvpd/setting/clear`

Clears the mvpd (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/clear '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_get"></a>
## `setting/get`

`luna://com.webos.service.mvpd/setting/get`

Returns the mvpd (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/get '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_getall"></a>
## `setting/getAll`

`luna://com.webos.service.mvpd/setting/getAll`

Returns the all (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/getAll '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_set"></a>
## `setting/set`

`luna://com.webos.service.mvpd/setting/set`

Sets the mvpd (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/set '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_clearall"></a>
## `state/clearAll`

`luna://com.webos.service.mvpd/state/clearAll`

Clears the all (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/clearAll '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_get"></a>
## `state/get`

`luna://com.webos.service.mvpd/state/get`

Returns the mvpd (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/get '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_getall"></a>
## `state/getAll`

`luna://com.webos.service.mvpd/state/getAll`

Returns the all (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/getAll '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_set"></a>
## `state/set`

`luna://com.webos.service.mvpd/state/set`

Sets the mvpd (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/set '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_setigmptos"></a>
## `system/setIGMPTos`

`luna://com.webos.service.mvpd/system/setIGMPTos`

Sets the IGMP tos (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/system/setIGMPTos '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_setigmpversion"></a>
## `system/setIGMPVersion`

`luna://com.webos.service.mvpd/system/setIGMPVersion`

Sets the IGMP version (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/system/setIGMPVersion '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_settcpmem"></a>
## `system/setTcpMem`

`luna://com.webos.service.mvpd/system/setTcpMem`

Sets the tcp mem (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/system/setTcpMem '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vendor_addmvpd"></a>
## `vendor/addMvpd`

`luna://com.webos.service.mvpd/vendor/addMvpd`

Adds the mvpd (vendor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/vendor/addMvpd '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vendor_removemvpd"></a>
## `vendor/removeMvpd` ⚠️ DANGEROUS

`luna://com.webos.service.mvpd/vendor/removeMvpd`

Removes the mvpd (vendor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/vendor/removeMvpd '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
