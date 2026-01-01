import React from 'react';
import {
    LayoutDashboard,
    Box,
    ShoppingCart,
    Tags,
    MessageSquare,
    Truck,
    BarChart3,
    Settings,
    LogOut
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'products', label: 'Products Management', icon: Box, badge: 3 },
        { id: 'stock', label: 'Stock & Inventory', icon: Box },
        { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: 5 },
        { id: 'discounts', label: 'Discounts & Pricing', icon: Tags },
        { id: 'complaints', label: 'Complaints & Support', icon: MessageSquare, badge: 2 },
        { id: 'suppliers', label: 'Supplier Tracker', icon: Truck },
        { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <aside className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-800 shadow-xl z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} border-r border-slate-100 dark:border-slate-700`}>
            <div className="h-full flex flex-col">
                {/* Logo Area */}
                <div className="h-16 flex items-center justify-center border-b border-slate-100 dark:border-slate-700">
                    {isOpen ? (
                        <h1 className="text-2xl font-bold text-primary">Kisan<span className="text-slate-800 dark:text-white">Store</span></h1>
                    ) : (
                        <span className="text-2xl">🌱</span>
                    )}
                </div>

                {/* Menu Items */}
                <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto custom-scrollbar">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative
                                ${activeTab === item.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary'}
                            `}
                        >
                            <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />

                            {isOpen && (
                                <span className="font-medium truncate">{item.label}</span>
                            )}

                            {/* Badge */}
                            {item.badge && (
                                <span className={`absolute ${isOpen ? 'right-3' : 'top-2 right-2'} flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-800`}>
                                    {item.badge}
                                </span>
                            )}

                            {/* Tooltip for collapsed state */}
                            {!isOpen && (
                                <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-700">
                    <button className={`w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors ${!isOpen && 'justify-center'}`}>
                        <LogOut size={22} />
                        {isOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
