# webOS discovery notes

How the methods in this catalog were found, and how you can find and verify calls on your own TV.  This is reference material about what the Luna Service Bus exposes.  It is not a rooting or exploit guide: to get a root shell in the first place, see [RootMyTV](https://rootmy.tv) and the [webosbrew](https://github.com/webosbrew) project.

## The Luna Service Bus, briefly

Every webOS service listens on the **Luna Service Bus** (an internal IPC bus, "ls2").  `luna-send` is the TV's own command-line client for it, and `luna-send-pub` is the public-bus variant.  A call is a URI (`luna://<service>/<method>`) plus a JSON payload.  Services register the methods they accept and an access level for each; that registry is what this catalog mirrors.

## Finding methods on your own TV

Once you have an SSH shell on a rooted set, a few tools show you the bus directly.

**Watch live traffic.**  `ls-monitor` prints every request and reply going across the bus.  Open an app or press buttons on the remote and watch which services and methods the UI calls.  This is the fastest way to find the real call behind something the TV already does.

```sh
ls-monitor                      # log all traffic
ls-monitor -l                   # list connected clients / services
ls-monitor -i com.webos.service.tvpower   # inspect the requests a service supports
```

**Read the on-device schemas.**  Some services ship their real JSON request schemas on the device under `/etc/palm/schemas`.  Where a schema exists, it is the authoritative source for a method's parameters.  This is the main place real parameter shapes can be recovered, and the reason the catalog marks most parameters as inferred rather than inventing them.

```sh
ls /etc/palm/schemas
```

**Dump and compare.**  This repo's own CLI does a read-only sweep of your TV's services:

```sh
luna-atlas dump
```

Compare that against the catalog to spot methods your set has that are not documented yet, or access levels that differ on your webOS version.

## How this catalog was built

- **Method names and access levels** come from introspecting real LG TVs (the on-device permission registry, which lists each method and its access group) plus the public documentation.  Access for methods present on a real LG C2 (webOS 22) is confirmed against that registry.
- **Descriptions and parameters** come from the [webOS OSE LS2 API reference](https://www.webosose.org/docs/reference/ls2-api/) (CC-BY 4.0), official LG docs, and community tools wherever they exist.  Methods with no public source carry a one-line description derived only from the method name, and no invented parameters.  Every record lists its sources in [SOURCES.md](../SOURCES.md), and a scrub step keeps personal data and installed-app names out.

See [tv-dumps.md](tv-dumps.md) for the dump format and [luna-send-basics.md](luna-send-basics.md) for the call syntax.

## Contributing what you find

The quickest way to grow the catalog is to run `luna-atlas dump` on your TV, especially on a webOS version other than 22, and open a pull request or issue with anything new or different.  Corrections to descriptions and access levels are just as welcome.

In scope: what a service or method is, its parameters, its access level, whether it is dangerous, and where that came from.  Out of scope: region, country, DRM, store sign-in and app-signing bypasses.  This repo documents what the bus exposes on a TV you own; it does not publish ways around LG's protections.

## Credits and further reading

This project stands on a lot of community reverse-engineering.  In particular:

- **Informatic**, [openlgtv webOS hacking notes](https://gist.github.com/Informatic/1983f2e501444cf1cbd182e50820d6c1): the gist that documents `ls-monitor`, the screenshot call, app and power state subscriptions, and many other bus details.  Several recipes trace back to it.
- **webosbrew**: the [Homebrew Channel](https://github.com/webosbrew/webos-homebrew-channel), [RootMyTV](https://rootmy.tv), and the wider [webosbrew](https://github.com/webosbrew) tooling that make a root shell and `luna-send` reachable in the first place.
- **webOS OSE**: the open-source edition and its [LS2 API reference](https://www.webosose.org/docs/reference/ls2-api/) (CC-BY 4.0), the authoritative source for the documented methods.
- **LG**: the official [webOS TV developer docs](https://webostv.developer.lge.com/).
