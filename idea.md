# AgriSetu: AI-Driven Collective Input Procurement Platform

## Executive Summary

AgriSetu is a mobile-first, AI-powered platform that enables virtual farmer collectivization for agricultural input procurement. Built for a **government-authorized hackathon on AI for Rural Sustainability**, the platform leverages **Aadhaar authentication**, **multilingual voice AI**, and **UPI payments** to reduce input costs by 10-25% while minimizing environmental waste through optimized logistics.

**Key Differentiators:**
- Government vendor integration (no cold-start problem)
- Voice-first multilingual interface (BharatGPT + Amazon Polly/Transcribe)
- AI-driven demand clustering and vendor matching
- UPI-based payments with future KCC/DBT integration
- AgriStack-compliant and NABARD-aligned

---

## 1. Problem Statement

Indian agriculture is dominated by 86% small and marginal farmers who face:

**Economic Challenges:**
- High input costs due to small-quantity purchases
- Lack of bargaining power with suppliers
- Dependency on exploitative intermediaries
- Limited access to transparent pricing

**Sustainability Issues:**
- Over-procurement leading to 20-30% input wastage
- Inefficient last-mile logistics (individual deliveries)
- High carbon emissions from fragmented supply chains
- Quality issues with adulterated inputs

**Digital Barriers:**
- Low digital literacy in rural areas
- Language barriers in existing solutions
- Poor internet connectivity limiting adoption

---

## 2. Solution Overview

AgriSetu creates **virtual farmer collectives** through AI-driven demand aggregation, connecting them directly with **government-verified vendors** for transparent, cost-effective procurement.

### Core Value Proposition

**For Farmers:**
- 10-25% cost reduction through bulk procurement
- Voice-based ordering in regional languages
- Transparent vendor pricing and ratings
- Secure UPI payments with escrow protection
- Real-time order tracking

**For Vendors:**
- Access to aggregated demand (predictable sales)
- Reduced marketing costs
- Government-backed credibility
- Simple dashboard for quote submission and order management

**For Environment:**
- 20-30% reduction in input wastage
- 40-50% reduction in logistics emissions
- Better crop yields through quality inputs

**Trust & Accountability:**
- The platform embeds transparent pricing, traceable sourcing, and group-level accountability to prevent fraud.
- A community-driven verification system allows farmers to share usage experiences and flag suspicious products, creating a self-reinforcing, trust-based shield against counterfeit inputs and unfair pricing.


---

## 3. Strategic Alignment with Government Initiatives

### 3.1 AgriStack Integration

**Farmer Identity Layer:**
- Uses Aadhaar authentication for de-duplication
- Consumes AgriStack farmer IDs (not creating parallel systems)
- Explicit consent management for data sharing

**Service Layer:**
- Functions as application layer atop AgriStack
- Complements (not duplicates) existing services
- Extends AgriStack utility into transactional value creation

### 3.2 NABARD Alignment

**Virtual Collectivization:**
- No legal registration or FPO formation overhead
- Lower cost of collectivization vs. traditional FPOs
- Can act as feeder system for future FPO formation

**Economic Impact:**
- Reduces input costs and farmer indebtedness
- Improves farm economics and credit profiles
- Strengthens rural supply chains

### 3.3 Government Infrastructure Leverage

**Vendor Discovery:**
- Government-authorized vendors pre-verified
- Integration with PACS network (NABARD)
- GeM-like supplier registry for agriculture

**Payment Systems:**
- UPI (NPCI) for instant payments
- Compatible with PM-KISAN DBT infrastructure
- Future: Kisan Credit Card (KCC) integration

---

## 4. MVP Architecture

### 4.1 Farmer Mobile App (React Native/Flutter)

**Key Features:**

1. **Aadhaar Authentication**
   - eKYC via DigiLocker/UIDAI APIs
   - Prevents duplicate farmer registration
   - Links to bank account for UPI payments

2. **Voice-First Interface**
   - Multilingual support: Hindi, Kannada, Tamil, Telugu, Bengali, etc.
   - Speech-to-Text: Amazon Transcribe
   - Natural language processing: BharatGPT (deployed using Amazon Bedrock)
   - Text-to-Speech: Amazon Polly
   - Low-literacy friendly design

3. **Request Submission**
   - Farmer speaks: "I need 5kg tomato seeds"
   - System extracts: Crop type, Input type, Quantity, Location, Preferred delivery date
   - Confirmation via voice feedback

4. **Cluster Visualization**
   - "You + 12 farmers in your area need tomato seeds"
   - Shows collective buying power
   - Displays potential savings

5. **Vendor Comparison**
   - Top 3 matched vendors with transparent pricing
   - Ratings and distance shown
   - Let farmers choose or auto-select best match

6. **UPI Payment**
   - Pay individual share (e.g., ₹450)
   - Escrow-based collection
   - Payment confirmation via SMS/app

7. **Order Tracking**
   - Real-time status updates
   - Shipment tracking
   - Delivery confirmation

8. **Vendor Feedback**
   - Rate vendor on: Quality (1-5★), Delivery time, Product authenticity
   - Text/voice feedback option
   - Builds vendor reputation score

### 4.2 Vendor Dashboard (Web - React/Next.js)

**Key Features:**

1. **Request Inbox**
   - View all aggregated purchase requests
   - Filter by: Region, Crop type, Input category
   - Shows: Quantity, Location, Preferred delivery date

2. **Quote Submission**
   - Submit price quote per request
   - Include: Product cost, Delivery charges, Delivery timeline
   - Attach certifications (ISI/FSSAI/Agmark)

3. **Order Management**
   - View accepted quotes
   - Payment confirmation status
   - Batch orders for delivery

4. **Shipment Updates**
   - Update order status: Confirmed → Packed → Shipped → Delivered
   - Add tracking details
   - Upload delivery proof

5. **Performance Metrics**
   - Current rating (1-5★)
   - Delivery success rate
   - Repeat order percentage
   - Total orders fulfilled

### 4.3 Backend Services (FastAPI/Node.js)

**Core Modules:**

1. **Authentication Service**
   - Aadhaar eKYC integration
   - JWT-based session management
   - Role-based access control (farmer/vendor/admin)

2. **Demand Aggregation Engine**
   - Clustering algorithm: K-means / DBSCAN
   - Parameters: Location (lat/lng), Crop type, Input type, Timing
   - Groups farmers within 50km radius
   - Creates bulk orders (min 5 farmers)

3. **Vendor Matching Algorithm** (see Section 5)

4. **Payment Gateway Integration**
   - UPI via Razorpay/PhonePe/Paytm APIs
   - Escrow account management
   - Automated disbursement to vendors

5. **Notification Service**
   - SMS via Twilio/MSG91
   - WhatsApp Business API integration
   - In-app push notifications

6. **Feedback & Rating System**
   - Stores farmer ratings
   - Calculates vendor reputation scores
   - Flags low-rated vendors for review

---

## 5. AI Vendor Matching Algorithm

### Weighted Scoring System

**1. Geographic Proximity (30% weight)**
- Distance from vendor warehouse to farmer cluster centroid
- Scoring:
  - 0-50km: Score = 1.0
  - 50-100km: Score = 0.7
  - 100-200km: Score = 0.4
  - >200km: Score = 0.1

**2. Pricing (35% weight)**
- Total cost = Product price + Delivery charges
- Scoring:
  - If quote ≤ market average: Score = 1.0
  - If quote 1-10% above avg: Score = 0.8
  - If quote 10-15% above avg: Score = 0.5
  - If quote >15% above avg: Flag as overpriced

**3. Vendor Reputation (20% weight)**
- Quality rating: Average of farmer feedback (1-5★)
- Delivery success rate: % of on-time deliveries
- Product authenticity: % of positive authenticity feedback
- Scoring: (Quality + Success Rate + Authenticity) / 3
- New vendors: Default score = 0.6 (3/5)

**4. Delivery Timeline (10% weight)**
- Farmer's preferred delivery date vs. vendor's promise
- Scoring:
  - Delivers within preferred window: Score = 1.0
  - Delivers 1-3 days late: Score = 0.7
  - Delivers >3 days late: Score = 0.3

**5. Credit/Interest Terms (5% weight - Future)**
- 0% interest (UPI immediate): Score = 1.0
- Low interest (4% via KCC): Score = 0.8
- High interest (>7%): Score = 0.5

### Matching Logic

```python
For each clustered demand:
  1. Filter vendors by:
     - Input type match
     - Serviceable region (within 200km)
     - Minimum order quantity capability
  
  2. Request quotes from eligible vendors (5-10 vendors)
  
  3. Calculate weighted score for each vendor:
     Total Score = (0.30 × proximity_score) 
                 + (0.35 × price_score)
                 + (0.20 × reputation_score)
                 + (0.10 × delivery_score)
                 + (0.05 × credit_score)
  
  4. Rank vendors by total score
  
  5. Present top 3 vendors to farmers:
     - Vendor name, rating, distance
     - Total price breakdown
     - Delivery timeline
  
  6. Selection:
     - Auto-select highest score OR
     - Let farmers choose from top 3
```

---

## 6. Payment Flow (UPI-Based)

### Step-by-Step Process

1. **Demand Clustering**
   - AI groups 10 farmers in Mandya needing tomato seeds
   - Total demand: 50kg seeds

2. **Vendor Matching**
   - Platform requests quotes from 7 eligible vendors
   - AI ranks vendors using weighted scoring
   - Top 3 shown to farmers

3. **Vendor Selection**
   - Best vendor: XYZ Seeds Ltd.
   - Price: ₹4200 total (₹420 per farmer)
   - Rating: 4.5★, Distance: 15km, Delivery: 3 days

4. **Payment Collection**
   - Each farmer gets notification: "Pay ₹420 via UPI"
   - Farmers scan QR code or use UPI ID
   - Platform collects in escrow account
   - Timeout: 24 hours (if not 100% paid, request expires)

5. **Vendor Confirmation**
   - Once all 10 farmers pay → Vendor notified
   - Vendor confirms order on dashboard
   - Platform transfers ₹4200 to vendor's account

6. **Fulfillment**
   - Vendor packs and ships order
   - Updates status: Packed → Shipped → Out for Delivery
   - Farmers receive tracking notifications

7. **Delivery**
   - Vendor marks "Delivered" with proof
   - Farmers confirm receipt in app

8. **Feedback**
   - Farmers rate vendor within 48 hours
   - Ratings update vendor's reputation score
   - Low ratings trigger admin review

### Government Infrastructure Integration

**Current (MVP):**
- **UPI** via NPCI (already familiar to farmers)
- Compatible with **Aadhaar-linked bank accounts** (PM-KISAN DBT infrastructure)

**Future (Post-MVP):**
- **Kisan Credit Card (KCC)** integration for credit purchases
- **DBT subsidy auto-apply** (e.g., fertilizer subsidy via PM-KISAN)
- **PMFBY insurance linkage** (crop insurance claims → input credits)

---

## 7. Technology Stack

### Frontend
- **Farmer App**: React Native (Expo) for iOS/Android
- **Vendor Dashboard**: React + Next.js (responsive web)
- **UI Library**: Tailwind CSS, Material-UI

### Backend
- **API**: FastAPI (Python) or Node.js/Express
- **Architecture**: Microservices (REST APIs)
- **Database**: PostgreSQL (relational data: users, orders)
- **Cache**: Redis (real-time tracking, session management)

### AI/ML
- **Voice-to-Text**: Amazon Transcribe
- **Text-to-Voice**: Amazon Polly
- **Language Processing**: BharatGPT (deployed using Amazon Bedrock)
- **Clustering**: Scikit-learn (K-means, DBSCAN)
- **Vendor Matching**: Custom weighted scoring algorithm

### Payment
- **UPI Gateway**: Razorpay / PhonePe / Paytm Business
- **Escrow**: Platform bank account with auto-disbursement

### Authentication
- **Aadhaar eKYC**: DigiLocker API / UIDAI Sandbox

### Deployment
- **Cloud**: AWS
- **Database**: Supabase / Neon (managed PostgreSQL)

### DevOps
- **Compute**: AWS Fargate (Serverless Containers)
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry (error tracking), Posthog (analytics)
- **Logging**: CloudWatch

---

## 8. Sustainability Impact Metrics

### Environmental Impact

**Reduced Waste:**
- Bulk ordering based on actual demand → 20-30% less over-procurement
- Example: 100 farmers order 500kg seeds (exact need) vs. 650kg individual purchases

**Optimized Logistics:**
- Single delivery for 10 farmers vs. 10 individual trips
- Carbon emissions reduction: 40-50%
- Example: 1 truck trip (15km) vs. 10 trips (150km total)

**Quality Inputs:**
- Government-verified vendors → authentic products
- Better seed quality → improved crop yield
- Reduced chemical overuse → lower environmental pollution

### Economic Impact

**Cost Reduction:**
- 10-25% savings through bulk pricing
- Example: ₹500/kg individual → ₹400/kg bulk (20% savings)

**Transparency:**
- Eliminates intermediary markup (15-30%)
- Direct farmer-vendor connection

**Credit Dependency:**
- Upfront bulk discounts reduce need for high-interest loans
- Future KCC integration: 4% interest vs. 18-24% informal credit

### Social Impact

**Digital Inclusion:**
- Voice-first interface for low-literacy farmers
- Multilingual support across 22 scheduled languages

**Empowerment:**
- Collective bargaining power
- Transparent vendor ratings
- Farmer-to-farmer trust building

**Scalability:**
- No FPO registration overhead
- Can scale to millions of farmers via AgriStack

---

## 9. Future Roadmap (Post-MVP)

### Phase 2: Government Credit & Subsidy Integration

**Kisan Credit Card (KCC) Integration**
- Allow farmers to pay via KCC instead of UPI
- Interest rates: 7% (subsidized to 4% if repaid within 1 year)
- Platform integrates with bank APIs for KCC validation
- NABARD-aligned credit terms

**Direct Benefit Transfer (DBT) for Subsidies**
- Integrate with PM-KISAN DBT system
- Auto-apply fertilizer subsidy at checkout
- Example: ₹500 fertilizer → Farmer pays ₹350, Govt pays ₹150 directly
- Leverage Aadhaar-linked bank accounts

**Crop Insurance Linkage (PMFBY)**
- Connect with Pradhan Mantri Fasal Bima Yojana
- If crop fails → Insurance claim triggers input credit for next season
- Seamless claim processing via platform

### Phase 3: Quality Assurance & Compliance

**Vendor Certification**
- Government-verified badges: ISI, FSSAI, Agmark
- Periodic quality audits via state agriculture departments
- Blacklist mechanism for persistent low ratings

**Dynamic Pricing Alerts**
- Notify farmers when input prices drop below historical average
- Government price monitoring integration (fertilizer price capping)

**Traceability**
- Blockchain-based supply chain tracking
- QR code on products linking to batch details

### Phase 4: Advisory Services

**Crop Lifecycle Monitoring**
- Weather-based alerts
- Pest and disease risk notifications
- Sowing/harvesting reminders

**Agronomic Advisory**
- Soil health recommendations
- Fertilizer application guidance
- Crop rotation suggestions

---

## 10. Hackathon Demo Flow

### Live Demo Scenario

**Setting:** 10 farmers in Mandya, Karnataka need tomato seeds

**Step 1: Farmer Authentication**
- Farmer Ramesh opens AgriSetu app
- Authenticates via Aadhaar eKYC
- App loads in Kannada (auto-detected)

**Step 2: Voice Input**
- Ramesh taps mic button
- Speaks: *"Nange 5kg tomato seeds bekku"* (I need 5kg tomato seeds)
- BharatGPT processes → Extracts:
  - Crop: Tomato
  - Input: Seeds
  - Quantity: 5kg
  - Location: Mandya (from profile)

**Step 3: Demand Clustering**
- AI finds 9 other farmers with similar requests
- Shows: *"You + 9 farmers in Mandya need 50kg tomato seeds"*
- Displays: Potential savings ₹3000 (15% bulk discount)

**Step 4: Vendor Matching**
- Platform requests quotes from 7 vendors
- Top 3 shown:
  1. **XYZ Seeds Ltd.** - ₹4200, 4.5★, 15km, 3 days
  2. ABC Agro - ₹4500, 4.2★, 30km, 4 days
  3. PQR Seeds - ₹4800, 4.8★, 10km, 2 days

**Step 5: Selection**
- Ramesh chooses XYZ Seeds (best value)
- App shows: *"Pay ₹420 (your share) via UPI"*

**Step 6: Payment**
- Ramesh scans UPI QR code
- Payment confirmed
- App shows: *"8/10 farmers paid. Waiting for 2 more..."*

**Step 7: Vendor Dashboard**
- Vendor XYZ sees order notification
- Confirms order
- Updates status: "Order Confirmed"

**Step 8: Fulfillment**
- Vendor packs seeds
- Updates: "Packed" → "Shipped" → "Out for Delivery"
- Ramesh gets SMS updates

**Step 9: Delivery**
- Seeds delivered to local collection point
- Vendor marks "Delivered" with photo proof
- Ramesh confirms receipt

**Step 10: Feedback**
- Ramesh rates vendor: 5★
- Voice feedback: *"Seeds ಒಳ್ಳೆಯದು, delivery fast"* (Seeds good, delivery fast)
- Vendor's rating updated: 4.5★ → 4.52★

**Step 11: Impact Dashboard**
- Platform shows:
  - *"Collective savings: ₹3000"*
  - *"CO2 emissions reduced: 45kg (vs. individual deliveries)"*
  - *"Input wastage prevented: 15kg seeds"*

---

## 11. Competitive Differentiation

**vs. Existing Agtech Platforms (DeHaat, AgroStar, Ninjakart):**

| Feature | AgriSetu | Existing Platforms |
|---------|----------|-------------------|
| **Vendor Discovery** | Government-verified | Private marketplace |
| **Payment** | UPI + Future KCC/DBT | Private wallets/credit |
| **Language Support** | Voice-first, 22 languages | Text-based, limited languages |
| **Farmer Onboarding** | Aadhaar eKYC | Manual registration |
| **Collectivization** | AI-driven clusters | Manual FPO formation |
| **Sustainability Focus** | Core metric (waste/carbon) | Secondary concern |
| **Government Alignment** | AgriStack-compliant | Independent platforms |

**Key Moat:** Government partnership + Voice-first multilingual AI + Sustainability-first design

---

## 12. Positioning Statement

> **AgriSetu** is an **AgriStack-compliant, NABARD-aligned** AI platform that enables **virtual farmer collectivization** for sustainable agricultural input procurement. By leveraging **voice-first multilingual AI**, **government-verified vendors**, and **UPI payments**, AgriSetu reduces input costs by 10-25% while cutting environmental waste by 20-30%, empowering India's 86% small and marginal farmers through transparent, collective bargaining.

---

## 13. Conclusion

AgriSetu is not just a procurement platform—it's a **sustainability engine** that transforms fragmented farmer demand into collective bargaining power, reducing costs and environmental impact simultaneously.

By building atop India's digital public infrastructure (AgriStack, Aadhaar, UPI) and aligning with government priorities (NABARD, PM-KISAN), AgriSetu offers a **practical, scalable, policy-aligned solution** for rural India's most persistent agricultural challenge: expensive, wasteful input procurement.

**This is AI for Rural Sustainability—powered by farmers, verified by government, built for impact.**

---

**Hackathon Theme:** AI for Rural Sustainability ✅  
**Government Authorized:** AgriStack + NABARD Compliant ✅  
**Measurable Impact:** Economic + Environmental + Social ✅  
**Demonstrable MVP:** App + Dashboard + Live Demo ✅
