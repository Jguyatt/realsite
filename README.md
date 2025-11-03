# MikeBets Demo

A comprehensive product walkthrough for MikeBets — a social sportsbook platform designed for responsible betting with friends.

## 🎯 Overview

This demo showcases the complete user experience of MikeBets, from a stunning landing page to the full product walkthrough. It's built to demonstrate:

- **High-conversion landing page** (professional design, clear CTAs)
- **Social betting features** (parlay sharing, tailing, copy & tweak)
- **Responsible gaming controls** (limits, self-exclusion, tracking)
- **Trust & compliance** (KYC/AML, security, licensing)
- **Product roadmap** (12-month development timeline)
- **Premium dark theme** (optimized for trust, clarity, and conversions)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to view the demo.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Feed (cold open)
│   └── demo/
│       ├── builder/         # Parlay builder
│       ├── thread/          # Comments & discussion
│       ├── limits/          # Responsible gaming limits
│       ├── kyc/             # Identity verification
│       ├── trust/           # Compliance & security
│       ├── roadmap/         # Development timeline
│       └── waitlist/        # CTA & signup
├── components/
│   ├── parlay/              # Betting components
│   ├── social/              # Comments & threads
│   ├── rg/                  # Responsible gaming
│   ├── trust/               # KYC & compliance
│   └── marketing/           # Hero & roadmap
├── lib/
│   ├── store.ts             # Zustand state management
│   ├── mock.ts              # Seed data
│   ├── odds.ts              # Odds calculations
│   └── utils.ts             # Helpers
└── components/ui/           # shadcn/ui components
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **State Management:** Zustand
- **Icons:** Lucide React
- **Notifications:** Sonner (toast)
- **Typography:** Inter (body), Plus Jakarta Sans (headlines), Roboto Mono (numbers/odds)
- **Theme:** Premium dark with Trust Blue primary (#2563EB) and Conversion Green CTAs (#10B981)

## 🔍 Key Features

### 1. Social Parlay Betting
- View friends' parlays in feed
- Copy & tweak any parlay
- Real-time odds calculation
- Stake management with daily limits

### 2. Responsible Gaming
- Daily/weekly/monthly stake limits
- Visual limit gauges
- Mandatory reason for limit increases
- 24h delay on limit increases
- Self-exclusion options
- Crisis helpline information

### 3. Trust & Compliance
- Multi-step KYC verification flow
- Liveness check demo
- Security infrastructure details
- Compliance badges
- AML/KYC policy transparency

### 4. Social Features
- Threaded discussions
- Comment reactions
- @mentions support
- Parlay attachment to threads

### 5. Marketing & Onboarding
- 12-month roadmap visualization
- Email waitlist capture
- Feature highlights
- Regulatory disclaimer

## 🎭 Demo Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | High-conversion marketing homepage |
| Feed | `/feed` | Social feed with friend activity |
| Builder | `/demo/builder` | Build or tail parlays |
| Thread | `/demo/thread` | Discussion with comments |
| Limits | `/demo/limits` | Responsible gaming controls |
| KYC | `/demo/kyc` | Identity verification flow |
| Trust | `/demo/trust` | Compliance & security |
| Roadmap | `/demo/roadmap` | Development timeline |
| Waitlist | `/demo/waitlist` | Email signup CTA |

## 🔧 Customization

### Mock Data

Edit `src/lib/mock.ts` to customize:
- Sample parlays
- User profiles
- Comments & threads
- Available games

### Limits

Adjust in `src/lib/store.ts`:
- Daily/weekly/monthly stake limits
- Default stake amounts
- Remaining limits

### Theme

Tailwind colors are defined in `src/app/globals.css` using CSS variables. Adjust the HSL values to change the theme.

## 🎯 Design Principles

1. **High-Conversion Design**
   - Premium dark theme optimized for trust
   - Clear visual hierarchy with professional typography
   - Green CTAs (#10B981) for maximum conversion
   - Trust indicators and social proof throughout

2. **Professional Typography**
   - Inter (400-600) for body text and UI
   - Plus Jakarta Sans (600-700) for headlines
   - Roboto Mono (500-600) for odds and numbers
   - Optimized for legibility and conversion

3. **Smooth Animations**
   - 200-300ms transitions
   - `tailwindcss-animate` utilities
   - Subtle hover states and micro-interactions

4. **Responsible Gaming First**
   - Compliance ribbon on key pages
   - 12-13px microcopy
   - Always-visible limits
   - Friction on limit increases

5. **Trust Through Transparency**
   - Clear regulatory status
   - Explicit age/region requirements
   - Security details upfront
   - KYC process explained

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly tap targets (min 44x44px)
- Bottom sheets for mobile modals

## ⚠️ Important Notes

- **This is a demo only** — no real money, no backend, no actual betting
- All data is mocked and stored in memory (Zustand)
- No API calls are made
- Build for demonstration and discussion purposes

## 🛣️ Roadmap Extensions

Potential additions for future iterations:
- URL params for scene deep-linking (`?scene=builder`)
- LocalStorage persistence for state
- Dark mode toggle
- Additional sports leagues
- Live betting demo
- Cash-out feature mockup

## 📄 License

This is a demonstration project. All rights reserved.

## 🙏 Acknowledgments

- **shadcn/ui** for the component library
- **Lucide** for beautiful icons
- **Next.js** team for the amazing framework
- **Ontario's iGaming regulations** for inspiration on responsible gaming features

---

**Demo only. 19+ · Ontario at launch · Play responsibly**
