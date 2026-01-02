import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

const FinancialPanel = () => {
    const stats = [
        { label: 'Total Collected', val: '₹1,24,50,000', color: 'text-slate-800 dark:text-white' },
        { label: 'Paid to Sellers', val: '₹1,12,05,000', color: 'text-slate-600 dark:text-slate-400' },
        { label: 'Platform Commission', val: '₹12,45,000', color: 'text-emerald-600' },
        { label: 'Pending Payouts', val: '₹84,000', color: 'text-orange-500' },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <DollarSign className="text-emerald-500" /> Platform Finance
                </h3>
                <button className="text-sm text-blue-500 hover:underline">Download Financial Report</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <p className="text-xs text-slate-500 font-bold uppercase mb-2">{stat.label}</p>
                        <h4 className={`text-xl font-bold ${stat.color}`}>{stat.val}</h4>
                    </div>
                ))}
            </div>

            <div className="h-64 bg-slate-50 dark:bg-slate-900/50 rounded-lg flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-400 font-medium flex items-center gap-2">
                    <TrendingUp /> Revenue Chart Placeholder (Requires Recharts)
                </p>
            </div>
        </div>
    );
};

export default FinancialPanel;
