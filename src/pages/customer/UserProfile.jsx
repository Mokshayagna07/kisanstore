import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase'; // Import Firestore
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Camera, Mail, Phone, MapPin, Bell, Shield, Clock, Package, Edit2, Save, Loader2 } from 'lucide-react';

const UserProfile = () => {
    const { user } = useAuth();

    // Form States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');

    // UI States
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Fetch User Data from Firestore
    useEffect(() => {
        const fetchUserData = async () => {
            if (!user?.uid) return;

            try {
                const userDocRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();

                    // Populate fields
                    const names = (data.name || user.displayName || '').split(' ');
                    setFirstName(names[0] || '');
                    setLastName(names.slice(1).join(' ') || '');
                    setDisplayName(data.displayName || data.name || '');
                    setPhone(data.phone || '');
                    setAddress(data.address || '');
                    setUsername(data.username || user.email?.split('@')[0] || '');
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    // Save Changes to Firestore
    const handleSaveChanges = async () => {
        setSaving(true);
        setMessage({ type: '', text: '' });

        try {
            const userDocRef = doc(db, 'users', user.uid);

            // Construct full name
            const fullName = `${firstName} ${lastName}`.trim();

            await updateDoc(userDocRef, {
                name: fullName,
                displayName: displayName,
                phone: phone,
                address: address,
                username: username,
                updatedAt: new Date().toISOString()
            });

            setMessage({ type: 'success', text: 'Profile updated successfully!' });

            // Auto-hide success message
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);

        } catch (error) {
            console.error("Error updating profile:", error);
            setMessage({ type: 'error', text: 'Failed to update profile.' });
        } finally {
            setSaving(false);
        }
    };

    // Dynamic Initials
    const getInitials = () => {
        const first = firstName ? firstName[0] : (user?.email?.[0] || 'U');
        const last = lastName ? lastName[0] : '';
        return (first + last).toUpperCase();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Success/Error Message Toast */}
                {message.text && (
                    <div className={`fixed top-24 right-4 z-50 px-6 py-3 rounded-xl shadow-lg border font-bold animate-in slide-in-from-right duration-300 ${message.type === 'success'
                            ? 'bg-green-100 border-green-200 text-green-700'
                            : 'bg-red-100 border-red-200 text-red-700'
                        }`}>
                        {message.text}
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Fixed Width (Profile + Security) */}
                    <div className="w-full lg:w-80 space-y-6 flex-shrink-0">

                        {/* Profile Card */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 flex flex-col items-center text-center animate-fade-in-up">
                            <div className="relative mb-4">
                                <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold border-4 border-white dark:border-slate-800 shadow-md">
                                    {getInitials()}
                                </div>
                                <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-slate-700 rounded-full shadow-lg border border-slate-200 dark:border-slate-600 hover:text-primary transition-colors">
                                    <Camera size={14} />
                                </button>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{displayName}</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{user?.email}</p>
                            <button className="w-full py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                Upload Photo
                            </button>
                        </div>

                        {/* Security Section */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 animate-fade-in-up delay-100">
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Shield size={16} /> Security
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block">Old Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:border-primary outline-none" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block">New Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:border-primary outline-none" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block">Confirm Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:border-primary outline-none" />
                                </div>
                                <button className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Flexible (Details + Activity) */}
                    <div className="flex-1 space-y-6">

                        {/* Section 1: Basic Profile Information */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 animate-fade-in-up">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Profile Information</h3>
                                <button
                                    onClick={handleSaveChanges}
                                    disabled={saving}
                                    className="text-white bg-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 disabled:opacity-50"
                                >
                                    {saving ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />}
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5 block">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium focus:border-primary outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5 block">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium focus:border-primary outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5 block">Username</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-2.5 text-slate-400">@</span>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium focus:border-primary outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5 block">Display Name</label>
                                    <input
                                        type="text"
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium focus:border-primary outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Contact Information */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 animate-fade-in-up delay-75">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-900/50">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Email Address</p>
                                        <p className="text-slate-800 dark:text-white font-medium">{user?.email}</p>
                                    </div>
                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded font-bold">VERIFIED</span>
                                </div>

                                <div className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                        <Phone size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase mb-1">Phone Number</p>
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 99999 99999"
                                            className="w-full bg-transparent border-none p-0 text-slate-800 dark:text-white font-medium focus:ring-0 placeholder-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase mb-1">Address</p>
                                        <input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="House No, Street, City, State"
                                            className="w-full bg-transparent border-none p-0 text-slate-800 dark:text-white font-medium focus:ring-0 placeholder-slate-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Notifications & Updates */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 animate-fade-in-up delay-100">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Bell size={20} className="text-slate-400" /> Notifications
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">Order Updates</p>
                                        <p className="text-xs text-slate-500">Receive SMS and Email about your delivery status.</p>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 dark:border-slate-700"></div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">System Notifications</p>
                                        <p className="text-xs text-slate-500">Security alerts and account changes.</p>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 dark:border-slate-700"></div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">Promotional Updates</p>
                                        <p className="text-xs text-slate-500">Discounts and seasonal offers.</p>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Recent Activity */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 animate-fade-in-up delay-150">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                                        <Clock size={16} />
                                        <span className="text-xs font-bold uppercase">Last Login</span>
                                    </div>
                                    <p className="font-semibold text-slate-800 dark:text-white">Today, 10:23 AM</p>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                                        <Package size={16} />
                                        <span className="text-xs font-bold uppercase">Last Order</span>
                                    </div>
                                    <p className="font-semibold text-slate-800 dark:text-white">#ORD-2024-882 (Delivered)</p>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                                        <Shield size={16} />
                                        <span className="text-xs font-bold uppercase">Profile Status</span>
                                    </div>
                                    <p className="font-semibold text-green-600">Active & Verified</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
