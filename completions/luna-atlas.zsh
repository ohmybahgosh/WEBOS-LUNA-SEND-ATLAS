#compdef luna-atlas luna-atlas.sh
# zsh completion for luna-atlas.
# Install: put this file on your $fpath (e.g. ~/.zsh/completions/_luna-atlas) and
# run `autoload -U compinit && compinit`.  Set LUNA_ATLAS_DATA if needed.
_luna_atlas_idx() {
  local d
  for d in "$LUNA_ATLAS_DATA" \
           "/media/developer/apps/usr/palm/applications/org.ohmybahgosh.lunaatlas" \
           "/var/lib/luna-atlas" "$HOME/luna-atlas" "."; do
    [[ -n "$d" && -f "$d/catalog/index.tsv" ]] && { echo "$d/catalog/index.tsv"; return; }
  done
}
_luna_atlas() {
  local -a subs
  subs=(search:'find methods' show:'method details' services:'list services'
        categories:'list categories' run:'run a call'
        dump:'dump this TV' count:'totals' version:'version' help:'help')
  if (( CURRENT == 2 )); then
    _describe 'command' subs; return
  fi
  local idx; idx="$(_luna_atlas_idx)"
  [[ -n "$idx" ]] || return
  case "${words[2]}" in
    show|run|send|info)
      compadd -- ${(f)"$(grep -v '^#' "$idx" | cut -f3 | sed 's#^luna://##')"} ;;
    services|svc)
      compadd -- ${(f)"$(grep -v '^#' "$idx" | cut -f1 | sort -u)"} ;;
    categories|cats)
      compadd -- ${(f)"$(grep -v '^#' "$idx" | cut -f7 | sort -u)"} ;;
  esac
}
_luna_atlas "$@"
