import React, { useState } from 'react';
import { Bell, Menu, Search, User, ShieldCheck, ChevronDown, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const AdminHeader = ({ toggleSidebar, isSidebarOpen }) => {
    const { logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white z-50 shadow-md border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 transition-all duration-300">
            {/* Left: Logo & Toggle */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white">K</div>
                    <span className="text-lg font-bold tracking-tight hidden sm:block">
                        KisanStore <span className="text-red-500 text-xs uppercase ml-1">Admin</span>
                    </span>
                </div>
            </div>

            {/* Center: Title (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2">
                <h1 className="text-sm font-bold uppercase tracking-widest text-slate-400">Super Admin Control Panel</h1>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 sm:gap-6">
                {/* System Status Indicator */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">System Live</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700"
                    >
                        <div className="hidden text-right md:block">
                            <p className="text-xs font-bold text-white">Super Admin</p>
                            <p className="text-[10px] text-slate-400">admin@kisan.com</p>
                        </div>
                        <div className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center border-2 border-slate-600">
                            <ShieldCheck size={18} className="text-slate-300" />
                        </div>
                        <ChevronDown size={14} className={`text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)}></div>
                            <div className="absolute right-0 top-full mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl py-2 z-50">
                                <div className="px-4 py-3 border-b border-slate-700 mb-2">
                                    <p className="text-sm font-bold text-white">Administrator</p>
                                    <p className="text-xs text-slate-400">Root Permissions</p>
                                </div>
                                <button className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2 transition-colors">
                                    <User size={16} /> My Profile
                                </button>
                                <button className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2 transition-colors">
                                    <SettingsIcon size={16} /> Settings
                                </button>
                                <div className="border-t border-slate-700 my-2"></div>
                                <button
                                    onClick={logout}
                                    className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 flex items-center gap-2 transition-colors"
                                >
                                    <LogOut size={16} /> Sign Out
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
