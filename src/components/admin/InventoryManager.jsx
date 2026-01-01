import React, { useState } from 'react';
import { Archive, AlertTriangle, RefreshCw, Filter, Search, ArrowUpDown, MoreHorizontal } from 'lucide-react';

const InventoryManager = () => {
    // Mock Data
    const [inventory] = useState([
        { id: 'INV-001', name: 'Kashmiri Apples', qty: 450, min: 100, status: 'In Stock', lastUpdated: 'Today, 10:30 AM' },
        { id: 'INV-002', name: 'Nagpur Oranges', qty: 25, min: 50, status: 'Low Stock', lastUpdated: 'Yesterday, 4:15 PM' },
        { id: 'INV-003', name: 'Red Grams', qty: 0, min: 200, status: 'Out of Stock', lastUpdated: '2 days ago' },
        { id: 'INV-004', name: 'Fresh Guava', qty: 120, min: 80, status: 'In Stock', lastUpdated: 'Today, 9:00 AM' },
        { id: 'INV-005', name: 'Farm Potatoes', qty: 5000, min: 1000, status: 'In Stock', lastUpdated: '3 days ago' },
        { id: 'INV-006', name: 'Organic Turmeric', qty: 45, min: 50, status: 'Low Stock', lastUpdated: 'Today, 11:00 AM' },
    ]);

    const getStatusStyle = (status) => {
        if (status === 'Out of Stock') return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200';
        if (status === 'Low Stock') return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200';
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200';
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-[calc(100vh-140px)]">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Archive size={20} className="text-slate-500" /> Inventory Control
                </h2>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mr-4 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Out: 1
                        <span className="w-2 h-2 rounded-full bg-orange-500 ml-2"></span> Low: 2
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 text-sm font-medium">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm font-medium">
                        <RefreshCw size={16} /> <span className="hidden sm:inline">Sync Stock</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Product Name</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Current Qty</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Min Threshold</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Status</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Last Updated</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700 text-right">Quick Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                        {inventory.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">
                                    {item.name}
                                    <div className="text-xs text-slate-400 font-normal">{item.id}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-lg">{item.qty}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {item.min} units
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusStyle(item.status)}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
                                    {item.lastUpdated}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md">Update Qty</button>
                                        <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded"><MoreHorizontal size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryManager;
