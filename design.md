# AgriSetu - Design Specification

## Document Information
- **Project**: AgriSetu - AI-Driven Collective Input Procurement Platform
- **Version**: 1.0
- **Last Updated**: January 24, 2026
- **Purpose**: System Architecture, UI/UX Design, and Technical Design

---

## 1. System Architecture

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│  Farmer Mobile App          │      Vendor Web Dashboard         │
│  (React Native)             │      (React + Next.js)            │
│  - Voice Interface          │      - Request Management         │
│  - UPI Payment              │      - Quote Submission           │
│  - Order Tracking           │      - Shipment Updates           │
└──────────────┬──────────────┴────────────────┬──────────────────┘
               │                               │
               └───────────────┬───────────────┘
                               │
                   ┌───────────▼───────────┐
                   │    API GATEWAY        │
                   │   (Load Balancer)     │
                   │   - Rate Limiting     │
                   │   - Authentication    │
                   └───────────┬───────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       │                       │                       │
┌──────▼──────┐       ┌───────▼────────┐      ┌──────▼──────┐
│   Auth      │       │   Core API     │      │   Payment   │
│  Service    │       │   Service      │      │   Service   │
│             │       │                │      │             │
│ - Aadhaar   │       │ - Clustering   │      │ - UPI       │
│ - JWT       │       │ - Matching     │      │ - Escrow    │
│ - RBAC      │       │ - Orders       │      │ - Refunds   │
└──────┬──────┘       └───────┬────────┘      └──────┬──────┘
       │                      │                       │
       └──────────────────────┼───────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
       ┌──────▼──────┐ ┌─────▼──────┐ ┌─────▼─────┐
       │  Notification│ │  Analytics │ │   AI/ML   │
       │   Service    │ │  Service   │ │  Service  │
       │              │ │            │ │           │
       │ - SMS        │ │ - Metrics  │ │ - Voice   │
       │ - WhatsApp   │ │ - Reports  │ │ - NLP     │
       │ - Push       │ │ - Logs     │ │ - Cluster │
       └──────┬───────┘ └─────┬──────┘ └─────┬─────┘
              │               │               │
              └───────────────┼───────────────┘
                              │
              ┌───────────────▼───────────────┐
              │        DATA LAYER              │
              ├────────────────────────────────┤
              │  PostgreSQL   │   Redis        │
              │  (Primary DB) │   (Cache)      │
              │               │                │
              │  - Users      │   - Sessions   │
              │  - Orders     │   - Real-time  │
              │  - Ratings    │   - Queue      │
              └───────────────┴────────────────┘
                              │
              ┌───────────────▼───────────────┐
              │    EXTERNAL INTEGRATIONS       │
              ├────────────────────────────────┤
              │ UIDAI     BharatGPT  ElevenLabs│
              │ (Aadhaar) (NLP)      (TTS)     │
              │                                │
              │ Razorpay  Twilio     WhatsApp  │
              │ (UPI)     (SMS)      (Notify)  │
              └────────────────────────────────┘
```

**Note on AgriStack:**  
MVP integrates directly with UIDAI Aadhaar for authentication. Full AgriStack integration (Farmer Registry, Land Records, Consent Layer) planned for Phase 2 post-pilot validation.

### 1.2 Microservices Architecture

#### Service Breakdown

**1. Auth Service** (Port 8001)
- Aadhaar eKYC integration
- JWT token generation & validation
- Role-based access control
- Session management

**2. Core API Service** (Port 8002)
- Farmer request management
- Demand clustering engine
- Vendor matching algorithm
- Order lifecycle management

**3. Payment Service** (Port 8003)
- UPI payment gateway integration
- Escrow account management
- Payment tracking & reconciliation
- Refund processing

**4. Notification Service** (Port 8004)
- SMS via Twilio/MSG91
- WhatsApp Business API
- Push notifications (FCM)
- Email (future)

**5. Analytics Service** (Port 8005)
- Real-time dashboards
- Impact metrics (savings, CO2, waste)
- Admin reporting
- Audit logs

**6. AI/ML Service** (Port 8006)
- Voice-to-Text (Web Speech API/Deepgram)
- Text-to-Voice (ElevenLabs)
- NLP (BharatGPT)
- Clustering algorithms (K-means, DBSCAN)

---

## 2. Database Design

### 2.1 Entity Relationship Diagram

```
┌─────────────────┐         ┌─────────────────┐
│     Farmer      │         │     Vendor      │
├─────────────────┤         ├─────────────────┤
│ id (PK)         │         │ id (PK)         │
│ aadhaar_hash    │         │ email           │
│ name            │         │ password_hash   │
│ phone           │         │ name            │
│ language        │         │ phone           │
│ location_lat    │         │ address         │
│ location_lng    │         │ warehouse_lat   │
│ bank_account    │         │ warehouse_lng   │
│ created_at      │         │ certifications  │
│ updated_at      │         │ rating_avg      │
└────────┬────────┘         │ verified        │
         │                  │ created_at      │
         │                  └────────┬────────┘
         │                           │
         │                           │
         │        ┌─────────────────┐│
         │        │  FarmerRequest  ││
         │        ├─────────────────┤│
         │        │ id (PK)         ││
         └────────┤ farmer_id (FK)  ││
                  │ crop_type       ││
                  │ input_type      ││
                  │ quantity        ││
                  │ unit            ││
                  │ preferred_date  ││
                  │ cluster_id (FK) ││
                  │ status          ││
                  │ created_at      ││
                  └────────┬────────┘│
                           │         │
                           │         │
              ┌────────────▼─────────▼────┐
              │       Cluster             │
              ├───────────────────────────┤
              │ id (PK)                   │
              │ crop_type                 │
              │ input_type                │
              │ total_quantity            │
              │ centroid_lat              │
              │ centroid_lng              │
              │ status                    │
              │ created_at                │
              │ expires_at                │
              └────────────┬──────────────┘
                           │
                           │
              ┌────────────▼──────────────┐
              │    VendorQuote            │
              ├───────────────────────────┤
              │ id (PK)                   │
              │ cluster_id (FK)           │
              │ vendor_id (FK)            │
              │ product_name              │
              │ product_cost              │
              │ delivery_cost             │
              │ total_cost                │
              │ delivery_days             │
              │ ai_score                  │
              │ status                    │
              │ created_at                │
              └────────────┬──────────────┘
                           │
                           │
              ┌────────────▼──────────────┐
              │        Order              │
              ├───────────────────────────┤
              │ id (PK)                   │
              │ cluster_id (FK)           │
              │ vendor_quote_id (FK)      │
              │ total_amount              │
              │ payment_status            │
              │ shipment_status           │
              │ delivery_date             │
              │ created_at                │
              │ updated_at                │
              └────────────┬──────────────┘
                           │
                ┌──────────┴──────────┐
                │                     │
    ┌───────────▼──────────┐  ┌──────▼──────────┐
    │   Payment            │  │  VendorRating   │
    ├──────────────────────┤  ├─────────────────┤
    │ id (PK)              │  │ id (PK)         │
    │ order_id (FK)        │  │ order_id (FK)   │
    │ farmer_id (FK)       │  │ farmer_id (FK)  │
    │ amount               │  │ vendor_id (FK)  │
    │ upi_transaction_id   │  │ quality_rating  │
    │ status               │  │ delivery_rating │
    │ paid_at              │  │ authenticity_rt │
    │ created_at           │  │ feedback_text   │
    └──────────────────────┘  │ created_at      │
                              └─────────────────┘
```

### 2.2 Database Schema

#### Farmers Table
```sql
CREATE TABLE farmers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aadhaar_hash VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    language VARCHAR(10) DEFAULT 'hi',
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    bank_account_last4 VARCHAR(4),
    total_savings DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_farmers_phone ON farmers(phone);
CREATE INDEX idx_farmers_location ON farmers(location_lat, location_lng);
```

#### Vendors Table
```sql
CREATE TABLE vendors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(150) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address TEXT,
    warehouse_lat DECIMAL(10, 8),
    warehouse_lng DECIMAL(11, 8),
    certifications JSONB,
    rating_avg DECIMAL(3, 2) DEFAULT 3.0,
    rating_count INT DEFAULT 0,
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_vendors_location ON vendors(warehouse_lat, warehouse_lng);
CREATE INDEX idx_vendors_verified ON vendors(verified);
```

#### Farmer Requests Table
```sql
CREATE TABLE farmer_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farmer_id UUID REFERENCES farmers(id),
    crop_type VARCHAR(50) NOT NULL,
    input_type VARCHAR(50) NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    preferred_date DATE,
    cluster_id UUID REFERENCES clusters(id),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_requests_farmer ON farmer_requests(farmer_id);
CREATE INDEX idx_requests_cluster ON farmer_requests(cluster_id);
CREATE INDEX idx_requests_status ON farmer_requests(status);
```

#### Clusters Table
```sql
CREATE TABLE clusters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crop_type VARCHAR(50) NOT NULL,
    input_type VARCHAR(50) NOT NULL,
    total_quantity DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    farmer_count INT DEFAULT 0,
    centroid_lat DECIMAL(10, 8),
    centroid_lng DECIMAL(11, 8),
    status VARCHAR(20) DEFAULT 'forming',
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP
);

CREATE INDEX idx_clusters_status ON clusters(status);
CREATE INDEX idx_clusters_location ON clusters(centroid_lat, centroid_lng);
```

#### Vendor Quotes Table
```sql
CREATE TABLE vendor_quotes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cluster_id UUID REFERENCES clusters(id),
    vendor_id UUID REFERENCES vendors(id),
    product_name VARCHAR(150) NOT NULL,
    product_cost DECIMAL(10, 2) NOT NULL,
    delivery_cost DECIMAL(10, 2) NOT NULL,
    total_cost DECIMAL(10, 2) NOT NULL,
    delivery_days INT NOT NULL,
    ai_score DECIMAL(3, 2),
    status VARCHAR(20) DEFAULT 'submitted',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_quotes_cluster ON vendor_quotes(cluster_id);
CREATE INDEX idx_quotes_vendor ON vendor_quotes(vendor_id);
CREATE INDEX idx_quotes_score ON vendor_quotes(ai_score DESC);
```

#### Orders Table
```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cluster_id UUID REFERENCES clusters(id),
    vendor_quote_id UUID REFERENCES vendor_quotes(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'pending',
    shipment_status VARCHAR(30) DEFAULT 'awaiting_payment',
    tracking_number VARCHAR(100),
    delivery_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_orders_cluster ON orders(cluster_id);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);
CREATE INDEX idx_orders_shipment_status ON orders(shipment_status);
```

#### Payments Table
```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    farmer_id UUID REFERENCES farmers(id),
    amount DECIMAL(10, 2) NOT NULL,
    upi_transaction_id VARCHAR(100) UNIQUE,
    status VARCHAR(20) DEFAULT 'pending',
    paid_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_payments_farmer ON payments(farmer_id);
CREATE INDEX idx_payments_status ON payments(status);
```

#### Vendor Ratings Table
```sql
CREATE TABLE vendor_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    farmer_id UUID REFERENCES farmers(id),
    vendor_id UUID REFERENCES vendors(id),
    quality_rating INT CHECK (quality_rating BETWEEN 1 AND 5),
    delivery_rating INT CHECK (delivery_rating BETWEEN 1 AND 5),
    authenticity_rating INT CHECK (authenticity_rating BETWEEN 1 AND 5),
    feedback_text TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_ratings_vendor ON vendor_ratings(vendor_id);
CREATE INDEX idx_ratings_farmer ON vendor_ratings(farmer_id);
```

---

## 3. API Design

### 3.1 REST API Endpoints

#### Authentication APIs

**POST** `/api/v1/auth/aadhaar/verify`
```json
Request:
{
  "aadhaar_number": "1234 5678 9012",
  "otp": "123456"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "name": "Ramesh Kumar",
    "phone": "+919876543210",
    "language": "kn"
  }
}
```

#### Farmer Request APIs

**POST** `/api/v1/requests`
```json
Request:
{
  "voice_audio": "base64_encoded_audio",
  "language": "kn"
}

Response:
{
  "success": true,
  "parsed_data": {
    "crop_type": "tomato",
    "input_type": "seeds",
    "quantity": 5,
    "unit": "kg"
  },
  "request_id": "uuid"
}
```

**GET** `/api/v1/requests/{request_id}/cluster`
```json
Response:
{
  "cluster_id": "uuid",
  "farmer_count": 10,
  "total_quantity": 50,
  "unit": "kg",
  "status": "ready_for_quotes",
  "potential_savings": 3000
}
```

#### Vendor Quote APIs

**GET** `/api/v1/vendors/clusters?status=open`
```json
Response:
{
  "clusters": [
    {
      "id": "uuid",
      "crop_type": "tomato",
      "input_type": "seeds",
      "total_quantity": 50,
      "unit": "kg",
      "location": "Mandya, Karnataka",
      "distance_km": 15,
      "preferred_date": "2026-02-01"
    }
  ]
}
```

**POST** `/api/v1/vendors/quotes`
```json
Request:
{
  "cluster_id": "uuid",
  "product_name": "Hybrid Tomato Seeds - Brand XYZ",
  "product_cost": 80,
  "delivery_cost": 200,
  "delivery_days": 3
}

Response:
{
  "success": true,
  "quote_id": "uuid",
  "total_cost": 4200,
  "ai_score": 0.87
}
```

#### Payment APIs

**POST** `/api/v1/payments/initiate`
```json
Request:
{
  "order_id": "uuid",
  "farmer_id": "uuid"
}

Response:
{
  "success": true,
  "payment_id": "uuid",
  "amount": 420,
  "upi_qr_code": "upi://pay?pa=agrisetu@paytm&pn=AgriSetu&am=420&tr=PAY123",
  "timeout_at": "2026-01-25T18:00:00Z"
}
```

**POST** `/api/v1/payments/verify`
```json
Request:
{
  "payment_id": "uuid",
  "upi_transaction_id": "UPI123456789"
}

Response:
{
  "success": true,
  "status": "confirmed",
  "order_payment_progress": {
    "paid_farmers": 9,
    "total_farmers": 10
  }
}
```

#### Order Tracking APIs

**GET** `/api/v1/orders/{order_id}/status`
```json
Response:
{
  "order_id": "uuid",
  "shipment_status": "shipped",
  "tracking_number": "TRK123456",
  "estimated_delivery": "2026-01-27",
  "timeline": [
    {"status": "order_confirmed", "timestamp": "2026-01-24T10:00:00Z"},
    {"status": "packed", "timestamp": "2026-01-24T15:00:00Z"},
    {"status": "shipped", "timestamp": "2026-01-25T09:00:00Z"}
  ]
}
```

#### Rating APIs

**POST** `/api/v1/ratings`
```json
Request:
{
  "order_id": "uuid",
  "quality_rating": 5,
  "delivery_rating": 5,
  "authenticity_rating": 5,
  "feedback_text": "ಒಳ್ಳೆಯ ಗುಣಮಟ್ಟ, ವೇಗದ ತಲುಪಿಕೆ"
}

Response:
{
  "success": true,
  "vendor_new_rating": 4.52
}
```

---

## 4. AI/ML Algorithm Design

### 4.1 Demand Clustering Algorithm

**Algorithm**: DBSCAN (Density-Based Spatial Clustering)

**Inputs**:
- Farmer locations (lat, lng)
- Crop type
- Input type
- Preferred delivery date

**Parameters**:
- `epsilon` = 50km (maximum distance between farmers in same cluster)
- `min_samples` = 5 (minimum farmers per cluster)

**Steps**:
1. Filter requests by crop type and input type
2. Group requests within ±7 days of preferred date
3. Apply DBSCAN on geographic coordinates
4. Create cluster with centroid calculation
5. Assign farmers to clusters

**Output**:
- Cluster ID
- Farmer count
- Total quantity
- Centroid (lat, lng)

### 4.2 Vendor Matching Algorithm

**Algorithm**: Weighted Scoring

**Inputs**:
- Cluster details (location, quantity, input type)
- Vendor quotes (price, delivery timeline)
- Vendor reputation (ratings, delivery success rate)

**Scoring Formula**:
```python
def calculate_vendor_score(vendor, cluster):
    # 1. Geographic Proximity Score (30%)
    distance_km = calculate_distance(vendor.location, cluster.centroid)
    if distance_km <= 50:
        proximity_score = 1.0
    elif distance_km <= 100:
        proximity_score = 0.7
    elif distance_km <= 200:
        proximity_score = 0.4
    else:
        proximity_score = 0.1
    
    # 2. Pricing Score (35%)
    market_avg = get_market_average(cluster.input_type)
    price_diff_pct = ((vendor.total_cost - market_avg) / market_avg) * 100
    if price_diff_pct <= 0:
        price_score = 1.0
    elif price_diff_pct <= 10:
        price_score = 0.8
    elif price_diff_pct <= 15:
        price_score = 0.5
    else:
        price_score = 0.0
    
    # 3. Reputation Score (20%)
    reputation_score = (
        vendor.quality_rating / 5 * 0.4 +
        vendor.delivery_success_rate * 0.4 +
        vendor.authenticity_rating / 5 * 0.2
    )
    
    # 4. Delivery Timeline Score (10%)
    date_diff = abs((vendor.delivery_date - cluster.preferred_date).days)
    if date_diff == 0:
        delivery_score = 1.0
    elif date_diff <= 3:
        delivery_score = 0.7
    else:
        delivery_score = 0.3
    
    # 5. Credit Terms Score (5%) - Future
    credit_score = 1.0 if vendor.payment_mode == 'UPI' else 0.8
    
    # Weighted Total Score
    total_score = (
        proximity_score * 0.30 +
        price_score * 0.35 +
        reputation_score * 0.20 +
        delivery_score * 0.10 +
        credit_score * 0.05
    )
    
    return total_score
```

**Output**:
- Top 3 vendors ranked by total score
- Transparent score breakdown for farmers

---

## 5. UI/UX Design

### 5.1 Farmer Mobile App - Screen Flow

```
┌──────────────────────┐
│   Splash Screen      │
│   (AgriSetu Logo)    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Aadhaar Login       │
│  - Enter Aadhaar #   │
│  - OTP Verification  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Home Screen       │
│  - Voice Button      │
│  - Active Orders     │
│  - Savings Dashboard │
└──────────┬───────────┘
           │
           ├──────────►┌──────────────────────┐
           │           │  Voice Input Screen  │
           │           │  - Mic Animation     │
           │           │  - Transcription     │
           │           │  - Confirm Button    │
           │           └──────────┬───────────┘
           │                      │
           │                      ▼
           │           ┌──────────────────────┐
           │           │  Cluster View        │
           │           │  - Farmer Count      │
           │           │  - Savings Estimate  │
           │           │  - Wait for Quotes   │
           │           └──────────┬───────────┘
           │                      │
           │                      ▼
           │           ┌──────────────────────┐
           │           │  Vendor Comparison   │
           │           │  - Top 3 Vendors     │
           │           │  - Price Breakdown   │
           │           │  - Select Vendor     │
           │           └──────────┬───────────┘
           │                      │
           │                      ▼
           │           ┌──────────────────────┐
           │           │  Payment Screen      │
           │           │  - Amount Due        │
           │           │  - UPI QR Code       │
           │           │  - Payment Status    │
           │           └──────────┬───────────┘
           │                      │
           ◄──────────────────────┘
           │
           ├──────────►┌──────────────────────┐
           │           │  Order Tracking      │
           │           │  - Status Timeline   │
           │           │  - Delivery ETA      │
           │           │  - Track Shipment    │
           │           └──────────────────────┘
           │
           └──────────►┌──────────────────────┐
                       │  Rating Screen       │
                       │  - Star Ratings      │
                       │  - Voice Feedback    │
                       │  - Submit Review     │
                       └──────────────────────┘
```

### 5.2 Farmer App - Key Screens (Wireframes)

#### Home Screen
```
┌────────────────────────────────┐
│  ☰  AgriSetu         [Bell]    │
├────────────────────────────────┤
│                                │
│   👨‍🌾 Welcome, Ramesh!          │
│                                │
│   ┌──────────────────────┐    │
│   │  🎤  Voice Request   │    │
│   │  Tap to speak        │    │
│   └──────────────────────┘    │
│                                │
│   Active Orders:               │
│   ┌────────────────────┐       │
│   │ 🌱 Tomato Seeds    │       │
│   │ Status: Shipped    │       │
│   │ ETA: 2 days        │       │
│   └────────────────────┘       │
│                                │
│   💰 Total Savings: ₹8,450     │
│                                │
└────────────────────────────────┘
```

#### Voice Input Screen
```
┌────────────────────────────────┐
│  ← AgriSetu                    │
├────────────────────────────────┤
│                                │
│   Speak in your language       │
│   (ಕನ್ನಡ, हिंदी, தமிழ்...)   │
│                                │
│        ┌─────────┐             │
│        │  🎤 ~~~  │ Recording  │
│        └─────────┘             │
│                                │
│   Transcription:                │
│   "Nange 5kg tomato seeds      │
│    bekku"                      │
│                                │
│   ✓ Crop: Tomato               │
│   ✓ Input: Seeds               │
│   ✓ Quantity: 5kg              │
│                                │
│   [Edit]  [Confirm]            │
└────────────────────────────────┘
```

#### Vendor Comparison Screen
```
┌────────────────────────────────┐
│  ← Select Vendor               │
├────────────────────────────────┤
│                                │
│   3 vendors available:         │
│                                │
│   ┌────────────────────────┐  │
│   │ XYZ Seeds Ltd  ⭐4.5    │  │
│   │ ₹4200 • 15km • 3 days  │  │
│   │ [View Details]         │  │
│   └────────────────────────┘  │
│                                │
│   ┌────────────────────────┐  │
│   │ ABC Agro      ⭐4.2     │  │
│   │ ₹4500 • 30km • 4 days  │  │
│   │ [View Details]         │  │
│   └────────────────────────┘  │
│                                │
│   ┌────────────────────────┐  │
│   │ PQR Seeds     ⭐4.8     │  │
│   │ ₹4800 • 10km • 2 days  │  │
│   │ [View Details]         │  │
│   └────────────────────────┘  │
│                                │
│        [Select Best Match]     │
└────────────────────────────────┘
```

### 5.3 Vendor Dashboard - Screen Flow

```
┌──────────────────────┐
│  Login (Email/Pass)  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Dashboard Home      │
│  - Metrics Overview  │
│  - Quick Actions     │
└──────────┬───────────┘
           │
           ├──────────►┌──────────────────────┐
           │           │  Request Inbox       │
           │           │  - Filter/Search     │
           │           │  - View Requests     │
           │           └──────────┬───────────┘
           │                      │
           │                      ▼
           │           ┌──────────────────────┐
           │           │  Submit Quote        │
           │           │  - Price Input       │
           │           │  - Delivery Timeline │
           │           │  - Upload Docs       │
           │           └──────────────────────┘
           │
           ├──────────►┌──────────────────────┐
           │           │  Order Management    │
           │           │  - Accepted Orders   │
           │           │  - Payment Status    │
           │           └──────────────────────┘
           │
           └──────────►┌──────────────────────┐
                       │  Shipment Updates    │
                       │  - Status Dropdown   │
                       │  - Tracking Input    │
                       │  - Upload Proof      │
                       └──────────────────────┘
```

### 5.4 Vendor Dashboard - Key Screens

#### Request Inbox
```
┌───────────────────────────────────────────────────┐
│  AgriSetu Vendor Dashboard          [Profile ▼]  │
├───────────────────────────────────────────────────┤
│  [Inbox] [Orders] [Shipments] [Analytics]        │
├───────────────────────────────────────────────────┤
│                                                   │
│  Purchase Requests                                │
│  ┌────────┬──────────┬────────┬───────┬────────┐ │
│  │Region  │Crop Type │Input   │Qty    │Action  │ │
│  ├────────┼──────────┼────────┼───────┼────────┤ │
│  │Mandya  │Tomato    │Seeds   │50kg   │[Quote] │ │
│  │Mysore  │Rice      │Fert.   │200kg  │[Quote] │ │
│  │Hassan  │Cotton    │Pest.   │100L   │[Quote] │ │
│  └────────┴──────────┴────────┴───────┴────────┘ │
│                                                   │
│  [Filter by Region ▼] [Filter by Input ▼]        │
└───────────────────────────────────────────────────┘
```

#### Submit Quote Form
```
┌───────────────────────────────────────────────────┐
│  ← Back to Requests                               │
├───────────────────────────────────────────────────┤
│                                                   │
│  Submit Quote for Tomato Seeds (50kg)             │
│  Location: Mandya, Karnataka (15km away)          │
│                                                   │
│  Product Name:                                    │
│  [Hybrid Tomato Seeds - Brand XYZ          ]     │
│                                                   │
│  Product Cost (per unit):                         │
│  ₹[80] /kg                                        │
│                                                   │
│  Delivery Charges:                                │
│  ₹[200]                                           │
│                                                   │
│  Total Cost: ₹4200                                │
│  Market Avg: ₹4500 (✓ 7% below average)          │
│                                                   │
│  Delivery Timeline:                               │
│  [3] days                                         │
│                                                   │
│  Certifications: [Upload ISI/FSSAI Certificate]  │
│                                                   │
│  [Cancel]              [Submit Quote]             │
└───────────────────────────────────────────────────┘
```

---

## 6. Security Design

### 6.1 Authentication Flow

```
Farmer App                Auth Service             UIDAI
    │                          │                      │
    ├──Aadhaar + OTP──────────►│                      │
    │                          ├──Verify Aadhaar────►│
    │                          │◄─────Valid───────────┤
    │◄─────JWT Token───────────┤                      │
    │                          │                      │
    ├──API Request + Token────►│                      │
    │                          ├──Validate Token      │
    │                          │   (Check expiry,     │
    │                          │    signature)        │
    │◄─────Response────────────┤                      │
```

### 6.2 Data Encryption

- **In Transit**: TLS 1.3 for all API communication
- **At Rest**: AES-256 encryption for:
  - Aadhaar hash (SHA-256)
  - Bank account details
  - Payment transactions
- **Secrets Management**: AWS Secrets Manager / GCP Secret Manager

### 6.3 Access Control (RBAC)

| Role | Permissions |
|------|-------------|
| **Farmer** | - Create requests<br>- View own orders<br>- Make payments<br>- Submit ratings |
| **Vendor** | - View requests<br>- Submit quotes<br>- Update shipments<br>- View own orders |
| **Admin** | - View all data<br>- Monitor vendors<br>- Generate reports<br>- Manage users |

---

## 7. Deployment Architecture

### 7.1 Infrastructure (AWS)

```
              [CloudFront CDN]
                     │
              ┌──────▼──────┐
              │  Route 53   │
              │   (DNS)     │
              └──────┬──────┘
                     │
        ┌────────────┴────────────┐
        │                         │
  ┌─────▼─────┐           ┌──────▼──────┐
  │ S3 Bucket │           │   ALB       │
  │ (Static)  │           │(Load Balancer)
  └───────────┘           └──────┬──────┘
                                 │
                  ┌──────────────┼──────────────┐
                  │              │              │
           ┌──────▼──────┐┌─────▼──────┐┌──────▼──────┐
           │   ECS       ││   ECS      ││   ECS       │
           │ (Auth API)  ││(Core API)  ││(Payment API)│
           └──────┬──────┘└─────┬──────┘└──────┬──────┘
                  │              │              │
                  └──────────────┼──────────────┘
                                 │
                      ┌──────────▼──────────┐
                      │   RDS PostgreSQL    │
                      │   (Multi-AZ)        │
                      └─────────────────────┘
                                 │
                      ┌──────────▼──────────┐
                      │  ElastiCache Redis  │
                      └─────────────────────┘
```

### 7.2 Environment Configuration

| Environment | Purpose | Infrastructure |
|-------------|---------|----------------|
| **Development** | Local testing | Docker Compose |
| **Staging** | Pre-production testing | AWS (t3.medium) |
| **Production** | Live deployment | AWS (t3.large, auto-scaling) |

---

## 8. Monitoring & Observability

### 8.1 Metrics to Track

**Application Metrics:**
- API response time (p50, p95, p99)
- Error rate (5xx, 4xx)
- Request throughput (req/s)

**Business Metrics:**
- Farmer registrations/day
- Orders placed/day
- Payment success rate
- Average cost savings per farmer

**Infrastructure Metrics:**
- CPU/Memory utilization
- Database connection pool
- Cache hit rate

### 8.2 Logging Strategy

- **Centralized Logging**: CloudWatch / ELK Stack
- **Log Levels**: DEBUG, INFO, WARN, ERROR
- **Structured Logging**: JSON format with correlation IDs

### 8.3 Alerting

- **Critical**: Payment failures, API downtime
- **Warning**: High error rate, slow response time
- **Info**: New farmer registrations, order milestones

---

## 9. Testing Strategy

### 9.1 Unit Testing
- Jest (Frontend)
- Pytest (Backend)
- Target: 80%+ code coverage

### 9.2 Integration Testing
- API endpoint testing with Postman/Newman
- Database transaction testing
- External API mocking

### 9.3 End-to-End Testing
- Cypress (Web dashboard)
- Detox (Mobile app)
- Test complete user journeys

### 9.4 Performance Testing
- Load testing with Apache JMeter (10,000 concurrent users)
- Stress testing for peak traffic scenarios

---

## 10. CI/CD Pipeline

```
[Git Push] → [GitHub Actions]
                  │
     ┌────────────┼────────────┐
     │            │            │
[Unit Tests] [Linting]  [Build]
     │            │            │
     └────────────┼────────────┘
                  │
             [Integration Tests]
                  │
          [Deploy to Staging]
                  │
          [E2E Tests on Staging]
                  │
        [Manual Approval]
                  │
          [Deploy to Production]
                  │
          [Post-Deploy Tests]
                  │
          [Monitor & Alert]
```

---

**Document Status**: ✅ Ready for Development  
**Next Steps**: 
1. Create project repositories
2. Setup development environment
3. Begin sprint planning
