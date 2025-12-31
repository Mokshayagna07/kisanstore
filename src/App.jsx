import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
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
const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) return <Navigate to="/" />;

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
              <Route path="/cart" element={<PublicLayout><Cart /></PublicLayout>} /> {/* Should arguably be protected for User but keeping open for UX */}
              <Route path="/checkout" element={
                <ProtectedRoute role="user">
                  <PublicLayout><Checkout /></PublicLayout>
                </ProtectedRoute>
              } />

              {/* Auth Routes (No Navbar/Footer) */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Admin Routes */}
              <Route path="/admin" element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
