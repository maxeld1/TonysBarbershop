# Tony's Barbershop Website

A premium, mobile-first React + Tailwind homepage for a local barbershop, written from customer review themes and structured to be easy to maintain.

## Review themes used

- Consistent, detail-oriented haircuts are the strongest repeated theme.
- Clients repeatedly mention a welcoming, easygoing barber who listens and makes people feel comfortable.
- Reviews support trust across different client types, including kids, elderly clients, and long-time regulars.
- Fair pricing, classic finishing touches, and a neighborhood feel all appear multiple times.

## Stack

- React
- Vite
- Tailwind CSS

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured for a GitHub Pages project site at:

- `https://maxeld1.github.io/TonysBarbershop/`

Deploy steps:

1. Install dependencies:

```bash
npm install
```

2. Commit and push your repo to GitHub under the repository name `TonysBarbershop`.

3. Deploy:

```bash
npm run deploy
```

4. In GitHub, go to `Settings` -> `Pages` and set the source to the `gh-pages` branch, folder `/ (root)`.

If the GitHub repository name is not `TonysBarbershop`, update the `base` value in:

- [vite.config.js](/Users/maxeldabbas/WebstormProjects/TonysBarbershop/vite.config.js)

## Where to edit content

Most homepage copy and business information live in:

- [src/content/siteContent.js](/Users/maxeldabbas/WebstormProjects/TonysBarbershop/src/content/siteContent.js)

This is the main file to edit for:

- business name
- address
- phone
- booking link
- services and prices
- hours
- testimonials
- FAQ

## Photo replacement

Image placeholders are already built into the layout. Search for `TODO:` comments in:

- [src/App.jsx](/Users/maxeldabbas/WebstormProjects/TonysBarbershop/src/App.jsx)

Recommended replacement approach:

- Replace each placeholder block with a local `img` tag that points to your real photo in `src/assets/` or `public/`.
- Keep the alt text specific to the scene, for example: `Barber finishing a skin fade at Tony's Barbershop in Havertown`.

## Main customization TODOs

- Update the business identity and contact details in `siteContent.js`.
- Replace placeholder prices with the real service menu.
- Add real barber bios in the team section.
- Swap in real photography for the hero, barber cards, gallery, and location section.
- Replace the placeholder booking URL and directions URL.

## Notes

- The current build uses semantic sections, accessible color contrast, and responsive layouts.
- The copy avoids unsupported claims and stays grounded in the supplied customer reviews.
