# `com.webos.service.dmrsvc`

DLNA Digital Media Renderer service: plays media pushed from DLNA controllers, reporting play status and managing volume, mute, subtitles, popup menus, and 3D format. _(inferred from the service's methods)_

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`endCommand`](#endcommand) | private |  | misc | inferred | Handles the end command. |
| [`getAction`](#getaction) | private |  | misc | inferred | Returns the action. |
| [`notifyPlayStatus`](#notifyplaystatus) | private |  | misc | inferred | Notifies of the play status. |
| [`prepare3DFormat`](#prepare3dformat) | private |  | misc | inferred | Prepares the 3 d format. ⚠️ |
| [`set3DFormat`](#set3dformat) | private |  | misc | inferred | Sets the 3 d format. ⚠️ |
| [`setAvailable3DFormats`](#setavailable3dformats) | private |  | misc | inferred | Sets the available 3 d formats. ⚠️ |
| [`setMuteStatus`](#setmutestatus) | private |  | misc | inferred | Sets the mute status. |
| [`setVolume`](#setvolume) | private |  | misc | inferred | Sets the volume. |
| [`showPopupMenu`](#showpopupmenu) | private |  | misc | inferred | Shows the popup menu. |
| [`showSubtitle`](#showsubtitle) | private |  | media | inferred | Shows the subtitle. |
| [`startCommand`](#startcommand) | private |  | misc | inferred | Starts the command. |
| [`verifyUse`](#verifyuse) | private |  | misc | inferred | Verifies the use. |

<a id="endcommand"></a>
## `endCommand`

`luna://com.webos.service.dmrsvc/endCommand`

Handles the end command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/endCommand '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaction"></a>
## `getAction`

`luna://com.webos.service.dmrsvc/getAction`

Returns the action.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/getAction '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyplaystatus"></a>
## `notifyPlayStatus`

`luna://com.webos.service.dmrsvc/notifyPlayStatus`

Notifies of the play status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/notifyPlayStatus '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="prepare3dformat"></a>
## `prepare3DFormat` ⚠️ DANGEROUS

`luna://com.webos.service.dmrsvc/prepare3DFormat`

Prepares the 3 d format.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/prepare3DFormat '{}'
```

> ACG groups: private, all, media, dmrsvc.feature. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="set3dformat"></a>
## `set3DFormat` ⚠️ DANGEROUS

`luna://com.webos.service.dmrsvc/set3DFormat`

Sets the 3 d format.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/set3DFormat '{}'
```

> ACG groups: private, all, media, dmrsvc.feature. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setavailable3dformats"></a>
## `setAvailable3DFormats` ⚠️ DANGEROUS

`luna://com.webos.service.dmrsvc/setAvailable3DFormats`

Sets the available 3 d formats.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/setAvailable3DFormats '{}'
```

> ACG groups: private, all, media, dmrsvc.feature. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmutestatus"></a>
## `setMuteStatus`

`luna://com.webos.service.dmrsvc/setMuteStatus`

Sets the mute status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/setMuteStatus '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvolume"></a>
## `setVolume`

`luna://com.webos.service.dmrsvc/setVolume`

Sets the volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/setVolume '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showpopupmenu"></a>
## `showPopupMenu`

`luna://com.webos.service.dmrsvc/showPopupMenu`

Shows the popup menu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/showPopupMenu '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showsubtitle"></a>
## `showSubtitle`

`luna://com.webos.service.dmrsvc/showSubtitle`

Shows the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/showSubtitle '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startcommand"></a>
## `startCommand`

`luna://com.webos.service.dmrsvc/startCommand`

Starts the command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/startCommand '{}'
```

> ACG groups: private, all, media, dmrsvc.feature.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifyuse"></a>
## `verifyUse`

`luna://com.webos.service.dmrsvc/verifyUse`

Verifies the use.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmrsvc/verifyUse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
