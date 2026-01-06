# Joux De Vie  Fresh Fruit Bowls & Cold-Press Juices (UI Prototype)

This repository contains a UI prototype for **Joux De Vie**  a small online shop focused on fresh fruit bowls, juices, and healthy summer salads. It is a front-end only project built as a UI challenge to demonstrate responsive layouts, component composition, and visual design using React + TypeScript + Vite.

## What this app shows

- A hero section featuring a fruit bowl and call-to-action buttons (Sign In, Recipe).
- An editorial section comparing `Juice Vs Coffee` with a feature callout.
- A benefits section highlighting why customers should choose the shop (Fresh, Vitamin-rich, Organic).
- A `ProductGrid` example with three sample products (images, titles, subtitles, prices in R  South African Rand).
- Footer-like sections that show `Opening Hours` and the `MenuBenefit` cards.
- A top navigation bar with brand/logo, primary links, map and cart icons.

This is a static UI prototype  product data is mocked in `src/components/ProductGrid/ProductGrid.tsx` and image assets are loaded from the repository's raw asset URLs. There is no backend or checkout flow included.

## Tech stack

- React 19
- TypeScript
- Vite
- ESLint

## Key files & components

- [index.html](index.html)  app entry
- [src/main.tsx](src/main.tsx)  app bootstrap
- [src/App.tsx](src/App.tsx)  composes the page layout
- [src/components/navbar/Navbar.tsx](src/components/navbar/Navbar.tsx)  navigation with brand and icons
- [src/components/Body-part-1/body-P1.tsx](src/components/Body-part-1/body-P1.tsx)  hero section
- [src/components/Body-part-3/Body-p3.tsx](src/components/Body-part-3/Body-p3.tsx)  benefits and product area
- [src/components/ProductGrid/ProductGrid.tsx](src/components/ProductGrid/ProductGrid.tsx)  product cards with prices
- [src/components/MenuBenefit/MenuBenefit.tsx](src/components/MenuBenefit/MenuBenefit.tsx)  features/benefits grid
- [src/components/OpeningHours/OpeningHours.tsx](src/components/OpeningHours/OpeningHours.tsx)  shop hours

## How to run

From the project root:

```bash
npm install
npm run dev      # start dev server (Vite)
# open http://localhost:5173
```

Build and preview:

```bash
npm run build    # runs `tsc -b` then `vite build`
npm run preview  # preview the production build
```

Linting:

```bash
npm run lint
```

Deployment:

- The project includes a `deploy` script that uses `gh-pages` to publish the `dist` folder. This only works once you configure the repository / homepage settings and have permission to publish.

## Notes & assumptions

- Prices and product content are sample data inside `ProductGrid` (no cart or ordering implemented).
- Currency shown is `R` (Rand), suggesting a South African audience.
- Images are hotlinked to the repository's raw asset URLs  if you move assets, update those paths.

