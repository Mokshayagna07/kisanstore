import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, PieChart, Download, Calendar } from 'lucide-react';

const AnalyticsReport = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <BarChart3 className="text-blue-600" /> Business Analytics
                </h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium">
                        <Calendar size={16} /> Last 30 Days
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium shadow-sm">
                        <Download size={16} /> Export Reports
                    </button>
                </div>
            </div>

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Total Revenue</h3>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">₹12,45,000</span>
                        <span className="flex items-center text-green-600 text-sm font-medium mb-1"><TrendingUp size={16} className="mr-1" /> +15%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Total Disorders</h3>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">1,240</span>
                        <span className="flex items-center text-green-600 text-sm font-medium mb-1"><TrendingUp size={16} className="mr-1" /> +8%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Avg. Order Value</h3>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">₹950</span>
                        <span className="flex items-center text-red-600 text-sm font-medium mb-1"><TrendingDown size={16} className="mr-1" /> -2%</span>
                    </div>
                </div>
            </div>

            {/* Charts Section (Visual Mockups) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm h-80 flex flex-col">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-6">Daily Sales Trend</h3>
                    <div className="flex-1 flex items-end justify-between gap-2 px-2">
                        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                            <div key={i} className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm relative group cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors" style={{ height: `${h}%` }}>
                                <div className="absolute active bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ₹{h * 1000}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                        <span>1 Oct</span>
                        <span>15 Oct</span>
                        <span>30 Oct</span>
                    </div>
                </div>

                {/* Category Pie */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm h-80 flex flex-col">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-6">Sales by Category</h3>
                    <div className="flex-1 flex items-center justify-center gap-8">
                        <div className="w-40 h-40 rounded-full border-[16px] border-green-500 border-r-blue-500 border-b-orange-500 border-l-purple-500 relative">
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Vegetables (40%)</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Fruits (25%)</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Grains (20%)</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Dairy (15%)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-white">Top Selling Products</div>
                    <table className="w-full text-sm text-left">
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {[
                                { name: 'Kashmiri Apples', sold: '1,200 kg', revenue: '₹1,44,000' },
                                { name: 'Farm Potatoes', sold: '5,000 kg', revenue: '₹1,25,000' },
                                { name: 'Basmati Rice', sold: '800 kg', revenue: '₹1,12,000' },
                            ].map((p, i) => (
                                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                    <td className="p-4">{p.name}</td>
                                    <td className="p-4 text-slate-500">{p.sold}</td>
                                    <td className="p-4 font-medium text-right text-green-600">{p.revenue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-white">Low Performing Products</div>
                    <table className="w-full text-sm text-left">
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {[
                                { name: 'Kiwi Fruit', sold: '5 kg', status: 'High Price' },
                                { name: 'Dragon Fruit', sold: '12 kg', status: 'Low Demand' },
                                { name: 'Black Grams', sold: '20 kg', status: 'Seasonal' },
                            ].map((p, i) => (
                                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                    <td className="p-4">{p.name}</td>
                                    <td className="p-4 text-slate-500">{p.sold}</td>
                                    <td className="p-4 text-right"><span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">{p.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsReport;
