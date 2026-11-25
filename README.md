# Testimonials Grid Section

A responsive testimonials grid built with semantic HTML and Tailwind CSS,
showcasing five coding bootcamp graduates and their experiences.

This project is a solution to the
[Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Implementation](#implementation)
  - [Local development](#local-development)
  - [What I learned](#what-i-learned)
  - [Testing and verification](#testing-and-verification)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- Read all five testimonials without horizontal scrolling.
- Experience a consistent, accessible, and responsive interface.

The solution implements a mobile-first approach, transitioning from
a single-column mobile layout to a two-column tablet layout and
a four-column desktop grid.

### Screenshots

#### Desktop

![Desktop screenshot of the finished solution](images/solution-desktop.png)

*Viewport: 1440 × 900 px*

#### Mobile

<img src="images/solution-mobile.png"
     alt="Mobile screenshot showing all five testimonials"
     width="375" />

*Viewport: 375 × 812 px — full-page capture*

Both screenshots represent the actual Tailwind CSS implementation,
rather than the original design references.

### Links

- [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)
- [Source code](https://github.com/pettik/FrontendMentor--testimonials-grid-tailwind-css)
- [Figma design](https://www.figma.com/design/9O03l3dpCgUQMIQqbPvuT8?fuid=1332602664592485491)
- [Live demo](https://pettik-testimonials-grid-section.netlify.app/)

> **Deployment note:** The current live demo hosts the earlier
> vanilla CSS implementation. The screenshots above represent
> the updated Tailwind CSS version.

## My process

### Built with

- Semantic HTML5
- Tailwind CSS 3.4
- CSS Grid
- Flexbox
- Mobile-first workflow
- Responsive design
- Custom Tailwind components
- Autoprefixer
- Google Fonts — Barlow Semi Condensed
- Git and GitHub

### Implementation

The layout uses CSS Grid for the testimonial cards and Flexbox
for the author information inside each card.

The responsive grid consists of three layout configurations:

| Screen size | Breakpoint | Layout |
|-------------|------------|--------|
| Mobile | Below 768px | 1 column |
| Tablet | From 768px | 2 columns |
| Desktop | From 1024px | 4 columns |

On desktop, selected cards span multiple columns or rows
to recreate the original design.

Shared component styles are defined using Tailwind's
`@layer components`, while colors, typography, shadows,
and other design tokens are centralized in `tailwind.config.js`.

The implementation also focuses on accessibility through:

- Semantic HTML elements.
- Logical heading hierarchy.
- Consistent reading order.
- Accessible image handling.
- Flexible card heights without content clipping.

### Local development

Node.js and npm are required to build the project locally.

Install dependencies:

```sh
npm ci
```

Build the Tailwind CSS stylesheet:

```sh
npm run build
```

Watch for changes during development:

```sh
npm run watch
```

Open `index.html` in your browser.

The project does not require a backend or runtime JavaScript.

### What I learned

This project helped me improve my understanding of responsive
CSS Grid layouts and how Tailwind CSS utilities can be used
to build structured and maintainable interfaces.

One of the main challenges was implementing a multi-column layout
while preserving the natural reading order of the testimonials
on smaller screens.

I also explored how flexible grid tracks can prevent unwanted
horizontal overflow:

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
```

Combining flexible grid tracks with `min-width: 0`, automatic
row heights, and responsive breakpoints allows the cards
to adapt to different screen sizes and text lengths.

Another important lesson was separating visual positioning
from the semantic order of HTML elements, ensuring that
the layout remains accessible across different devices.

### Testing and verification

The implementation was tested using headless Chrome at
the following viewport widths:

- 320px
- 375px
- 768px
- 800px
- 1024px
- 1440px

The verification included:

- Responsive layout behavior.
- Horizontal overflow detection.
- Visibility of all five testimonials.
- Font and image loading.
- Increased root font size from 16px to 32px
  at selected viewport widths.
- Successful Tailwind CSS compilation.

Manual screen-reader testing, browser zoom testing,
and detailed Figma comparison remain future improvements.

### Continued development

In future projects, I would like to focus on:

- Improving reusable Tailwind CSS component architecture.
- Further exploring advanced CSS Grid techniques.
- Improving accessibility through manual testing.
- Refining visual accuracy against Figma designs.
- Exploring self-hosted fonts for better performance.
- Deploying the updated Tailwind CSS implementation.

### Useful resources

- [Tailwind CSS — Responsive Design](https://v3.tailwindcss.com/docs/responsive-design)
  — Mobile-first responsive utilities and breakpoints.

- [Tailwind CSS — Adding Custom Styles](https://v3.tailwindcss.com/docs/adding-custom-styles)
  — Creating reusable components and custom styles.

- [MDN — CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
  — Understanding grid-based layouts.

- [MDN — grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-columns)
  — Flexible column sizing and the minmax() function.

## Author

**Petr Bednarski**

- GitHub — [@pettik](https://github.com/pettik)
- Frontend Mentor — [@pettik](https://www.frontendmentor.io/profile/pettik)

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/)
  for providing the challenge, design, and assets.

- [Brad Traversy — Tailwind CSS From Scratch](https://www.traversymedia.com/tailwind-css-course)
  for the original Tailwind CSS course implementation and inspiration.
