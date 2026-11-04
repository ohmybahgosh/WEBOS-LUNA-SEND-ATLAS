# bash completion for luna-atlas
# Install: source this file (or drop it in /etc/bash_completion.d/ or
# $(brew --prefix)/etc/bash_completion.d/).  Set LUNA_ATLAS_DATA if the catalog
# isn't found automatically.
_luna_atlas_idx() {
  local d
  for d in "$LUNA_ATLAS_DATA" \
           "/media/developer/apps/usr/palm/applications/org.ohmybahgosh.lunaatlas" \
           "/var/lib/luna-atlas" "$HOME/luna-atlas" "."; do
    [ -n "$d" ] && [ -f "$d/catalog/index.tsv" ] && { echo "$d/catalog/index.tsv"; return; }
  done
}
_luna_atlas() {
  local cur prev subs idx
  cur="${COMP_WORDS[COMP_CWORD]}"
  subs="search show services categories run serve dump count version help"
  if [ "$COMP_CWORD" -eq 1 ]; then
    COMPREPLY=( $(compgen -W "$subs" -- "$cur") ); return
  fi
  idx="$(_luna_atlas_idx)"
  [ -n "$idx" ] || return
  case "${COMP_WORDS[1]}" in
    show|run|send|info)
      COMPREPLY=( $(compgen -W "$(grep -v '^#' "$idx" | cut -f3 | sed 's#^luna://##')" -- "$cur") ) ;;
    services|svc)
      COMPREPLY=( $(compgen -W "$(grep -v '^#' "$idx" | cut -f1 | sort -u)" -- "$cur") ) ;;
    categories|cats)
      COMPREPLY=( $(compgen -W "$(grep -v '^#' "$idx" | cut -f7 | sort -u)" -- "$cur") ) ;;
  esac
}
complete -F _luna_atlas luna-atlas luna-atlas.sh
