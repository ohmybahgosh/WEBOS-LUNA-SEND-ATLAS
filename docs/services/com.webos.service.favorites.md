# `com.webos.service.favorites`

Favorites service: manages favorite TV channels (add, edit, remove, pair) and favorite/recommended shows, including interactive and recommendation handling. _(inferred from the service's methods)_

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`channels/add`](#channels_add) | public |  | tv-broadcast | inferred | Adds the favorites (channels) |
| [`channels/edit`](#channels_edit) | public |  | tv-broadcast | inferred | Edits the favorites (channels) |
| [`channels/get`](#channels_get) | public |  | tv-broadcast | inferred | Returns the favorites (channels) |
| [`channels/pair`](#channels_pair) | public |  | tv-broadcast | inferred | Pairs the favorites (channels) |
| [`channels/remove`](#channels_remove) | public |  | tv-broadcast | inferred | Removes the favorites (channels) ⚠️ |
| [`iepg/update`](#iepg_update) | public |  | tv-broadcast | inferred | Updates the favorites (IEPG) |
| [`info`](#info) | public |  | tv-broadcast | inferred | Handles the info. |
| [`interactive`](#interactive) | public |  | tv-broadcast | inferred | Handles the interactive. |
| [`quit`](#quit) | public |  | tv-broadcast | inferred | Quits the favorites. |
| [`shows/add`](#shows_add) | private |  | tv-broadcast | inferred | Adds the favorites (shows) |
| [`shows/editPosition`](#shows_editposition) | private |  | tv-broadcast | inferred | Edits the position (shows) |
| [`shows/getAll`](#shows_getall) | private |  | tv-broadcast | inferred | Returns the all (shows) |
| [`shows/getById`](#shows_getbyid) | private |  | tv-broadcast | inferred | Returns the by ID (shows) |
| [`shows/remove`](#shows_remove) | private |  | tv-broadcast | inferred | Removes the favorites (shows) ⚠️ |
| [`shows/removeAll`](#shows_removeall) | private |  | tv-broadcast | inferred | Removes the all (shows) ⚠️ |
| [`shows/setAsRecommendation`](#shows_setasrecommendation) | private |  | tv-broadcast | inferred | Sets the as recommendation (shows) |
| [`shows/setRecommendationAsFavorite`](#shows_setrecommendationasfavorite) | private |  | tv-broadcast | inferred | Sets the recommendation as favorite (shows) |
| [`shows/updateCPFilter`](#shows_updatecpfilter) | private |  | tv-broadcast | inferred | Updates the CP filter (shows) |
| [`shows/updateDetails`](#shows_updatedetails) | private |  | tv-broadcast | inferred | Updates the details (shows) |
| [`shows/updateEpisodeDetail`](#shows_updateepisodedetail) | private |  | tv-broadcast | inferred | Updates the episode detail (shows) |
| [`shows/updateHomeWedge`](#shows_updatehomewedge) | private |  | tv-broadcast | inferred | Updates the home wedge (shows) |
| [`shows/updateRecommendations`](#shows_updaterecommendations) | private |  | tv-broadcast | inferred | Updates the recommendations (shows) |
| [`shows/updateSponsoredDatabase`](#shows_updatesponsoreddatabase) | private |  | tv-broadcast | inferred | Updates the sponsored database (shows) |

<a id="channels_add"></a>
## `channels/add`

`luna://com.webos.service.favorites/channels/add`

Adds the favorites (channels)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/add '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_edit"></a>
## `channels/edit`

`luna://com.webos.service.favorites/channels/edit`

Edits the favorites (channels)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/edit '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_get"></a>
## `channels/get`

`luna://com.webos.service.favorites/channels/get`

Returns the favorites (channels)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/get '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_pair"></a>
## `channels/pair`

`luna://com.webos.service.favorites/channels/pair`

Pairs the favorites (channels)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/pair '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="channels_remove"></a>
## `channels/remove` ⚠️ DANGEROUS

`luna://com.webos.service.favorites/channels/remove`

Removes the favorites (channels)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/channels/remove '{}'
```

> ACG groups: favorites.channel, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iepg_update"></a>
## `iepg/update`

`luna://com.webos.service.favorites/iepg/update`

Updates the favorites (IEPG)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/iepg/update '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, favorites.control, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.favorites/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/info '{}'
```

> ACG groups: favorites.control, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="interactive"></a>
## `interactive`

`luna://com.webos.service.favorites/interactive`

Handles the interactive.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/interactive '{}'
```

> ACG groups: favorites.control, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.favorites/quit`

Quits the favorites.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/quit '{}'
```

> ACG groups: favorites.control, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_add"></a>
## `shows/add`

`luna://com.webos.service.favorites/shows/add`

Adds the favorites (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/add '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_editposition"></a>
## `shows/editPosition`

`luna://com.webos.service.favorites/shows/editPosition`

Edits the position (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/editPosition '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_getall"></a>
## `shows/getAll`

`luna://com.webos.service.favorites/shows/getAll`

Returns the all (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/getAll '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_getbyid"></a>
## `shows/getById`

`luna://com.webos.service.favorites/shows/getById`

Returns the by ID (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/getById '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_remove"></a>
## `shows/remove` ⚠️ DANGEROUS

`luna://com.webos.service.favorites/shows/remove`

Removes the favorites (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/remove '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_removeall"></a>
## `shows/removeAll` ⚠️ DANGEROUS

`luna://com.webos.service.favorites/shows/removeAll`

Removes the all (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/removeAll '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_setasrecommendation"></a>
## `shows/setAsRecommendation`

`luna://com.webos.service.favorites/shows/setAsRecommendation`

Sets the as recommendation (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/setAsRecommendation '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_setrecommendationasfavorite"></a>
## `shows/setRecommendationAsFavorite`

`luna://com.webos.service.favorites/shows/setRecommendationAsFavorite`

Sets the recommendation as favorite (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/setRecommendationAsFavorite '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatecpfilter"></a>
## `shows/updateCPFilter`

`luna://com.webos.service.favorites/shows/updateCPFilter`

Updates the CP filter (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateCPFilter '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatedetails"></a>
## `shows/updateDetails`

`luna://com.webos.service.favorites/shows/updateDetails`

Updates the details (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateDetails '{}'
```

> ACG groups: configurator.callbacks, favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updateepisodedetail"></a>
## `shows/updateEpisodeDetail`

`luna://com.webos.service.favorites/shows/updateEpisodeDetail`

Updates the episode detail (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateEpisodeDetail '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatehomewedge"></a>
## `shows/updateHomeWedge`

`luna://com.webos.service.favorites/shows/updateHomeWedge`

Updates the home wedge (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateHomeWedge '{}'
```

> ACG groups: favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updaterecommendations"></a>
## `shows/updateRecommendations`

`luna://com.webos.service.favorites/shows/updateRecommendations`

Updates the recommendations (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateRecommendations '{}'
```

> ACG groups: configurator.callbacks, favorites.show, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shows_updatesponsoreddatabase"></a>
## `shows/updateSponsoredDatabase`

`luna://com.webos.service.favorites/shows/updateSponsoredDatabase`

Updates the sponsored database (shows)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.favorites/shows/updateSponsoredDatabase '{}'
```

> ACG groups: favorites.show, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
