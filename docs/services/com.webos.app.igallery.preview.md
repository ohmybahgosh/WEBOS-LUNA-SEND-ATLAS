# `com.webos.app.igallery.preview`

Appears to back the image-gallery preview app: creates gallery database and account folders, lists view themes, and reports status via the activity manager. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`createAccountFolder`](#createaccountfolder) | private |  | misc | inferred | Creates the account folder. |
| [`createGalleryDB`](#creategallerydb) | private |  | db | inferred | Creates the gallery DB. |
| [`getMyViewThemelist`](#getmyviewthemelist) | private |  | misc | inferred | Returns the my view themelist. |
| [`getstatusByActivitymanager`](#getstatusbyactivitymanager) | private |  | activity | inferred | Handles the getstatus by activitymanager. |
| [`info`](#info) | private |  | misc | inferred | Handles the info. |
| [`invoke`](#invoke) | private |  | misc | inferred | Handles the invoke. |
| [`quit`](#quit) | private |  | misc | inferred | Quits the app igallery preview. |

<a id="createaccountfolder"></a>
## `createAccountFolder`

`luna://com.webos.app.igallery.preview/createAccountFolder`

Creates the account folder.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/createAccountFolder '{}'
```

> ACG groups: private, igallery.preview, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="creategallerydb"></a>
## `createGalleryDB`

`luna://com.webos.app.igallery.preview/createGalleryDB`

Creates the gallery DB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/createGalleryDB '{}'
```

> ACG groups: private, igallery.preview, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmyviewthemelist"></a>
## `getMyViewThemelist`

`luna://com.webos.app.igallery.preview/getMyViewThemelist`

Returns the my view themelist.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/getMyViewThemelist '{}'
```

> ACG groups: private, igallery.preview, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatusbyactivitymanager"></a>
## `getstatusByActivitymanager`

`luna://com.webos.app.igallery.preview/getstatusByActivitymanager`

Handles the getstatus by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/getstatusByActivitymanager '{}'
```

> ACG groups: igallery.preview, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.app.igallery.preview/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `arguments` |  |
| `commands` |  |
| `description` |  |

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/info '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="invoke"></a>
## `invoke`

`luna://com.webos.app.igallery.preview/invoke`

Handles the invoke.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/invoke '{}'
```

> ACG groups: igallery.preview, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.app.igallery.preview/quit`

Quits the app igallery preview.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.igallery.preview/quit '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
