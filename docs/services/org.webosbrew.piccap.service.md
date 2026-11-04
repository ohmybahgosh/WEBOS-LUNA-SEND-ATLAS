# `org.webosbrew.piccap.service`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`start`](#start) | public |  | misc | Starts PicCap capture |

<a id="start"></a>
## `start`

`luna://org.webosbrew.piccap.service/start`

Starts PicCap capture

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** PicCap  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.piccap.service/start '{}'
```

> Also stop, status, getSettings, setSettings.

Sources: [1](https://github.com/webosbrew/piccap/blob/HEAD/frontend/js/servicecalls.js)
