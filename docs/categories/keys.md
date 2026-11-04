# Key Management

13 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.palm.keys/audio/status`](../services/com.palm.keys.md#audio_status) | root | Subscribes to volume key status changes |
| [`luna://com.webos.keyfilter.magicnumber/notifyChannelToRegister`](../services/com.webos.keyfilter.magicnumber.md#notifychanneltoregister) | private | Method registered by com.webos.keyfilter.magicnumber (root category) |
| [`luna://com.webos.service.irdbmanager/getKeyList`](../services/com.webos.service.irdbmanager.md#getkeylist) | private | Lists valid IR key codes for a device type |
| [`luna://com.webos.service.irdbmanager/sendIrCommand`](../services/com.webos.service.irdbmanager.md#sendircommand) | private | Sends an IR blaster command to a configured device such as a soundbar |
| [`luna://com.webos.service.networkinput/getPointerInputSocket`](../services/com.webos.service.networkinput.md#getpointerinputsocket) | ssap | Returns websocket URL for pointer/button input |
| [`luna://com.webos.service.networkinput/sendSpecialKey`](../services/com.webos.service.networkinput.md#sendspecialkey) | private | Injects a remote key by name |
| [`luna://com.webos.service.networkinput/test/getTouchpanelInputSocket`](../services/com.webos.service.networkinput.md#test_gettouchpanelinputsocket) | private | Network input method: test/getTouchpanelInputSocket |
| [`luna://com.webos.service.networkinput/test/sendKeyCode`](../services/com.webos.service.networkinput.md#test_sendkeycode) | private | Injects a Linux key code (IR_KEY_* value less 8) |
| [`luna://com.webos.service.tv.keymanager/createKeyboardEvent`](../services/com.webos.service.tv.keymanager.md#createkeyboardevent) | private | Injects a keyboard event (LG key injection service) |
| [`luna://com.webos.service.tv.keymanager/createKeyEvent`](../services/com.webos.service.tv.keymanager.md#createkeyevent) | private | Creates a key event (LG key injection) |
| [`luna://com.webos.service.tv.keymanager/createMouseEvent`](../services/com.webos.service.tv.keymanager.md#createmouseevent) | private | Injects a mouse/pointer event (LG key injection service) |
| [`luna://com.webos.service.tv.keymanager/listInterestingEvents`](../services/com.webos.service.tv.keymanager.md#listinterestingevents) | ssap | List key events of interest (requires subscribe) |
| [`luna://com.webos.service.tv.legacyinput/createKeyEvent`](../services/com.webos.service.tv.legacyinput.md#createkeyevent) | private | Injects a key event via the legacy input service |
