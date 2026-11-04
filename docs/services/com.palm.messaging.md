# `com.palm.messaging`

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`sendMessageFromCompose`](#sendmessagefromcompose) | root |  | misc | Sends a text message |

<a id="sendmessagefromcompose"></a>
## `sendMessageFromCompose`

`luna://com.palm.messaging/sendMessageFromCompose`

Sends a text message

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `recipientJSONArray` | array of recipient objects (type, value, ...) |
| `messageText` | string |

```sh
luna-send -n 1 palm://com.palm.messaging/sendMessageFromCompose '{"recipientJSONArray":[{"type":"phone","value":"8165551234","alreadyValidated":true,"prefix":"to$A"}],"messageText":"hi"}'
```

> Full recipient object on wiki also has name/picture fields (empty).

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
