import React, { useState } from 'react';
import { MoreHorizontal, TrendingUp, TrendingDown, MapPin } from 'lucide-react';

const SellersManager = () => {
    // Mock Data
    const sellers = [
        { id: 1, name: "Rajinder Singh", location: "Punjab", products: 12, orders: 1540, revenue: 450000, profit: 45000, status: 'Active' },
        { id: 2, name: "Lakshmi Devi", location: "Karnataka", products: 8, orders: 890, revenue: 210000, profit: 21000, status: 'Active' },
        { id: 3, name: "Suresh Patil", location: "Maharashtra", products: 24, orders: 3200, revenue: 890000, profit: -12000, status: 'Warning' },
        { id: 4, name: "Ramesh Kumar", location: "Haryana", products: 5, orders: 120, revenue: 45000, profit: 4500, status: 'Active' },
        { id: 5, name: "Anita Roy", location: "West Bengal", products: 15, orders: 670, revenue: 180000, profit: 15000, status: 'Inactive' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Sellers Management</h2>

            {/* Seller List Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-4 py-3">Seller Name</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3 text-center">Products</th>
                            <th className="px-4 py-3 text-center">Orders</th>
                            <th className="px-4 py-3 text-right">Revenue</th>
                            <th className="px-4 py-3 text-right">Profit/Loss</th>
                            <th className="px-4 py-3 text-center">Status</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                        {sellers.map((seller) => (
                            <tr key={seller.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-4 py-2 font-medium text-slate-900 dark:text-white">{seller.name}</td>
                                <td className="px-4 py-2"><span className="flex items-center gap-1"><MapPin size={14} className="text-slate-400" /> {seller.location}</span></td>
                                <td className="px-4 py-2 text-center">{seller.products}</td>
                                <td className="px-4 py-2 text-center">{seller.orders.toLocaleString()}</td>
                                <td className="px-4 py-2 text-right">₹{seller.revenue.toLocaleString()}</td>
                                <td className={`px-4 py-2 text-right font-medium ${seller.profit >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                    {seller.profit >= 0 ? '+' : ''}₹{Math.abs(seller.profit).toLocaleString()}
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${seller.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                            seller.status === 'Warning' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                'bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-400'
                                        }`}>
                                        {seller.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500"><MoreHorizontal size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mock Detail Panel Area (Visual placeholder for "Dense" UI) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-sm text-slate-500 mb-4 uppercase tracking-wider">Top Performer</h3>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">🏆</div>
                        <div>
                            <p className="font-bold text-lg text-slate-800 dark:text-white">Rajinder Singh</p>
                            <p className="text-sm text-green-600 font-medium">₹45,000 Profit</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-sm text-slate-500 mb-4 uppercase tracking-wider">Needs Attention</h3>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-xl">📉</div>
                        <div>
                            <p className="font-bold text-lg text-slate-800 dark:text-white">Suresh Patil</p>
                            <p className="text-sm text-red-500 font-medium">₹12,000 Loss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellersManager;
