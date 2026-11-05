# `com.webos.service.sportsalarm`

Sports-alarm service that tracks sporting events and pushes game alerts/timers. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkTranslation`](#checktranslation) | private |  | misc | inferred | Checks the translation. |
| [`getEvent`](#getevent) | private |  | misc | inferred | Returns the event. |
| [`push`](#push) | private |  | misc | inferred | Pushes the sportsalarm. |
| [`start`](#start) | private |  | misc | inferred | Starts the sportsalarm. |
| [`startTimer`](#starttimer) | private |  | input | inferred | Starts the timer. |

<a id="checktranslation"></a>
## `checkTranslation`

`luna://com.webos.service.sportsalarm/checkTranslation`

Checks the translation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalarm/checkTranslation '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getevent"></a>
## `getEvent`

`luna://com.webos.service.sportsalarm/getEvent`

Returns the event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalarm/getEvent '{}'
```

> ACG groups: private, com.webos.service.sportsalarm, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="push"></a>
## `push`

`luna://com.webos.service.sportsalarm/push`

Pushes the sportsalarm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalarm/push '{}'
```

> ACG groups: private, com.webos.service.sportsalarm, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.sportsalarm/start`

Starts the sportsalarm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalarm/start '{}'
```

> ACG groups: private, com.webos.service.sportsalarm, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="starttimer"></a>
## `startTimer`

`luna://com.webos.service.sportsalarm/startTimer`

Starts the timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalarm/startTimer '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
