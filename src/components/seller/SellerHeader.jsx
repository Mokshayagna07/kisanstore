import React from 'react';
import { Menu, Bell } from 'lucide-react';

const SellerHeader = ({ toggleSidebar }) => {
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
                    <span className="font-bold text-lg text-slate-800 dark:text-white hidden md:block">
                        Farmer<span className="text-green-600">Dash</span>
                    </span>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                </button>

                <div className="flex items-center gap-3 border-l pl-4 border-slate-200 dark:border-slate-700">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-800 dark:text-white">Ramesh Kumar</p>
                        <p className="text-xs text-green-600 font-medium">Verified Seller</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-lg shadow-sm border border-green-200">
                        👨‍🌾
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SellerHeader;
