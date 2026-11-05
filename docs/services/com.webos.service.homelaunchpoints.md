# `com.webos.service.homelaunchpoints`

Home-screen launch-point and QCard manager: lists, adds, moves, hides, removes and updates home-screen launch points and QCards. _(inferred from the service's methods)_

14 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addLaunchPoint`](#addlaunchpoint) | private |  | apps | inferred | Adds the launch point. |
| [`addQCard`](#addqcard) | private |  | apps | inferred | Adds the q card. |
| [`hideLaunchPoint`](#hidelaunchpoint) | private |  | apps | inferred | Hides the launch point. |
| [`listAvailableLaunchPoints`](#listavailablelaunchpoints) | private |  | apps | inferred | Lists the available launch points. |
| [`listAvailableQCards`](#listavailableqcards) | private |  | apps | inferred | Lists the available q cards. |
| [`listLaunchPoints`](#listlaunchpoints) | private |  | apps | inferred | Lists the launch points. |
| [`listQCards`](#listqcards) | private |  | apps | inferred | Lists the q cards. |
| [`moveLaunchPoint`](#movelaunchpoint) | private |  | apps | inferred | Moves the launch point. |
| [`moveQCard`](#moveqcard) | private |  | apps | inferred | Moves the q card. |
| [`removeLaunchPoint`](#removelaunchpoint) | private |  | apps | inferred | Removes the launch point. ⚠️ |
| [`removeQCard`](#removeqcard) | private |  | apps | inferred | Removes the q card. ⚠️ |
| [`unhideLaunchPoint`](#unhidelaunchpoint) | private |  | apps | inferred | Handles the unhide launch point. |
| [`updateLaunchPoint`](#updatelaunchpoint) | private |  | apps | inferred | Updates the launch point. |
| [`updateQCard`](#updateqcard) | public |  | apps | inferred | Updates the q card. |

<a id="addlaunchpoint"></a>
## `addLaunchPoint`

`luna://com.webos.service.homelaunchpoints/addLaunchPoint`

Adds the launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/addLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="addqcard"></a>
## `addQCard`

`luna://com.webos.service.homelaunchpoints/addQCard`

Adds the q card.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/addQCard '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hidelaunchpoint"></a>
## `hideLaunchPoint`

`luna://com.webos.service.homelaunchpoints/hideLaunchPoint`

Hides the launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/hideLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listavailablelaunchpoints"></a>
## `listAvailableLaunchPoints`

`luna://com.webos.service.homelaunchpoints/listAvailableLaunchPoints`

Lists the available launch points.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listAvailableLaunchPoints '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listavailableqcards"></a>
## `listAvailableQCards`

`luna://com.webos.service.homelaunchpoints/listAvailableQCards`

Lists the available q cards.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listAvailableQCards '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listlaunchpoints"></a>
## `listLaunchPoints`

`luna://com.webos.service.homelaunchpoints/listLaunchPoints`

Lists the launch points.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listLaunchPoints '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listqcards"></a>
## `listQCards`

`luna://com.webos.service.homelaunchpoints/listQCards`

Lists the q cards.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/listQCards '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="movelaunchpoint"></a>
## `moveLaunchPoint`

`luna://com.webos.service.homelaunchpoints/moveLaunchPoint`

Moves the launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/moveLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="moveqcard"></a>
## `moveQCard`

`luna://com.webos.service.homelaunchpoints/moveQCard`

Moves the q card.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/moveQCard '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removelaunchpoint"></a>
## `removeLaunchPoint` ⚠️ DANGEROUS

`luna://com.webos.service.homelaunchpoints/removeLaunchPoint`

Removes the launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/removeLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeqcard"></a>
## `removeQCard` ⚠️ DANGEROUS

`luna://com.webos.service.homelaunchpoints/removeQCard`

Removes the q card.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/removeQCard '{}'
```

> ACG groups: hlp.internal, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unhidelaunchpoint"></a>
## `unhideLaunchPoint`

`luna://com.webos.service.homelaunchpoints/unhideLaunchPoint`

Handles the unhide launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/unhideLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatelaunchpoint"></a>
## `updateLaunchPoint`

`luna://com.webos.service.homelaunchpoints/updateLaunchPoint`

Updates the launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/updateLaunchPoint '{}'
```

> ACG groups: hlp.internal, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateqcard"></a>
## `updateQCard`

`luna://com.webos.service.homelaunchpoints/updateQCard`

Updates the q card.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.homelaunchpoints/updateQCard '{}'
```

> ACG groups: hlp.internal, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
