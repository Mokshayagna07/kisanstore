import React, { useState } from 'react';
import { Clock, Package, CheckCircle, Eye } from 'lucide-react';

const OrdersManager = () => {
    // Mock Data
    const orders = [
        { id: '#ORD-7829', customer: 'Ramesh Gupta', items: 4, total: 450, date: 'Oct 24, 2023', status: 'Pending', payment: 'Paid' },
        { id: '#ORD-7830', customer: 'Sita Verma', items: 2, total: 120, date: 'Oct 24, 2023', status: 'Delivered', payment: 'Paid' },
        { id: '#ORD-7831', customer: 'John Doe', items: 12, total: 3400, date: 'Oct 23, 2023', status: 'Processing', payment: 'COD' },
        { id: '#ORD-7832', customer: 'Anita Roy', items: 5, total: 890, date: 'Oct 23, 2023', status: 'Pending', payment: 'Paid' },
    ];

    return (
        <div className="flex flex-col gap-6">
            {/* Orders Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm h-48 flex flex-col justify-center items-center">
                    <Clock size={32} className="text-blue-500 mb-2" />
                    <span className="font-bold text-slate-700 dark:text-slate-300">Orders per Day</span>
                    <span className="text-xs text-slate-400">(Chart Placeholder)</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm h-48 flex flex-col justify-center items-center">
                    <Package size={32} className="text-purple-500 mb-2" />
                    <span className="font-bold text-slate-700 dark:text-slate-300">Orders per Week</span>
                    <span className="text-xs text-slate-400">(Chart Placeholder)</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm h-48 flex flex-col justify-center items-center">
                    <CheckCircle size={32} className="text-green-500 mb-2" />
                    <span className="font-bold text-slate-700 dark:text-slate-300">Orders per Month</span>
                    <span className="text-xs text-slate-400">(Chart Placeholder)</span>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-800 dark:text-white">Recent Orders</h3>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700">Filter</button>
                        <button className="px-3 py-1.5 text-xs font-bold bg-primary text-white rounded hover:bg-primary-dark">Download</button>
                    </div>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Items</th>
                            <th className="px-4 py-3 text-right">Value</th>
                            <th className="px-4 py-3 text-center">Date</th>
                            <th className="px-4 py-3 text-center">Status</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-4 py-2 font-medium text-slate-900 dark:text-white">{order.id}</td>
                                <td className="px-4 py-2">{order.customer}</td>
                                <td className="px-4 py-2 text-slate-500">{order.items} items</td>
                                <td className="px-4 py-2 text-right">₹{order.total}</td>
                                <td className="px-4 py-2 text-center text-xs">{order.date}</td>
                                <td className="px-4 py-2 text-center">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                                            order.status === 'Pending' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                                                'bg-orange-100 text-orange-700 dark:bg-orange-900/30'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><Eye size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersManager;
