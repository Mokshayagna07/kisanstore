import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/customer/Home';
import ProductListing from './pages/customer/ProductListing';
import ProductDetails from './pages/customer/ProductDetails';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
import MyOrders from './pages/customer/MyOrders';
import OrderTracking from './pages/customer/OrderTracking';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AccessDenied from './pages/auth/AccessDenied';
import SuperAdminLogin from './pages/auth/SuperAdminLogin';

import UserProfile from './pages/customer/UserProfile';

import SellerDashboard from './pages/seller/SellerDashboard';
import StaffDashboard from './pages/staff/StaffDashboard';
import AdminControlDashboard from './pages/admin/AdminControlDashboard';
import Chatbot from './components/common/Chatbot';

import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

// Protected Route Component
// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div></div>;

  if (!user) return <Navigate to="/login" />;

  // Strict Role Check (supports array or string)
  if (role) {
    const allowedRoles = Array.isArray(role) ? role : [role];
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/access-denied" />;
    }
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="app min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Routes>
              {/* Public Routes with Navbar/Footer */}
              <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
              <Route path="/shop" element={<PublicLayout><ProductListing /></PublicLayout>} />
              <Route path="/product/:id" element={<PublicLayout><ProductDetails /></PublicLayout>} />
              <Route path="/cart" element={<PublicLayout><Cart /></PublicLayout>} />
              <Route path="/checkout" element={
                <ProtectedRoute role="user">
                  <PublicLayout><Checkout /></PublicLayout>
                </ProtectedRoute>
              } />

              <Route path="/profile" element={
                <ProtectedRoute role="user">
                  <PublicLayout><UserProfile /></PublicLayout>
                </ProtectedRoute>
              } />

              <Route path="/orders" element={
                <ProtectedRoute role="user">
                  <PublicLayout><MyOrders /></PublicLayout>
                </ProtectedRoute>
              } />

              <Route path="/order/:id" element={
                <ProtectedRoute role="user">
                  <PublicLayout><OrderTracking /></PublicLayout>
                </ProtectedRoute>
              } />

              {/* Auth Routes (No Navbar/Footer) */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/access-denied" element={<AccessDenied />} />

              {/* Private Admin Login */}
              <Route path="/super-admin-login" element={<SuperAdminLogin />} />

              {/* Seller Dashboard (Mapped to /admin for historical reasons, should be /seller) */}
              <Route path="/admin" element={
                <ProtectedRoute role="seller">
                  <SellerDashboard />
                </ProtectedRoute>
              } />

              {/* Staff / Internal Admin Route */}
              <Route path="/staff/dashboard" element={
                <ProtectedRoute role="staff">
                  <StaffDashboard />
                </ProtectedRoute>
              } />

              {/* Main Admin Dashboard (Accessible by admin and super_admin) */}
              <Route path="/super-admin" element={
                <ProtectedRoute role={['admin', 'super_admin']}>
                  <AdminControlDashboard />
                </ProtectedRoute>
              } />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Chatbot />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
