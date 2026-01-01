import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

const FinancialAnalytics = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Financial Analytics</h2>

            {/* KPI Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                    { label: "Platform Revenue", val: "₹12.5L", trend: "+12%", color: "text-green-600" },
                    { label: "Commission Earned", val: "₹1.25L", trend: "+8%", color: "text-blue-600" },
                    { label: "Seller Profits", val: "₹8.5L", trend: "+15%", color: "text-cyan-600" },
                    { label: "Seller Losses", val: "₹45K", trend: "-5%", color: "text-red-500" },
                    { label: "Pending Settlements", val: "₹1.2L", trend: "High", color: "text-orange-500" },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p className="text-xs text-slate-500 font-bold uppercase mb-1">{item.label}</p>
                        <h3 className={`text-2xl font-bold ${item.color}`}>{item.val}</h3>
                        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                            {item.trend.includes('+') ? <TrendingUp size={12} className="text-green-500" /> : <TrendingDown size={12} className={item.trend.includes('-') ? "text-green-500" : "text-red-500"} />}
                            <span className={item.trend.includes('+') || item.trend.includes('-') === false ? "text-green-500" : "text-red-500"}>{item.trend}</span> vs last month
                        </p>
                    </div>
                ))}
            </div>

            {/* Charts Area Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm h-80 flex items-center justify-center flex-col">
                    <TrendingUp size={48} className="text-slate-300 mb-4" />
                    <p className="text-slate-500 font-medium">Revenue Growth Chart</p>
                    <p className="text-xs text-slate-400">(Visualization Placeholder)</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm h-80 flex items-center justify-center flex-col">
                    <PieChart size={48} className="text-slate-300 mb-4" />
                    <p className="text-slate-500 font-medium">Revenue by Category</p>
                    <p className="text-xs text-slate-400">(Visualization Placeholder)</p>
                </div>
            </div>
        </div>
    );
};

export default FinancialAnalytics;
