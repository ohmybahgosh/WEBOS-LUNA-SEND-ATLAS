# Key Management

13 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://com.palm.keys/audio/status`](../services/com.palm.keys.md#audio_status) | root | documented | Subscribes to volume key status changes |
| [`luna://com.webos.keyfilter.magicnumber/notifyChannelToRegister`](../services/com.webos.keyfilter.magicnumber.md#notifychanneltoregister) | private | inferred | Notifies of the channel to register. |
| [`luna://com.webos.service.irdbmanager/getKeyList`](../services/com.webos.service.irdbmanager.md#getkeylist) | private | documented | Lists valid IR key codes for a device type |
| [`luna://com.webos.service.irdbmanager/sendIrCommand`](../services/com.webos.service.irdbmanager.md#sendircommand) | private | documented | Sends an IR blaster command to a configured device such as a soundbar |
| [`luna://com.webos.service.networkinput/getPointerInputSocket`](../services/com.webos.service.networkinput.md#getpointerinputsocket) | ssap | documented | Returns websocket URL for pointer/button input |
| [`luna://com.webos.service.networkinput/sendSpecialKey`](../services/com.webos.service.networkinput.md#sendspecialkey) | private | documented | Injects a remote key by name |
| [`luna://com.webos.service.networkinput/test/getTouchpanelInputSocket`](../services/com.webos.service.networkinput.md#test_gettouchpanelinputsocket) | private | documented | Network input method: test/getTouchpanelInputSocket |
| [`luna://com.webos.service.networkinput/test/sendKeyCode`](../services/com.webos.service.networkinput.md#test_sendkeycode) | private | documented | Injects a Linux key code (IR_KEY_* value less 8) |
| [`luna://com.webos.service.tv.keymanager/createKeyboardEvent`](../services/com.webos.service.tv.keymanager.md#createkeyboardevent) | private | documented | Injects a keyboard event (LG key injection service) |
| [`luna://com.webos.service.tv.keymanager/createKeyEvent`](../services/com.webos.service.tv.keymanager.md#createkeyevent) | private | documented | Creates a key event (LG key injection) |
| [`luna://com.webos.service.tv.keymanager/createMouseEvent`](../services/com.webos.service.tv.keymanager.md#createmouseevent) | private | documented | Injects a mouse/pointer event (LG key injection service) |
| [`luna://com.webos.service.tv.keymanager/listInterestingEvents`](../services/com.webos.service.tv.keymanager.md#listinterestingevents) | ssap | documented | List key events of interest (requires subscribe) |
| [`luna://com.webos.service.tv.legacyinput/createKeyEvent`](../services/com.webos.service.tv.legacyinput.md#createkeyevent) | private | documented | Injects a key event via the legacy input service |
