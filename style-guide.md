# Advice Generator App Style-Guide

The introduction section with drop-down navigation should be responsive across all devices.

- Mobile - 320px
- Tablet - 768px
- Desktop - 1440px

## Colors

```css
--light-cyan: hsl(193, 38%, 86%);
--neon-green: hsl(150, 100%, 66%);
--grayish-blue: hsl(217, 19%, 38%);
--dark-grayish-blue: hsl(217, 19%, 24%);
--dark-blue: hsl(219, 22%, 16%);
```

## Size

```css
/* https://utopia.fyi/space/calculator?c=320,9.39,2.18,1440,13,2.15,1,0,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12 */
--size-fluid-11: clamp(0.125rem, 0.1071rem + 0.0893vw, 0.1875rem);
--size-fluid-12: clamp(0.3125rem, 0.2768rem + 0.1786vw, 0.4375rem);
--size-fluid-13: clamp(0.4375rem, 0.3839rem + 0.2679vw, 0.625rem);
--size-fluid-14: clamp(0.5625rem, 0.4911rem + 0.3571vw, 0.8125rem);
--size-fluid-15: clamp(0.875rem, 0.7679rem + 0.5357vw, 1.25rem);
--size-fluid-16: clamp(1.1875rem, 1.0625rem + 0.625vw, 1.625rem);
--size-fluid-17: clamp(1.75rem, 1.5536rem + 0.9821vw, 2.4375rem);
--size-fluid-18: clamp(2.375rem, 2.125rem + 1.25vw, 3.25rem);
--size-fluid-19: clamp(3.5rem, 3.1071rem + 1.9643vw, 4.875rem);
--size-fluid-11-12: clamp(0.125rem, 0.0357rem + 0.4464vw, 0.4375rem);
--size-fluid-12-13: clamp(0.3125rem, 0.2232rem + 0.4464vw, 0.625rem);
--size-fluid-13-14: clamp(0.4375rem, 0.3304rem + 0.5357vw, 0.8125rem);
--size-fluid-14-15: clamp(0.5625rem, 0.3661rem + 0.9821vw, 1.25rem);
--size-fluid-15-16: clamp(0.875rem, 0.6607rem + 1.0714vw, 1.625rem);
--size-fluid-16-17: clamp(1.1875rem, 0.8304rem + 1.7857vw, 2.4375rem);
--size-fluid-17-18: clamp(1.75rem, 1.3214rem + 2.1429vw, 3.25rem);
--size-fluid-18-19: clamp(2.375rem, 1.6607rem + 3.5714vw, 4.875rem);
--size-fluid-14-16: clamp(0.5625rem, 0.2589rem + 1.5179vw, 1.625rem);
--size-fluid-15-17: clamp(0.875rem, 0.4286rem + 2.2321vw, 2.4375rem);
--size-fluid-16-18: clamp(1.1875rem, 0.5982rem + 2.9464vw, 3.25rem);
--size-fluid-17-19: clamp(1.75rem, 0.8571rem + 4.4643vw, 4.875rem);
--size-fluid-11-13: clamp(0.125rem, -0.0179rem + 0.7143vw, 0.625rem);
--size-fluid-12-14: clamp(0.3125rem, 0.1696rem + 0.7143vw, 0.8125rem);
--size-fluid-13-15: clamp(0.4375rem, 0.2054rem + 1.1607vw, 1.25rem);
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-7: 6px;
--radius-8: 8px;
--radius-9: 10px;
--radius-10: 12px;
--radius-11: 15px;
--radius-12: 20px;
--radius-13: 24px;
--radius-14: 26px;
--radius-15: 28px;
--radius-16: 30px;
--radius-17: 34px;
--radius-18: 36px;
--radius-19: 38px;
--radius-20: 40px;
```

## Favicon Links

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/assets/favicons/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/assets/favicons/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/assets/favicons/favicon-16x16.png"
/>
<link rel="manifest" href="/assets/favicons/site.webmanifest" />
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
  rel="stylesheet"
/>
```

```css
/* https://utopia.fyi/type/calculator?c=320,9.39,2.18,1440,13,2.15,1,0,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12 */
--ff-manrope-sans-serif: var(--ff-manrope), sans-serif;
--ff-manrope: 'Manrope';
--font-style: normal;
--font-size-fluid-4: clamp(0.5869rem, 0.5224rem + 0.3223vw, 0.8125rem);
--font-size-fluid-5: clamp(1.2794rem, 1.1458rem + 0.6678vw, 1.7469rem);
```

## Resets

```css
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  overflow: hidden;
  /* The style below prevents font-style inflation */
  text-size-adjust: none;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  font-family: var(--ff-manrope-sans-serif);
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Avoid text overflow */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow: break-word;
}

/* Balance text wrappings on the heading */
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/* Improve line wrapping */
p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Improve media defaults */
img,
picture,
video,
canvas,
svg {
  max-width: 100%;
  height: auto;
  display: var(--block);
}

body {
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Please set the font-size on the body to be 28px */
  font-size: 28px;
  overflow: hidden;
}

/* We make sure that the text areas without rows are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Inherits fonts for input and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove the text-decoration style for all anchor elements */
a {
  text-decoration: none;
  color: inherit;
}

/* All anchor and button elements have an outline of none when focused */
a:focus,
button:focus {
  outline: none;
}

/* All buttons should have this style */
button {
  appearance: none;
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Anything that has been anchored to should have an extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* Remove the mark of the list items */
li {
  list-style-type: none;
  color: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
