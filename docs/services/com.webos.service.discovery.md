# `com.webos.service.discovery`

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`autoSuggest`](#autosuggest) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`checkEula`](#checkeula) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getCategoryData`](#getcategorydata) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getCPAppStatus`](#getcpappstatus) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getDetails`](#getdetails) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getExecOptions`](#getexecoptions) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getRecommendationData`](#getrecommendationdata) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getSdpServices`](#getsdpservices) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getSeasonEpisodes`](#getseasonepisodes) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getSponsoredData`](#getsponsoreddata) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getSupportedCategories`](#getsupportedcategories) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getSupportedEvents`](#getsupportedevents) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getUnratedList`](#getunratedlist) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getUserSettings`](#getusersettings) | private |  | settings | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`getUserTastes`](#getusertastes) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`info`](#info) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`prefixsearch`](#prefixsearch) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`quit`](#quit) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`search`](#search) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`sendUserEvent`](#senduserevent) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`setUnratedList`](#setunratedlist) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`test/setImageServer`](#test_setimageserver) | private |  | network | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |
| [`updateUserSettings`](#updateusersettings) | private |  | settings | Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented). |

<a id="autosuggest"></a>
## `autoSuggest`

`luna://com.webos.service.discovery/autoSuggest`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/autoSuggest '{}'
```

> ACG groups: discovery.play, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkeula"></a>
## `checkEula`

`luna://com.webos.service.discovery/checkEula`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/checkEula '{}'
```

> ACG groups: configurator.callbacks, discovery.play, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcategorydata"></a>
## `getCategoryData`

`luna://com.webos.service.discovery/getCategoryData`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getCategoryData '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcpappstatus"></a>
## `getCPAppStatus`

`luna://com.webos.service.discovery/getCPAppStatus`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getCPAppStatus '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdetails"></a>
## `getDetails`

`luna://com.webos.service.discovery/getDetails`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getDetails '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexecoptions"></a>
## `getExecOptions`

`luna://com.webos.service.discovery/getExecOptions`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getExecOptions '{}'
```

> ACG groups: discovery.provide, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrecommendationdata"></a>
## `getRecommendationData`

`luna://com.webos.service.discovery/getRecommendationData`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getRecommendationData '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsdpservices"></a>
## `getSdpServices`

`luna://com.webos.service.discovery/getSdpServices`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getSdpServices '{}'
```

> ACG groups: discovery.provide, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getseasonepisodes"></a>
## `getSeasonEpisodes`

`luna://com.webos.service.discovery/getSeasonEpisodes`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getSeasonEpisodes '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsponsoreddata"></a>
## `getSponsoredData`

`luna://com.webos.service.discovery/getSponsoredData`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getSponsoredData '{}'
```

> ACG groups: discovery.provide, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsupportedcategories"></a>
## `getSupportedCategories`

`luna://com.webos.service.discovery/getSupportedCategories`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getSupportedCategories '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsupportedevents"></a>
## `getSupportedEvents`

`luna://com.webos.service.discovery/getSupportedEvents`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getSupportedEvents '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getunratedlist"></a>
## `getUnratedList`

`luna://com.webos.service.discovery/getUnratedList`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getUnratedList '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getusersettings"></a>
## `getUserSettings`

`luna://com.webos.service.discovery/getUserSettings`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getUserSettings '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getusertastes"></a>
## `getUserTastes`

`luna://com.webos.service.discovery/getUserTastes`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/getUserTastes '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.discovery/info`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/info '{}'
```

> ACG groups: discovery.provide, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="prefixsearch"></a>
## `prefixsearch`

`luna://com.webos.service.discovery/prefixsearch`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/prefixsearch '{}'
```

> ACG groups: discovery.play, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.discovery/quit`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/quit '{}'
```

> ACG groups: discovery.play, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="search"></a>
## `search`

`luna://com.webos.service.discovery/search`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/search '{}'
```

> ACG groups: discovery.play, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="senduserevent"></a>
## `sendUserEvent`

`luna://com.webos.service.discovery/sendUserEvent`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/sendUserEvent '{}'
```

> ACG groups: discovery.play, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setunratedlist"></a>
## `setUnratedList`

`luna://com.webos.service.discovery/setUnratedList`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/setUnratedList '{}'
```

> ACG groups: discovery.write, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_setimageserver"></a>
## `test/setImageServer`

`luna://com.webos.service.discovery/test/setImageServer`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/test/setImageServer '{}'
```

> ACG groups: discovery.write, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updateusersettings"></a>
## `updateUserSettings`

`luna://com.webos.service.discovery/updateUserSettings`

Method on com.webos.service.discovery (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.discovery/updateUserSettings '{}'
```

> ACG groups: discovery.write, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
