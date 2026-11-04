# `com.webos.service.mvpd`

21 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`channel/getAppReady`](#channel_getappready) | private |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`channel/getInitialChannel`](#channel_getinitialchannel) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`channel/setChannelList`](#channel_setchannellist) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`channel/setInitialChannel`](#channel_setinitialchannel) | private |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`channel/setLastChannel`](#channel_setlastchannel) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`notifyMediaId`](#notifymediaid) | public |  | media | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`rating/setParentalControl`](#rating_setparentalcontrol) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`rating/setProgramList`](#rating_setprogramlist) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`setting/clear`](#setting_clear) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`setting/get`](#setting_get) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`setting/getAll`](#setting_getall) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`setting/set`](#setting_set) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`state/clearAll`](#state_clearall) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`state/get`](#state_get) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`state/getAll`](#state_getall) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`state/set`](#state_set) | private |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`system/setIGMPTos`](#system_setigmptos) | private |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`system/setIGMPVersion`](#system_setigmpversion) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`system/setTcpMem`](#system_settcpmem) | private |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`vendor/addMvpd`](#vendor_addmvpd) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). |
| [`vendor/removeMvpd`](#vendor_removemvpd) | public |  | tv-broadcast | Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented). ⚠️ |

<a id="channel_getappready"></a>
## `channel/getAppReady`

`luna://com.webos.service.mvpd/channel/getAppReady`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/getAppReady '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_getinitialchannel"></a>
## `channel/getInitialChannel`

`luna://com.webos.service.mvpd/channel/getInitialChannel`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/getInitialChannel '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_setchannellist"></a>
## `channel/setChannelList`

`luna://com.webos.service.mvpd/channel/setChannelList`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/setChannelList '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_setinitialchannel"></a>
## `channel/setInitialChannel`

`luna://com.webos.service.mvpd/channel/setInitialChannel`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/setInitialChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channel_setlastchannel"></a>
## `channel/setLastChannel`

`luna://com.webos.service.mvpd/channel/setLastChannel`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/channel/setLastChannel '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifymediaid"></a>
## `notifyMediaId`

`luna://com.webos.service.mvpd/notifyMediaId`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/notifyMediaId '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rating_setparentalcontrol"></a>
## `rating/setParentalControl`

`luna://com.webos.service.mvpd/rating/setParentalControl`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/rating/setParentalControl '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rating_setprogramlist"></a>
## `rating/setProgramList`

`luna://com.webos.service.mvpd/rating/setProgramList`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/rating/setProgramList '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_clear"></a>
## `setting/clear`

`luna://com.webos.service.mvpd/setting/clear`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/clear '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_get"></a>
## `setting/get`

`luna://com.webos.service.mvpd/setting/get`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/get '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_getall"></a>
## `setting/getAll`

`luna://com.webos.service.mvpd/setting/getAll`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/getAll '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setting_set"></a>
## `setting/set`

`luna://com.webos.service.mvpd/setting/set`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/setting/set '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_clearall"></a>
## `state/clearAll`

`luna://com.webos.service.mvpd/state/clearAll`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/clearAll '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_get"></a>
## `state/get`

`luna://com.webos.service.mvpd/state/get`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/get '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_getall"></a>
## `state/getAll`

`luna://com.webos.service.mvpd/state/getAll`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/getAll '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_set"></a>
## `state/set`

`luna://com.webos.service.mvpd/state/set`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/state/set '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_setigmptos"></a>
## `system/setIGMPTos`

`luna://com.webos.service.mvpd/system/setIGMPTos`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/system/setIGMPTos '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_setigmpversion"></a>
## `system/setIGMPVersion`

`luna://com.webos.service.mvpd/system/setIGMPVersion`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/system/setIGMPVersion '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_settcpmem"></a>
## `system/setTcpMem`

`luna://com.webos.service.mvpd/system/setTcpMem`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/system/setTcpMem '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vendor_addmvpd"></a>
## `vendor/addMvpd`

`luna://com.webos.service.mvpd/vendor/addMvpd`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/vendor/addMvpd '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vendor_removemvpd"></a>
## `vendor/removeMvpd` ⚠️ DANGEROUS

`luna://com.webos.service.mvpd/vendor/removeMvpd`

Method on com.webos.service.mvpd (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mvpd/vendor/removeMvpd '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
