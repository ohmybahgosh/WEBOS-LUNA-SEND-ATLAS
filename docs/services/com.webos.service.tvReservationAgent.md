# `com.webos.service.tvReservationAgent`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`timer/sleep/add`](#timer_sleep_add) | private |  | power | Sets the sleep timer in minutes |
| [`timer/sleep/getRemainTime`](#timer_sleep_getremaintime) | private |  | power | Returns remaining sleep timer |

<a id="timer_sleep_add"></a>
## `timer/sleep/add`

`luna://com.webos.service.tvReservationAgent/timer/sleep/add`

Sets the sleep timer in minutes

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `sleepTimeMinute` | string minutes |

```sh
luna-send -n 1 luna://com.webos.service.tvReservationAgent/timer/sleep/add '{"sleepTimeMinute":"30"}'
```

> A dev app is not allowed to call it; goes through HBC exec. Companion getRemainTime below.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp), [2](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md)

<a id="timer_sleep_getremaintime"></a>
## `timer/sleep/getRemainTime`

`luna://com.webos.service.tvReservationAgent/timer/sleep/getRemainTime`

Returns remaining sleep timer

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.tvReservationAgent/timer/sleep/getRemainTime '{}'
```

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp)
