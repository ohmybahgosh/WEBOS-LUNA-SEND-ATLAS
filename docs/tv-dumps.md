# Reference TV dumps

Method availability and names differ between models and firmware.  This page lists the real TVs whose on-device introspection has been folded into the catalog, so you can tell where a given method was actually seen.  To add yours, see [Contributing](../README.md#contributing).

| Model | Chassis | webOS | Firmware | Services | Methods | Contributor |
|---|---|---|---|---|---|---|
| retail LG OLED | W22O | webOS TV 7.0 | 33.31.68 (2026-10) | 278 | 4,188 | OhMyBahGosh |
| retail LG OLED (OLED55B9PUA) | - | webOS TV 4.5 | 4.10.2-31 | ~15 (partial) | ~500 | SunnySide007/lumen-webos |

## webOS 7.0 (W22O) notes

- Introspection was collected read-only via `luna://<service>/com/palm/luna/private/introspection {"type":"description"}`, which returns each service's methods and ACG permission groups (no parameter schemas).
- Captured real getter output for panel/OLED/update services (folded into those methods' notes), e.g. `panelcontroller/getPanelUsageTime`, `oledepl/getPixelRefresherInfoList`, `update/getCurrentSWInformation`.

### factorywin capability flags

The TV exposes a large set of `tv.conti.support*` capability booleans through `com.webos.app.factorywin` config groups (read via `config/getConfigs` / the factory menu).  These describe what the chassis supports (codecs, voice, regional features) rather than being luna methods.  The full key list captured from this set is in [`../catalog/factory-capability-keys.json`](../catalog/factory-capability-keys.json).


## Artifacts from the W22O dump

- [`ssap-routing-W22O.md`](ssap-routing-W22O.md) - full SSAP->luna routing table with required permissions (377 routes).
- [`../catalog/settings-schema-W22O.json`](../catalog/settings-schema-W22O.json) - 1,954 settings keys with category/dbtype/dimension.
- [`../catalog/factory-capability-keys.json`](../catalog/factory-capability-keys.json) - 171 `tv.conti.support*` chassis capability flags.

## How complete is this?

The W22O catalog was built in three layers, each catching what the previous missed:

1. **Live introspection** (`luna-send .../private/introspection`) - 367 services that were *running* at dump time, with their methods and ACG groups.
2. **Gateway interfaces** - the SSAP->luna routing files, giving the network-facing surface and required permissions.
3. **On-disk permission registry** (`/usr/share/luna-service2/api-permissions.d`) - 6,692 method entries across 425 services, including **dormant** services that only start in a specific context (Live TV tuned, a recording running, a device paired, a specific app open). This is what closes most of the gap.

### Still not captured

- **Parameters.** Introspection and permission files give method *names* and permission groups, not argument schemas. Params must still be learned by `ls-monitor` tracing or source. This is the biggest remaining gap.
- **Methods registered only at runtime.** A few services build their method table dynamically and expose nothing in the static files; they appear only when introspected in the right state.
- **Wildcard bus names** (e.g. `com.webos.service.drmclient_*`) are per-instance and were skipped.
- **Other models and firmware.** This is one TV (webOS 7.0, W22O). webOS 3.x-6.x and 22-25 differ; some methods here won't exist there and vice-versa.
- **Deliberately out of scope.** DRM (`widevine`, `drm`), conditional access (`cas`, `commercial.scapadapter`), store auth (`sdx`) and the package verifier are listed by name only, with no parameters, procedures, or circumvention details.

Bottom line: this is believed to be the most complete enumeration of a single LG webOS TV's luna surface published anywhere, but "every method on every firmware, with full parameters" is not done - that's what the roadmap and contributed dumps are for.
