# MikeBets Demo Guide

## 🎬 Quick Start

The demo is now running at: **http://localhost:3002**

## 🗺️ Demo Navigation Flow

Follow this sequence for the best demonstration experience:

### 1. **Feed Page** (`/`)
- **Purpose**: Cold open showing the social betting environment
- **What to show**:
  - Recent activity notifications (Sam built a parlay, Ava tailed)
  - Friend parlays with "Copy & Tweak" functionality
  - Discussion preview sidebar
  - Responsible gaming ribbon at top

### 2. **Parlay Builder** (`/demo/builder`)
- **Purpose**: Show how users build or copy parlays
- **What to demonstrate**:
  - Click "Copy & Tweak" from any parlay in the Feed
  - Switch between "Build from Scratch" and "Tail from Friends" tabs
  - Add picks from available games
  - Adjust stake with slider (watch the limit gauge)
  - See odds automatically recalculate
  - Click "Lock Slip" to see confetti toast

### 3. **Thread Page** (`/demo/thread`)
- **Purpose**: Social discussion around parlays
- **What to show**:
  - Attached parlay at top
  - Comment thread with reactions
  - Post a new comment using the composer
  - Mention syntax (@name)

### 4. **Limits Page** (`/demo/limits`)
- **Purpose**: Responsible gaming controls
- **What to demonstrate**:
  - Daily/weekly stake limit gauges
  - Click "Adjust Limit" to open the modal
  - Show the two-button UX: "Keep Current Limit" (primary) vs "Request Change"
  - Require reason for any limit change
  - Explain 24h delay on increases
  - Self-exclusion option
  - Crisis helpline info

### 5. **KYC Page** (`/demo/kyc`)
- **Purpose**: Identity verification flow
- **What to show**:
  - 3-step progress indicator
  - Step 1: ID document upload
  - Step 2: Liveness check (animated)
  - Step 3: Success state with verification checklist
  - Privacy callout at bottom

### 6. **Trust Page** (`/demo/trust`)
- **Purpose**: Compliance & security transparency
- **What to show**:
  - Licensing status (iGO, AGCO)
  - Compliance badges (no celebrity endorsements, responsible ads, etc.)
  - Security infrastructure panel (encryption, segregated workloads)
  - AML/KYC policy details

### 7. **Roadmap Page** (`/demo/roadmap`)
- **Purpose**: 12-month development timeline
- **What to show**:
  - Three phases: Build (0-6 months), Test (6-10 months), Launch (10-12 months)
  - Current phase indicator
  - Completed vs upcoming milestones
  - Regulatory timeline callout

### 8. **Waitlist Page** (`/demo/waitlist`)
- **Purpose**: CTA and conversion
- **What to demonstrate**:
  - Hero section with value prop
  - Email capture form
  - Feature highlights grid
  - Launch details (19+, Ontario, regulatory status)
  - Submit email to see success toast

## 🎯 Key Talking Points

### Social Features
- "Friends can share parlays with one click"
- "Copy & tweak lets you use someone's parlay as a starting point"
- "Discussions keep the social conversation alive around bets"

### Responsible Gaming
- "Every user has daily limits that can't be exceeded"
- "Limit increases require a reason and have a 24h delay"
- "Self-exclusion is always one click away"
- "We show your remaining stake everywhere you bet"

### Trust & Compliance
- "We'll only operate where we're licensed—starting with Ontario"
- "Every user goes through KYC before they can deposit"
- "No celebrity endorsements, no predatory marketing"
- "Player funds are segregated and never commingled"

### Why It Takes Time
- "Building a licensed sportsbook isn't just code—it's regulatory relationships"
- "We're applying for iGaming Ontario licensing, which requires extensive audits"
- "The 12-month timeline reflects our commitment to launching right, not fast"

## 🎨 Design Highlights

- **iOS-native aesthetic**: Rounded corners, soft shadows, subtle borders
- **Smooth animations**: 200-300ms transitions throughout
- **Compliance-first**: Ribbon always visible, microcopy everywhere
- **Mobile responsive**: Touch-friendly, bottom sheets on mobile

## 🛠️ Interactive Elements

### Test These Features:
1. ✅ Copy a parlay from the feed
2. ✅ Add/remove legs in the builder
3. ✅ Watch odds recalculate in real-time
4. ✅ Try to exceed your daily limit (it will block you)
5. ✅ Post a comment in a thread
6. ✅ Request a limit change (see the modal flow)
7. ✅ Complete the KYC flow (3 steps)
8. ✅ Join the waitlist

## 📊 Demo Stats (Mock Data)

- **You**: 62% hit rate, +245 avg odds
- **Sam**: 58% hit rate, +220 avg odds
- **Ava**: 65% hit rate, +180 avg odds
- **Mike**: 71% hit rate, +210 avg odds

- **Daily Limit**: $100 stake
- **Remaining Today**: $55
- **Weekly Limit**: $500
- **Monthly Limit**: $2,000

## 🎤 Script for 5-Min Walkthrough

**0:00-0:30** — "Let me show you MikeBets, a social sportsbook we're building. Open the feed..."

**0:30-1:30** — "Your friends' parlays appear here. Let's copy Sam's 4-legger and tweak one leg..."

**1:30-2:30** — "The builder recalculates odds instantly. Notice the limit gauge—$55 left today. If I try $60, it blocks me."

**2:30-3:30** — "Responsible gaming is core. I can request a limit change, but I have to explain why. Increases take 24 hours."

**3:30-4:30** — "Before you bet real money, you go through KYC: upload ID, liveness check, done. We're transparent about security and licensing."

**4:30-5:00** — "We're 12 months from launch—building, testing, getting licensed. Join the waitlist to follow along."

## 🚨 Disclaimers (Always Mention)

- "This is a demo—no real money, no backend"
- "MikeBets is not yet licensed or operational"
- "All features are subject to regulatory approval"
- "19+ only, Ontario at launch"

## 🔄 Resetting the Demo

To reset state (clear comments, parlays, etc.):
1. Refresh the browser (state is in-memory only)
2. Or restart the dev server

## 📞 Support

- Dev server: http://localhost:3002
- Source code: `/Users/jacobguyatt/Mikebets demo/src`
- Mock data: `src/lib/mock.ts`
- State management: `src/lib/store.ts`

---

**Ready to demo? Open http://localhost:3002 and start with the Feed!**

