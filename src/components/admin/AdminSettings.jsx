import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Shield, Moon, Sun, Monitor, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const AdminSettings = () => {
    const { theme, toggleTheme } = useTheme();
    const { logout } = useAuth();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [stockAlerts, setStockAlerts] = useState(true);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <User size={20} className="text-slate-500" /> My Profile
                </h3>
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-3xl font-bold text-slate-400 border-4 border-white dark:border-slate-600 shadow-md">
                            AD
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Change Photo</button>
                    </div>
                    <div className="flex-1 w-full space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                                <input type="email" defaultValue="admin@kisan.com" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                                <input type="text" defaultValue="+91 98765 43210" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
                                <input type="text" defaultValue="Super Admin" disabled className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 cursor-not-allowed" />
                            </div>
                        </div>
                        <div className="pt-4 flex justify-end">
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications & Preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                        <Bell size={20} className="text-slate-500" /> Notifications
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                            <div>
                                <p className="font-medium text-slate-800 dark:text-white">Email Notifications</p>
                                <p className="text-xs text-slate-500">Receive daily summaries and critical alerts.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                            <div>
                                <p className="font-medium text-slate-800 dark:text-white">Low Stock Alerts</p>
                                <p className="text-xs text-slate-500">Get notified when items drop below threshold.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={stockAlerts} onChange={() => setStockAlerts(!stockAlerts)} />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                        <Monitor size={20} className="text-slate-500" /> Appearance
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        <button
                            onClick={() => { if (theme === 'dark') toggleTheme() }}
                            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${theme === 'light' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}
                        >
                            <Sun size={24} />
                            <span className="text-sm font-medium">Light</span>
                        </button>
                        <button
                            onClick={() => { if (theme === 'light') toggleTheme() }}
                            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${theme === 'dark' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}
                        >
                            <Moon size={24} />
                            <span className="text-sm font-medium">Dark</span>
                        </button>
                        <button className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex flex-col items-center gap-3 text-slate-500">
                            <Monitor size={24} />
                            <span className="text-sm font-medium">System</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30 p-6">
                <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                    <Shield size={20} /> Danger Zone
                </h3>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium text-slate-800 dark:text-white">Sign out of all devices</p>
                        <p className="text-sm text-slate-500">Log out of your account on all web and mobile sessions.</p>
                    </div>
                    <button onClick={logout} className="px-4 py-2 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
