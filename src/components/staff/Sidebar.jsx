import React from 'react';
import {
    LayoutDashboard,
    ShoppingBag,
    Package,
    Users,
    UserCircle,
    Truck,
    MessageSquare,
    DollarSign,
    FileText,
    Settings,
    LogOut
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
        { id: 'orders', label: 'Orders Analytics', icon: ShoppingBag },
        { id: 'products', label: 'Products & Inventory', icon: Package },
        { id: 'sellers', label: 'Sellers Management', icon: Users },
        { id: 'users', label: 'Users Management', icon: UserCircle },
        { id: 'delivery', label: 'Delivery & Tracking', icon: Truck },
        { id: 'complaints', label: 'Complaints & Support', icon: MessageSquare },
        { id: 'financial', label: 'Financial Analytics', icon: DollarSign },
        { id: 'reports', label: 'Reports', icon: FileText },
        { id: 'settings', label: 'System Settings', icon: Settings },
    ];

    return (
        <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white dark:bg-slate-800 shadow-xl z-40 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} border-r border-slate-100 dark:border-slate-700`}>
            <div className="h-full flex flex-col pt-4">
                <nav className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group relative text-sm
                                ${activeTab === item.id
                                    ? 'bg-primary/10 text-primary font-bold'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'}
                            `}
                        >
                            <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />

                            {isOpen && (
                                <span className="truncate">{item.label}</span>
                            )}

                            {!isOpen && (
                                <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100 dark:border-slate-700">
                    <button className={`w-full flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-sm ${!isOpen && 'justify-center'}`}>
                        <LogOut size={20} />
                        {isOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
