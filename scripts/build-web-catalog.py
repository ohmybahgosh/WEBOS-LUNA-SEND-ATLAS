#!/usr/bin/env python3
"""Build web/catalog.json, the compact catalog ohmybahgosh.dev/luna-atlas reads,
from catalog/luna-catalog.jsonl and catalog/services.json.

Keys per method: m method, u uri, c category, a access, s subscribe (1/0),
d dangerous (1/0), dc doc confidence (documented | inferred | stub), desc, p params.
Descriptions and parameter notes are kept in full (an earlier hand-run build cut them at 180 and 80 characters).

  python3 scripts/build-web-catalog.py            write web/catalog.json
  python3 scripts/build-web-catalog.py --check    exit 1 if web/catalog.json is out of date
"""
import collections, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'catalog', 'luna-catalog.jsonl')
SVC = os.path.join(ROOT, 'catalog', 'services.json')
OUT = os.path.join(ROOT, 'web', 'catalog.json')


def conf(r):
    # inferred: described from the method name only.  stub: a bare service root with no method.
    # Everything else (official docs, source code, community projects) counts as documented.
    if (r.get('confidence') or 'inferred') == 'inferred':
        return 'inferred'
    if not r.get('method'):
        return 'stub'
    return 'documented'


def build():
    rows = [json.loads(l) for l in open(SRC, encoding='utf-8') if l.strip()]
    sv = json.load(open(SVC, encoding='utf-8')).get('services', {})
    by = collections.OrderedDict()
    for r in rows:
        by.setdefault(r['service'], []).append(r)
    services = []
    for name in sorted(by, key=str.lower):
        ms = []
        for r in sorted(by[name], key=lambda r: (r.get('method') or '').lower()):
            p = r.get('params') or {}
            if not isinstance(p, dict):
                p = {}
            # every note is a string; structured notes are written out as JSON
            p = {k: (v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)) for k, v in p.items()}
            d = r.get('description') or ''
            ms.append({'m': r.get('method') or '', 'u': r['uri'], 'c': r.get('category') or 'misc',
                       'a': r.get('access') or 'unknown', 's': 1 if r.get('subscribe') else 0,
                       'd': 1 if r.get('dangerous') else 0, 'dc': conf(r), 'desc': d, 'p': p})
        info = sv.get(name, {})
        services.append({'service': name, 'n': len(ms), 'methods': ms,
                         'sd': info.get('description', ''), 'sdc': info.get('confidence', 'inferred')})
    allm = [m for s in services for m in s['methods']]
    counts = {
        'methods': len(allm), 'services': len(services),
        'by_category': dict(collections.Counter(m['c'] for m in allm)),
        'by_access': dict(collections.Counter(m['a'] for m in allm)),
        'by_doc': dict(collections.Counter(m['dc'] for m in allm)),
    }
    return {'generated': 'WEBOS-LUNA-SEND-ATLAS', 'counts': counts, 'services': services}


def dump(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))


if __name__ == '__main__':
    out = dump(build())
    if '--check' in sys.argv:
        cur = open(OUT, encoding='utf-8').read() if os.path.exists(OUT) else ''
        sys.exit(0 if cur.strip() == out else 1)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'wrote {OUT}: {len(out):,} bytes')
