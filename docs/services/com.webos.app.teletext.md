# `com.webos.app.teletext`

Teletext viewer app control: enables and disables teletext, queries the current page and state, and forwards remote key events to it.

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`controlTeletext`](#controlteletext) | private |  | misc | inferred | Controls the teletext. |
| [`disableTeletext`](#disableteletext) | private |  | misc | inferred | Disables the teletext. |
| [`enableTeletext`](#enableteletext) | private |  | misc | inferred | Enables the teletext. |
| [`getCurrentTeletext`](#getcurrentteletext) | private |  | misc | inferred | Returns the current teletext. |
| [`getTeletextState`](#getteletextstate) | private |  | misc | inferred | Returns the teletext state. |
| [`isTimeAvailable`](#istimeavailable) | private |  | input | inferred | Reports whether the time available is set. |
| [`sendTeletextKeyEvent`](#sendteletextkeyevent) | private |  | misc | inferred | Sends the teletext key event. |
| [`setTeletext`](#setteletext) | private |  | misc | inferred | Sets the teletext. |

<a id="controlteletext"></a>
## `controlTeletext`

`luna://com.webos.app.teletext/controlTeletext`

Controls the teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/controlTeletext '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disableteletext"></a>
## `disableTeletext`

`luna://com.webos.app.teletext/disableTeletext`

Disables the teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/disableTeletext '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enableteletext"></a>
## `enableTeletext`

`luna://com.webos.app.teletext/enableTeletext`

Enables the teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/enableTeletext '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentteletext"></a>
## `getCurrentTeletext`

`luna://com.webos.app.teletext/getCurrentTeletext`

Returns the current teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/getCurrentTeletext '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getteletextstate"></a>
## `getTeletextState`

`luna://com.webos.app.teletext/getTeletextState`

Returns the teletext state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/getTeletextState '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="istimeavailable"></a>
## `isTimeAvailable`

`luna://com.webos.app.teletext/isTimeAvailable`

Reports whether the time available is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/isTimeAvailable '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendteletextkeyevent"></a>
## `sendTeletextKeyEvent`

`luna://com.webos.app.teletext/sendTeletextKeyEvent`

Sends the teletext key event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/sendTeletextKeyEvent '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setteletext"></a>
## `setTeletext`

`luna://com.webos.app.teletext/setTeletext`

Sets the teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.teletext/setTeletext '{}'
```

> ACG groups: teletext.app. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
