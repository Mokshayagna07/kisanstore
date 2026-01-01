import React, { useState } from 'react';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import DashboardOverview from '../../components/admin/DashboardOverview';
import OrdersManager from '../../components/admin/OrdersManager';
import ProductsManager from '../../components/admin/ProductsManager';
import InventoryManager from '../../components/admin/InventoryManager';
import DiscountManager from '../../components/admin/DiscountManager';
import ComplaintManager from '../../components/admin/ComplaintManager';
import SupplierTracker from '../../components/admin/SupplierTracker';
import AnalyticsReport from '../../components/admin/AnalyticsReport';
import AdminSettings from '../../components/admin/AdminSettings';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <DashboardOverview />;
            case 'orders':
                return <OrdersManager />;
            case 'products':
                return <ProductsManager />;
            case 'stock':
                return <InventoryManager />;
            case 'discounts':
                return <DiscountManager />;
            case 'complaints':
                return <ComplaintManager />;
            case 'suppliers':
                return <SupplierTracker />;
            case 'reports':
                return <AnalyticsReport />;
            case 'settings':
                return <AdminSettings />;
            default:
                return <DashboardOverview />;
        }
    };

    return (
        <div className="flex bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />

            {/* Main Content */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Header */}
                <Header toggleSidebar={toggleSidebar} />

                {/* Dashboard Content */}
                <main className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white capitalize">
                            {activeTab === 'stock' ? 'Stock & Inventory' : activeTab}
                        </h2>
                    </div>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
