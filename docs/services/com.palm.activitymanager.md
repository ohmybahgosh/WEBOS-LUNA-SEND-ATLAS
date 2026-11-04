# `com.palm.activitymanager`

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`adopt`](#adopt) | public | yes | activity | Registers an app or service as willing to take over as the Activity parent. |
| [`cancel`](#cancel) | public |  | activity | Terminates the specified Activity and sends a cancel event to all subscribers. |
| [`complete`](#complete) | public | yes | activity | Parent ends the Activity and optionally restarts it with new attributes. |
| [`create`](#create) | public | yes | activity | Creates a new Activity and returns its ID. |
| [`release`](#release) | public |  | activity | Parent frees an Activity and notifies other subscribers. |
| [`start`](#start) | public |  | activity | Moves an Activity from init to eligible-to-run, or resumes a paused one. |
| [`stop`](#stop) | public |  | activity | Stops an Activity and sends a stop event to all subscribers. |

<a id="adopt"></a>
## `adopt`

`luna://com.palm.activitymanager/adopt`

Registers an app or service as willing to take over as the Activity parent.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (required) |
| `activityName` | String (required) |
| `wait` | Boolean (required) wait for Activity release |
| `subscribe` | Boolean (required) |
| `detailedEvents` | Boolean (optional) |

```sh
luna-send -i -f luna://com.palm.activitymanager/adopt '{"activityId":90,"wait":true,"subscribe":true,"detailedEvents":false}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)

<a id="cancel"></a>
## `cancel`

`luna://com.palm.activitymanager/cancel`

Terminates the specified Activity and sends a cancel event to all subscribers.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (required) |
| `activityName` | String (required) |

```sh
luna-send -n 1 -f luna://com.palm.activitymanager/cancel '{"activityId":93}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)

<a id="complete"></a>
## `complete`

`luna://com.palm.activitymanager/complete`

Parent ends the Activity and optionally restarts it with new attributes.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (required) |
| `activityName` | String (required) |
| `restart` | Boolean (optional) |
| `callback` | Object (optional) |
| `schedule` | Object (optional) |
| `trigger` | Object (optional) |
| `metadata` | Object (optional) |

```sh
luna-send -i -f luna://com.palm.activitymanager/complete '{"activityId":94}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)

<a id="create"></a>
## `create`

`luna://com.palm.activitymanager/create`

Creates a new Activity and returns its ID.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activity` | Object (required) |
| `subscribe` | Boolean (optional) |
| `detailedEvents` | Boolean (optional) |
| `start` | Boolean (optional) start immediately |
| `replace` | Boolean (optional) replace Activity with same name |

```sh
luna-send -i -f luna://com.palm.activitymanager/create '{"activity":{"name":"basicactivity","description":"Test create","type":{"foreground":true}},"start":true,"subscribe":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)

<a id="release"></a>
## `release`

`luna://com.palm.activitymanager/release`

Parent frees an Activity and notifies other subscribers.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (required) |
| `activityName` | String (required) |

```sh
luna-send -n 1 -f luna://com.palm.activitymanager/release '{"activityId":98}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)

<a id="start"></a>
## `start`

`luna://com.palm.activitymanager/start`

Moves an Activity from init to eligible-to-run, or resumes a paused one.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (required) |
| `activityName` | String (required) |

```sh
luna-send -n 1 -f luna://com.palm.activitymanager/start '{"activityId":93}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)

<a id="stop"></a>
## `stop`

`luna://com.palm.activitymanager/stop`

Stops an Activity and sends a stop event to all subscribers.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (required) |
| `activityName` | String (required) |

```sh
luna-send -n 1 -f luna://com.palm.activitymanager/stop '{"activityId":93}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/activity-manager)
