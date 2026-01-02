import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const SystemOverview = () => {
    const stats = [
        { label: 'Total Users', val: '45,231', trend: '+12%', isUp: true },
        { label: 'Total Sellers', val: '1,204', trend: '+5%', isUp: true },
        { label: 'Total Staff', val: '48', trend: '0%', isUp: true },
        { label: 'Active Orders', val: '3,402', trend: '+8%', isUp: true },
        { label: 'Platform Rev', val: '₹84.2L', trend: '+24%', isUp: true },
        { label: 'System Status', val: '100%', trend: 'Stable', isUp: true, isText: true },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    <div className="mt-2 flex items-end justify-between">
                        <h3 className={`text-2xl font-bold ${stat.isText ? 'text-green-500' : 'text-slate-800 dark:text-white'}`}>{stat.val}</h3>
                        <span className={`text-xs font-bold flex items-center ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                            {stat.isUp ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                            {stat.trend}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SystemOverview;
