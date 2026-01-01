import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('kisan_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock Authentication Logic

        // 1. Super Admin (Should ideally use a different login page, but defining role for context usage)
        if (email === 'super@kisan.com' && password === 'admin123') {
            const superUser = { name: 'Super Admin', email, role: 'super_admin' };
            setUser(superUser);
            localStorage.setItem('kisan_user', JSON.stringify(superUser));
            return { success: true, role: 'super_admin' };
        }

        // 2. Internal Admin / Operations
        if (email === 'ops@kisan.com' && password === 'admin123') {
            const opsUser = { name: 'Internal Admin', email, role: 'internal_admin' };
            setUser(opsUser);
            localStorage.setItem('kisan_user', JSON.stringify(opsUser));
            return { success: true, role: 'internal_admin' };
        }

        // 3. Seller (Farmer) - Previously called 'admin' role in this codebase
        // For backwards compatibility with existing UI that checks role === 'admin', 
        // I will keep role as 'admin' for Seller Dashboard, or I must update App.jsx too.
        // Prompt says "Seller -> Seller Dashboard".
        // Let's stick to 'seller' role for clarity if I can update App.jsx easily. 
        // Actually, to be safe and clean, let's use 'seller' as the role name.
        if (email === 'farmer@kisan.com' && password === 'admin123') {
            const sellerUser = { name: 'Farmer Seller', email, role: 'seller' };
            setUser(sellerUser);
            localStorage.setItem('kisan_user', JSON.stringify(sellerUser));
            return { success: true, role: 'seller' };
        }

        // Legacy Admin credential support (treating as Seller for now based on previous flow, or Internal?)
        // The previous code had admin@kisan.com as "Admin". 
        // Prompt says "Internal Admin... Use the same login page".
        // Let's map 'admin@kisan.com' to 'seller' based on "Farmer User option appears only if role = Seller".
        if (email === 'admin@kisan.com' && password === 'admin123') {
            const sellerUser = { name: 'Farmer Admin', email, role: 'seller' };
            setUser(sellerUser);
            localStorage.setItem('kisan_user', JSON.stringify(sellerUser));
            return { success: true, role: 'seller' };
        }

        // 4. Buyer (User)
        if (email.includes('@')) {
            const normalUser = { name: 'Buyer User', email, role: 'user' };
            setUser(normalUser);
            localStorage.setItem('kisan_user', JSON.stringify(normalUser));
            return { success: true, role: 'user' };
        }

        return { success: false, message: 'Invalid credentials' };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('kisan_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
