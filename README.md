# Neuro Nurture

**Game-based autism support, guided by AI insights.**

Neuro Nurture is a premium SaaS landing platform for a game-based developmental support tool designed for children on the autism spectrum. The platform captures behavioral signals during play, surfaces AI-powered insights, and enables coordinated support across home, school, and clinic.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Features

- **14-section landing page** — Hero, Social Proof, Problem, Solution, How It Works, Core Modules, Role Benefits, Why Different, Privacy, FAQ, Early Access, and more
- **Game module showcase** — Gesture Mimic, Mirror Posture, Dance Doodle, Gaze Balloon Pop, Repeat With Me
- **Interactive product preview** — Tabbed dashboard mock with animated metrics, chart, and AI summary bubble
- **Signal capture panel** — Animated progress bars for Eye Contact, Gestures, Attention, Motor Coordination, and Speech Clarity
- **Early Access form** — React Hook Form + Zod validation with floating labels and success animation
- **Serverless API** — MongoDB Atlas integration via Vercel Serverless Functions with duplicate prevention
- **Framer Motion animations** — Scroll reveal, stagger containers, animated blobs, reduced motion support
- **Glassmorphism design system** — Custom Tailwind tokens, glass cards, gradient utilities, glow shadows

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion (via `motion` package) |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Database | MongoDB Atlas (Mongoose 8) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ (tested on 20.x)
- npm or yarn
- MongoDB Atlas cluster (for Early Access form)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/neuro-nurture.git
cd neuro-nurture

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your MongoDB connection string
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/early-access/   # Serverless API route (POST)
│   ├── globals.css          # Custom styles & design tokens
│   ├── layout.tsx           # Root layout (Inter font, metadata)
│   └── page.tsx             # Landing page (assembles all sections)
├── components/
│   ├── forms/               # EarlyAccessForm
│   ├── sections/            # 14 page sections
│   └── ui/                  # Reusable primitives (GlassCard, Button, etc.)
├── lib/
│   ├── constants.ts         # All section content & data
│   ├── mongodb.ts           # MongoDB connection helper
│   └── validators.ts        # Zod validation schemas
├── models/
│   └── EarlyAccess.ts       # Mongoose model
└── types/
    └── index.ts             # Shared TypeScript interfaces
```

## Environment Variables

| Variable | Description |
|----------|------------|
| `MONGODB_URI` | MongoDB Atlas connection string |

See [.env.example](.env.example) for the template.

## Deployment

Deploy instantly on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/<your-username>/neuro-nurture)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add `MONGODB_URI` to Environment Variables
4. Deploy

## License

MIT
