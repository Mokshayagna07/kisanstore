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

        // 1. Super Admin
        if (email === 'admin@kisan.com' && password === 'admin123') {
            const superUser = { name: 'Super Admin', email, role: 'super_admin' };
            setUser(superUser);
            localStorage.setItem('kisan_user', JSON.stringify(superUser));
            return { success: true, role: 'super_admin' };
        }

        // 2. Internal Admin / Operations -> Now 'staff'
        if (email === 'staff@kisan.com' && password === 'staff123') {
            const opsUser = { name: 'Internal Staff', email, role: 'staff' };
            setUser(opsUser);
            localStorage.setItem('kisan_user', JSON.stringify(opsUser));
            return { success: true, role: 'staff' };
        }

        // 3. Seller (Farmer)
        if (email === 'seller@kisan.com' && password === 'seller123') {
            const sellerUser = { name: 'Verified Seller', email, role: 'seller' };
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
