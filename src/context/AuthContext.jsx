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
        if (email === 'admin@kisan.com' && password === 'admin123') {
            const adminUser = { name: 'Admin User', email, role: 'admin' };
            setUser(adminUser);
            localStorage.setItem('kisan_user', JSON.stringify(adminUser));
            return { success: true, role: 'admin' };
        }

        // Mock User Login (Accept any other valid email format)
        if (email.includes('@')) {
            const normalUser = { name: 'Farmer User', email, role: 'user' };
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
