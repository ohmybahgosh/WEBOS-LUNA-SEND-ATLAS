# Sensitive services (sdx, ACR, DRM, Widevine)

A few services sit close to LG's cloud accounts, content protection, and privacy. Leaving them as bare names is unhelpful, and dumping exploit recipes is not what this repo is for. So they are documented the way [Glasshouse](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/) documents them: **what the service is for, what its methods do, and what they return**, with the bits that would help defeat authentication, licensing, DRM or region locks deliberately left out.

What that means in practice:

- No account tokens, device secrets, or encrypted identifiers are printed, even where a method returns them.
- Methods that change region, server, or device authentication are described by *purpose* (what they are for), not given as a step-by-step bypass.
- DRM and Widevine are documented as the normal content-decryption lifecycle used by licensed playback. There is nothing here about extracting keys or stripping protection.

Most of the behavioural detail below comes from Glasshouse's TV-RESEARCH notes (observed on real TVs across webOS 4 to 11); method existence is confirmed from the on-device permission registry on a webOS 7.0 OLED (W22O). Per-method entries are in the catalog under each service page.

## `com.webos.service.sdx` - LG Smart Delivery Platform client

sdx is the TV's client for LG's SDP cloud (hosts like `<country>.nextlgsdp.com` on older firmware, `tv.wiselg.com` on webOS 11). It covers four jobs:

- **Content-catalogue search / discovery.** LG's own Search (`com.webos.app.voice` → `com.webos.service.nlpmanager/search`) returns one result per title per streaming app; `sdx/send` with `serviceName: "sdp_onnow"`, `url: "content_discovery/item-detail"` fetches a title's detail (`exec_app_id`, `exec_id`) which `applicationManager` turns into an app deep link. This is the benign, useful half of sdx, and Glasshouse's Home search is built on it.
- **Server/host lookup.** `getServerUrl`, `getServerList`, `getRdxServerUrl`, `getHttpHeaderForServiceRequest` tell the TV which SDP host to talk to for each service (`sdp_nlp`, `sdp_search`, `sdp_onnow`, ...). The header response also carries device ids and LG account tokens; Glasshouse reads only the `HOST` from it and notes the tokens should not be logged. This repo documents the method, never a token value.
- **Device authentication / provisioning.** `getDeviceAuthenticationStatus` is a read-only check (`isDeviceAuthenticated`, `provisioningCompleted`); `requestDeviceAuthentication`, `deleteDeviceAuthentication`, `requestProvisioningDev` exist and are named here for completeness. Glasshouse observed ACR stop when device auth returned false.
- **Region / EULA / reports.** `doServiceCountryChange`, `setCountrySettingByManual/Auto` set which content region the TV talks to; `requestEulaDownload` and friends handle legal text; `getRdxServerUrl` + `send` are how `uploadd` posts crash/telemetry reports. The region methods are described by purpose; this repo does not provide a region-lock bypass.

## `com.webos.service.acr` - Automatic Content Recognition (LG "Live Plus")

ACR fingerprints what is on screen for LG's analytics and ad targeting. The documentation here is for **auditing** it, which is also why Glasshouse studied it:

- The service is `Type=dynamic`: any call, including a status query like `getACRSolutionStatus`, starts `acr2`. A running `acr2` is therefore **not** proof ACR is collecting anything.
- With Live Plus and the ACR consents off, Glasshouse watched a started `acr2` load no fingerprinting (Alphonso) library, open no network sockets, and write no `/tmp/acr.xml`; it reads consent/country/device, checks `sdx/getDeviceAuthenticationStatus`, and stops when not provisioned.
- `getACRstatus`, `getACRSolutionStatus`, `getVideoCaptureStatus` are the read-only ways to see its state without changing it.

## `com.webos.service.drm` / `com.webos.service.widevine` - content protection

Documented by name and purpose only. These are the standard CDM (content-decryption module) lifecycles used by licensed streaming: load/unload, create/close session, `generateRequest` (license challenge) → `updateSession` (license response), provisioning and HDCP-status checks. Nothing here describes extracting keys, persisting licenses improperly, or removing protection.

## Not covered

- `com.webos.service.legacybroadcast.cas` (broadcast conditional access) exposed no methods in the dump; it is named in the catalog with no detail.
- Anything that would defeat DRM, device authentication, the LG account/store sign-in, or the region lock. If that is what you are after, this is not the repo for it.

---

Credit to [Glasshouse](https://github.com/rorygallagher2024/glasshouse) for the behavioural research these summaries draw on.
