import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

const SellerEarnings = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">My Earnings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
                    <p className="text-sm font-medium opacity-80 mb-1">Total Earnings</p>
                    <h3 className="text-3xl font-bold">₹ 45,200</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Pending Payout</p>
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white">₹ 2,450</h3>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">This Month Sales</p>
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white">₹ 12,800</h3>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <TrendingUp size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Earnings Trend</h3>
                <p className="text-slate-500">Chart will appear here.</p>
            </div>
        </div>
    );
};

export default SellerEarnings;
