import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Bell, Moon, Sun, User, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = ({ toggleSidebar }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 h-16 fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 lg:px-6 transition-colors duration-300">

            {/* LEFT: Logo & Dashboard Title */}
            <div className="flex items-center gap-6">
                {/* Logo Area */}
                <div className="flex items-center gap-1 font-bold text-xl tracking-tight">
                    <span className="text-green-600">Kisan</span>
                    <span className="text-slate-800 dark:text-white">Store</span>
                </div>

                {/* Vertical Divider */}
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-600 hidden md:block"></div>

                {/* Dashboard Toggle & Title */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleSidebar}
                        className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-lg text-slate-700 dark:text-slate-200 hidden md:block">
                        Dashboard
                    </span>
                </div>
            </div>

            {/* CENTER: Search Bar (Hidden on small screens) */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search product, order, or customer..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-900/50 border border-transparent focus:border-green-500 focus:bg-white dark:focus:bg-slate-900 rounded-lg text-sm text-slate-700 dark:text-slate-200 outline-none transition-all placeholder:text-slate-500"
                    />
                </div>
            </div>

            {/* RIGHT: Actions & Profile */}
            <div className="flex items-center gap-4">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Notifications */}
                <button className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></span>
                </button>

                {/* Profile Section with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700 hover:opacity-80 transition-opacity outline-none"
                    >
                        {/* User Avatar */}
                        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <User size={18} />
                        </div>

                        {/* User Info */}
                        <div className="hidden sm:block text-right">
                            <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                                {user?.name || 'Internal Admin'}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-0.5">
                                Verified Staff
                            </p>
                        </div>
                    </button>

                    {/* Dropdown Content */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right z-50">
                            {/* Mobile User Info Header (Optional, good for small screens) */}
                            <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-700 sm:hidden">
                                <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{user?.name}</p>
                                <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                            </div>

                            <a href="#" className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <User size={18} className="text-slate-400" />
                                My Profile
                            </a>
                            <a href="#" className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <Settings size={18} className="text-slate-400" />
                                Account Settings
                            </a>

                            <div className="h-px bg-slate-100 dark:bg-slate-700 my-1 mx-2"></div>

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-5 py-3 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-left"
                            >
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>

            </div>

        </header>
    );
};

export default Header;
