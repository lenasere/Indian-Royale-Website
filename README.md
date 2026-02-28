# India Royale Website

Personal hobby project and design proposal for a potential India Royale website redesign.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vercel for static hosting/deployment

## Current Features

- Responsive homepage with hero, featured dishes, gallery, story, locations, takeaway, and booking sections.
- Interactive takeaway flow:
  1. Start takeaway
  2. Select pickup location
  3. Browse category-based menu and build order
- Takeaway order UI includes:
  - Starters, mains, rice, naan, sides/drinks
  - Quantity controls and live total
  - Customer comment box for kitchen notes
- Booking flow requires restaurant selection first, then enables a location-specific booking link.
- Restaurant cards in `Locations` section link directly to booking providers.
- Vercel configuration with clean URLs, redirects, security headers, and cache headers.

## Project Structure

```txt
.
├── index.html      # Main page markup
├── styles.css      # All site styling and responsive behavior
├── script.js       # Interactive logic for nav, takeaway, booking flow, and UI updates
├── vercel.json     # Vercel deploy configuration
├── images/         # Local image assets (if used)
└── .gitignore
```

## Run Locally

From the project root:

```bash
python3 -m http.server 8000
```

Open:

```txt
http://localhost:8000
```

Stop server with `Ctrl + C`.

## Booking Configuration

Booking location mapping is managed in `script.js` under `bookingConfig`.

Current keys:

- `lyngby`
- `esbjerg`
- `roskilde`
- `fisketorvet`
- `copenhagenk`
- `nordhavn`

To change a booking destination:

1. Open `script.js`
2. Find `const bookingConfig = { ... }`
3. Update `bookingUrl` for the relevant key

Also verify the direct links in the `Locations` cards inside `index.html`.

## Takeaway Configuration

Takeaway behavior is driven by `script.js`:

- `locationConfig`: checkout links by takeaway location
- `takeawayMenu`: all categories and dish items
- `categoryMeta`: category tab labels and order

To add a dish:

1. Open `script.js`
2. Find `const takeawayMenu`
3. Add a new item object in the relevant category:

```js
{ id: 'unique-id', name: 'Dish Name', description: 'Short description.', price: 99 }
```

Notes:

- `id` must be unique across all categories.
- Prices are in DKK and shown in totals automatically.

## Styling and Design Notes

Main style file: `styles.css`

Key areas:

- Global variables are defined in `:root`.
- Responsive behavior is controlled in the media queries near the bottom.
- Booking/takeaway selector components use consistent button and panel styles.

If adjusting spacing for hero content, update `.hero` and `.hero-copy`.

## Deployment (Vercel)

This project is ready for static deployment on Vercel.

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

### Option B: Vercel Dashboard

1. Push repository to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Framework preset: `Other`
4. Build command: leave empty
5. Output directory: leave empty (root static)
6. Deploy

## `vercel.json` Summary

Current config includes:

- `cleanUrls: true`
- `trailingSlash: false`
- Redirects:
  - `/index.html` -> `/`
  - `/index` -> `/`
- Security headers:
  - `Referrer-Policy`
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Permissions-Policy`
- Cache rules:
  - root page revalidates
  - static assets cached long-term with `immutable`

## External Assets

The page currently references externally hosted image URLs.

If you want fully offline/reliable rendering:

1. Download images into `images/`
2. Update `src` paths in `index.html` from remote URLs to local files

Example:

```html
<img src="images/palak-paneer.jpg" alt="Palak paneer" />
```

## Troubleshooting

### Changes do not appear in browser

- Hard refresh: `Cmd + Shift + R`
- Ensure local server is running on the same project folder

### Booking link opens wrong destination

- Check both:
  - `bookingConfig` in `script.js`
  - location card links in `index.html`

### Some images fail to load

- External CDN URL may be blocked or changed
- Move critical images to local `images/` folder

## Maintenance Checklist

Before each deploy:

1. Verify all booking links for each restaurant
2. Verify takeaway checkout links per location
3. Confirm menu pricing and item names
4. Test desktop + mobile layout
5. Hard refresh and click-test all CTAs

