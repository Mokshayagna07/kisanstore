import React, { useState } from 'react';
import {
    LayoutDashboard,
    Lock
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import SystemOverview from '../../components/admin/SystemOverview';
import FinancialPanel from '../../components/admin/FinancialPanel';
import UserControl from '../../components/admin/UserControl';
import SecurityLogs from '../../components/admin/SecurityLogs';
import SystemHealth from '../../components/admin/SystemHealth';
import ReportsPanel from '../../components/admin/ReportsPanel';
import GlobalSettings from '../../components/admin/GlobalSettings';

const SuperAdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');
    const { logout } = useAuth();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="space-y-8">
                        <SystemOverview />
                        <SystemHealth />
                    </div>
                );
            case 'revenue': return <FinancialPanel />;
            case 'users': return <UserControl />;
            case 'logs': return <SecurityLogs />;
            case 'health': return <SystemHealth />;
            case 'reports': return <ReportsPanel />;
            case 'settings': return <GlobalSettings />;
            default: return <SystemOverview />;
        }
    };

    const getPageTitle = () => {
        switch (activeTab) {
            case 'revenue': return 'Platform Revenue Control';
            case 'users': return 'Global User Management';
            case 'logs': return 'Security & Audit Logs';
            case 'health': return 'System Health Status';
            case 'reports': return 'System Reports & Analytics';
            case 'settings': return 'Global Platform Settings';
            default: return 'Super Admin Control Panel';
        }
    };

    const getPageDesc = () => {
        switch (activeTab) {
            case 'dashboard': return 'Overview of system performance and health.';
            default: return 'Manage detailed system configurations and controls.';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
            <AdminHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

            <AdminSidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isSidebarOpen={isSidebarOpen}
                logout={logout}
            />

            <main
                className={`pt-20 px-6 transition-all duration-300 
                ${isSidebarOpen ? 'ml-64' : 'ml-20'} 
                w-[calc(100%-${isSidebarOpen ? '256px' : '80px'})]`}
            >
                <div className="max-w-7xl mx-auto pb-10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white capitalize">
                                {getPageTitle()}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {getPageDesc()}
                            </p>
                        </div>
                        {activeTab === 'dashboard' && (
                            <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-lg text-sm font-bold border border-red-200 dark:border-red-800/30">
                                <Lock size={16} /> Admin Mode Active
                            </div>
                        )}
                    </div>

                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default SuperAdminDashboard;
