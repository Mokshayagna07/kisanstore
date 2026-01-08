import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for Firebase Auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in, fetch additional details (role) from Firestore
                try {
                    const userDocRef = doc(db, 'users', firebaseUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            ...userData // spread name, role, etc.
                        });
                    } else {
                        // Fallback if firestore doc missing (shouldn't happen ideally)
                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            role: 'user', // Default to user
                            name: firebaseUser.displayName || 'User'
                        });
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    // Still set basic user from Auth to allow access, maybe restricted
                    setUser(firebaseUser);
                }
            } else {
                // User is signed out
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Fetch role immediately for redirect logic
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);

            let role = 'user';
            if (userDoc.exists()) {
                role = userDoc.data().role || 'user';
            }

            return { success: true, role };
        } catch (error) {
            console.error("Login Error:", error);
            // Map Firebase errors to user-friendly messages
            let message = "Failed to log in";
            if (error.code === 'auth/invalid-credential') message = "Invalid email or password";
            if (error.code === 'auth/user-not-found') message = "No user found with this email";
            if (error.code === 'auth/wrong-password') message = "Incorrect password";
            return { success: false, message };
        }
    };

    const signup = async (name, email, password, role = 'user') => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Create user document in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name,
                email,
                role,
                createdAt: new Date().toISOString(),
                status: 'active'
            });

            return { success: true };
        } catch (error) {
            console.error("Signup Error:", error);
            let message = "Failed to sign up";
            if (error.code === 'auth/email-already-in-use') message = "Email is already in use";
            if (error.code === 'auth/weak-password') message = "Password should be at least 6 characters";
            return { success: false, message };
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
