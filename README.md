# LRS — Lifetime Resettlement Services

Landing page for **Lifetime Resettlement Services (LRS)**, a Canadian immigration and settlement consultancy serving clients in Mauritius and Canada.

## Tech Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Project Structure

```
src/
  components/    # All page sections
  data/          # Site content (copy, testimonials, services)
  hooks/         # useScrollReveal
  index.css      # Global styles + animations
public/          # Static assets (images, logo, patterns)
```

## Placeholder Content to Replace Before Launch

- RCIC license number (`XXXXXXX`)
- Office addresses (`[Address Placeholder]`)
- Phone numbers (`+1 (XXX) XXX-XXXX`, `+230 XXXX XXXX`)
- WhatsApp link (`https://wa.me/11234567890`)
- Google Maps embed URLs (currently pointing to Ottawa & Port Louis)
- Official CICC/RCIC badge image
- Payment gateway integration

## Notes

- WordPress / Thrive Architect migration notes are in component file comments
- All section backgrounds use `maple-pattern-white.png` or `maple-pattern-dark.png` overlays
- EN/FR language toggle is UI-only — i18n wiring needed for production
