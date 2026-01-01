import React from 'react';
import { Menu, Search } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 h-16 fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 lg:px-6">

            {/* Left: Logo & Toggle */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 lg:hidden text-slate-500"
                >
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-bold text-lg text-slate-800 dark:text-white hidden md:block">Internal Admin</span>
                </div>
            </div>

            {/* Center: Global Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search orders, sellers, items..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 ring-primary/20 transition-all"
                    />
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-500">System Online</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-xs shadow-sm border border-white dark:border-slate-600">
                    AD
                </div>
            </div>
        </header>
    );
};

export default Header;
