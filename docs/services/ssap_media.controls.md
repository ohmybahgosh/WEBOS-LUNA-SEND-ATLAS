# `ssap:media.controls`

SSAP media controls (TV remote-control protocol): play, pause, stop, fast-forward and rewind for media playback.

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`fastForward`](#fastforward) | ssap |  | media | documented | Media control: fastForward |
| [`pause`](#pause) | ssap |  | media | documented | Media control: pause |
| [`play`](#play) | ssap |  | media | documented | Media control: play |
| [`rewind`](#rewind) | ssap |  | media | documented | Media control: rewind |
| [`stop`](#stop) | ssap |  | media | documented | Media control: stop |

<a id="fastforward"></a>
## `fastForward`

`ssap://media.controls/fastForward`

Media control: fastForward

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://media.controls/fastForward","payload":{}}
```

> The SSAP namespace 'media.controls' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmediacontrols.go)

<a id="pause"></a>
## `pause`

`ssap://media.controls/pause`

Media control: pause

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://media.controls/pause","payload":{}}
```

> The SSAP namespace 'media.controls' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmediacontrols.go)

<a id="play"></a>
## `play`

`ssap://media.controls/play`

Media control: play

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://media.controls/play","payload":{}}
```

> The SSAP namespace 'media.controls' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmediacontrols.go)

<a id="rewind"></a>
## `rewind`

`ssap://media.controls/rewind`

Media control: rewind

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://media.controls/rewind","payload":{}}
```

> The SSAP namespace 'media.controls' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmediacontrols.go)

<a id="stop"></a>
## `stop`

`ssap://media.controls/stop`

Media control: stop

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://media.controls/stop","payload":{}}
```

> The SSAP namespace 'media.controls' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mmediacontrols.go)
