# `com.webos.service.tv.keymanager`

TV input-event service: injects key, keyboard and mouse events and lists events of interest. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`createKeyboardEvent`](#createkeyboardevent) | private |  | keys | documented | Injects a keyboard event (LG key injection service) |
| [`createKeyEvent`](#createkeyevent) | private |  | keys | documented | Creates a key event (LG key injection) |
| [`createMouseEvent`](#createmouseevent) | private |  | keys | documented | Injects a mouse/pointer event (LG key injection service) |
| [`listInterestingEvents`](#listinterestingevents) | ssap | yes | keys | documented | List key events of interest (requires subscribe) |

<a id="createkeyboardevent"></a>
## `createKeyboardEvent`

`luna://com.webos.service.tv.keymanager/createKeyboardEvent`

Injects a keyboard event (LG key injection service)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.keymanager/createKeyboardEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.keymanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private, tv.services. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/b9.md)

<a id="createkeyevent"></a>
## `createKeyEvent`

`luna://com.webos.service.tv.keymanager/createKeyEvent`

Creates a key event (LG key injection)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS <5 per magic_mapper  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `code` | integer |
| `device` | remoteControl |
| `id` | string |
| `type` | keyDown\|keyUp |

```sh
luna-send -n 1 luna://com.webos.service.tv.keymanager/createKeyEvent '{}'
```

Sources: [1](https://github.com/andrewfraley/magic_mapper/blob/HEAD/magic_mapper.py), [2](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md)

<a id="createmouseevent"></a>
## `createMouseEvent`

`luna://com.webos.service.tv.keymanager/createMouseEvent`

Injects a mouse/pointer event (LG key injection service)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.keymanager/createMouseEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.keymanager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private, tv.services. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/b9.md)

<a id="listinterestingevents"></a>
## `listInterestingEvents`

`luna://com.webos.service.tv.keymanager/listInterestingEvents`

List key events of interest (requires subscribe)

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.keymanager/listInterestingEvents","payload":{}}
```

> snabb/webostv: errors with KEYMANAGER_ERROR_0001 "Required parameter does not exist - subscribe" unless subscribe is given.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)
