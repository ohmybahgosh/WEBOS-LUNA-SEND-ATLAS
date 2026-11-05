# `com.webos.service.activityPolicyMgr`

Activity policy manager: grants and releases scheduling authority between activities. Narrow arbitration role based on its two methods. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`releaseAuthority`](#releaseauthority) | private |  | activity | inferred | Releases the authority. |
| [`requestAuthority`](#requestauthority) | private |  | activity | inferred | Requests the authority. |

<a id="releaseauthority"></a>
## `releaseAuthority`

`luna://com.webos.service.activityPolicyMgr/releaseAuthority`

Releases the authority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.activityPolicyMgr/releaseAuthority '{}'
```

> ACG groups: activityPolicyMgr.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestauthority"></a>
## `requestAuthority`

`luna://com.webos.service.activityPolicyMgr/requestAuthority`

Requests the authority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.activityPolicyMgr/requestAuthority '{}'
```

> ACG groups: activityPolicyMgr.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
