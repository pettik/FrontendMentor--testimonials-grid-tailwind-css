# Contributing

## Make focused changes

Keep each commit about one reviewable change. HTML and CSS that implement the
same behavior belong together. Keep independent documentation, asset, and build
configuration changes separate when they can be reviewed on their own.

Before committing:

```sh
npm run build
git diff --check
git status --short
git diff
```

When changing Tailwind classes or source styles, include the rebuilt
`css/style.css` in the same commit. When changing dependencies, include both
`package.json` and `package-lock.json`.

## Describe what changed

Use a short, specific subject that describes the result. For example:

- `fix: preserve testimonial reading order on mobile`
- `fix: allow testimonial cards to grow with larger text`
- `docs: add desktop and mobile solution screenshots`
- `chore: update Tailwind build dependencies`

Avoid generic subjects such as `Add files via upload`, `final changes`, or
`Update index.html`. Add a body when the reason or a tradeoff needs explanation.

## Keep the repository clean

The tracked `.gitignore` excludes dependencies, build and coverage directories,
logs, local environment files, and common editor and operating-system files.
Keep the generated `css/style.css` and the solution screenshots tracked: they are
part of this static site's deliverable.

Capture screenshots from the built page, wait for fonts and portraits to load,
and record the viewport dimensions in the README. Update the desktop and mobile
images together when the visual design changes.

## Handle published history carefully

Inspect a commit's actual diff before choosing a replacement message. Rewording
a published commit changes its hash and every descendant hash, so review that
work on a separate branch and coordinate before replacing the shared branch.
