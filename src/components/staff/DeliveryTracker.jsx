import React from 'react';
import { Package, Truck, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const DeliveryTracker = () => {
    // Mock Data
    const deliveries = [
        { id: 'ORD-5001', user: 'Amit S', seller: 'Rajinder Singh', stage: 'Out for Delivery', eta: 'Today, 4 PM', status: 'On Time' },
        { id: 'ORD-5002', user: 'Priya V', seller: 'Lakshmi Devi', stage: 'Shipped', eta: 'Tomorrow', status: 'On Time' },
        { id: 'ORD-5003', user: 'Rahul S', seller: 'Suresh Patil', stage: 'Delayed', eta: '2 Days Late', status: 'Delayed', reason: 'Rain in Nashik' },
        { id: 'ORD-5004', user: 'Sneha G', seller: 'Ramesh Kumar', stage: 'Packed', eta: 'Tomorrow', status: 'On Time' },
        { id: 'ORD-5005', user: 'Vikram D', seller: 'Anita Roy', stage: 'Confirmed', eta: 'Pending', status: 'Action Required', reason: 'Seller not responding' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Delivery & Tracking</h2>

            {/* Status Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                    { label: 'Packed', count: 45, icon: Package, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' },
                    { label: 'Shipped', count: 32, icon: Truck, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' },
                    { label: 'On Way', count: 28, icon: Truck, color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20' },
                    { label: 'Out for Delivery', count: 12, icon: Truck, color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' },
                    { label: 'Delivered', count: 156, icon: CheckCircle, color: 'text-green-600 bg-green-50 dark:bg-green-900/20' },
                    { label: 'Delayed', count: 3, icon: AlertTriangle, color: 'text-red-600 bg-red-50 dark:bg-red-900/20' },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                        <div className={`p-2 rounded-full mb-2 ${stat.color}`}>
                            <stat.icon size={20} />
                        </div>
                        <span className="text-2xl font-bold text-slate-800 dark:text-white">{stat.count}</span>
                        <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Delivery Details Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Seller</th>
                            <th className="px-4 py-3">Current Stage</th>
                            <th className="px-4 py-3">ETA</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-red-500">Delay Reason</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                        {deliveries.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-4 py-2 font-medium text-slate-900 dark:text-white">{item.id}</td>
                                <td className="px-4 py-2">{item.user}</td>
                                <td className="px-4 py-2 text-slate-500">{item.seller}</td>
                                <td className="px-4 py-2 font-medium">{item.stage}</td>
                                <td className="px-4 py-2"><Clock size={12} className="inline mr-1 text-slate-400" /> {item.eta}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.status === 'On Time' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                                            item.status === 'Delayed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' :
                                                'bg-orange-100 text-orange-700 dark:bg-orange-900/30'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-red-500 text-xs font-medium">{item.reason || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeliveryTracker;
