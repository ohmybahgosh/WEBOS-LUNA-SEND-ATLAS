# `com.webos.service.avmutemanager`

Audio/video mute manager: coordinates AV mute across clients, tracking mute status, owners, timing, and registered services, and setting the overall AV mute state. _(inferred from the service's methods)_

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getInternalMuteStatus`](#getinternalmutestatus) | private |  | misc | inferred | Returns the internal mute status. |
| [`getInternalMuteTime`](#getinternalmutetime) | private |  | input | inferred | Returns the internal mute time. |
| [`getMuteInfo`](#getmuteinfo) | public |  | misc | inferred | Returns the mute info. |
| [`getMuteOwnerList`](#getmuteownerlist) | public |  | misc | inferred | Returns the mute owner list. |
| [`getMuteStatus`](#getmutestatus) | public |  | misc | inferred | Returns the mute status. |
| [`getRegisterDB`](#getregisterdb) | public |  | db | inferred | Returns the register DB. |
| [`listDebugRegisteredServices`](#listdebugregisteredservices) | public |  | misc | inferred | Lists the debug registered services. |
| [`listMuteStatus`](#listmutestatus) | public |  | misc | inferred | Lists the mute status. |
| [`register`](#register) | public |  | misc | inferred | Registers the avmutemanager. |
| [`setAvMute`](#setavmute) | public |  | misc | inferred | Sets the A/V mute. |
| [`unregister`](#unregister) | public |  | misc | inferred | Unregisters the avmutemanager. |
| [`updateAvResource`](#updateavresource) | public |  | update | inferred | Updates the A/V resource. |

<a id="getinternalmutestatus"></a>
## `getInternalMuteStatus`

`luna://com.webos.service.avmutemanager/getInternalMuteStatus`

Returns the internal mute status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/getInternalMuteStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinternalmutetime"></a>
## `getInternalMuteTime`

`luna://com.webos.service.avmutemanager/getInternalMuteTime`

Returns the internal mute time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/getInternalMuteTime '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmuteinfo"></a>
## `getMuteInfo`

`luna://com.webos.service.avmutemanager/getMuteInfo`

Returns the mute info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/getMuteInfo '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmuteownerlist"></a>
## `getMuteOwnerList`

`luna://com.webos.service.avmutemanager/getMuteOwnerList`

Returns the mute owner list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/getMuteOwnerList '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmutestatus"></a>
## `getMuteStatus`

`luna://com.webos.service.avmutemanager/getMuteStatus`

Returns the mute status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/getMuteStatus '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getregisterdb"></a>
## `getRegisterDB`

`luna://com.webos.service.avmutemanager/getRegisterDB`

Returns the register DB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/getRegisterDB '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listdebugregisteredservices"></a>
## `listDebugRegisteredServices`

`luna://com.webos.service.avmutemanager/listDebugRegisteredServices`

Lists the debug registered services.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/listDebugRegisteredServices '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listmutestatus"></a>
## `listMuteStatus`

`luna://com.webos.service.avmutemanager/listMuteStatus`

Lists the mute status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/listMuteStatus '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="register"></a>
## `register`

`luna://com.webos.service.avmutemanager/register`

Registers the avmutemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/register '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setavmute"></a>
## `setAvMute`

`luna://com.webos.service.avmutemanager/setAvMute`

Sets the A/V mute.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/setAvMute '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregister"></a>
## `unregister`

`luna://com.webos.service.avmutemanager/unregister`

Unregisters the avmutemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/unregister '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateavresource"></a>
## `updateAvResource`

`luna://com.webos.service.avmutemanager/updateAvResource`

Updates the A/V resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avmutemanager/updateAvResource '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
