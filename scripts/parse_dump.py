#!/usr/bin/env python3
"""Parse a luna-dump.sh tarball/dir and diff it against catalog/luna-catalog.jsonl.

Usage:
  python3 scripts/parse_dump.py luna-dump-OLED55C1-20261104.tar.gz [--out new.jsonl]

Prints methods found on the TV that are not in the catalog, writes them as catalog
records (confidence "code", params unknown), and extracts the SSAP -> luna routing
table from the secondscreen gateway interface files when present.

ls-monitor -i output format (webOS OSE docs / retail TVs):
  "/category":
      "method": {"provides":["all","settings.read"]}
"""
import argparse, json, os, re, sys, tarfile, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
CATALOG = os.path.join(HERE, "..", "catalog", "luna-catalog.jsonl")
CAT_RE = re.compile(r'^\s*"(/[^"]*)"\s*:\s*$')
METH_RE = re.compile(r'^\s*"([^"]+)"\s*:\s*(\{.*\})\s*,?\s*$')


def open_dump(path):
    if os.path.isdir(path):
        return path
    tmp = tempfile.mkdtemp(prefix="lunadump-")
    with tarfile.open(path) as t:
        for m in t.getmembers():  # refuse path traversal
            if m.name.startswith("/") or ".." in m.name.split("/") or m.issym() or m.islnk():
                continue
            t.extract(m, tmp)
    subs = [os.path.join(tmp, d) for d in os.listdir(tmp)]
    return subs[0] if len(subs) == 1 and os.path.isdir(subs[0]) else tmp


def parse_introspect(text):
    out, cat = [], "/"
    for line in text.splitlines():
        m = CAT_RE.match(line)
        if m:
            cat = m.group(1)
            continue
        m = METH_RE.match(line)
        if m:
            try:
                groups = json.loads(m.group(2)).get("provides", [])
            except json.JSONDecodeError:
                groups = []
            name = m.group(1)
            method = name if cat == "/" else f"{cat.strip('/')}/{name}"
            out.append((method, groups))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("dump")
    ap.add_argument("--out", default="new-methods.jsonl")
    a = ap.parse_args()

    root = open_dump(a.dump)
    fw = open(os.path.join(root, "firmware.txt")).read() if os.path.exists(os.path.join(root, "firmware.txt")) else ""
    model = re.search(r"model=(.*)", fw)
    model = model.group(1).strip() if model else "unknown"

    known = set()
    if os.path.exists(CATALOG):
        for line in open(CATALOG):
            r = json.loads(line)
            known.add((r["service"].lower(), r["method"].lower().lstrip("/")))

    idir = os.path.join(root, "introspect")
    total, new = 0, []
    for f in sorted(os.listdir(idir)) if os.path.isdir(idir) else []:
        svc = f[:-4]
        for method, groups in parse_introspect(open(os.path.join(idir, f), errors="replace").read()):
            total += 1
            if (svc.lower(), method.lower()) in known:
                continue
            new.append({
                "service": svc, "method": method, "uri": f"luna://{svc}/{method}",
                "category": "misc", "description": "Found by on-device introspection (behaviour undocumented)",
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

    # SSAP routing table (best effort: assumes interface file name == SSAP namespace)
    gw = os.path.join(root, "files", "usr", "palm", "services", "com.webos.service.secondscreen.gateway", "interfaces")
    if os.path.isdir(gw):
        rows = []
        for f in sorted(os.listdir(gw)):
            try:
                j = json.load(open(os.path.join(gw, f)))
            except Exception:
                continue
            ns = f.rsplit(".", 1)[0]
            for m in j.get("methods", []):
                rows.append((f"ssap://{ns}{m.get('path','')}", f"luna://{j.get('service','?')}{m.get('path','')}",
                             ",".join(m.get("requiredPermissions", []))))
        with open("ssap-routing.md", "w") as fh:
            fh.write(f"# SSAP routing on {model}\n\n| SSAP | luna | permissions |\n|---|---|---|\n")
            for r in rows:
                fh.write(f"| `{r[0]}` | `{r[1]}` | {r[2]} |\n")
        print(f"SSAP routing: {len(rows)} entries -> ssap-routing.md")


if __name__ == "__main__":
    sys.exit(main())
