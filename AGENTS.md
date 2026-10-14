<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the reference homepage at `/` and its shared visual system in `src/styles.css` so the reproduction stays consistent.
- Store downloaded reference media as Lovable asset pointers so the repository contains no copied binary media.
- Exclude Radix Slot and Compose Refs from Vite dependency prebundling so cache refreshes cannot create a separate React hook runtime.
- Reuse the DHAJIA site shell for the homepage and management page, and keep the management page at `/fr/pages/gestion-immobiliere-agadir` so owner links remain internal and the reference URL structure is preserved.
