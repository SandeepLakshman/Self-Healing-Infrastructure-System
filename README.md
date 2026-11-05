# ShopSphere — Premium Modern E-Commerce Platform

ShopSphere is a high-performance, production-style e-commerce web application engineered with **React (Vite)**, **Tailwind CSS**, and **Node.js/Express**. It delivers a clean shopping experience with catalog filtering, real-time search, interactive cart management, simulated checkout, and container-native architecture.

---

## 🌟 Key Features

1. **Intuitive Discovery & Home Experience**:
   - Promotional announcement bar with interactive discount voucher codes.
   - Dynamic Hero Banner with curated drops and responsive stats.
   - Interactive collection cards with smooth hover zoom effects.
   - Tabbed Featured & Trending product spotlights.
   - Verified customer review testimonials and newsletter subscription.

2. **Full-Featured Product Catalog**:
   - Multi-faceted filtering sidebar: Category filter, dynamic Price Range slider ($50 – $650), Minimum Rating filter (4★+), and In-Stock toggle.
   - Dynamic sorting: Featured, Most Popular, Highest Rated, Price Low-to-High, Price High-to-Low, Newest.
   - Quick-add to cart and instant Wishlist bookmarking.
   - Real-time search with instant dropdown recommendations.

3. **Immersive Product Details Page**:
   - Multi-angle high-resolution image gallery with interactive thumbnail switcher.
   - Live inventory and savings calculation badges.
   - Interactive quantity stepper, "Add to Bag", and "Instant Checkout".
   - Overview highlights, comprehensive technical specifications table, and verified buyer reviews.
   - Related products recommendation carousel.

4. **Interactive Shopping Cart**:
   - Persistent LocalStorage synchronization across reloads.
   - Free Express Shipping dynamic calculation and visual progress bar.
   - Quantity modifier, item removal, and promotional discount code support (`SPHERE10`).
   - Order calculation: Subtotal, Shipping, Tax (8%), and Grand Total.

5. **Realistic Demo Checkout**:
   - Multi-step customer address & contact collection.
   - Demo payment selector: Credit/Debit Card, UPI / Instant QR, Net Banking, Cash on Delivery.
   - Realistic order placement returning an auto-generated Order ID (`ORD-XXXXXX`) and Tracking Number (`SPH-XXXXXXXX`).
   - Order confirmation receipt with estimated delivery date.

6. **Kubernetes & Self-Healing Infrastructure Readiness**:
   - Backend health endpoint (`/api/health` and `/healthz`) reporting pod hostname (`process.env.HOSTNAME`), uptime, and memory usage.
   - Live cluster pod indicator pill in the UI header.
   - Clean separation of frontend and backend with standalone Dockerfiles and Nginx reverse proxy.
   - Multi-replica Kubernetes ready with zero external state bottlenecks.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS 3, React Router v6, Lucide React icons.
- **Backend**: Node.js 20+, Express.js 4, CORS.
- **Production Serving**: Nginx Alpine reverse-proxying API endpoints and handling SPA route fallback.
- **Containerization**: Docker, Docker Compose, Kubernetes Pod specifications.

---

## 🚀 Quick Start Guide

### 1. Local Development (Without Docker)

#### Start the Backend API (Port 5000):
```bash
cd backend
npm install
npm start
```
The API is available at `http://localhost:5000`. Test the health check at `http://localhost:5000/api/health`.

#### Start the Frontend (Port 3000):
```bash
cd frontend
npm install
npm run dev
```
Open your browser at `http://localhost:3000`.

---

### 2. Running with Docker Compose

Run both frontend and backend with a single command:
```bash
docker compose up --build
```
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/api/health`

---

## ☸️ Kubernetes 3-Replica Self-Healing Deployment (Preview)

When deploying to Kubernetes:

1. **Backend Deployment**:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: shopsphere-backend
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: shopsphere-backend
     template:
       metadata:
         labels:
           app: shopsphere-backend
       spec:
         containers:
         - name: backend
           image: shopsphere-backend:latest
           ports:
           - containerPort: 5000
           livenessProbe:
             httpGet:
               path: /healthz
               port: 5000
             initialDelaySeconds: 5
             periodSeconds: 10
           readinessProbe:
             httpGet:
               path: /api/health
               port: 5000
             initialDelaySeconds: 3
             periodSeconds: 5
   ```

2. **Self-Healing Demonstration**:
   - If one of the 3 backend pods crashes or fails its `/healthz` probe, Kubernetes automatically restarts or replaces it while the other 2 pods handle traffic with zero downtime.
   - The UI Header's Pod pill will dynamically reflect the active responding Pod hostname!
