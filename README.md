# KisanStore - Farmer-to-Consumer eCommerce Platform

KisanStore is a comprehensive web application designed to bridge the gap between farmers (sellers) and consumers. It features a modern, responsive UI with distinct role-based dashboards for Buyers, Sellers, Internal Staff, and Super Admins.

## 🚀 Features

### for Consumers (Buyers)
*   **Modern Home Page**: Featuring TrustStrips, Popular Products, Farmer Spotlight, and FAQ.
*   **Shop & Browse**: Filterable product listing page with categories.
*   **Shopping Cart**: Fully functional cart with total calculation.
*   **Checkout Flow**: Multi-step checkout process (Address, Payment Mock).
*   **Order Management**: Track active orders and view order history.
*   **Order Tracking**: Visual timeline of order status.
*   **AI Chatbot**: Integrated support assistant (UI).

### for Farmers (Sellers)
*   **Dedicated Dashboard**: User-friendly interface to manage their "shop".
*   **Product Management**: Add, edit, and list produce.
*   **Order Fulfillment**: View new orders, update status (Packed, Shipped).
*   **Earnings Tracker**: Visual summary of revenue and pending payouts.
*   **Stock Management**: Low stock alerts and quick inventory updates.

### for Internal Staff (Operations)
*   **Dense "Ops" Dashboard**: Data-heavy interface for platform efficiency.
*   **Global Overview**: High-level stats on platform revenue, active users, and issues.
*   **Order Pipeline**: Detailed tracking of all platform orders.
*   **User & Seller Management**: Administer accounts and verification.

### for Super Admin
*   **Restricted Access**: Hidden login portal for highest-level control.
*   **System Health**: Monitoring server status and critical database actions.

---

## 🛠 Tech Stack

*   **Frontend**: React.js (Vite)
*   **Styling**: Tailwind CSS (Custom Color Palette: Emerald/Green Primary)
*   **Icons**: Lucide React
*   **Routing**: React Router DOM (v6)
*   **Charts**: Recharts (Integrated for analytics)
*   **State Management**: Context API (AuthContext, ThemeContext)

---

## 🔑 Access Credentials (Mock Data)

The application uses local storage and mock data for demonstration. Use these credentials to test different roles:

| Role | Email | Password | Description |
|------|-------------|----------|-------------|
| **User** | `user@test.com` | `user123` | Standard Customer account |
| **Seller** | `seller@kisan.com` | `seller123` | Farmer / Seller account with dashboard |
| **Staff** | `staff@kisan.com` | `staff123` | Internal Staff / Operations |
| **Admin** | `admin@kisan.com` | `admin123` | Super Admin with full access |

> **Note**: The login page has tabs for "Consumer" and "Seller / Staff". Use the appropriate email to be routed correctly.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── admin/       # Legacy/Shared Admin Components
│   ├── common/      # Reusable UI (Chatbot, Footer, Navbar)
│   ├── home/        # Landing Page Sections
│   ├── seller/      # Farmer Dashboard Components
│   └── staff/       # Internal Ops Dashboard Components
├── context/         # Auth and Theme Context Providers
├── pages/
│   ├── admin/       # Admin & Super Admin Pages
│   ├── auth/        # Login, Signup, Access Denied
│   ├── seller/      # Seller Dashboard Container
│   ├── staff/       # Staff Dashboard Container
│   └── user/        # Buyer Pages (Home, Shop, Cart, etc.)
└── styles/          # Global CSS and Tailwind Config
```

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    Visit `http://localhost:5173`

---

## 🎨 Design Philosophy

*   **Consumer & Seller UI**: Friendly, colorful, accessible, and spacious ("Green & Gold" aesthetic).
*   **Staff UI**: Dense, data-first, high-contrast for information density ("Slate & Blue" aesthetic).
