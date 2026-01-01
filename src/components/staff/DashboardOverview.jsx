import React from 'react';
import { TrendingUp, Users, ShoppingBag, AlertCircle, Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';
// Recharts temporarily commented out to prevent crash if not installed/configured
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardOverview = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Dashboard Overview</h2>

            {/* 1. KPI Summary Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {[
                    { label: "Today's Orders", val: "145", color: "text-blue-600" },
                    { label: "This Week", val: "1,240", color: "text-blue-600" },
                    { label: "This Month", val: "5,400", color: "text-blue-600" },
                    { label: "Total Revenue", val: "₹45L", color: "text-green-600" },
                    { label: "Plat. Profit", val: "₹4.5L", color: "text-green-600" },
                    { label: "Active Sellers", val: "128", color: "text-purple-600" },
                    { label: "New Sellers", val: "12", color: "text-purple-600" },
                    { label: "Open Issues", val: "5", color: "text-red-500" },
                ].map((kpi, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                        <p className="text-[10px] text-slate-500 font-bold uppercase truncate">{kpi.label}</p>
                        <h3 className={`text-lg font-bold ${kpi.color}`}>{kpi.val}</h3>
                    </div>
                ))}
            </div>

            {/* 2. Order Status Flow */}
            <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase mb-2">Order Pipeline Health (Live)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { label: "Confirmed", count: 45, icon: Clock, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
                        { label: "Packed", count: 32, icon: Package, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
                        { label: "Shipped", count: 28, icon: Truck, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
                        { label: "On the Way", count: 18, icon: Truck, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
                        { label: "Delivered", count: 156, icon: CheckCircle, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
                        { label: "Cancelled", count: 2, icon: XCircle, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" },
                    ].map((status, idx) => (
                        <div key={idx} className={`p-4 rounded-lg flex items-center justify-between border border-transparent ${status.color}`}>
                            <div>
                                <p className="text-xs font-bold uppercase opacity-80">{status.label}</p>
                                <h4 className="text-2xl font-bold">{status.count}</h4>
                            </div>
                            <status.icon size={24} className="opacity-80" />
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Recent Activity Feed */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm p-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">Real-Time Activity Feed</h3>
                <div className="space-y-0 text-sm"> {/* Compact list */}
                    {[
                        { time: "2 mins ago", msg: "New seller 'Organic Farms Punjab' joined.", type: "text-green-600" },
                        { time: "15 mins ago", msg: "Large order #ORD-9921 placed (₹12,400).", type: "text-blue-600" },
                        { time: "45 mins ago", msg: "Complaint #CPT-202 resolved by Admin.", type: "text-slate-500" },
                        { time: "1 hr ago", msg: "Stock Alert: 'Basmati Rice' low for seller Suresh.", type: "text-red-500" },
                        { time: "2 hrs ago", msg: "New payout request from Lakshmi Devi.", type: "text-orange-500" },
                    ].map((activity, idx) => (
                        <div key={idx} className="flex gap-4 py-2 border-b border-slate-50 dark:border-slate-700/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded px-2 transition-colors">
                            <span className="text-xs font-mono text-slate-400 whitespace-nowrap w-20">{activity.time}</span>
                            <span className={`font-medium ${activity.type}`}>{activity.msg}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
