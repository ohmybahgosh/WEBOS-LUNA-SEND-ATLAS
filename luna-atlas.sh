#!/bin/sh
# luna-atlas - browse and run LG webOS luna-send commands from the shell.
#
# `luna-send` is the TV's own command-line client for the Luna Service Bus (the
# internal IPC bus every webOS service sits on).  This wraps the catalog of
# every known service + method around it: search them, read them, run them with
# a guard on the dangerous ones, and serve a browser UI.
#
# Runs on a rooted LG TV (busybox sh) or any POSIX shell with luna-send on PATH.
# Part of WEBOS-LUNA-SEND-ATLAS: https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS
set -eu

VERSION="1.0.0"
SELF=$(command -v "$0" 2>/dev/null || echo "$0")
case "$SELF" in */*) SELFDIR=$(cd "$(dirname "$SELF")" && pwd) ;; *) SELFDIR=$(pwd) ;; esac

# Locate the data dir (holds catalog/index.tsv and web/).  Override with LUNA_ATLAS_DATA.
find_data() {
  for d in \
    "${LUNA_ATLAS_DATA:-}" \
    "$SELFDIR" \
    "$SELFDIR/.." \
    "/media/developer/apps/usr/palm/applications/org.ohmybahgosh.lunaatlas" \
    "/var/lib/luna-atlas"; do
    [ -n "$d" ] && [ -f "$d/catalog/index.tsv" ] && { cd "$d" && pwd; return 0; }
  done
  return 1
}
DATA=$(find_data) || { echo "luna-atlas: can't find catalog/index.tsv (set LUNA_ATLAS_DATA)" >&2; exit 1; }
IDX="$DATA/catalog/index.tsv"
WEB="$DATA/web"

# colours only on a terminal
if [ -t 1 ] && [ "${NO_COLOR:-}" = "" ]; then
  C_G=$(printf '\033[32m'); C_Y=$(printf '\033[33m'); C_R=$(printf '\033[31m')
  C_D=$(printf '\033[2m'); C_B=$(printf '\033[1m'); C_0=$(printf '\033[0m')
else C_G=; C_Y=; C_R=; C_D=; C_B=; C_0=; fi

die() { echo "luna-atlas: $*" >&2; exit 1; }

usage() {
  cat <<EOF
${C_B}luna-atlas${C_0} $VERSION - browse and run webOS luna-send commands

${C_B}Usage${C_0}
  luna-atlas search <text> [limit]      find methods (name, service or description)
  luna-atlas show <uri | service/method> details + a ready-to-run example
  luna-atlas services [filter]          list services and their method counts
  luna-atlas categories                 list categories and counts
  luna-atlas run <uri> ['<payload>'] [-y]  run a call (asks on dangerous ones)
  luna-atlas serve [port]               browser UI on 127.0.0.1 (default 3000)
  luna-atlas dump [outdir]              read-only dump of THIS TV's services
  luna-atlas count                      how many methods / services
  luna-atlas help

${C_B}Examples${C_0}
  luna-atlas search toast
  luna-atlas show com.webos.notification/createToast
  luna-atlas run luna://com.webos.notification/createToast '{"message":"hi"}'
  luna-atlas serve 3000     # then on your PC: ssh -L 3000:127.0.0.1:3000 root@TV

Data: $DATA
EOF
}

# normalise an argument to a bare luna uri path "service/method"
norm_uri() { printf '%s' "$1" | sed 's#^luna://##'; }

cmd_count() {
  methods=$(grep -vc '^#' "$IDX")
  services=$(grep -v '^#' "$IDX" | cut -f1 | sort -u | wc -l | tr -d ' ')
  echo "${C_B}$methods${C_0} methods across ${C_B}$services${C_0} services"
}

cmd_search() {
  q=${1:-}; [ -n "$q" ] || die "search needs text"
  limit=${2:-40}
  awk -F'\t' -v q="$(printf '%s' "$q" | tr 'A-Z' 'a-z')" -v lim="$limit" \
      -v g="$C_G" -v y="$C_Y" -v r="$C_R" -v d="$C_D" -v z="$C_0" '
    /^#/ {next}
    { hay=tolower($1" "$2" "$8) }
    index(hay,q) {
      n++; if(n>lim) {more++; next}
      acc=$4; col=(acc=="public"?g:(acc=="private"||acc=="root"?y:d))
      flag=($5=="1"? r" !"z : "")
      printf "%s%s%s  %s[%s]%s %s%s\n", g,$3,z, col,acc,z, substr($8,1,80), flag
    }
    END{ if(more>0) printf "%s... %d more (raise the limit)%s\n", d, more, z }' "$IDX"
}

cmd_show() {
  [ $# -ge 1 ] || die "show needs a uri or service/method"
  key=$(norm_uri "$1")
  awk -F'\t' -v k="$key" -v g="$C_G" -v y="$C_Y" -v r="$C_R" -v b="$C_B" -v d="$C_D" -v z="$C_0" '
    /^#/ {next}
    { bare=$1"/"$2 }
    (bare==k || $3=="luna://"k) {
      found=1
      printf "%s%s%s\n", b, $3, z
      printf "  %sservice%s   %s\n", d,z,$1
      printf "  %smethod%s    %s\n", d,z,$2
      printf "  %saccess%s    %s%s%s\n", d,z,(($4=="public")?g:y),$4,z
      printf "  %scategory%s  %s\n", d,z,$7
      printf "  %ssubscribe%s %s\n", d,z,($6=="1"?"yes":"no")
      if($5=="1") printf "  %sDANGEROUS%s this call can change or damage the TV\n", r,z
      printf "  %sabout%s     %s\n", d,z,$8
      printf "\n  %srun it:%s\n    luna-send -n 1 -f %s %s{}%s\n", b,z,$3,d,z
      exit
    }
    END{ if(!found){ print "Not found.  Try: luna-atlas search "k > "/dev/stderr"; exit 1 } }' "$IDX"
}

cmd_services() {
  f=${1:-}
  grep -v '^#' "$IDX" | cut -f1 | sort | uniq -c | sort -rn | \
  awk -v f="$(printf '%s' "${f:-}" | tr 'A-Z' 'a-z')" -v g="$C_G" -v d="$C_D" -v z="$C_0" '
    f=="" || index(tolower($2),f) { printf "%s%4d%s  %s%s%s\n", d,$1,z, g,$2,z }'
}

cmd_categories() {
  grep -v '^#' "$IDX" | cut -f7 | sort | uniq -c | sort -rn | \
  awk -v g="$C_G" -v d="$C_D" -v z="$C_0" '{ printf "%s%5d%s  %s%s%s\n", d,$1,z, g,$2,z }'
}

cmd_run() {
  uri=; payload='{}'; yes=0
  for a in "$@"; do
    case "$a" in
      -y|--yes) yes=1 ;;
      luna://*) uri=$a ;;
      *) if [ -z "$uri" ]; then uri="luna://$(norm_uri "$a")"; else payload=$a; fi ;;
    esac
  done
  [ -n "$uri" ] || die "run needs a luna:// uri"
  key=$(norm_uri "$uri")
  danger=$(awk -F'\t' -v k="$key" '$3=="luna://"k || $1"/"$2==k {print $5; exit}' "$IDX")
  if [ "${danger:-0}" = "1" ] && [ "$yes" -ne 1 ]; then
    printf "%s%s is flagged DANGEROUS.%s  It can change or damage the TV.\n" "$C_R" "$uri" "$C_0" >&2
    printf "Type %sYES%s to run it: " "$C_B" "$C_0" >&2
    read ans || ans=
    [ "$ans" = "YES" ] || { echo "Cancelled." >&2; exit 1; }
  fi
  command -v luna-send >/dev/null 2>&1 || die "luna-send not found (run this on the TV)"
  echo "${C_D}luna-send -n 1 -f $uri '$payload'${C_0}" >&2
  luna-send -n 1 -f "$uri" "$payload"
}

cmd_dump() {
  d="$DATA/scripts/luna-dump.sh"
  [ -f "$d" ] || die "scripts/luna-dump.sh not found"
  sh "$d" "${1:-/tmp}"
}

cmd_serve() {
  port=${1:-3000}
  [ -d "$WEB" ] || die "web UI not found at $WEB"
  echo "${C_B}Luna Atlas${C_0} serving on ${C_G}http://127.0.0.1:$port${C_0} (localhost only)"
  echo "${C_D}From your PC/phone:  ssh -L $port:127.0.0.1:$port root@<tv-ip>  then open http://localhost:$port${C_0}"
  echo "${C_D}Ctrl-C to stop.${C_0}"
  # busybox httpd where it exists (CGI at /cgi-bin/run); else node (ships on webOS).
  if command -v httpd >/dev/null 2>&1; then
    chmod +x "$WEB/cgi-bin/run" 2>/dev/null || true
    exec httpd -f -p "127.0.0.1:$port" -h "$WEB"
  elif command -v node >/dev/null 2>&1; then
    exec node "$WEB/server.js" "$port"
  else
    die "need busybox httpd or node to serve (neither found)"
  fi
}

sub=${1:-help}; [ $# -gt 0 ] && shift || true
case "$sub" in
  search)      cmd_search "$@" ;;
  show|info)   cmd_show "$@" ;;
  services|svc) cmd_services "$@" ;;
  categories|cats) cmd_categories "$@" ;;
  run|send)    cmd_run "$@" ;;
  serve|web)   cmd_serve "$@" ;;
  dump)        cmd_dump "$@" ;;
  count)       cmd_count ;;
  version|--version|-v) echo "luna-atlas $VERSION" ;;
  help|-h|--help) usage ;;
  *) echo "luna-atlas: unknown command '$sub'" >&2; usage; exit 1 ;;
esac
