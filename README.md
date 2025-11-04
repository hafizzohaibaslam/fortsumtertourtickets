## Fort Sumter Tour Tickets

Modern e-commerce frontend for booking Fort Sumter tours in Charleston, SC. Built with Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Stripe Checkout, and WooCommerce (WordPress) for order storage. Live features include real-time availability from FareHarbor, checkout with a per-ticket service fee, and order lookup.

## Key Features

- Booking flow with tour type selection (Patriots Point / Liberty Square)
- Calendar with available dates (FareHarbor) and time slots
- Dynamic pricing per person type + service fee + tax breakdown
- Checkout form with validation and country-aware phone input
- Stripe Checkout redirect for paying service charges
- Orders list by email (reads from WordPress/WooCommerce via custom API)
- Google Ads conversion reporting on purchase
- SEO: structured data, sitemap, OpenGraph, robots

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- TanStack Query (React Query)
- Stripe (Checkout + Payment Intents)
- WooCommerce REST API + custom WP endpoints
- date-fns, react-day-picker, lucide-react

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Create a .env.local file (see Environment Variables below)

3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

## Environment Variables

Required for local dev and production:

- NEXT_PUBLIC_SERVER_URL: Base site URL, e.g. https://fortsumtertourtickets.com
- NEXT_PUBLIC_WP_BASE_URL: WordPress base URL, e.g. https://example.com
- WP_API_AUTH_USER: Basic auth user for WP REST (used in lib/API.ts)
- WP_API_AUTH_PASS: Basic auth password for WP REST
- WC_CONSUMER_KEY: WooCommerce REST API key
- WC_CONSUMER_SECRET: WooCommerce REST API secret
- STRIPE_SECRET_KEY: Stripe secret key (server-side)

Example .env.local:

```bash
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_WP_BASE_URL=https://your-wp-site.com
WP_API_AUTH_USER=wp-api-user
WP_API_AUTH_PASS=super-secret
WC_CONSUMER_KEY=ck_...
WC_CONSUMER_SECRET=cs_...
STRIPE_SECRET_KEY=sk_live_or_test...
```

Notes:

- Images from WordPress are allowed via next.config.ts remotePatterns (uses NEXT_PUBLIC_WP_BASE_URL hostname).
- Custom WP endpoints are used for orders (see lib/wp/orders.ts).

## Project Structure

- app/(routes)/\*: All pages (home, tours, blog, checkout, orders, policies, etc.)
- components/\*: Reusable UI and booking widgets (BookingForm, selectors, inputs)
- features/\*: Page-level components by domain (landing-page, checkout-page, blog-page, shared)
- hooks/\*: Data hooks (enabled dates from FareHarbor, pricing)
- lib/\*: Core libs (WooCommerce client, WP API, Stripe, constants, types, analytics)
- providers/\*: App-wide providers (BookingProvider, ValidationProvider)
- public/\*: Static assets

## Booking & Pricing Flow

- Tour types defined in UI (Patriots Point / Liberty Square)
- Calendar availability fetched from FareHarbor via useEnabledDates hook
  - Endpoint proxied through corsproxy.io
  - Dates are flattened and mapped by date string; isMonthAvailable is surfaced
- Time slots defined per tour type in UI
- Pricing per person type is parsed from FareHarbor structured description (useCustomerRates)
- Totals computed: subTotal + 6.97 service fee per ticket + 6% tax
  - SERVICE_FEE and other labels in lib/constants.ts

## Checkout & Orders

- Checkout form collects customer and address details; client-only validation via ValidationProvider
- createBookingOrder (lib/wp/orders.ts) creates a WooCommerce order via REST with line item metadata and totals
- stripeCreateCheckout (lib/stripe/stripeCreateCheckout.ts) creates a Stripe Checkout Session for service charges
  - success_url redirects to /payment-redirect?orderId=...&email=...
  - After success, service_charges_paid is set to true on the Woo order and user is redirected to /my-orders
- Orders page (/my-orders) fetches orders by email via custom WP endpoint and reports Google Ads conversion value based on tickets \* 6.97

## SEO & Analytics

- Structured data: Home page embeds Website, FAQPage, Breadcrumb, SiteNavigation elements
- OpenGraph image in app/opengraph-image.png, sitemap via app/sitemap.ts, robots in public/robots.txt
- Google Ads purchase reporting via lib/gtag.ts (reportPurchase)

## Commands

- Dev: npm run dev
- Build: npm run build
- Start: npm start
- Lint: npm run lint

## Customization

- Service fee: edit SERVICE_FEE in lib/constants.ts
- Tour times and copy: see components/BookingForm/BookingForm.tsx and features/landing-page
- Image host: set NEXT_PUBLIC_WP_BASE_URL; next.config.ts allows that hostname
- Skip/blackout dates: see BookingForm filterDate implementation

## Troubleshooting

- WordPress images not loading: verify NEXT_PUBLIC_WP_BASE_URL and that next.config.ts remotePatterns hostname matches
- Orders not appearing: ensure custom WP endpoints are deployed and WP*API_AUTH*\* credentials are valid
- Stripe redirect errors: verify STRIPE_SECRET_KEY and NEXT_PUBLIC_SERVER_URL
- CORS while fetching availability/prices: FareHarbor calls are proxied via corsproxy.io; verify the URL it wraps

## Deployment

- Set all env vars on the hosting platform
- Ensure WordPress site exposes required endpoints and WooCommerce REST keys are active
- Build with npm run build and start with npm start or deploy on Vercel

---

Maintained for Fort Sumter tour booking. Contributions are welcome via pull requests.
