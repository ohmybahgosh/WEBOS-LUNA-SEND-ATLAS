# `com.webos.service.favorites`

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`channels/add`](#channels_add) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`channels/edit`](#channels_edit) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`channels/get`](#channels_get) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`channels/pair`](#channels_pair) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`channels/remove`](#channels_remove) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). ⚠️ |
| [`iepg/update`](#iepg_update) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`info`](#info) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`interactive`](#interactive) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`quit`](#quit) | public |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/add`](#shows_add) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/editPosition`](#shows_editposition) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/getAll`](#shows_getall) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/getById`](#shows_getbyid) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/remove`](#shows_remove) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shows/removeAll`](#shows_removeall) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shows/setAsRecommendation`](#shows_setasrecommendation) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/setRecommendationAsFavorite`](#shows_setrecommendationasfavorite) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/updateCPFilter`](#shows_updatecpfilter) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/updateDetails`](#shows_updatedetails) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/updateEpisodeDetail`](#shows_updateepisodedetail) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/updateHomeWedge`](#shows_updatehomewedge) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/updateRecommendations`](#shows_updaterecommendations) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |
| [`shows/updateSponsoredDatabase`](#shows_updatesponsoreddatabase) | private |  | tv-broadcast | Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented). |

<a id="channels_add"></a>
## `channels/add`

`luna://com.webos.service.favorites/channels/add`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/add '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_edit"></a>
## `channels/edit`

`luna://com.webos.service.favorites/channels/edit`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/edit '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_get"></a>
## `channels/get`

`luna://com.webos.service.favorites/channels/get`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/get '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_pair"></a>
## `channels/pair`

`luna://com.webos.service.favorites/channels/pair`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/pair '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_remove"></a>
## `channels/remove` ⚠️ DANGEROUS

`luna://com.webos.service.favorites/channels/remove`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/remove '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iepg_update"></a>
## `iepg/update`

`luna://com.webos.service.favorites/iepg/update`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/iepg/update '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, favorites.control, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.favorites/info`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/info '{}'
```

> ACG groups: favorites.control, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="interactive"></a>
## `interactive`

`luna://com.webos.service.favorites/interactive`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/interactive '{}'
```

> ACG groups: favorites.control, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.favorites/quit`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/quit '{}'
```

> ACG groups: favorites.control, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_add"></a>
## `shows/add`

`luna://com.webos.service.favorites/shows/add`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/add '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_editposition"></a>
## `shows/editPosition`

`luna://com.webos.service.favorites/shows/editPosition`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/editPosition '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_getall"></a>
## `shows/getAll`

`luna://com.webos.service.favorites/shows/getAll`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/getAll '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_getbyid"></a>
## `shows/getById`

`luna://com.webos.service.favorites/shows/getById`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/getById '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_remove"></a>
## `shows/remove` ⚠️ DANGEROUS

`luna://com.webos.service.favorites/shows/remove`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/remove '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_removeall"></a>
## `shows/removeAll` ⚠️ DANGEROUS

`luna://com.webos.service.favorites/shows/removeAll`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/removeAll '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_setasrecommendation"></a>
## `shows/setAsRecommendation`

`luna://com.webos.service.favorites/shows/setAsRecommendation`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/setAsRecommendation '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_setrecommendationasfavorite"></a>
## `shows/setRecommendationAsFavorite`

`luna://com.webos.service.favorites/shows/setRecommendationAsFavorite`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/setRecommendationAsFavorite '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatecpfilter"></a>
## `shows/updateCPFilter`

`luna://com.webos.service.favorites/shows/updateCPFilter`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateCPFilter '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatedetails"></a>
## `shows/updateDetails`

`luna://com.webos.service.favorites/shows/updateDetails`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateDetails '{}'
```

> ACG groups: configurator.callbacks, favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updateepisodedetail"></a>
## `shows/updateEpisodeDetail`

`luna://com.webos.service.favorites/shows/updateEpisodeDetail`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateEpisodeDetail '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatehomewedge"></a>
## `shows/updateHomeWedge`

`luna://com.webos.service.favorites/shows/updateHomeWedge`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateHomeWedge '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updaterecommendations"></a>
## `shows/updateRecommendations`

`luna://com.webos.service.favorites/shows/updateRecommendations`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateRecommendations '{}'
```

> ACG groups: configurator.callbacks, favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatesponsoreddatabase"></a>
## `shows/updateSponsoredDatabase`

`luna://com.webos.service.favorites/shows/updateSponsoredDatabase`

Method on com.webos.service.favorites (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateSponsoredDatabase '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
