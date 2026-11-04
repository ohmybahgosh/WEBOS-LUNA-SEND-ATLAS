# `com.palmdts.devmode.service`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`devSessionTimeStatus`](#devsessiontimestatus) | private |  | devmode | Remaining dev session time |
| [`resetSession`](#resetsession) | private |  | devmode | Renews the dev mode session |

<a id="devsessiontimestatus"></a>
## `devSessionTimeStatus`

`luna://com.palmdts.devmode.service/devSessionTimeStatus`

Remaining dev session time

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4+  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.palmdts.devmode.service/devSessionTimeStatus '{}'
```

> remainSession like 1000h:00m.

Sources: [1](https://github.com/lennylxx/lg-devmode-forever/blob/HEAD/service/index.js)

<a id="resetsession"></a>
## `resetSession`

`luna://com.palmdts.devmode.service/resetSession`

Renews the dev mode session

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4+  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.palmdts.devmode.service/resetSession '{}'
```

> Reply statusCode "recreated".

Sources: [1](https://github.com/lennylxx/lg-devmode-forever/blob/HEAD/service/index.js)
