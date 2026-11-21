# `com.webos.service.homelaunchpoints`

Home-screen launch-point and QCard manager: lists, adds, moves, hides, removes and updates home-screen launch points and QCards. _(inferred from the service's methods)_

14 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addLaunchPoint`](#addlaunchpoint) | private |  | apps | documented | Adds the launch point. |
| [`addQCard`](#addqcard) | private |  | apps | documented | Adds the q card. |
| [`hideLaunchPoint`](#hidelaunchpoint) | private |  | apps | documented | Hides the launch point. |
| [`listAvailableLaunchPoints`](#listavailablelaunchpoints) | private |  | apps | documented | Lists the available launch points. |
| [`listAvailableQCards`](#listavailableqcards) | private |  | apps | documented | Lists the available q cards. |
| [`listLaunchPoints`](#listlaunchpoints) | private |  | apps | documented | Lists the launch points. |
| [`listQCards`](#listqcards) | private |  | apps | documented | Lists the q cards. |
| [`moveLaunchPoint`](#movelaunchpoint) | private |  | apps | documented | Moves the launch point. |
| [`moveQCard`](#moveqcard) | private |  | apps | documented | Moves the q card. |
| [`removeLaunchPoint`](#removelaunchpoint) | private |  | apps | documented | Removes the launch point. ⚠️ |
| [`removeQCard`](#removeqcard) | private |  | apps | documented | Removes the q card. ⚠️ |
| [`unhideLaunchPoint`](#unhidelaunchpoint) | private |  | apps | documented | Handles the unhide launch point. |
| [`updateLaunchPoint`](#updatelaunchpoint) | private |  | apps | documented | Updates the launch point. |
| [`updateQCard`](#updateqcard) | public |  | apps | documented | Updates the q card. |

<a id="addlaunchpoint"></a>
## `addLaunchPoint`

`luna://com.webos.service.homelaunchpoints/addLaunchPoint`

Adds the launch point.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of launch point to be added |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/addLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="addqcard"></a>
## `addQCard`

`luna://com.webos.service.homelaunchpoints/addQCard`

Adds the q card.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be updated |
| `position` | Number (required) This field means the position where to put on launcher |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/addQCard '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hidelaunchpoint"></a>
## `hideLaunchPoint`

`luna://com.webos.service.homelaunchpoints/hideLaunchPoint`

Hides the launch point.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be hidden by user |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/hideLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listavailablelaunchpoints"></a>
## `listAvailableLaunchPoints`

`luna://com.webos.service.homelaunchpoints/listAvailableLaunchPoints`

Lists the available launch points.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) listAvailableLaunchPoints maintains the order of hidden launch point apps |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listAvailableLaunchPoints '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listavailableqcards"></a>
## `listAvailableQCards`

`luna://com.webos.service.homelaunchpoints/listAvailableQCards`

Lists the available q cards.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (optional) listAvailableQCards support subscription to notify when home launch points are updated |

**Returns:**

| Field | Type / notes |
|---|---|
| `appDescription` |  |
| `bgColor` |  |
| `bgImage` |  |
| `bgImages` |  |
| `deeplinkingParams` |  |
| `extraLargeIcon` |  |
| `favicon` |  |
| `icon` |  |
| `iconColor` |  |
| `id` |  |
| `imageForRecents` |  |
| `installTime` |  |
| `largeIcon` |  |
| `launchPointId` |  |
| `launchPoints` |  |
| `lptype` |  |
| `mediumLargeIcon` |  |
| `miniicon` |  |
| `params` |  |
| `qCardDescription` |  |
| `qCardIcon` |  |
| `qCardImage` |  |
| `qCardPartnerLogo` |  |
| `qCardRemoteIcon` |  |
| `qCardTitle` |  |
| `qCardbgColor` |  |
| `relaunch` |  |
| `removable` |  |
| `systemApp` |  |
| `tileSize` |  |
| `title` |  |
| `unmovable` |  |
| `userData` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listAvailableQCards '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listlaunchpoints"></a>
## `listLaunchPoints`

`luna://com.webos.service.homelaunchpoints/listLaunchPoints`

Lists the launch points.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) listLaunchPoints maintains the order of lauch point apps that are not hidden |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listLaunchPoints '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listqcards"></a>
## `listQCards`

`luna://com.webos.service.homelaunchpoints/listQCards`

Lists the q cards.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) listQCards support subscription to notify when home launch points are updated. |

**Returns:**

| Field | Type / notes |
|---|---|
| `appDescription` |  |
| `bgColor` |  |
| `bgImage` |  |
| `bgImages` |  |
| `deeplinkingParams` |  |
| `extraLargeIcon` |  |
| `favicon` |  |
| `icon` |  |
| `iconColor` |  |
| `id` |  |
| `imageForRecents` |  |
| `installTime` |  |
| `largeIcon` |  |
| `launchPointId` |  |
| `launchPoints` |  |
| `lptype` |  |
| `mediumLargeIcon` |  |
| `miniicon` |  |
| `params` |  |
| `qCardDescription` |  |
| `qCardIcon` |  |
| `qCardImage` |  |
| `qCardPartnerLogo` |  |
| `qCardRemoteIcon` |  |
| `qCardTitle` |  |
| `qCardbgColor` |  |
| `relaunch` |  |
| `removable` |  |
| `systemApp` |  |
| `tileSize` |  |
| `title` |  |
| `unmovable` |  |
| `userData` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listQCards '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="movelaunchpoint"></a>
## `moveLaunchPoint`

`luna://com.webos.service.homelaunchpoints/moveLaunchPoint`

Moves the launch point.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be updated |
| `position` | Number (required) This field means the position where to put on launcher |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/moveLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="moveqcard"></a>
## `moveQCard`

`luna://com.webos.service.homelaunchpoints/moveQCard`

Moves the q card.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be updated |
| `position` | Number (required) This field means the position where to put on launcher |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/moveQCard '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removelaunchpoint"></a>
## `removeLaunchPoint` ⚠️ DANGEROUS

`luna://com.webos.service.homelaunchpoints/removeLaunchPoint`

Removes the launch point.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be removed |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/removeLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all. Flagged dangerous by name; verify before calling.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeqcard"></a>
## `removeQCard` ⚠️ DANGEROUS

`luna://com.webos.service.homelaunchpoints/removeQCard`

Removes the q card.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be removed |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/removeQCard '{}'
```

> ACG groups: hlp.internal, private, all. Flagged dangerous by name; verify before calling.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unhidelaunchpoint"></a>
## `unhideLaunchPoint`

`luna://com.webos.service.homelaunchpoints/unhideLaunchPoint`

Handles the unhide launch point.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be restored from hidden list |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/unhideLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatelaunchpoint"></a>
## `updateLaunchPoint`

`luna://com.webos.service.homelaunchpoints/updateLaunchPoint`

Updates the launch point.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be updated |
| `title` | String (optional) Title for the launch point to be updated |
| `icon` | String (optional) Path to icon for the launch point to be updated |
| `bgImage` | String (optional) This field is the location of a bitmap. The bitmap is displayed to the user when the user hovers over the launch point with the system pointer. |
| `bgImages` | Array (optional) Locations of bitmaps that may be displayed to the user when the user hovers over the launch point with the system pointer. |
| `bgColor` | String (optional) This field is the color to be displayed to the user when the user hovers over the launch point with the system pointer. This is used in the absence of the backgroundImage. |
| `imageForRecents` | String (optional) This field is the location of a bitmap. The bitmap is displayed in the recent apps list. |
| `iconColor` | String (optional) indicates color of the icon of the launch point. |
| `mediumLargeIcon` | String (optional) path to mediumLargeIcon |
| `largeIcon` | String (optional) path to largeIcon |
| `extraLargeIcon` | String (optional) path to extraLargeIcon |
| `appDescription` | String (optional) A short tagline for the application |
| `params` | Object (optional) Parameters to pass to the application |
| `userData` | String (optional) Additional data that may be used by clients, such as an identifier for analytics purposes |
| `tileSize` | String (optional) Hint for sizing of UI tiles: normal or large, large may be used for a promotional item Possible values: normal, large |
| `unmovable` | Boolean (optional) Hint that an item should never be moved from it's given position |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/updateLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateqcard"></a>
## `updateQCard`

`luna://com.webos.service.homelaunchpoints/updateQCard`

Updates the q card.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) ID of launch point to be updated |
| `qCardTitle` | String (optional) New title that user desires |
| `qCardDescription` | String (optional) User required description |
| `qCardIcon` | String (optional) user required icon |
| `qCardRemoteIcon` | String (optional) user required remote icon |

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/updateQCard '{}'
```

> ACG groups: hlp.internal, private, public, all.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
