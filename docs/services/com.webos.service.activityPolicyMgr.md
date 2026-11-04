# `com.webos.service.activityPolicyMgr`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`releaseAuthority`](#releaseauthority) | private |  | activity | Method on com.webos.service.activityPolicyMgr (introspected on-device; parameters undocumented). |
| [`requestAuthority`](#requestauthority) | private |  | activity | Method on com.webos.service.activityPolicyMgr (introspected on-device; parameters undocumented). |

<a id="releaseauthority"></a>
## `releaseAuthority`

`luna://com.webos.service.activityPolicyMgr/releaseAuthority`

Method on com.webos.service.activityPolicyMgr (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.activityPolicyMgr/releaseAuthority '{}'
```

> ACG groups: activityPolicyMgr.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestauthority"></a>
## `requestAuthority`

`luna://com.webos.service.activityPolicyMgr/requestAuthority`

Method on com.webos.service.activityPolicyMgr (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.activityPolicyMgr/requestAuthority '{}'
```

> ACG groups: activityPolicyMgr.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
