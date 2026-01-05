import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    Settings,
    Activity,
    ShieldAlert,
    DollarSign,
    FileText,
    LogOut
} from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab, isSidebarOpen, logout }) => {
    // Menu items as per strict prompt (NO Operational tools)
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'revenue', label: 'Platform Revenue', icon: DollarSign },
        { id: 'users', label: 'Global Users', icon: Users },
        { id: 'logs', label: 'Security Logs', icon: ShieldAlert },
        { id: 'health', label: 'System Health', icon: Activity },
        { id: 'reports', label: 'Reports', icon: FileText },
    ];

    return (
        <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-slate-900 text-white shadow-xl z-40 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} border-r border-slate-800`}>
            <div className="h-full flex flex-col pt-6">
                <p className={`px-6 text-xs font-bold text-slate-500 uppercase mb-4 transition-opacity ${!isSidebarOpen && 'opacity-0'}`}>Global Controls</p>
                <nav className="flex-1 px-3 space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group text-sm font-medium
                                ${activeTab === item.id
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                            `}
                        >
                            <item.icon size={20} />
                            {isSidebarOpen && <span>{item.label}</span>}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t border-slate-800">
                    <button onClick={logout} className={`w-full flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm ${!isSidebarOpen && 'justify-center'}`}>
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
