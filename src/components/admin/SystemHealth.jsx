import React from 'react';
import { Activity } from 'lucide-react';

const SystemHealth = () => {
    const metrics = [
        { label: 'Server Uptime', status: '99.99%', color: 'text-green-500' },
        { label: 'API Status', status: 'Operational', color: 'text-green-500' },
        { label: 'Database', status: 'Healthy', color: 'text-green-500' },
        { label: 'Last Backup', status: '2 mins ago', color: 'text-blue-500' },
        { label: 'Error Rate', status: '0.02%', color: 'text-green-500' },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Activity className="text-blue-500" /> System Health Monitor
                </h3>
                <span className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Live
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {metrics.map((item, i) => (
                    <div key={i} className="text-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                        <p className="text-xs text-slate-500 font-bold uppercase mb-1">{item.label}</p>
                        <p className={`text-lg font-bold ${item.color}`}>{item.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SystemHealth;
