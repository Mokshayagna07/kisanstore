import React from 'react';
import {
    User,
    Mail,
    Shield,
    Key,
    Smartphone,
    Globe,
    Phone,
    Clock,
    Monitor,
    ToggleLeft,
    FileText,
    ExternalLink
} from 'lucide-react';

const AdminProfile = () => {
    return (
        <div className="space-y-6 animate-fade-in-up">

            {/* Header: Admin Identity (Standardized Enterprise Look) */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-100 dark:border-slate-700 shrink-0">
                    <User size={40} className="text-slate-400" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Admin</h2>
                        <span className="px-3 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold uppercase rounded-full border border-red-200 dark:border-red-800">
                            Root Access
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm">System Administrator &bull; ID: #USER-001</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-600 dark:text-slate-300 mt-2">
                        <span className="flex items-center gap-1.5"><Mail size={14} /> admin@kisan.com</span>
                        <span className="flex items-center gap-1.5"><Globe size={14} /> Bangalore, IN</span>
                        <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-medium"><Shield size={14} /> 2FA Active</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* 1. Editable Personal Details */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-700">
                            <h3 className="font-bold text-slate-800 dark:text-white">Profile Details</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Display Name</label>
                                    <input type="text" defaultValue="Admin" className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-800 dark:text-white focus:ring-1 focus:ring-primary outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Phone Number</label>
                                    <input type="text" defaultValue="+91 98765 43210" className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-800 dark:text-white focus:ring-1 focus:ring-primary outline-none" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Timezone</label>
                                    <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-800 dark:text-white outline-none">
                                        <option>(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Language</label>
                                    <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-800 dark:text-white outline-none">
                                        <option>English (US)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pt-2 text-right">
                                <button className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium rounded-md hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2. Security & Credentials */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
                            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                <Shield size={16} className="text-slate-400" /> Security
                            </h3>
                            <button className="text-xs text-primary hover:underline flex items-center gap-1">
                                View Security Logs <ExternalLink size={12} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3">
                                    <Key size={18} className="text-slate-400" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-800 dark:text-white">Password</p>
                                        <p className="text-xs text-slate-500">Last changed 90 days ago</p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">Change</button>
                            </div>
                            <div className="border-t border-slate-100 dark:border-slate-700"></div>
                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3">
                                    <Smartphone size={18} className="text-slate-400" />
                                    <div>
                                        <p className="text-sm font-medium text-slate-800 dark:text-white">2-Step Verification</p>
                                        <p className="text-xs text-green-600 dark:text-green-400 font-medium">Enabled • Authenticator App</p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">Manage</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">

                    {/* 3. Platform Control Shortcuts (Critical) */}
                    <div className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 border-dashed rounded-lg p-6">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Monitor size={14} /> Quick Platform Actions
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">User Registrations</span>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">ON</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Seller Onboarding</span>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">ON</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Maintenance Mode</span>
                                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">OFF</span>
                            </div>
                            <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Order Approvals</span>
                                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">AUTO</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <button className="w-full text-center text-xs text-primary font-medium hover:underline">
                                Go to Global Settings Configuration &rarr;
                            </button>
                        </div>
                    </div>

                    {/* 4. Session Info (Audit) */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-700">
                            <h3 className="font-bold text-slate-800 dark:text-white">Current Session</h3>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 flex items-center gap-2"><Globe size={14} /> IP Address</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/50 px-2 py-0.5 rounded">192.168.1.104</span>
                                </li>
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 flex items-center gap-2"><Monitor size={14} /> Device / OS</span>
                                    <span className="text-slate-700 dark:text-slate-200">Chrome on Windows 10</span>
                                </li>
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 flex items-center gap-2"><Clock size={14} /> Active Login</span>
                                    <span className="text-green-600 dark:text-green-400 font-medium">Verified 45 mins ago</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Role Permissions (Read-Only) */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 opacity-75 hover:opacity-100 transition-opacity">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-2">Assigned Permissions</h3>
                        <div className="flex flex-wrap gap-2">
                            {['manage_users', 'manage_financials', 'system_config', 'view_logs', 'ban_accounts'].map(perm => (
                                <span key={perm} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-mono rounded border border-slate-200 dark:border-slate-600">
                                    {perm}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
