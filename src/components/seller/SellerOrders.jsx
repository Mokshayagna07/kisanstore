import React from 'react';
import { Package, Truck, Check, X, Clock } from 'lucide-react';

const SellerOrders = () => {
    // Mock Data
    const orders = [
        { id: '#ORD-9921', product: 'Fresh Tomatoes (5kg)', qty: 1, date: 'Oct 25', status: 'New', val: 200 },
        { id: '#ORD-9920', product: 'Potatoes (10kg)', qty: 1, date: 'Oct 24', status: 'Shipped', val: 300 },
        { id: '#ORD-9919', product: 'Basmati Rice (25kg)', qty: 2, date: 'Oct 24', status: 'Delivered', val: 2500 },
    ];

    return (
        <div className="space-y-6">
            {/* Order Status Counts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'New Orders', count: 5, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' },
                    { label: 'In Progress', count: 2, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/20' },
                    { label: 'Delivered', count: 45, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
                    { label: 'Cancelled', count: 1, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20' }
                ].map((stat, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border border-transparent ${stat.bg}`}>
                        <p className="text-xs font-bold uppercase opacity-70 mb-1">{stat.label}</p>
                        <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.count}</h3>
                    </div>
                ))}
            </div>

            {/* Orders Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-800 dark:text-white">Recent Orders</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs uppercase font-medium">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Product</th>
                            <th className="p-4 text-center">Qty</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Value</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="p-4 font-medium">{order.id}</td>
                                <td className="p-4 text-slate-600 dark:text-slate-300">{order.product}</td>
                                <td className="p-4 text-center">{order.qty}</td>
                                <td className="p-4 text-slate-500">{order.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold flex w-fit items-center gap-1 ${order.status === 'New' ? 'bg-blue-100 text-blue-700' :
                                            order.status === 'Shipped' ? 'bg-orange-100 text-orange-700' :
                                                order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                        }`}>
                                        {order.status === 'New' && <Clock size={12} />}
                                        {order.status === 'Shipped' && <Truck size={12} />}
                                        {order.status === 'Delivered' && <Check size={12} />}
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right font-bold">₹{order.val}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerOrders;
