# AgriSetu â€” Master Generation Prompt

Paste the entire content below into a code-generation AI to scaffold the complete frontend in one shot.

---

## PROMPT

You are an expert full-stack developer specialising in React Native (Expo) and Next.js. Build the complete frontend for **AgriSetu** â€” a collective farming input procurement platform for Indian farmers, with a separate web-based vendor portal â€” inside a **Turborepo monorepo**.

---

## MONOREPO ARCHITECTURE

The project is structured as a **Vercel Turborepo** monorepo. Scaffold it using the official Turborepo boilerplate (`npx create-turbo@latest`) and customise the workspace layout as follows:

```
agrisetu/                          â† repo root
â”œâ”€â”€ turbo.json                     â† Turborepo pipeline config
â”œâ”€â”€ package.json                   â† root workspace (workspaces: ["apps/*", "packages/*"])
â”œâ”€â”€ apps/
â”‚   â”œâ”€â”€ mobile/                    â† React Native + Expo (farmer app)
â”‚   â”œâ”€â”€ web/                       â† Next.js (vendor portal)
â”‚   â””â”€â”€ api/                       â† Python Flask backend (placeholder â€” do NOT scaffold yet)
â””â”€â”€ packages/
    â”œâ”€â”€ ui/                        â† shared component stubs (optional, for future use)
    â””â”€â”€ config/                    â† shared tsconfig, eslint, tailwind base config
```

> **Scope for this prompt**: scaffold only `apps/mobile` and `apps/web`. Leave `apps/api` as an empty directory with a single `README.md` that says "Flask API â€” coming soon."

### Turborepo pipeline (`turbo.json`)
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "dist/**"] },
    "dev":   { "cache": false, "persistent": true },
    "lint":  { "outputs": [] }
  }
}
```

### Root `package.json` (workspaces)
```json
{
  "name": "agrisetu",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev":   "turbo run dev",
    "build": "turbo run build",
    "lint":  "turbo run lint"
  },
  "devDependencies": {
    "turbo": "latest"
  }
}
```

---

## TECH STACK

### `apps/mobile` â€” Farmer Mobile App (React Native + Expo)
- **Framework**: React Native with Expo SDK (latest)
- **Styling**: NativeWind (Tailwind CSS for React Native) â€” use `className` props throughout
- **Navigation**: Expo Router (file-based routing with `app/` directory)
- **Icons**: `lucide-react-native`
- **Voice**: `expo-av` + `expo-speech` + device native microphone via `expo-audio` (use `Audio.Recording` from `expo-av` for mic access)
- **Fonts**: `expo-font` â€” load `Plus Jakarta Sans` (headings/bold) and `Inter` (body) and `Noto Sans Devanagari`, `Noto Sans Kannada`, `Noto Sans Tamil`, `Noto Sans Bengali`, `Noto Sans Telugu` (multilingual support)
- **Animations**: `react-native-reanimated` (pulse ring on mic, countdown timer)
- **Gestures**: `react-native-gesture-handler` (swipe gestures on vendor cards)
- **State**: React Context + `useState`/`useReducer` (no external state lib required)
- **OTP Input**: Custom 6-box OTP component
- **Progress Bar**: Custom via `View` width percentage

### `apps/web` â€” Vendor Portal (Next.js)
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: `lucide-react`
- **Charts**: `recharts` (bar chart for monthly revenue)
- **Fonts**: `next/font` â€” `Plus Jakarta Sans` + `Inter` from Google Fonts
- **State**: React Context + `useState`/`useReducer`
- **Layout**: Sidebar (240px) + main content area (1440px desktop reference)

---

## COLOR PALETTE & DESIGN TOKENS

```
Primary Green:      #2C5F2D  (dark forest green â€” primary CTA, headers, active nav)
Background Cream:   #FCF6F5  (app background, white-ish)
Card Beige:         #EDE8DF  (card backgrounds, inactive elements)
Muted Beige:        #D4CFC8  (dividers, borders)
Accent Amber:       #E69A28  (warnings, "still needed" quantity)
Error Red:          #EF4444  (logout, dispute, payment failed)
Success Green:      #22C55E  (delivered badge, positive trend)
Vendor BG:          #F7F5F0  (vendor portal page background)
Vendor White:       #FFFFFF  (vendor cards, sidebar)
Gray Text:          #A0A0A0  (placeholder, inactive nav labels)
```

---

## FARMER MOBILE APP â€” COMPLETE SCREEN SPECIFICATION

### Global Layout Rules
- Screen width: 402px reference; use `flex: 1` and `w-full`
- All primary headers: `bg-[#2C5F2D]` height 80, horizontal padding 24
- Bottom tab bar: height 80, `bg-[#FCF6F5]`, 5 tabs (Home, Orders, Voice, Cluster, Profile)
- Tab bar Voice button: circular 52Ã—52 button, active = `bg-[#2C5F2D]` with white mic icon; inactive = `bg-[#EDE8DF]` with gray mic icon
- Rounded corners on cards: `rounded-[20px]`
- Primary CTA button: `bg-[#2C5F2D] rounded-full h-14` full width with white text

---

### SCREEN 1 â€” Landing & Login
**Route**: `app/index.tsx`

**Layout**: Vertical, two sections:

**Top Hero Section** (`bg-[#2C5F2D]`, height 480):
- Top padding 60px
- Logo: circular 72Ã—72 `bg-[#FCF6F5]` with `sprout` Lucide icon (36px, green)
- App name: "AgriSetu" â€” `text-[#FCF6F5]` font Plus Jakarta Sans 40px weight 800
- Tagline: "Collective Farming Power" â€” `text-[#FCF6F5]/70` Inter 16px weight 500
- Stats row (3 equal columns, `bg-[#FCF6F5]/12` rounded-2xl padding 14/10, center-aligned):
  - "10-25%" / "Cost Savings" (22px bold / 11px semibold)
  - "86%" / "Farmers Served"
  - "40-50%" / "Carbon Saved"

**Bottom Sheet** (`bg-[#FCF6F5]` rounded-tl-[32px] rounded-tr-[32px], padding 32/24/40/24, gap 24):
- Sheet handle: 40Ã—4 `bg-[#FCF6F5]` rounded pill (decorative)
- Title: "Welcome to AgriSetu" â€” `text-[#2C5F2D]` Plus Jakarta Sans 28px weight 700
- Subtitle: "Empowering farmers with collective buying power.\nLogin with your Aadhaar to get started." â€” Inter 14px leading-relaxed
- Language selector label: "Select Language / à¤­à¤¾à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚" â€” Noto Sans Devanagari 13px weight 600
- Language grid (2 rows of 3 pill buttons, gap 8):
  - Row 1: "à¤¹à¤¿à¤‚à¤¦à¥€" (active, `bg-[#2C5F2D]` white text), "à²•à²¨à³à²¨à²¡", "à®¤à®®à®¿à®´à¯" (inactive, `bg-[#EDE8DF]` green text)
  - Row 2: "à¦¬à¦¾à¦‚à¦²à¦¾", "à°¤à±†à°²à±à°—à±", "English" (all inactive)
  - Pill style: `rounded-full px-3.5 py-2`; active state toggles background
- "Login with Aadhaar" button: `bg-[#2C5F2D] rounded-full h-14` with `shield-check` icon + white text "Login with Aadhaar" (Inter 16px weight 600)
- "Use OTP instead â†’" text link centered below button

**Behavior**: Tapping "Login with Aadhaar" navigates to Screen 2. Tapping "Use OTP instead â†’" also goes to Screen 2. Language pill tap sets active language in context.

---

### SCREEN 2 â€” Phone Login
**Route**: `app/auth/phone.tsx`

**Layout**: Vertical, two sections:

**Hero** (`bg-[#2C5F2D]` height 260, centered):
- Logo circle 64Ã—64 `bg-[#FCF6F5]/12` with `sprout` icon (32px, white)
- "AgriSetu" Plus Jakarta Sans 28px white weight 800
- "Enter your mobile number to continue" Inter 14px `text-[#FCF6F5]/70` centered

**Bottom Sheet** (`bg-[#FCF6F5]` rounded-tl-[32px] rounded-tr-[32px] fill remaining, gap 24, padding 32/24/40/24):
- Title: "What's your mobile number?" â€” Plus Jakarta Sans 22px green weight 700
- Subtitle: "We'll send a one-time password to verify your identity." â€” Inter 14px leading-relaxed
- Input field (`bg-[#EDE8DF] rounded-2xl h-14 px-4 flex-row items-center gap-3`):
  - "IN +91" text (Inter 16px bold green) + vertical divider 1Ã—24 + phone number placeholder
- Hint: "You will receive an OTP on this number" â€” Inter 13px `text-[#A0A0A0]`
- Aadhaar note row (`bg-[#EDE8DF] rounded-xl px-4 py-3`, `shield-check` icon + "Linked to your Aadhaar for secure verification" Inter 13px)
- "Send OTP" button: `bg-[#2C5F2D] rounded-full h-14 w-full`
- "Use Aadhaar OTP instead" text link centered

**Behavior**: "Send OTP" navigates to Screen 3.

---

### SCREEN 3 â€” OTP Verify
**Route**: `app/auth/otp.tsx`

**Layout**: Same hero + sheet structure as Screen 2.

**Hero**: `message-square` icon, "Verify your number", "OTP sent to +91 98765 43210"

**Sheet content** (gap 28):
- Title: "Enter 6-digit OTP" â€” Plus Jakarta Sans 22px green weight 700
- Subtitle: "Valid for 10 minutes. Don't share with anyone." â€” Inter 14px gray
- OTP Box Row (6 boxes, `justify-between`):
  - Each box: 52Ã—60, `rounded-[14px]`, Inter 24px bold
  - Filled box: `bg-[#2C5F2D]` white text
  - Unfilled box: `bg-[#EDE8DF]` green text for entered digits, `text-[#D4CFC8]` "â€”" for empty
  - Implement with 6 `TextInput` refs, auto-advance on input
- Resend row: "Didn't receive OTP?" gray + "Resend in 0:42" green (countdown timer via `useEffect`)
- "Verify & Continue" button: `bg-[#2C5F2D] rounded-full h-14`

**Behavior**: Auto-navigates to Screen 4 (Onboarding) on successful 6-digit entry.

---

### SCREEN 4 â€” Onboarding
**Route**: `app/auth/onboarding.tsx`

Multi-step form (3 steps shown via progress indicator):
- Step 1: Farmer name, village, district (text inputs on `bg-[#EDE8DF]` cards)
- Step 2: Land area (acres), crops grown (multi-select chips)
- Step 3: UPI ID, language preference
- Progress bar: 3-dot indicator + filled bar `bg-[#2C5F2D]`
- Header: dark green with step title + progress
- "Next" / "Complete Setup" CTA button at bottom

---

### SCREEN 5 â€” Home Dashboard
**Route**: `app/(tabs)/index.tsx`

**Header** (`bg-[#2C5F2D]` height 80, `justify-between items-center px-6`):
- Left: `sprout` icon 24px + "AgriSetu" Plus Jakarta Sans 18px bold white
- Right: `bell` icon (white) with optional red dot badge + circular avatar (user initials)

**Content** (scrollable, `bg-[#FCF6F5]` padding 20/16):

1. **Greeting card** (`bg-[#2C5F2D] rounded-[20px] p-5 mb-4`):
   - "Good morning, Ramesh ðŸŒ±" Plus Jakarta Sans 20px white bold
   - "Mandya District Â· 2.1 acres" Inter 13px white/70

2. **Active Order Banner** (`bg-[#EDE8DF] rounded-[20px] p-4 mb-4`):
   - Row: `package` icon (green) + "Tomato Seeds â€” In Transit" + `chevron-right`
   - Sub: "Arriving Today by 5 PM" amber text

3. **Voice Order CTA** (`bg-[#2C5F2D] rounded-[20px] p-5 mb-4`):
   - `mic` icon 28px + "Place Voice Order" Plus Jakarta Sans 18px bold white
   - Sub: "Tap to order in your language" white/70 Inter 13px
   - Right: circular animated pulse ring (use `Animated.loop` scale from 1â†’1.2â†’1)

4. **Cluster Status Card** (`bg-[#EDE8DF] rounded-[20px] p-4 mb-4`):
   - Title: "Your Cluster" Plus Jakarta Sans 16px bold green
   - "You + 9 farmers Â· Mandya" + `users` icon
   - Progress bar: full width `bg-[#D4CFC8]` track, `bg-[#2C5F2D]` fill 76%, height 8 rounded
   - "38 of 50 kg collected Â· 12 kg to go" amber text

5. **Quick Actions Row** (3 equal `bg-[#EDE8DF] rounded-[20px] p-4` cards, `flex-row gap-3`):
   - "My Orders" (`package` icon) â€” navigate to Orders tab
   - "Track" (`map-pin` icon) â€” navigate to tracking
   - "Pay" (`wallet` icon) â€” navigate to payment

6. **Impact Stats Row** (3 equal beige cards):
   - "â‚¹3,240 Saved", "3 Orders", "0% Waste"

**Bottom Tab Bar** (see global layout rules)

---

### SCREEN 6 â€” User Profile
**Route**: `app/(tabs)/profile.tsx`

**Header** (`bg-[#2C5F2D]` height 200, padding 48/24/40/24, `items-center gap-3`):
- Back row: `arrow-left` icon + "Profile" text (white, Inter 18px weight 600)
- Avatar: circular 72Ã—72 image (use placeholder `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200`)
- Name: "Ramesh Kumar" Plus Jakarta Sans 20px white bold
- Location: "Mandya District, Karnataka" Inter 13px white/70

**Content** (scrollable, padding 20/24, gap 20):

1. **Profile Completeness Card** (`bg-[#EDE8DF] rounded-2xl p-4 flex-row items-center gap-3`):
   - Green circle `check-circle` icon + "Profile 80% Complete" / "Add UPI ID to complete setup"

2. **Farm Details Section** ("Farm Details" Plus Jakarta Sans 16px bold green):
   - Card (`bg-[#EDE8DF] rounded-[20px]`), 3 rows with dividers:
     - `map-pin` + "Village / District" label + "Belavangala, Mandya Dist." value
     - `layers` + "Land Area" + "2.1 Acres"
     - `sprout` + "Crops Grown" + "Tomato, Ragi"

3. **Impact Section** ("Your Impact"):
   - 2 equal cards side by side: `bg-[#2C5F2D]` "â‚¹3,240 / Total Savings" + `bg-[#EDE8DF]` "3 / Orders Placed"

4. **Payment & Preferences Section** (`bg-[#EDE8DF] rounded-[20px]`, 2 rows):
   - `wallet` + "UPI ID" / "ramesh@upi âœ“ Verified"
   - `globe` + "Language Preference" / "Kannada"

5. **Settings Section** (`bg-[#EDE8DF] rounded-[20px]`, 5 rows with chevrons):
   - `bell` Notification Settings
   - `map-pin` Manage Farm Locations
   - `shield-check` Privacy & Data
   - `message-circle` Help & Support
   - `info` About AgriSetu

6. **Edit Profile** button: `bg-[#2C5F2D] rounded-full h-[52px]` + `pencil` icon + "Edit Profile"
7. **Sign Out** button: `bg-[#EDE8DF] rounded-full h-[52px]` + `log-out` icon red + "Sign Out" red text

**Bottom Tab Bar** (Profile tab active)

---

### SCREEN 7 â€” Voice Ordering
**Route**: `app/(tabs)/voice.tsx`

**Header** (`bg-[#2C5F2D]` height 80): `arrow-left` | "Voice Order" (centered, Plus Jakarta Sans 20px bold white) | `history` icon

**Content** (centered, padding 24/24/40/24, gap 24, `items-center`):

1. Instruction: "Tap the mic and speak your order in your language" â€” Inter 15px green, centered, leading-relaxed

2. **Mic Visual** (centered):
   - Outer container: 220Ã—220 circle `bg-[#FCF6F5]`
   - Middle ring: 160Ã—160 circle `bg-[#2C5F2D]/19` (pulsing animation when recording)
   - Inner circle: 120Ã—120 `bg-[#2C5F2D]`
   - Mic icon: `mic` Lucide 48px white
   - **On press**: Request microphone permission (`Audio.requestPermissionsAsync()`), start recording (`Audio.Recording`), animate pulse ring with `Animated.loop`
   - **On release/stop**: Stop recording, show transcription

3. Status text: "Tap to record Â· 22 languages" â€” Inter 13px green, centered

4. **Transcription Card** (`bg-[#EDE8DF] rounded-[20px] p-5 w-full`, shown after recording):
   - Header row: `type` icon + "Transcription" + "92% match" (green weight 600)
   - Text: "Nange 5kg tomato seeds bekku next week ge" â€” Inter 15px

5. **Extracted Order Card** (`bg-[#2C5F2D] rounded-[20px] p-5 w-full`, shown after transcription):
   - Title: "Extracted Order Details" â€” Plus Jakarta Sans 14px white bold
   - Grid (2 columns): `bg-[#FCF6F5]/12 rounded-xl px-3.5 py-2.5`
     - "Product" / "Tomato Seeds" (white)
     - "Quantity" / "5 kg" (white)
   - Below grid: "Delivery Date" / "Next Week" (full width card, same style)

6. **Action Buttons Row** (gap 12):
   - "Re-record": `bg-[#EDE8DF] rounded-full h-[52px]` + `refresh-cw` green + "Re-record" green
   - "Confirm Order": `bg-[#2C5F2D] rounded-full h-[52px]` + `check` white + "Confirm Order" white

**On "Confirm Order"**: Navigate to Screen 8 (Order Details).

**Bottom Tab Bar** (Voice tab active â€” green filled mic button)

---

### SCREEN 8 â€” Order Details (Confirm Your Order)
**Route**: `app/orders/confirm.tsx`

**Header** (`bg-[#2C5F2D]` height 80): `arrow-left` | "Confirm Your Order" | spacer

**Content** (padding 24, gap 20):

1. **AI Banner** (`bg-[#2C5F2D] rounded-[14px] px-4 py-3.5 flex-row gap-2.5 items-center`):
   - `mic` icon white 18px + "AI extracted from your voice. Review & Confirm" â€” Inter 13px white leading-relaxed

2. **Form Card** (`bg-[#EDE8DF] rounded-[20px]`), 5 editable rows with dividers:
   - Each row: label uppercase gray 11px bold + value Inter 16px weight 600 green + edit icon
   - "PRODUCT" / "Tomato Seeds (Hybrid)" / `pencil` icon
   - "QUANTITY" / "5 kg" / `pencil` icon
   - "DELIVERY DATE" / "Next Week (Nov 28)" / `calendar` icon
   - "DELIVERY LOCATION" / "Mandya Mandi, Gate 2" / `map-pin` icon
   - "SPECIAL INSTRUCTIONS" / "Certified organic only" / `pencil` icon

3. **"Confirm" button**: `bg-[#2C5F2D] rounded-full h-14`
4. **Note**: "Tap any field to edit before confirming" â€” Inter 13px gray centered

**On "Confirm"**: Navigate to Screen 9 (Available Clusters).

---

### SCREEN 9 â€” Available Clusters
**Route**: `app/clusters/available.tsx`

**Header**: `arrow-left` | "Available Clusters" | filter icon

**Content** (scrollable, gap 16, padding 20/16):

- Section title: "Clusters near you" + count pill
- Cluster cards (`bg-[#EDE8DF] rounded-[20px] p-4`):
  - Each card: product name (Plus Jakarta Sans 16px bold) + "X farmers Â· District" + progress bar + price/kg + "Join Cluster" button (`bg-[#2C5F2D] rounded-full h-11`)
  - Show 2â€“3 example clusters (Tomato Seeds, Ragi Seeds, NPK Fertilizer)

**On "Join Cluster"**: Navigate to Screen 10.

---

### SCREEN 10 â€” Demand Clustering / Your Cluster
**Route**: `app/(tabs)/cluster.tsx`

**Header** (`bg-[#2C5F2D]` height 80): `arrow-left` | "Your Cluster" | `share-2` icon

**Map Area** (height 300, `bg-[#EDE8DF]` placeholder with overlay):
- Full-width map placeholder `bg-[#C8E6C9]`
- Overlay text: "Mandya District, Karnataka" (top-left, Inter 12px bold green)
- Circle SVG overlay: large semi-transparent green circle showing cluster radius
- 5 pin markers: 40Ã—40 and 30Ã—30 circles `bg-[#2C5F2D]` with `user` icons scattered inside the radius

**Bottom Panel** (fill remaining, padding 20/24/32/24, gap 16):

1. **Cluster Banner** (`bg-[#2C5F2D] rounded-[20px] p-5 flex-row items-center gap-4`):
   - `users` icon circle `bg-[#FCF6F5]/12` + "You + 9 farmers in Mandya" bold white + "need 50kg Tomato Seeds" white/70

2. **Progress Card** (`bg-[#EDE8DF] rounded-[20px] px-4.5 py-4 gap-3.5`):
   - Header: `sprout` + "Tomato Seeds â€” Demand" bold + "Forming" green badge (dot + text)
   - Stats row (3 columns + dividers):
     - "REQUIRED" / "50 kg" â€” `text-[#2C5F2D]` Plus Jakarta Sans 22px bold
     - "FILLED" / "38 kg"
     - "STILL NEEDED" / "12 kg" â€” `text-[#E69A28]` (amber)
   - Progress bar: `bg-[#C8C2B5]` track h-3 rounded, `bg-[#2C5F2D]` fill 76%
   - Labels: "38 kg collected Â· 76% filled" (green weight 600) + `clock-4` amber "12 kg to go"

3. **Vendor Voting Section**:
   - Header: "Vote for Vendor" + "Swipe left/right to compare vendors" gray 12px
   - **Vendor Card** (`bg-[#EDE8DF] rounded-[20px] p-4 gap-3.5`, swipeable with `react-native-gesture-handler`):
     - Rank "#1" badge + "Recommended Vendor" dark green badge
     - Vendor row: store icon circle + "AgroMart Supplies Pvt Ltd" bold 14px + "â˜… 4.7 Â· 12km Â· ISI + Agmark" + "â‚¹840/kg" / "3 days"
     - Vote progress: "7 of 10 votes Â· 70%" + bar
     - "Vote for this Vendor" button: `bg-[#2C5F2D] rounded-full h-11`
   - Dot pagination: active dot wider (20Ã—7), inactive dots 7Ã—7 `bg-[#D4CFC8]`
   - Prev/Next navigation arrows

4. **Locked Payment Button** (`bg-[#EDE8DF] rounded-full h-[52px]`): `lock` gray + "Payment unlocks after requirement completes" gray 13px

**Bottom Tab Bar** (Cluster tab active)

---

### SCREEN 11 â€” Secure Payment
**Route**: `app/payment/index.tsx`

**Header** (`bg-[#2C5F2D]` height 80): `arrow-left` | "Secure Payment" | `lock` icon

**Content** (padding 20/24/32/24, gap 20):

1. **Countdown Timer Banner** (`bg-[#2C5F2D] rounded-[20px] h-[86px] justify-center items-center`):
   - "TIME LEFT TO PAY" â€” Inter 11px white/70 weight 600
   - Digital timer: HH:MM:SS â€” Plus Jakarta Sans 34px bold white (implement live countdown with `useEffect` + `setInterval`)
   - Sub-labels: "HRS" / "MIN" / "SEC" white/44 12px

2. **Escrow Badge** (`bg-[#EDE8DF] rounded-2xl px-5 py-3.5 flex-row items-center gap-3`):
   - `shield` icon green + "Your money is safe" bold 14px + "Released only after delivery confirmation" 12px

3. **Order Summary** title, Plus Jakarta Sans 16px bold

4. **Order Card** (`bg-[#EDE8DF] rounded-[20px] p-5 gap-3.5`):
   - Vendor row: 44Ã—44 circle `bg-[#2C5F2D]` store icon + "AgroMart Supplies Pvt Ltd" + "ISI" "Agmark" pill badges
   - Divider `bg-[#D4CFC8]` h-px
   - Price rows (justify-between): "Product" / "Tomato Seeds (5 kg)", "Unit Price" / "â‚¹840/kg", "Your Share" / "5 kg"
   - Divider
   - **Total row**: "Your Total" Plus Jakarta Sans 15px bold + "â‚¹4,200" Plus Jakarta Sans 22px bold (weight 800)

5. **Cluster Payment Status** (`bg-[#EDE8DF] rounded-2xl px-5 py-3.5 flex-row items-center gap-3`):
   - `users` icon + "7 of 10 farmers paid" + "70%" right-aligned
   - Progress bar 6px height
   - "Waiting for 3 more farmers â€” order confirmed when all pay" gray 12px

6. **UPI Apps Row** (4 equal `bg-[#EDE8DF] rounded-2xl py-3 items-center gap-1.5` cards):
   - `smartphone` "PhonePe", `credit-card` "GPay", `qr-code` "Scan QR", `wallet` "BHIM"

7. **Pay Now Button**: `bg-[#2C5F2D] rounded-full h-14` + `lock` + "Pay â‚¹4,200 Securely" Inter 16px weight 600

**On Pay**: Navigate to Screen 12.

---

### SCREEN 12 â€” Payment Confirmed (Waiting)
**Route**: `app/payment/waiting.tsx`

- Green checkmark animation (large `check-circle` 80px `text-[#2C5F2D]` with scale-in animation)
- "Payment Received!" Plus Jakarta Sans 24px bold green
- "Waiting for 7 more farmers to complete payment" Inter 14px gray
- Cluster progress bar (6 of 10 farmers paid)
- "View Order Status" button â†’ Screen 14
- "Back to Home" link

---

### SCREEN 13 â€” Payment Complete (All Farmers Paid)
**Route**: `app/payment/success.tsx`

- Full green banner header with confetti effect (use `react-native-reanimated` confetti particles)
- "Order Confirmed!" headline
- All 10 farmers paid badges
- "AgroMart Supplies Pvt Ltd â€” Processing your order"
- "Track Order" button â†’ Screen 14

---

### SCREEN 13a â€” Payment Failed
**Route**: `app/payment/failed.tsx`

- Red `x-circle` icon
- "Payment Failed" title red
- Reason text
- "Retry Payment" button green + "Cancel Order" red outline button

---

### SCREEN 14 â€” Track Order
**Route**: `app/orders/[id]/track.tsx`

**Header**: `arrow-left` | "Track Order" | `ellipsis-vertical`

**Content** (padding 20/24/32/24, gap 20):

1. **Status Card** (`bg-[#2C5F2D] rounded-[20px] p-5 gap-3`):
   - "Order #AGS-2024-0842" white/70 + "Out for Delivery" badge (`bg-[#2C5F2D]/19` white dot + text)
   - "Tomato Seeds (Hybrid) Â· 5 kg" Plus Jakarta Sans 18px bold white
   - "AgroMart Supplies Pvt Ltd Â· Arriving Today" white/70 Inter 13px
   - ETA badge: `bg-[#FCF6F5]/12` round pill + `map-pin` + "Delivery Point: Mandya Mandi Â· 2.3 km"

2. **Order Timeline** (vertical stepper):
   - Each step: left column (24Ã—24 circle dot + 2px vertical line) + right content (title + timestamp)
   - Step states:
     - Completed: `bg-[#2C5F2D]` circle with `check` icon white + solid green line
     - Active (current): `bg-[#2C5F2D]` circle with square dash + dashed gray line
     - Pending: `bg-[#FCF6F5]` circle with gray inner dot (no line)
   - Steps: "Order Confirmed" (Nov 20 Â· 10:32 AM) â†’ "Packed" (Nov 20 Â· 2:15 PM) â†’ "Out for Delivery (Now!)" â†’ "Delivered" (pending)

3. **"Confirm Delivery Received" button**: `bg-[#2C5F2D] rounded-full h-14` + `package-check` icon

4. **Impact Card** (`bg-[#EDE8DF] rounded-[20px] p-5`):
   - "Your Impact This Order" Plus Jakarta Sans 14px bold
   - 3 stats: "â‚¹800 Saved", "12 kg COâ‚‚ Saved", "0% Waste"

5. **Raise Dispute** row: `bg-[#EDE8DF] rounded-2xl px-5 py-3` + `triangle-alert` red + "Raise a dispute" red text

**On "Confirm Delivery"**: Navigate to Screen 16.

---

### SCREEN 15 â€” Order History
**Route**: `app/(tabs)/orders.tsx`

**Header** (`bg-[#2C5F2D]` height 80): "My Orders" + "3 orders" pill badge `bg-[#FCF6F5]/12`

**Content** (scrollable, gap 16, padding 20/20/80/20):

Each order card (`bg-[#EDE8DF] rounded-[20px] p-4 gap-3`):
- Row 1: Status badge + date (right)
  - "Delivered" â†’ `bg-[#2C5F2D]` white pill
  - "Out for Delivery" â†’ `bg-[#F59E0B]/12` amber text pill
  - "Payment Pending" â†’ red pill
- Row 2: Product name Plus Jakarta Sans 16px bold green
- Row 3: "X kg Â· Vendor Name Â· â‚¹X,XXX" Inter 13px green
- Row 4: Savings text ("Saved â‚¹800 with cluster") + `chevron-right`

Tap any card â†’ navigate to Screen 14 (Track Order).

---

### SCREEN 16 â€” Order Delivered & Rate
**Route**: `app/orders/[id]/rate.tsx`

**Header** (`bg-[#2C5F2D]` height 80): `arrow-left` | "Order #AGS-2024-0842" | spacer

**Content** (padding 24, gap 20):

1. Status Card (`bg-[#2C5F2D] rounded-[20px] p-5`):
   - "Delivered" badge + product name + vendor + "Delivered on Nov 21"

2. Impact Card (`bg-[#EDE8DF] rounded-[20px] p-4 gap-3`):
   - 3 stats: "â‚¹800 Saved", "12 kg COâ‚‚ Saved", "0% Waste"

3. **Rate Your Experience** (`bg-[#EDE8DF] rounded-[20px] p-4`):
   - Star rating: 5 `star` icons, tap to select (filled `text-[#E69A28]` / outline `text-[#D4CFC8]`)
   - Text area for review (optional)

4. **"Submit Review" button**: `bg-[#2C5F2D] rounded-full h-14`

5. **Cluster Settlement** note: "Escrow released to AgroMart Supplies Pvt Ltd"

---

### SCREEN 17 â€” Cluster Empty State
**Route**: `app/clusters/empty.tsx`

- Large `users` icon illustration (80px green)
- "No cluster in your area yet"
- "Be the first to start one!" sub text
- "Place Voice Order" CTA button â†’ Screen 7

---

## VENDOR PORTAL â€” COMPLETE SCREEN SPECIFICATION

The vendor portal lives in `apps/web` and is a **Next.js App Router** web app. All screens are desktop layout: 1440Ã—900px reference, sidebar width 240px. Use Tailwind CSS classes throughout (no `className` React Native style â€” standard HTML + Tailwind).

### Global Vendor Layout (`apps/web/app/vendor/layout.tsx`)
- **Sidebar** (`bg-[#FFFFFF]` w-60 h-screen, `justify-between`, padding 32/0/28/0):
  - Top: Logo row (`sprout` icon 26px green + "AgriSetu" Plus Jakarta Sans 18px bold + "Vendor" sub 11px gray)
  - Nav items (h-11, `rounded-xl`, padding 0/14, `flex-row items-center gap-2.5`):
    - Active: `bg-[#2C5F2D]` white text/icon
    - Inactive: transparent, `text-[#A0A0A0]` icon + text
    - Icons: `layout-dashboard`, `briefcase`, `package`, `indian-rupee`, `trending-up`, `settings`
    - Labels: Dashboard, Gigs, Orders, Payments, Analytics, Settings
    - Gigs shows badge "3" in `bg-[#2C5F2D]/10` green pill
  - Bottom: Vendor card (`bg-[#F7F5F0] rounded-xl px-3 py-2.5 flex-row items-center gap-2.5`):
    - 36Ã—36 avatar circle `bg-[#2C5F2D]` with "AM" initials white
    - "AgroMart Pvt Ltd" Plus Jakarta Sans 13px bold + "Verified Vendor" gray 11px

- **Top Bar** (`bg-[#FFFFFF]` h-18 px-8 `justify-between items-center`):
  - Page title Plus Jakarta Sans 20px bold green (left)
  - Right: date pill (`calendar` icon + "Feb 2026") + bell button 38Ã—38 + avatar button 38Ã—38

- **Main Content Area**: `bg-[#F7F5F0]` fills remaining width, scrollable

---

### VENDOR SCREEN 1 â€” Login Page
**Route**: `apps/web/app/vendor/login/page.tsx`

**Layout**: Two-column full screen (50/50):

**Left Panel** (`bg-[#2C5F2D]` w-1/2 h-full, padding 64/60/56/60, `justify-between`):
- Logo row: `sprout` 32px white + "AgriSetu" Plus Jakarta Sans 22px white bold
- Hero text block:
  - "Grow your business\nwith India's farmers." â€” Plus Jakarta Sans 44px white weight 800, line-height 1.15
  - Sub: "Join 200+ verified vendors supplying quality agricultural inputs to farmer clusters across India. Bid on bulk orders, get guaranteed payments via escrow." â€” Inter 16px white/70 leading-relaxed
- Stats row (3 equal cards `bg-[#FFFFFF]/10 rounded-2xl p-4/5`):
  - "200+" / "Verified Vendors"
  - "â‚¹2.4 Cr" / "Orders Processed"
  - "86%" / "Farmers Reached"
  - Values: Plus Jakarta Sans 28px white bold; labels: Inter 13px white/70
- Bottom note: `shield-check` icon white/70 + "Government-verified vendors only Â· AgriStack compliant Â· NABARD-aligned" Inter 13px white/70

**Right Panel** (`bg-[#FFFFFF]` w-1/2 h-full `justify-center items-center`):
- Form card (width 440, `bg-[#FFFFFF] rounded-2xl p-10 gap-6`):
  - "Vendor Portal" Plus Jakarta Sans 26px bold green
  - "Sign in to manage your bids, orders, and payments." Inter 14px gray leading-snug
  - **Business Email** field (label + `bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-[52px] px-4` with `mail` icon + text)
  - **Password** field (`lock` icon + dots + `eye-off` toggle)
  - Remember me checkbox + "Forgot password?" link (justify-between)
  - **"Sign In"** button: `bg-[#2C5F2D] rounded-xl h-[52px]` + `arrow-right` icon
  - Divider: "or continue with"
  - Social row (2 equal buttons `bg-[#F7F5F0] rounded-xl h-12`):
    - `building-2` "GSTIN Login"
    - `credit-card` "DigiLocker"
  - "New Vendor? Register as Vendor" link row

---

### VENDOR SCREEN 2 â€” Dashboard
**Route**: `apps/web/app/vendor/dashboard/page.tsx`

Uses Global Vendor Layout (sidebar + top bar). Dashboard tab active.

**Content** (`bg-[#F7F5F0]` padding 28/32, gap 24, scrollable):

1. **Greeting Row** (justify-between items-center):
   - Left: "Good morning, AgroMart" Plus Jakarta Sans 22px bold green + "You have 3 published gigs and 1 new order awaiting action." Inter 14px gray
   - Right: "Manage Gigs" button `bg-[#2C5F2D] rounded-xl px-4.5 py-2.5` + `briefcase` icon

2. **Metrics Row** (4 equal white cards `bg-[#FFFFFF] rounded-2xl p-5 gap-3`):
   Each card: label (gray 13px) + icon (32Ã—32 `bg-[#2C5F2D]/10 rounded-lg`) + big value + trend text
   - "Published Gigs" / `briefcase` / "3" / "All visible to farmers" (`eye` icon)
   - "Orders This Month" / `package` / "18" / "+24% vs last month" (`trending-up` green)
   - "Total Revenue" / `indian-rupee` / "â‚¹2.84L" / "â‚¹54,600 in escrow" (gray)
   - "Avg Rating" / `star` / "4.4 â˜…" / "Based on 142 orders" (gray)

3. **Mid Row** (fill height, 2 columns with gap 16):
   - **Monthly Revenue Chart** (`bg-[#FFFFFF] rounded-2xl p-5`, fill remaining width):
     - Title "Monthly Revenue" + "Revenue (â‚¹)" legend (green dot)
     - Bar chart: 6 bars (Junâ€“Nov) using `recharts` `BarChart` + `Bar`, bars `fill="#2C5F2D"`, `radius [8,8,0,0]`
     - Bar heights approximate: Jun 112, Jul 148, Aug 126, Sep 168, Oct 152, Nov 180
   - **Recent Orders** card (width 340, `bg-[#FFFFFF] rounded-2xl p-5`):
     - "Recent Orders" + "View all â†’" (justify-between)
     - Divider
     - 3 order rows (product + "X farmers Â· City" gray + status badge):
       - "Tomato Seeds (Hybrid)" / "13 farmers Â· Mandya" / `bg-[#22C55E]/10` "Delivered" green text
       - "NPK Fertilizer 20:20:0" / "8 farmers Â· Hassan" / `bg-[#F59E0B]/10` "Shipped" amber text
       - "Ragi Seeds" / "11 farmers Â· Mysore" / `bg-[#3B82F6]/10` "Confirmed" blue text

4. **Orders Requiring Action** section:
   - "Recent Orders â€” Action Required" + "View all orders â†’"
   - 3 horizontal order action cards (`bg-[#FFFFFF] rounded-2xl p-5 gap-3.5`, equal width):
     - Each: category badge + status badge | product name (Plus Jakarta Sans 15px bold) | "quantity Â· cluster_ID Â· date" gray | "Total: â‚¹X,XXX" green bold | CTA button
     - Card 1: "Fertilizer" amber badge + "Order Received" badge | "Urea - 50kg" | "100 kg Â· cluster_5001 Â· 26 Feb 2026" | â‚¹4,200 | "Mark as Processing" `bg-[#2C5F2D] rounded-xl h-10`
     - Card 2: "Seeds" green badge + "Processing" green badge | "Hybrid Tomato Seeds Pack" | "50 packs Â· cluster_5001" | â‚¹32,500 | "Mark as Ready for Delivery" button
     - Card 3: "Service" gray badge + "Ready for Delivery" amber badge | "Soil Testing Service" | "1 service Â· cluster_5002" | â‚¹1,200 | "View Details" `bg-[#EDE8DF]` button

---

### VENDOR SCREEN 3 â€” Gigs (Bid Management)
**Route**: `apps/web/app/vendor/gigs/page.tsx`

Uses Global Vendor Layout. Gigs tab active.

**Content** (padding 28/32):
- Page header: "My Gigs" + "New Gig" button (`bg-[#2C5F2D]`)
- Filter tabs: All / Active / Closed / Draft
- Gigs table or card grid:
  - Each gig card: product name + category + price/unit + quantity range + active/paused toggle + "Edit" + "View Bids" buttons
  - Mock data: 3 gigs (Tomato Seeds, Urea, Soil Testing)

---

### VENDOR SCREEN 4 â€” Orders List
**Route**: `apps/web/app/vendor/orders/page.tsx`

Uses Global Vendor Layout. Orders tab active.

**Content** (padding 28/32):
- Search bar + filter dropdown (status, date range)
- **Orders table** with columns: Order ID | Product | Cluster | Farmers | Quantity | Amount | Status | Action
- Status chips: Received (gray) / Processing (amber) / Ready (blue) / Shipped (orange) / Delivered (green) / Disputed (red)
- Pagination at bottom
- Mock rows matching dashboard data

---

### VENDOR SCREEN 5 â€” Payments
**Route**: `apps/web/app/vendor/payments/page.tsx`

Uses Global Vendor Layout. Payments tab active.

**Content** (padding 28/32):
- Summary cards: "Total Received" / "In Escrow" / "Pending Release"
- Payments table: Order ID | Amount | Status | Release Date
- Escrow explanation banner: "Funds released 24h after delivery confirmed by farmer"

---

### VENDOR SCREEN 6 â€” Analytics
**Route**: `apps/web/app/vendor/analytics/page.tsx`

Uses Global Vendor Layout. Analytics tab active.

**Content** (padding 28/32):
- Date range picker
- Revenue trend chart (line chart via `recharts` `LineChart`)
- Top products bar chart
- District-wise sales heatmap placeholder
- Rating trend over time

---

## NAVIGATION STRUCTURE

### `apps/mobile` â€” Expo Router file-based routes

```
apps/mobile/app/
â”œâ”€â”€ index.tsx                  â† Screen 1: Landing & Login
â”œâ”€â”€ auth/
â”‚   â”œâ”€â”€ phone.tsx              â† Screen 2: Phone Login
â”‚   â”œâ”€â”€ otp.tsx                â† Screen 3: OTP Verify
â”‚   â””â”€â”€ onboarding.tsx         â† Screen 4: Onboarding
â”œâ”€â”€ (tabs)/
â”‚   â”œâ”€â”€ _layout.tsx            â† Tab bar layout (5 tabs)
â”‚   â”œâ”€â”€ index.tsx              â† Screen 5: Home
â”‚   â”œâ”€â”€ orders.tsx             â† Screen 15: Order History
â”‚   â”œâ”€â”€ voice.tsx              â† Screen 7: Voice Ordering
â”‚   â”œâ”€â”€ cluster.tsx            â† Screen 10: Demand Clustering
â”‚   â””â”€â”€ profile.tsx            â† Screen 6: User Profile
â”œâ”€â”€ clusters/
â”‚   â”œâ”€â”€ available.tsx          â† Screen 9: Available Clusters
â”‚   â””â”€â”€ empty.tsx              â† Screen 17: Empty State
â”œâ”€â”€ orders/
â”‚   â”œâ”€â”€ confirm.tsx            â† Screen 8: Order Details
â”‚   â””â”€â”€ [id]/
â”‚       â”œâ”€â”€ track.tsx          â† Screen 14: Track Order
â”‚       â””â”€â”€ rate.tsx           â† Screen 16: Rate & Delivered
â””â”€â”€ payment/
    â”œâ”€â”€ index.tsx              â† Screen 11: Secure Payment
    â”œâ”€â”€ waiting.tsx            â† Screen 12: Payment Waiting
    â”œâ”€â”€ success.tsx            â† Screen 13: All Paid
    â””â”€â”€ failed.tsx             â† Screen 13a: Failed
```

### `apps/web` â€” Next.js App Router routes

```
apps/web/app/
â”œâ”€â”€ page.tsx                   â† redirect to /vendor/login
â””â”€â”€ vendor/
    â”œâ”€â”€ layout.tsx             â† Global sidebar + top bar layout
    â”œâ”€â”€ login/
    â”‚   â””â”€â”€ page.tsx           â† Vendor Login
    â”œâ”€â”€ dashboard/
    â”‚   â””â”€â”€ page.tsx           â† Vendor Dashboard
    â”œâ”€â”€ gigs/
    â”‚   â””â”€â”€ page.tsx           â† Vendor Gigs
    â”œâ”€â”€ orders/
    â”‚   â””â”€â”€ page.tsx           â† Vendor Orders
    â”œâ”€â”€ payments/
    â”‚   â””â”€â”€ page.tsx           â† Vendor Payments
    â””â”€â”€ analytics/
        â””â”€â”€ page.tsx           â† Vendor Analytics
```

---

## CONTEXT / STATE MANAGEMENT

Create the following contexts in `apps/mobile/context/`:

```typescript
// AppContext.tsx
interface AppState {
  language: 'hi' | 'kn' | 'ta' | 'bn' | 'te' | 'en';
  user: {
    name: string;
    phone: string;
    district: string;
    landArea: number;
    crops: string[];
    upiId: string;
    avatarUrl: string;
  } | null;
  activeOrder: {
    id: string;
    product: string;
    quantity: number;
    status: 'confirming' | 'clustering' | 'paying' | 'waiting' | 'confirmed' | 'in_transit' | 'delivered';
    cluster: ClusterState;
    vendor: VendorState;
    payment: PaymentState;
  } | null;
  orderHistory: Order[];
}

interface ClusterState {
  id: string;
  district: string;
  totalFarmers: number;
  joinedFarmers: number;
  requiredQty: number;
  filledQty: number;
  vendors: Vendor[];
  selectedVendor: Vendor | null;
}
```

---

## PACKAGES TO INSTALL

### `apps/mobile` (Expo)
```bash
cd apps/mobile
npx expo install \
  expo-router \
  expo-av \
  expo-audio \
  expo-font \
  expo-speech \
  react-native-reanimated \
  react-native-gesture-handler \
  lucide-react-native \
  nativewind \
  tailwindcss \
  @expo-google-fonts/inter \
  @expo-google-fonts/plus-jakarta-sans
```

### `apps/web` (Next.js)
```bash
cd apps/web
npm install \
  lucide-react \
  recharts \
  tailwindcss \
  postcss \
  autoprefixer
```

---

## KEY IMPLEMENTATION NOTES

### Voice Recording (Screen 7)
```typescript
import { Audio } from 'expo-av';

const startRecording = async () => {
  await Audio.requestPermissionsAsync();
  await Audio.setAudioModeAsync({ allowsRecordingIOS: true });
  const { recording } = await Audio.Recording.createAsync(
    Audio.RecordingOptionsPresets.HIGH_QUALITY
  );
  setRecording(recording);
  // Start pulse animation
  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseAnim, { toValue: 1.3, duration: 800, useNativeDriver: true }),
      Animated.timing(pulseAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
    ])
  ).start();
};

const stopRecording = async () => {
  await recording.stopAndUnloadAsync();
  // Simulate transcription result
  setTranscription("Nange 5kg tomato seeds bekku next week ge");
  setExtracted({ product: "Tomato Seeds", quantity: "5 kg", delivery: "Next Week" });
};
```

### OTP Input (Screen 3)
```typescript
const refs = Array.from({ length: 6 }, () => useRef<TextInput>(null));
// On each input, auto-advance to next ref
// On backspace, go to previous ref
```

### Countdown Timer (Screen 11)
```typescript
const [timeLeft, setTimeLeft] = useState(86400); // 24h in seconds
useEffect(() => {
  const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
  return () => clearInterval(interval);
}, []);
const hours = Math.floor(timeLeft / 3600);
const minutes = Math.floor((timeLeft % 3600) / 60);
const seconds = timeLeft % 60;
```

### NativeWind Setup (`apps/mobile/tailwind.config.js`)
```js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2C5F2D',
        cream: '#FCF6F5',
        beige: '#EDE8DF',
        muted: '#D4CFC8',
        amber: '#E69A28',
      }
    }
  }
}
```

### Swipeable Vendor Cards (Screen 10)
Use `react-native-gesture-handler` `PanGestureHandler` with `react-native-reanimated` `useSharedValue` + `useAnimatedStyle` for translateX, and snap logic with `runOnJS`.

---

## MOCK DATA

Use the following consistent mock data across all screens:

```typescript
export const MOCK_USER = {
  name: "Ramesh Kumar",
  phone: "+91 98765 43210",
  district: "Mandya District, Karnataka",
  village: "Belavangala",
  landArea: 2.1,
  crops: ["Tomato", "Ragi"],
  upiId: "ramesh@upi",
  language: "kn",
  totalSavings: 3240,
  ordersPlaced: 3,
};

export const MOCK_CLUSTER = {
  id: "cluster_5001",
  district: "Mandya",
  totalFarmers: 10,
  joinedFarmers: 9,
  product: "Tomato Seeds",
  requiredQty: 50,
  filledQty: 38,
  status: "forming",
};

export const MOCK_VENDORS = [
  {
    id: "v1",
    name: "AgroMart Supplies Pvt Ltd",
    rating: 4.7,
    distance: 12,
    certs: ["ISI", "Agmark"],
    pricePerKg: 840,
    deliveryDays: 3,
    votes: 7,
    totalVotes: 10,
    recommended: true,
  },
  {
    id: "v2",
    name: "KisanBazar Direct",
    rating: 4.3,
    distance: 8,
    certs: ["ISI"],
    pricePerKg: 860,
    deliveryDays: 2,
    votes: 2,
    totalVotes: 10,
    recommended: false,
  },
];

export const MOCK_ORDER = {
  id: "AGS-2024-0842",
  product: "Tomato Seeds (Hybrid)",
  quantity: 5,
  unit: "kg",
  pricePerKg: 840,
  total: 4200,
  vendor: "AgroMart Supplies Pvt Ltd",
  status: "out_for_delivery",
  timeline: [
    { step: "Order Confirmed", time: "Nov 20 Â· 10:32 AM", done: true },
    { step: "Packed", time: "Nov 20 Â· 2:15 PM", done: true },
    { step: "Out for Delivery (Now!)", time: "Nov 21 Â· Arriving today by 5 PM", active: true },
    { step: "Delivered", time: "Tap to confirm receipt", pending: true },
  ],
  savings: 800,
  co2Saved: 12,
};
```

---

## CONSTRAINTS & RULES

1. **No backend calls** â€” use mock data everywhere; simulate async with `setTimeout`.
2. **All screens must be navigable** â€” no dead ends; every button/link goes somewhere.
3. **Voice must use device microphone** â€” `expo-av` Audio.Recording, not a web API.
4. **Multilingual UI** â€” store active language in context, UI labels are placeholder English but the language-switch UI must be functional.
5. **Pixel-accurate colors** â€” use exact hex values from the color palette above.
6. **Monorepo separation** â€” farmer app lives in `apps/mobile` (Expo), vendor portal in `apps/web` (Next.js). They are separate apps sharing only config packages.
7. **No TypeScript errors** â€” full type safety with proper interfaces.
8. **No external UI libraries** â€” `apps/mobile`: only NativeWind + lucide-react-native; `apps/web`: only Tailwind + lucide-react + recharts (charts only).
9. **Responsive tab bar** â€” always visible on all tabbed screens in the mobile app, correct active tab highlighted.
10. **Generate all files** â€” do not skip any screen; produce complete, runnable code for every route listed in the navigation structure.
11. **`apps/api` placeholder only** â€” create the directory with a single `README.md` ("Flask API â€” coming soon."). Do not scaffold any Python code.

