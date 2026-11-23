# Testimonials Grid Section

A responsive page with five coding bootcamp graduate testimonials, built for the
[Frontend Mentor challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)
using semantic HTML and Tailwind CSS.

## Overview

All five testimonials appear once in the HTML. On mobile they follow this reading
order: Daniel, Jonathan, Jeanette, Patrick, Kira. The layout uses one column on
mobile, two from `48rem`, and four from `64rem`. On desktop, Daniel and Patrick
span two columns and Kira spans two rows.

Columns use `minmax(0, 1fr)`; row heights follow the content. Text is never clamped,
so the complete testimonials remain available as the viewport or text size changes.

## Links

- [Source code](https://github.com/pettik/FrontendMentor--testimonials-grid-tailwind-css)
- [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)
- [Figma design](https://www.figma.com/design/9O03l3dpCgUQMIQqbPvuT8?fuid=1332602664592485491)

A live deployment has not been configured for this repository. Use the local
preview below to view the current solution.

## Local development

Requires Node.js and npm.

Install the locked dependencies and generate the stylesheet:

```sh
npm ci
npm run build
```

Open `index.html` in a browser. No application server or runtime JavaScript is
required. For automatic CSS updates during development, run:

```sh
npm run watch
```

Edit `input.css`, `index.html`, and `tailwind.config.js`. The generated
`css/style.css` is committed so the page can also be served directly as a static
site; rebuild it after changing styles or Tailwind classes.

## Built with

- Semantic `main`, `article`, `header`, headings, and `blockquote` elements
- Tailwind CSS 3.4, with shared card styles in `@layer components`
- Autoprefixer with an up-to-date browser database for the CSS build
- CSS Grid for the responsive layout and Flexbox for author details
- Relative font sizes, spacing, and breakpoints
- Barlow Semi Condensed from Google Fonts, with a sans-serif fallback

Palette, font family, maximum width, and card shadow are centralized in
`tailwind.config.js`.

## Accessibility and feedback fixes

- Added a descriptive page title, meta description, and visually hidden `h1`.
- Replaced generic card containers and skipped heading levels with articles and
  `h2` headings. Each article is labelled by its summary.
- Kept decorative portraits at `alt=""` to avoid repeating adjacent names.
- Made the decorative quotation mark a CSS background, outside the reading order.
- Removed the duplicate mobile/desktop Kira card; the mobile visual order follows
  the HTML order.
- Removed placeholder text, line clamping, and the missing JavaScript reference.
- Used flexible columns and content-sized rows instead of fixed minimum widths
  or fixed row heights.
- Increased the contrast of secondary text on both light and dark cards.
- Removed the unused line-clamp plugin and expanded `.gitignore` for generated,
  local, and operating-system files.

## What I learned

Changing the visual position of a card does not change screen-reader order.
Keeping one copy of each testimonial in a sensible source order makes the mobile
layout simpler and avoids maintaining duplicate content.

Flexible columns alone are not enough for robust reflow: cards also need
`min-width: 0`, wrapping text, and room to grow vertically. Shared component
styles keep those rules consistent across every card.

## Verification

The Tailwind build and source checks cover HTML structure, heading and article
labels, local asset references, and the generated stylesheet. Calculated text
contrast is at least 4.62:1, including text over the quotation decoration. Browser rendering
and exact visual comparison with Figma remain unverified in this environment.

Before submitting the solution, check:

- Widths around 320, 375, 768, 800, 1024, and 1440 CSS pixels.
- Browser zoom at 200% and 400%, and the browser's default font size at 200%.
- No horizontal page scrolling or clipped testimonial text.
- Heading navigation and the five testimonials' reading order with a screen reader.
- Desktop and mobile appearance against the Figma design.

## Screenshots

The existing [desktop screenshot](images/site-preview.png) shows an earlier
version of this implementation, before these feedback fixes. It is retained as
project history. Updated desktop and mobile captures are still needed; this image
should not be used to judge the current layout.

## Continued development

Complete the browser and screen-reader checks above, capture the revised desktop
and mobile layouts, and add a verified live URL after deployment. Self-hosting the
font would also make the typography independent of Google Fonts availability.

For future changes, use focused commits with descriptive messages, for example
`Fix testimonial reading order`, `Improve responsive grid layout`, or
`Document build and accessibility decisions`. Existing history is preserved.

## Resources and credits

- [Tailwind CSS: responsive design](https://v3.tailwindcss.com/docs/responsive-design)
- [MDN: grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns)
- Design and testimonial assets: [Frontend Mentor](https://www.frontendmentor.io/)
- Original Tailwind course implementation: Brad Traversy's
  [Tailwind CSS From Scratch](https://www.traversymedia.com/tailwind-css-course)

## Author

- GitHub: [Petr Bednarski](https://github.com/pettik)
- Frontend Mentor: [@pettik](https://www.frontendmentor.io/profile/pettik)
