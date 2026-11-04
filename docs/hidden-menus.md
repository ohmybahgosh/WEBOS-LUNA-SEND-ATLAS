# Hidden menus and special app launches

Launch with `luna-send -n 1 -f luna://com.webos.applicationManager/launch '{"id":"<app id>","params":{...}}'` (root) or `ssap://system.launcher/launch` (no root).

> ⚠️ Service menus (In-Start / Ez-Adjust) can change panel and factory options.  Some items (for example In-Stop) can factory reset the TV.  Do not change values you can't restore.


| Purpose | app id | params | Source |
|---|---|---|---|
| In-Start service menu (PIN 0413 typed via input socket) | com.webos.app.factorywin | {"id":"executeFactory","irKey":"inStart"} | bscpylgtv guides, LGTV Companion, LGWebOSRemote instart.py |
| Ez-Adjust service menu | com.webos.app.factorywin | {"id":"executeFactory","irKey":"ezAdjust"} | bscpylgtv docs/scripts |
| Mute-hidden menu | com.webos.app.tvhotkey | {"activateType":"mute-hidden-action"} | bscpylgtv guides |
| FreeSync/VRR info panel | com.webos.app.tvhotkey | {"activateType":"freesync-info"} | bscpylgtv, LGTV Companion |
| Settings app deep link | com.palm.app.settings | {"target":"picture"} / {"target":"channel"} | bscpylgtv docs/scripts |
| HDMI input | com.webos.app.hdmi1..4 | {} | LGTV Companion `LG_URI_PAYLOAD_SETHDMI` |
| Screensaver | com.webos.app.screensaver | {} | LGTV Companion docs |
| Live TV | com.webos.app.livetv | {} | bscpylgtv `set_current_app_state` |
| Browser | com.webos.app.browser (via system.launcher/open {target}) | | snabb/webostv |
| Simple viewer | com.webos.app.tvsimpleviewer (via media.viewer/open) | | snabb/webostv |
| YouTube | youtube.leanback.v4 | {"contentTarget":url} or contentId | LGWebOSRemote, lgtv2 |
| Legacy service menu toggle | settings category `other` key `svcMenuFlag` false=legacy menu on / true=default | | LGTV Companion |

