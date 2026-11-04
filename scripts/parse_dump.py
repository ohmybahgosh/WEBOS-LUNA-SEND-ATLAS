#!/usr/bin/env python3
"""Parse a luna-dump.sh tarball/dir and diff it against catalog/luna-catalog.jsonl.

Usage:
  python3 scripts/parse_dump.py luna-dump-W22O-20261104.tar.gz [--out new.jsonl]

Reads the per-service introspection JSON in lsi/ (format returned by
luna://<svc>/com/palm/luna/private/introspection {"type":"description"}):
  {"returnValue":true,"categories":{"/cat":{"methods":{"name":{"provides":[...]}}}}}
Prints methods found on the TV that aren't in the catalog and writes them as
catalog records (confidence "code", params unknown).  Per-connection unique bus
names (foo.client123, foo._LWxy...) are folded onto their base service.
"""
import argparse, json, os, re, sys, tarfile, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
CATALOG = os.path.join(HERE, "..", "catalog", "luna-catalog.jsonl")
INST = re.compile(r"\.(?:client\d+|req\d*|_[A-Za-z0-9]{8,})$")


def base_name(s):
    prev = None
    while prev != s:
        prev, s = s, INST.sub("", s)
    return s


def open_dump(path):
    if os.path.isdir(path):
        return path
    tmp = tempfile.mkdtemp(prefix="lunadump-")
    with tarfile.open(path) as t:
        for m in t.getmembers():
            if m.name.startswith("/") or ".." in m.name.split("/") or m.issym() or m.islnk():
                continue
            t.extract(m, tmp)
    subs = [os.path.join(tmp, d) for d in os.listdir(tmp)]
    return subs[0] if len(subs) == 1 and os.path.isdir(subs[0]) else tmp


def methods_from(doc):
    out = []
    cats = doc.get("categories") or {}
    for cat, cv in cats.items():
        for name, meta in (cv.get("methods") or {}).items():
            path = name if cat in ("/", "") else f"{cat.strip('/')}/{name}"
            out.append((path, (meta or {}).get("provides", [])))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("dump")
    ap.add_argument("--out", default="new-methods.jsonl")
    a = ap.parse_args()
    root = open_dump(a.dump)

    model = "unknown"
    fw = os.path.join(root, "firmware.json")
    if os.path.exists(fw):
        m = re.search(r'"model_name"\s*:\s*"([^"]+)"', open(fw).read())
        if m:
            model = m.group(1)

    known = set()
    if os.path.exists(CATALOG):
        for line in open(CATALOG):
            r = json.loads(line)
            known.add((r["service"].lower(), r["method"].lower().lstrip("/")))

    idir = os.path.join(root, "lsi")
    total, new, seen = 0, [], set()
    for f in sorted(os.listdir(idir)) if os.path.isdir(idir) else []:
        if not f.endswith(".json"):
            continue
        svc = base_name(f[:-5])
        try:
            doc = json.load(open(os.path.join(idir, f)))
        except Exception:
            continue
        for method, groups in methods_from(doc):
            total += 1
            key = (svc.lower(), method.lower())
            if key in known or key in seen:
                continue
            seen.add(key)
            new.append({
                "service": svc, "method": method, "uri": f"luna://{svc}/{method}",
                "category": "misc", "description": "Found by on-device introspection (parameters undocumented).",
                "params": {}, "example": f"luna-send -n 1 -f luna://{svc}/{method} '{{}}'",
                "subscribe": False, "access": "public" if "public" in groups else "private",
                "platform": "webOS TV", "versions": f"seen on {model}", "dangerous": False,
                "notes": "ACG groups: " + ", ".join(groups), "sources": [f"luna-dump {model}"],
                "confidence": "code",
            })
    with open(a.out, "w") as fh:
        for r in new:
            fh.write(json.dumps(r) + "\n")
    print(f"model {model}: {total} methods introspected, {len(new)} not in catalog -> {a.out}")

    gw = os.path.join(root, "files", "usr", "palm", "services",
                      "com.webos.service.secondscreen.gateway", "interfaces")
    if os.path.isdir(gw):
        rows = []
        for f in sorted(os.listdir(gw)):
            try:
                j = json.load(open(os.path.join(gw, f)))
            except Exception:
                continue
            ns = j.get("virtualService") or j.get("service") or f.rsplit(".", 1)[0]
            svc = j.get("service")  # present on identity-mapped interfaces
            for m in j.get("methods", []):
                path = m.get("path", "")
                prov = m.get("provider")  # alias interfaces: "service/method/path"
                if prov:
                    luna = f"luna://{prov}"
                elif svc:
                    luna = f"luna://{svc}{path}"
                else:
                    luna = f"luna://{ns}{path}"  # identity fallback
                rows.append((f"ssap://{ns}{path}", luna,
                             ",".join(m.get("requiredPermissions", []))))
        with open("ssap-routing.md", "w") as fh:
            fh.write(f"# SSAP routing on {model}\n\n| SSAP | luna | permissions |\n|---|---|---|\n")
            for r in rows:
                fh.write(f"| `{r[0]}` | `{r[1]}` | {r[2]} |\n")
        print(f"SSAP routing: {len(rows)} entries -> ssap-routing.md")


if __name__ == "__main__":
    sys.exit(main())
