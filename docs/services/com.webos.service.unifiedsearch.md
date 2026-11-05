# `com.webos.service.unifiedsearch`

Unified search service: searches items (intents) by keyword across categories and manages which search categories are enabled.

8 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`category`](#category) | unknown |  | misc | documented | Indicates the category information. |
| [`display`](#display) | unknown |  | misc | documented | Indicates the display information to show on screen. |
| [`getCategories`](#getcategories) | public |  | misc | documented | Gets an ordered list of enabled and disabled categories. |
| [`groupedIntents`](#groupedintents) | unknown |  | misc | documented | Indicates the categorized intents |
| [`intent`](#intent) | unknown |  | misc | documented | Contains intent that has 'display' attribute on 'extra' field internally. |
| [`item`](#item) | unknown |  | misc | inferred | Handles the item. |
| [`search`](#search) | public |  | misc | documented | Searches with keyword and return intents of items. Note : Returning intent can be implicit or explicit intent and have display property to s |
| [`updateCategory`](#updatecategory) | public |  | misc | documented | Allows enabling or disabling of a category and change the order of the category. |

<a id="category"></a>
## `category`

`luna://com.webos.service.unifiedsearch/category`

Indicates the category information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/category '{}'
```

> Service: Searches various items (intents) by using keyword. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="display"></a>
## `display`

`luna://com.webos.service.unifiedsearch/display`

Indicates the display information to show on screen.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/display '{}'
```

> Service: Searches various items (intents) by using keyword. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="getcategories"></a>
## `getCategories`

`luna://com.webos.service.unifiedsearch/getCategories`

Gets an ordered list of enabled and disabled categories.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `enabled` | Object array: category (required) Indicates the ordered array of enabled categories. |
| `disabled` | Object array: category (required) Indicates the array of disabled categories. |

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/getCategories '{ }
```

> ACG: search.operation \| Returns: returnValue:Boolean; enabled:Object array: category; disabled:Object array: category \| Service: Searches various items (intents) by using keyword.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="groupedintents"></a>
## `groupedIntents`

`luna://com.webos.service.unifiedsearch/groupedIntents`

Indicates the categorized intents

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/groupedIntents '{}'
```

> Service: Searches various items (intents) by using keyword. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="intent"></a>
## `intent`

`luna://com.webos.service.unifiedsearch/intent`

Contains intent that has 'display' attribute on 'extra' field internally.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/intent '{}'
```

> Service: Searches various items (intents) by using keyword. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="item"></a>
## `item`

`luna://com.webos.service.unifiedsearch/item`

Handles the item.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/item '{}'
```

> Service: Searches various items (intents) by using keyword. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="search"></a>
## `search`

`luna://com.webos.service.unifiedsearch/search`

Searches with keyword and return intents of items. Note : Returning intent can be implicit or explicit intent and have display property to show this on screen.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Indicates the keyword to find items. |

**Returns:**

| Field | Type / notes |
|---|---|
| `results` | Object array: groupedIntents (optional) Indicates the results that are grouped intents by categories. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the Error Codes section for more details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/search '{"key":"pro"}
```

> ACG: search.operation \| Returns: returnValue:Boolean; results:Object array: groupedIntents; errorText:String; errorCode:Number \| Service: Searches various items (intents) by using keyword.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)

<a id="updatecategory"></a>
## `updateCategory`

`luna://com.webos.service.unifiedsearch/updateCategory`

Allows enabling or disabling of a category and change the order of the category.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Specifies the category to be updated. |
| `enabled` | Boolean (optional) Indicates if the category is enabled. Possible values are: true : The category is enabled false : the category is disabled |
| `rank` | Number (optional) Indicates the position in which the specific category is returned by the getCategories() API. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.unifiedsearch/updateCategory '{ "id":"com.webos.app.avn.settings", "rank":1 }'
```

> ACG: search.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Searches various items (intents) by using keyword.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-unifiedsearch/)
