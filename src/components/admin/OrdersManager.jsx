import React, { useState } from 'react';
import { Search, Filter, Eye, MoreHorizontal, CheckCircle, Clock, Truck } from 'lucide-react';

const OrdersManager = () => {
    const orders = [
        { id: '#ORD-7829', customer: 'Ramesh Gupta', items: 4, total: 450, date: 'Oct 24, 2023', status: 'Pending' },
        { id: '#ORD-7830', customer: 'Sita Verma', items: 2, total: 120, date: 'Oct 24, 2023', status: 'Delivered' },
        { id: '#ORD-7831', customer: 'John Doe', items: 12, total: 3400, date: 'Oct 23, 2023', status: 'Processing' },
        { id: '#ORD-7832', customer: 'Anita Roy', items: 5, total: 890, date: 'Oct 23, 2023', status: 'Pending' },
        { id: '#ORD-7833', customer: 'Vikram Singh', items: 1, total: 60, date: 'Oct 22, 2023', status: 'Delivered' },
    ];

    const [filterStatus, setFilterStatus] = useState('All');

    const filteredOrders = filterStatus === 'All'
        ? orders
        : orders.filter(order => order.status === filterStatus);

    const getStatusColor = (status) => {
        if (status === 'Delivered') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
        if (status === 'Pending') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
        if (status === 'Processing') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
        return 'bg-gray-100 text-gray-700';
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Order ID or User"
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Pending', 'Processing', 'Delivered'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === status
                                    ? 'bg-primary text-white'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs uppercase">
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Total</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {filteredOrders.map(order => (
                                <tr key={order.id} className="text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 font-medium text-slate-900 dark:text-white">{order.id}</td>
                                    <td className="p-4">{order.customer}</td>
                                    <td className="p-4">{order.date}</td>
                                    <td className="p-4 font-bold">₹{order.total}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status === 'Delivered' && <CheckCircle size={12} className="mr-1" />}
                                            {order.status === 'Pending' && <Clock size={12} className="mr-1" />}
                                            {order.status === 'Processing' && <Truck size={12} className="mr-1" />}
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500 transition-colors">
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersManager;
