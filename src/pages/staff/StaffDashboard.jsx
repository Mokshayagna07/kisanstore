import React, { useState } from 'react';
import Header from '../../components/staff/Header';
import Sidebar from '../../components/staff/Sidebar';
import DashboardOverview from '../../components/staff/DashboardOverview';
import OrdersManager from '../../components/staff/OrdersManager';
import SellersManager from '../../components/staff/SellersManager';
import UsersManager from '../../components/staff/UsersManager';
import DeliveryTracker from '../../components/staff/DeliveryTracker';
import FinancialAnalytics from '../../components/staff/FinancialAnalytics';

// Shared/Placeholder imports for now (Assuming these are still in admin or need moving)
import ProductsManager from '../../components/staff/ProductsManager';
import ComplaintManager from '../../components/staff/ComplaintManager';
import AnalyticsReport from '../../components/staff/AnalyticsReport';
import AdminSettings from '../../components/staff/AdminSettings';

const StaffDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <DashboardOverview />;
            case 'orders': return <OrdersManager />;
            case 'products': return <ProductsManager />;
            case 'sellers': return <SellersManager />;
            case 'users': return <UsersManager />;
            case 'delivery': return <DeliveryTracker />;
            case 'complaints': return <ComplaintManager />;
            case 'financial': return <FinancialAnalytics />;
            case 'reports': return <AnalyticsReport />;
            case 'settings': return <AdminSettings />;
            default: return <DashboardOverview />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Top Fixed Header */}
            <Header toggleSidebar={toggleSidebar} />

            {/* Left Fixed Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />

            {/* Main Content Area */}
            <main
                className={`pt-20 px-6 transition-all duration-300 
                ${isSidebarOpen ? 'ml-64' : 'ml-20'} 
                w-[calc(100%-${isSidebarOpen ? '256px' : '80px'})]`}
            >
                <div className="max-w-7xl mx-auto pb-10">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold capitalize text-slate-800 dark:text-white">
                            {activeTab.replace('-', ' ')}
                        </h2>
                    </div>

                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default StaffDashboard;
