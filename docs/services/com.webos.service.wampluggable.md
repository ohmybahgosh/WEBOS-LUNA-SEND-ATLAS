# `com.webos.service.wampluggable`

Web app/WAM helper: reads and sets cookies per domain, returns the user-agent string, and reloads the page. Supports the web-app runtime. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCookiesForDomain`](#getcookiesfordomain) | private |  | misc | inferred | Returns the cookies for domain. |
| [`getUserAgentString`](#getuseragentstring) | private |  | misc | inferred | Returns the user agent string. |
| [`reloadPage`](#reloadpage) | private |  | misc | inferred | Reloads the page. |
| [`setDomainForCookies`](#setdomainforcookies) | private |  | misc | inferred | Sets the domain for cookies. |

<a id="getcookiesfordomain"></a>
## `getCookiesForDomain`

`luna://com.webos.service.wampluggable/getCookiesForDomain`

Returns the cookies for domain.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable/getCookiesForDomain '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuseragentstring"></a>
## `getUserAgentString`

`luna://com.webos.service.wampluggable/getUserAgentString`

Returns the user agent string.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable/getUserAgentString '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reloadpage"></a>
## `reloadPage`

`luna://com.webos.service.wampluggable/reloadPage`

Reloads the page.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable/reloadPage '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdomainforcookies"></a>
## `setDomainForCookies`

`luna://com.webos.service.wampluggable/setDomainForCookies`

Sets the domain for cookies.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable/setDomainForCookies '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
