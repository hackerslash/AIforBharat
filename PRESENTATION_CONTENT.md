# PowerPoint Presentation Content - AgriSetu

## File: Idea Submission _ AWS AI for Bharat Hackathon (1).pptx

**Note**: Since PowerPoint files are binary format, below is the suggested content for each slide. Please manually update the presentation with this content.

---

### Slide 1: Title Slide

**Title**: AgriSetu  
**Subtitle**: AI-Driven Collective Input Procurement for Rural Sustainability

**Tagline**: "Transforming fragmented farmer demand into collective bargaining power"

**Team**: [Your Team Name]  
**Event**: AWS AI for Bharat Hackathon 2026  
**Theme**: AI for Rural Sustainability

---

### Slide 2: Problem Statement

**Title**: The Rural Procurement Challenge

**Content**:
- 86% of Indian farmers are small and marginal (< 5 acres)
- Pay 20-30% higher input costs due to small-quantity purchases
- 20-30% input wastage from over-procurement
- Fragmented logistics → 40-50% higher carbon emissions
- Low digital literacy limits adoption of existing solutions

**Visual**: 
- Chart showing cost comparison: Individual (₹500/kg) vs Bulk (₹400/kg)
- Icon showing wastage statistics

---

### Slide 3: Solution Overview

**Title**: AgriSetu - Virtual Farmer Collectivization

**Content**:
**How it Works:**
1. 🎤 Farmers speak requests in regional languages (voice-first)
2. 🤖 AI clusters similar demands (location + crop + timing)
3. 🏪 Government-verified vendors submit quotes
4. 💰 Farmers pay via UPI (individual shares)
5. 📦 Consolidated delivery + Vendor ratings

**Key Features:**
- Multilingual voice AI (BharatGPT + ElevenLabs)
- Aadhaar authentication (de-duplication)
- AI vendor matching (price + proximity + reputation)
- UPI payments with escrow protection

---

### Slide 4: Technology Stack

**Title**: AI-Powered Architecture

**Content**:

**AI/ML Components:**
- **Voice Processing**: Web Speech API + Deepgram (STT), ElevenLabs (TTS)
- **Language**: BharatGPT for 10+ Indian languages
- **Clustering**: DBSCAN algorithm (geographic + temporal grouping)
- **Vendor Matching**: Weighted scoring (proximity 30%, price 35%, reputation 20%)

**Tech Stack:**
- **Frontend**: React Native (Farmer App), React + Next.js (Vendor Dashboard)
- **Backend**: FastAPI (Python) / Node.js, PostgreSQL, Redis
- **Payment**: Razorpay/PhonePe UPI Gateway
- **Auth**: Aadhaar eKYC via DigiLocker/UIDAI APIs
- **Cloud**: AWS/GCP (or MeghRaj for govt compliance)

---

### Slide 5: Sustainability Impact

**Title**: Measurable Environmental & Economic Impact

**Content**:

**Environmental:**
- ♻️ 20-30% reduction in input wastage (demand-based procurement)
- 🌍 40-50% reduction in logistics emissions (consolidated delivery)
- 🌱 Better crop yields through quality inputs

**Economic:**
- 💰 10-25% cost savings for farmers through bulk pricing
- 🚫 Eliminates intermediary markup (15-30%)
- 📉 Reduces dependency on high-interest credit (18-24% → 4% via KCC)

**Social:**
- 📱 Digital inclusion for low-literacy farmers (voice-first)
- 🤝 Collective bargaining power
- ⭐ Transparent vendor ratings

---

### Slide 6: Government Alignment

**Title**: Built on India's Digital Public Infrastructure

**Content**:

**AgriStack Alignment:**
- ✅ **MVP**: Aadhaar authentication (UIDAI direct integration)
- ✅ **MVP**: AgriStack-compatible data models
- 🔜 **Phase 2**: Full AgriStack API integration (Farmer Registry, Land Records)
- 🔜 **Phase 2**: AgriStack consent framework implementation

**Why not full AgriStack in MVP?**
- Faster pilot deployment (no dependency on state-level AgriStack rollout)
- Validates core concept before complex government integration
- AgriStack APIs still being rolled out in pilot states
- Data models designed for seamless Phase 2 migration

**NABARD Aligned:**
- Virtual collectivization (no FPO registration overhead)
- Supports rural credit programs (future KCC integration)
- Strengthens supply chain efficiency

**Government Infrastructure:**
- Aadhaar authentication (MVP)
- UPI payments (NPCI)
- PM-KISAN DBT compatibility
- PACS network for vendor discovery

---

### Slide 7: Demo Flow

**Title**: Live Demo - Mandya, Karnataka (10 farmers, Tomato Seeds)

**Content**:

**Step-by-Step Journey:**

1. **Authentication**: Farmer Ramesh logs in via Aadhaar
2. **Voice Input**: Speaks in Kannada - "Nange 5kg tomato seeds bekku"
3. **AI Clustering**: System finds 9 other farmers → 50kg bulk order
4. **Vendor Matching**: Shows top 3 vendors (AI-ranked)
   - XYZ Seeds: ₹4200, 4.5★, 15km, 3 days ✅
5. **Payment**: Each farmer pays ₹420 via UPI
6. **Fulfillment**: Vendor ships, updates status in real-time
7. **Delivery**: Farmers confirm receipt
8. **Feedback**: Ramesh rates vendor 5★

**Impact**: Saved ₹3000 collectively, reduced 45kg CO2 emissions

---

### Slide 8: Competitive Differentiation

**Title**: Why AgriSetu Stands Out

**Content**:

| Feature | AgriSetu | Existing Platforms |
|---------|----------|-------------------|
| **Vendor Discovery** | Govt-verified | Private marketplace |
| **Payment** | UPI + Future KCC/DBT | Private wallets |
| **Language** | Voice-first, 10+ languages | Text-based |
| **Onboarding** | Aadhaar eKYC | Manual registration |
| **Collectivization** | AI-driven clusters | Manual FPO formation |
| **Sustainability** | Core metric | Secondary concern |

**Unique Moat:** Government partnership + Voice-first AI + Sustainability-first design

---

### Slide 9: Pilot Plan & Roadmap

**Title**: Implementation Strategy

**Content**:

**Phase 1: MVP (3 months)**
- Pilot in Mandya district, Karnataka
- Target: 500 farmers, 3 input types (seeds, fertilizer, pesticide)
- Languages: Kannada, Hindi, Tamil
- Platform: Android app + Web dashboard

**Phase 2: Scale (6 months)**
- Expand to 5 districts (Karnataka, Tamil Nadu)
- Add 7 more languages
- Integrate KCC credit payments
- DBT subsidy auto-application

**Phase 3: National Rollout (12 months)**
- AgriStack full integration
- 22 language support
- Advisory services (weather, pest alerts)
- 100,000+ farmers across 10 states

---

### Slide 10: Impact Metrics & Success Criteria

**Title**: Measuring Success

**Content**:

**MVP Targets (6 months):**
- ✅ 10,000+ farmers onboarded
- ✅ 10-25% average cost reduction
- ✅ 80%+ vendor fulfillment success rate
- ✅ 20%+ reduction in input wastage
- ✅ 40%+ reduction in logistics emissions
- ✅ 4.0+ average vendor rating

**Long-term Vision (3 years):**
- 1M+ farmers empowered
- ₹500 crore+ collective savings
- 50,000 tons CO2 emissions prevented
- Integration with NABARD credit programs

---

### Slide 11: Team & Expertise

**Title**: Our Team

**Content**:

[Add team member details here]

**Roles:**
- **AI/ML Engineer**: Voice processing, clustering algorithms
- **Full-Stack Developer**: Mobile app + backend APIs
- **Frontend Developer**: Vendor dashboard
- **DevOps Engineer**: Cloud deployment, CI/CD
- **Product Manager**: User research, government liaison

**Relevant Experience:**
- [Prior work in agtech / rural tech / AI]
- [Understanding of farmer pain points]
- [Government policy knowledge]

---

### Slide 12: Ask & Support Needed

**Title**: Partnership Opportunities

**Content**:

**What We Need:**
1. **Government Support**:
   - Access to verified vendor database
   - Pilot partnership with Karnataka Agriculture Dept.
   - UIDAI Aadhaar API production access

2. **Technical Support**:
   - AWS credits for cloud infrastructure
   - BharatGPT API partnership
   - UPI gateway fee waiver for pilot

3. **Field Support**:
   - Partnership with Kisan Seva Kendras
   - Local extension officer training

**What We Offer:**
- Measurable impact on rural sustainability
- Replicable model for other states
- Open-source platform (post-MVP)

---

### Slide 13: Conclusion

**Title**: AgriSetu - Impact Summary

**Content**:

**This is AI for Rural Sustainability:**
- 🤖 **AI-Powered**: Voice processing, demand clustering, vendor matching
- 🌾 **Rural-First**: Voice interface, multilingual, low-literacy friendly
- ♻️ **Sustainable**: 20-30% waste reduction, 40-50% emissions cut

**Government-Aligned:**
- AgriStack compliant
- NABARD aligned
- Leverages Aadhaar, UPI, PM-KISAN DBT

**Scalable & Measurable:**
- Clear path from pilot → national rollout
- Quantifiable impact (economic + environmental + social)

**"Powered by farmers, verified by government, built for impact."**

---

### Slide 14: Contact & Demo

**Title**: Let's Build Together

**Content**:

**Live Demo**: [Include link to demo video or app prototype]

**Contact**:
- **Email**: [your.email@example.com]
- **GitHub**: [github.com/yourrepo]
- **Website**: [agrisetu.example.com]

**QR Code**: [Generate QR code linking to demo or pitch deck]

**Thank You!**

---

## Design Guidelines for Slides

**Color Scheme:**
- Primary: Green (#2E7D32) - represents agriculture
- Secondary: Orange (#FF6F00) - represents energy/innovation
- Accent: Blue (#1976D2) - represents trust/technology

**Fonts:**
- Headings: Montserrat Bold
- Body: Open Sans Regular

**Imagery:**
- Use illustrations of farmers using smartphones
- Include icons for sustainability (recycling, CO2, trees)
- Show actual app screenshots for demo flow slides
- Include charts/graphs for impact metrics

**Layout:**
- Keep bullet points concise (max 6 per slide)
- Use large fonts (min 24pt for body text)
- Include relevant icons/visuals for each point
- Maintain consistent spacing and alignment

---

**Instructions for Updating PowerPoint:**

1. Open "Idea Submission _ AWS AI for Bharat Hackathon (1).pptx"
2. Replace/update each slide with the content provided above
3. Add relevant images, charts, and icons
4. Ensure consistent branding (color scheme, fonts)
5. Add transitions (simple fade) between slides
6. Export as PDF for submission backup
7. Test presentation flow (should be 10-12 minutes)

---

**Additional Assets Needed:**
- AgriSetu logo (create using Canva or similar)
- App screenshots (mockups using Figma)
- Demo video (2-3 minutes showing voice input → payment → delivery)
- Impact metrics charts (create using Chart.js or Google Sheets)
