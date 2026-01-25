# AgriSetu - Requirements Specification

## Document Information
- **Project**: AgriSetu - AI-Driven Collective Input Procurement Platform
- **Version**: 1.0
- **Last Updated**: January 24, 2026
- **Target**: Government-Authorized Hackathon on AI for Rural Sustainability

---

## 1. Business Requirements

### 1.1 Problem Statement
Enable small and marginal farmers (86% of Indian farmers) to access affordable agricultural inputs through AI-driven collective procurement, reducing costs by 10-25% while minimizing environmental waste by 20-30%.

### 1.2 Business Objectives
- **Primary**: Reduce agricultural input costs through bulk procurement
- **Secondary**: Minimize environmental impact (waste reduction, carbon emissions)
- **Tertiary**: Enable digital inclusion for low-literacy farmers via voice-first interface

### 1.3 Success Metrics
- **Economic**: 10-25% cost reduction for farmers
- **Environmental**: 20-30% reduction in input wastage, 40-50% reduction in logistics emissions
- **Social**: Onboard 10,000+ farmers in pilot phase (6 months)
- **Operational**: 80%+ vendor fulfillment success rate, <5% payment failure rate

### 1.4 Target Users
1. **Primary**: Small and marginal farmers (0.5-5 acres landholding)
2. **Secondary**: Government-verified agricultural input vendors
3. **Tertiary**: State agriculture departments (admin/monitoring)

---

## 2. Functional Requirements

### 2.1 Farmer Mobile App

#### FR-1: User Authentication
- **FR-1.1**: Aadhaar-based eKYC authentication via DigiLocker/UIDAI APIs
- **FR-1.2**: OTP verification for Aadhaar-linked mobile number
- **FR-1.3**: Prevent duplicate farmer registration using Aadhaar as unique ID
- **FR-1.4**: Link Aadhaar to bank account for UPI payments
- **FR-1.5**: Session management with JWT tokens (7-day expiry)

#### FR-2: Voice-First Interface
- **FR-2.1**: Multilingual voice input support (Hindi, Kannada, Tamil, Telugu, Bengali, Marathi, Gujarati, Punjabi, Odia, Malayalam)
- **FR-2.2**: Speech-to-Text conversion using Amazon Transcribe
- **FR-2.3**: Natural Language Processing via BharatGPT (deployed using Amazon Bedrock) to extract:
  - Crop type (e.g., Tomato, Wheat, Rice)
  - Input type (Seeds, Fertilizer, Pesticide, Equipment)
  - Quantity (kg/liters/units)
  - Preferred delivery date
- **FR-2.4**: Text-to-Speech confirmation via Amazon Polly
- **FR-2.5**: Fallback to text input if voice fails
- **FR-2.6**: Auto-detect user language from device settings

#### FR-3: Request Submission
- **FR-3.1**: Capture farmer input request via voice or text
- **FR-3.2**: Extract structured data from natural language
- **FR-3.3**: Show parsed data for farmer confirmation
- **FR-3.4**: Allow manual editing if extraction is incorrect
- **FR-3.5**: Store request with timestamp and location (GPS coordinates)

#### FR-4: Demand Clustering Visualization
- **FR-4.1**: Show real-time cluster formation (e.g., "You + 12 farmers in your area")
- **FR-4.2**: Display total aggregated quantity
- **FR-4.3**: Show estimated cost savings (% discount + absolute amount)
- **FR-4.4**: Display cluster status: Forming / Ready for Quotes / Quotes Received
- **FR-4.5**: Notify farmer when cluster reaches minimum threshold (5 farmers)

#### FR-5: Vendor Comparison
- **FR-5.1**: Display top 3 matched vendors with:
  - Vendor name and rating (1-5★)
  - Total price breakdown (product + delivery)
  - Distance from farmer location
  - Estimated delivery timeline
- **FR-5.2**: Show detailed vendor profile (certifications, past reviews)
- **FR-5.3**: Allow farmer to select preferred vendor or accept AI recommendation
- **FR-5.4**: Display price comparison chart (bar graph)

#### FR-6: UPI Payment
- **FR-6.1**: Generate individual payment amount for farmer's share
- **FR-6.2**: Display UPI QR code for payment
- **FR-6.3**: Support UPI ID-based payment
- **FR-6.4**: Integrate with Razorpay/PhonePe/Paytm UPI gateway
- **FR-6.5**: Collect payment in platform escrow account
- **FR-6.6**: Send payment confirmation via SMS and in-app notification
- **FR-6.7**: 24-hour payment timeout (request expires if not 100% paid)
- **FR-6.8**: Refund mechanism if cluster order fails

#### FR-7: Order Tracking
- **FR-7.1**: Display real-time order status:
  - Payment Pending
  - Payment Confirmed
  - Order Placed
  - Packed
  - Shipped
  - Out for Delivery
  - Delivered
- **FR-7.2**: Send push notifications on status changes
- **FR-7.3**: Display estimated delivery date
- **FR-7.4**: Show delivery location (collection point or doorstep)
- **FR-7.5**: Allow farmer to confirm delivery receipt

#### FR-8: Vendor Feedback
- **FR-8.1**: Prompt farmer to rate vendor after delivery (1-5★)
- **FR-8.2**: Rating criteria:
  - Product Quality (1-5★)
  - Delivery Timeliness (1-5★)
  - Product Authenticity (1-5★)
- **FR-8.3**: Allow text or voice feedback (optional)
- **FR-8.4**: Submit feedback within 48 hours of delivery
- **FR-8.5**: Update vendor reputation score in real-time

#### FR-9: Profile Management
- **FR-9.1**: Display farmer profile (name, Aadhaar, phone, location, landholding)
- **FR-9.2**: Show order history with status
- **FR-9.3**: Display total savings achieved
- **FR-9.4**: Show environmental impact (CO2 saved, waste reduced)
- **FR-9.5**: Language preference settings

---

### 2.2 Vendor Dashboard (Web)

#### FR-10: Vendor Authentication
- **FR-10.1**: Email/password-based login
- **FR-10.2**: Government verification badge for authorized vendors
- **FR-10.3**: Role-based access control (Vendor Admin / Vendor Staff)
- **FR-10.4**: Session timeout after 30 minutes of inactivity

#### FR-11: Request Inbox
- **FR-11.1**: Display all aggregated purchase requests in table format
- **FR-11.2**: Filter by:
  - Region (state/district/village)
  - Crop type
  - Input category (seeds/fertilizer/pesticide)
  - Request status (Open for Quotes / Quotes Submitted / Closed)
- **FR-11.3**: Sort by: Date, Quantity, Distance
- **FR-11.4**: Search by keyword
- **FR-11.5**: Show request details:
  - Number of farmers in cluster
  - Total quantity
  - Location (lat/lng + address)
  - Preferred delivery date

#### FR-12: Quote Submission
- **FR-12.1**: Allow vendor to submit quote for a request
- **FR-12.2**: Quote fields:
  - Product name and brand
  - Product cost per unit
  - Delivery charges
  - Total price
  - Delivery timeline (days)
  - Certifications (ISI/FSSAI/Agmark) - upload document
- **FR-12.3**: Show market average price as reference
- **FR-12.4**: Flag if quote >15% above market average
- **FR-12.5**: Allow quote editing until quote deadline
- **FR-12.6**: Auto-withdraw quote if vendor cannot fulfill

#### FR-13: Order Management
- **FR-13.1**: Display accepted quotes (vendor won the bid)
- **FR-13.2**: Show payment status:
  - Awaiting Payment (X/10 farmers paid)
  - Payment Confirmed
  - Payment Transferred to Vendor
- **FR-13.3**: Allow vendor to confirm order acceptance
- **FR-13.4**: Display batch orders for delivery optimization
- **FR-13.5**: Show delivery address and contact details

#### FR-14: Shipment Updates
- **FR-14.1**: Update order status dropdown:
  - Order Confirmed
  - Packed
  - Shipped
  - Out for Delivery
  - Delivered
- **FR-14.2**: Add tracking details (courier name, tracking ID)
- **FR-14.3**: Upload delivery proof (photo/signature)
- **FR-14.4**: Set delivery completion timestamp
- **FR-14.5**: Notify farmers automatically on status change

#### FR-15: Performance Metrics Dashboard
- **FR-15.1**: Display vendor rating (1-5★) with trend graph
- **FR-15.2**: Show delivery success rate (%)
- **FR-15.3**: Display repeat order percentage
- **FR-15.4**: Show total orders fulfilled (count + value)
- **FR-15.5**: Display average delivery time (days)
- **FR-15.6**: Show farmer feedback summary (recent reviews)

---

### 2.3 Backend Services

#### FR-16: Authentication Service
- **FR-16.1**: Integrate with UIDAI Aadhaar API for eKYC
- **FR-16.2**: Generate and validate JWT tokens
- **FR-16.3**: Implement role-based access control (Farmer/Vendor/Admin)
- **FR-16.4**: Session management with Redis
- **FR-16.5**: Password hashing with bcrypt (for vendor accounts)

#### FR-17: Demand Aggregation Engine
- **FR-17.1**: Cluster farmer requests using K-means or DBSCAN algorithm
- **FR-17.2**: Clustering parameters:
  - Geographic proximity (50km radius)
  - Crop type (exact match)
  - Input type (exact match)
  - Timing window (±7 days)
- **FR-17.3**: Minimum cluster size: 5 farmers
- **FR-17.4**: Maximum cluster size: 50 farmers
- **FR-17.5**: Recalculate clusters every 6 hours
- **FR-17.6**: Notify farmers when cluster reaches minimum threshold

#### FR-18: Vendor Matching Algorithm
- **FR-18.1**: Filter vendors by:
  - Input type match
  - Serviceable region (within 200km)
  - Minimum order quantity capability
- **FR-18.2**: Request quotes from 5-10 eligible vendors
- **FR-18.3**: Calculate weighted score:
  - Geographic Proximity: 30%
  - Pricing: 35%
  - Vendor Reputation: 20%
  - Delivery Timeline: 10%
  - Credit Terms: 5% (future)
- **FR-18.4**: Rank vendors by total score (0-1 scale)
- **FR-18.5**: Present top 3 vendors to farmers
- **FR-18.6**: Auto-select highest score vendor (with farmer override option)

#### FR-19: Payment Gateway Integration
- **FR-19.1**: Integrate with Razorpay/PhonePe/Paytm UPI APIs
- **FR-19.2**: Generate unique UPI payment request per farmer
- **FR-19.3**: Track payment status (Pending/Success/Failed)
- **FR-19.4**: Collect payments in platform escrow account
- **FR-19.5**: Disburse payment to vendor after 100% farmer payment + order confirmation
- **FR-19.6**: Handle refunds if order fails
- **FR-19.7**: Generate payment receipts

#### FR-20: Notification Service
- **FR-20.1**: Send SMS notifications via Twilio/MSG91
- **FR-20.2**: Send WhatsApp messages via WhatsApp Business API
- **FR-20.3**: Send in-app push notifications
- **FR-20.4**: Notification triggers:
  - Cluster formation complete
  - Quotes received
  - Payment request
  - Payment confirmation
  - Order status change
  - Delivery confirmation
  - Feedback request
- **FR-20.5**: Support multilingual notifications

#### FR-21: Feedback & Rating System
- **FR-21.1**: Store farmer ratings (quality, delivery, authenticity)
- **FR-21.2**: Calculate vendor reputation score:
  - Average rating across all criteria
  - Weighted by recency (recent ratings have higher weight)
- **FR-21.3**: Flag vendors with <3.0★ average for admin review
- **FR-21.4**: Display ratings on vendor profile
- **FR-21.5**: Allow farmers to edit ratings within 7 days

---

## 3. Non-Functional Requirements

### 3.1 Performance
- **NFR-1**: App load time <3 seconds on 4G network
- **NFR-2**: Voice-to-text conversion <5 seconds
- **NFR-3**: Vendor matching algorithm <10 seconds for 1000 farmers
- **NFR-4**: Payment confirmation <30 seconds
- **NFR-5**: Support 10,000 concurrent users (MVP phase)

### 3.2 Scalability
- **NFR-6**: Horizontal scaling for backend services
- **NFR-7**: Database sharding for 1M+ farmers
- **NFR-8**: CDN for app assets (images, audio)
- **NFR-9**: Auto-scaling based on traffic (AWS Fargate)

### 3.3 Security
- **NFR-10**: HTTPS encryption for all API calls
- **NFR-11**: Aadhaar data encryption at rest (AES-256)
- **NFR-12**: PCI-DSS compliance for payment handling
- **NFR-13**: Role-based access control (RBAC) for all endpoints
- **NFR-14**: SQL injection prevention (parameterized queries)
- **NFR-15**: XSS and CSRF protection
- **NFR-16**: Rate limiting (100 requests/minute per user)
- **NFR-17**: Audit logging for all transactions

### 3.4 Reliability
- **NFR-18**: 99.5% uptime SLA (MVP phase)
- **NFR-19**: Automated database backups (daily)
- **NFR-20**: Disaster recovery plan (RPO: 24 hours, RTO: 4 hours)
- **NFR-21**: Graceful degradation if external APIs fail (BharatGPT/Bedrock, Amazon Polly)

### 3.5 Usability
- **NFR-22**: Voice-first interface for low-literacy users
- **NFR-23**: Support for 10+ Indian languages
- **NFR-24**: Accessibility compliance (WCAG 2.1 Level AA)
- **NFR-25**: Offline mode for viewing past orders
- **NFR-26**: Simple 3-tap flow for core actions

### 3.6 Compliance
- **NFR-27**: AgriStack API compliance (design principles, not full integration in MVP)
- **NFR-27.1**: Data models compatible with AgriStack standards
- **NFR-27.2**: Farmer ID format supports future AgriStack migration
- **NFR-27.3**: Consent management aligns with AgriStack Data Exchange Layer
- **NFR-28**: UIDAI Aadhaar authentication guidelines
- **NFR-29**: RBI UPI payment regulations
- **NFR-30**: Data residency in India (IT Act 2000)
- **NFR-31**: Consent management (DPDPA 2023)

### 3.7 Maintainability
- **NFR-32**: Code coverage >80% (unit + integration tests)
- **NFR-33**: API documentation via Swagger/OpenAPI
- **NFR-34**: Centralized logging (CloudWatch/GCP Logging)
- **NFR-35**: Error tracking (Sentry)
- **NFR-36**: CI/CD pipeline (GitHub Actions)

---

## 4. Technical Constraints

### 4.1 Platform Constraints
- **TC-1**: Farmer app must support Android 8.0+ and iOS 13+
- **TC-2**: Vendor dashboard must support Chrome, Firefox, Safari (latest 2 versions)
- **TC-3**: Backend must be deployable on AWS Fargate

### 4.2 Integration Constraints
- **TC-4**: UIDAI Aadhaar API (Sandbox for MVP, Production post-approval)
- **TC-5**: Amazon Bedrock service quotas for BharatGPT
- **TC-6**: Amazon Polly quotas (standard vs neural engine limits)
- **TC-7**: UPI payment gateway (Razorpay: 2% transaction fee)

### 4.3 Data Constraints
- **TC-8**: Aadhaar data retention: Max 30 days (per UIDAI guidelines)
- **TC-9**: Payment data retention: 7 years (per RBI regulations)
- **TC-10**: Personal data anonymization for analytics

---

## 5. User Stories

### 5.1 Farmer User Stories

**US-1**: As a farmer, I want to authenticate using Aadhaar so that I can securely access the platform without remembering passwords.

**US-2**: As a low-literacy farmer, I want to speak my input request in my native language so that I can order without typing.

**US-3**: As a farmer, I want to see how many other farmers are ordering the same input so that I can trust the collective buying process.

**US-4**: As a farmer, I want to compare vendors transparently (price, rating, distance) so that I can choose the best option.

**US-5**: As a farmer, I want to pay via UPI so that I can make secure payments using my existing bank account.

**US-6**: As a farmer, I want to track my order in real-time so that I know when to expect delivery.

**US-7**: As a farmer, I want to rate vendors after delivery so that I can help other farmers make informed choices.

**US-8**: As a farmer, I want to see my total savings and environmental impact so that I feel motivated to continue using the platform.

### 5.2 Vendor User Stories

**US-9**: As a vendor, I want to view aggregated farmer requests in my region so that I can plan inventory.

**US-10**: As a vendor, I want to submit competitive quotes so that I can win bulk orders.

**US-11**: As a vendor, I want to receive payment confirmation before shipping so that I avoid payment risks.

**US-12**: As a vendor, I want to update shipment status so that farmers are informed about delivery progress.

**US-13**: As a vendor, I want to see my performance metrics (rating, delivery success) so that I can improve my service.

### 5.3 Admin User Stories

**US-14**: As an admin, I want to monitor vendor ratings so that I can flag low-performing vendors.

**US-15**: As an admin, I want to view sustainability metrics (waste reduced, CO2 saved) so that I can report impact to government stakeholders.

---

## 6. Acceptance Criteria

### 6.1 MVP Success Criteria
- [ ] Farmer app supports voice input in 3+ languages (Hindi, Kannada, Tamil)
- [ ] AI clustering groups farmers within 50km radius
- [ ] Vendor matching algorithm ranks vendors with weighted scoring
- [ ] UPI payment flow completes successfully for 95%+ transactions
- [ ] Order tracking shows real-time status updates
- [ ] Vendor feedback system updates ratings within 5 minutes
- [ ] Platform processes 100+ orders in pilot phase (Mandya district)
- [ ] 10%+ cost reduction demonstrated for pilot farmers

### 6.2 Sustainability Metrics
- [ ] 20%+ reduction in input wastage (vs. individual purchasing)
- [ ] 40%+ reduction in logistics emissions (consolidated delivery)
- [ ] Quality input usage improves crop yield by 5%+

---

## 7. Out of Scope (Post-MVP)

### 7.1 Future Government Integration (Not in MVP)

**AgriStack Integration:**
- Full AgriStack API integration for farmer registry
- Land records integration for crop-based clustering validation
- Consent management framework via AgriStack Data Exchange Layer
- Interoperability with other AgriStack-compliant services
- **Note**: MVP will use Aadhaar authentication as interim solution; full AgriStack integration planned for Phase 2 post-pilot validation

**Credit & Subsidy Systems:**
- Kisan Credit Card (KCC) payment integration
- DBT subsidy auto-application (fertilizer subsidies via PM-KISAN)
- PMFBY crop insurance linkage (Pradhan Mantri Fasal Bima Yojana)

**Other Post-MVP Features:**
- Advisory services (weather alerts, pest warnings, crop lifecycle monitoring)
- Blockchain-based supply chain traceability
- Output market linkage (sell crops via platform)
- Multilingual support for all 22 scheduled languages (MVP: 3-5 languages)
- iOS app (MVP: Android only)

---

## 8. Assumptions

- Government will provide verified vendor database for pilot
- Farmers have Aadhaar-linked bank accounts
- Farmers have smartphones with internet connectivity (4G)
- UPI payment gateway approval obtained for escrow model
- BharatGPT and Amazon Polly APIs are production-ready

---

## 9. Dependencies

- UIDAI Aadhaar API access (sandbox for MVP)
- AWS Account with access to Amazon Bedrock (BharatGPT models)
- Amazon Transcribe and Polly enabled
- Razorpay/PhonePe UPI gateway integration
- Government vendor database (CSV/API)
- Cloud hosting approval (AWS/GCP or MeghRaj)

---

## 10. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Amazon Bedrock/BharatGPT downtime | High | Fallback to Google Translate API + manual correction |
| Low farmer smartphone adoption | Medium | Partner with local Kisan Seva Kendras for assisted ordering |
| Vendor reluctance to join | High | Government mandate for vendors in pilot districts |
| UPI payment failures | Medium | Retry mechanism + SMS fallback for payment links |
| Aadhaar authentication errors | High | Allow mobile OTP as backup authentication |
| Data privacy concerns | Medium | Clear consent flow + data anonymization |

---

**Document Status**: ✅ Approved for MVP Development  
**Next Steps**: Create design.md and begin technical architecture planning
