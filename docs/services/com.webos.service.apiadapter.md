# `com.webos.service.apiadapter`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audio/changeSoundOutput`](#audio_changesoundoutput) | ssap |  | audio | Change sound output |
| [`audio/getSoundOutput`](#audio_getsoundoutput) | ssap | yes | audio | Get (or subscribe to) current sound output |

<a id="audio_changesoundoutput"></a>
## `audio/changeSoundOutput`

`luna://com.webos.service.apiadapter/audio/changeSoundOutput`

Change sound output

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `output` | string: tv_speaker \| external_arc \| external_optical \| bt_soundbar \| headphone \| lineout \| ... (see notes list) |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.apiadapter/audio/changeSoundOutput","payload":{"output":"external_arc"}}
```

> Alias ssap://audio/changeSoundOutput used by LGWebOSRemote/PyWebOSTV/homebridge-webos-tv. LGTV Companion: `-request_with_param com.webos.service.apiadapter/audio/changeSoundOutput {"output":"output"}`.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [4](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/remote.py)

<a id="audio_getsoundoutput"></a>
## `audio/getSoundOutput`

`luna://com.webos.service.apiadapter/audio/getSoundOutput`

Get (or subscribe to) current sound output

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.apiadapter/audio/getSoundOutput","payload":{}}
```

> Response key: soundOutput (e.g. tv_speaker, external_arc, external_optical, bt_soundbar, headphone, lineout; full list in libs-notes.md). 'apiadapter' is the SSAP-side adapter service; there is also an alias ssap://audio/getSoundOutput (PyWebOSTV, alga).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [5](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)
