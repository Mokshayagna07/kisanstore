import React, { useState } from 'react';
import SellerHeader from '../../components/seller/SellerHeader';
import SellerSidebar from '../../components/seller/SellerSidebar';
import SellerDashboardOverview from '../../components/seller/SellerDashboardOverview';
import ProductsManager from '../../components/admin/ProductsManager'; // Reuse or recreate for seller-specific simplified view? Prompt asks for separate.
import InventoryManager from '../../components/admin/InventoryManager'; // Reuse?
import OrdersManager from '../../components/admin/OrdersManager'; // Reuse?
import ComplaintManager from '../../components/admin/ComplaintManager';
import AdminSettings from '../../components/admin/AdminSettings';
// Prompt asks to create new components in seller folder. I should create placeholders for them.
import SellerProducts from '../../components/seller/SellerProducts';
import SellerOrders from '../../components/seller/SellerOrders';
import SellerStock from '../../components/seller/SellerStock';
import SellerEarnings from '../../components/seller/SellerEarnings';
import SellerComplaints from '../../components/seller/SellerComplaints';
import SellerProfile from '../../components/seller/SellerProfile';

const SellerDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <SellerDashboardOverview />;
            case 'products': return <SellerProducts />;
            case 'orders': return <SellerOrders />;
            case 'stock': return <SellerStock />;
            case 'earnings': return <SellerEarnings />;
            case 'complaints': return <SellerComplaints />;
            case 'profile': return <SellerProfile />;
            default: return <SellerDashboardOverview />;
        }
    };

    return (
        <div className="flex bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            {/* Sidebar */}
            <SellerSidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />

            {/* Main Content */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Header */}
                <SellerHeader toggleSidebar={toggleSidebar} />

                {/* Dashboard Content */}
                <main className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white capitalize">
                            {activeTab === 'stock' ? 'Stock Management' : activeTab}
                        </h2>
                    </div>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default SellerDashboard;
