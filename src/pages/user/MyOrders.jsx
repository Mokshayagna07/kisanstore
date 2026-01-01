import React from 'react';
import { Package, Truck, CheckCircle, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    // Mock Data
    const orders = [
        {
            id: 'ORD-2983',
            date: 'Today, 2:30 PM',
            total: 540,
            status: 'Out for Delivery',
            items: ['Kashmiri Apples (2kg)', 'Fresh Coriander (1 bunch)'],
            statusColor: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20',
            icon: <Truck size={16} />
        },
        {
            id: 'ORD-2810',
            date: 'Yesterday',
            total: 1200,
            status: 'Shipped',
            items: ['Basmati Rice (5kg)', 'Dal (1kg)'],
            statusColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
            icon: <Package size={16} />
        },
        {
            id: 'ORD-2500',
            date: '25 Oct 2023',
            total: 350,
            status: 'Delivered',
            items: ['Fresh Milk (2L)', 'Eggs (12)'],
            statusColor: 'text-green-600 bg-green-50 dark:bg-green-900/20',
            icon: <CheckCircle size={16} />
        }
    ];

    if (orders.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
                <div className="w-48 h-48 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <Package size={64} className="text-slate-300 dark:text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">You haven't placed any orders yet</h2>
                <p className="text-slate-500 mb-6">Fresh produce from our farmers is waiting for you.</p>
                <Link to="/shop" className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">
                    Shop Fresh Produce
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Orders</h1>

                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-slate-800 dark:text-white">Order #{order.id}</h3>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${order.statusColor}`}>
                                            {order.icon} {order.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 flex items-center gap-1">
                                        <Clock size={14} /> Placed {order.date}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block font-bold text-lg text-slate-900 dark:text-white">₹{order.total}</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 dark:border-slate-700 py-3 mb-3">
                                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-1">
                                    {order.items.join(', ')} {order.items.length > 2 && `+${order.items.length - 2} more`}
                                </p>
                            </div>

                            <div className="flex justify-end gap-3">
                                {order.status === 'Delivered' ? (
                                    <button className="text-sm font-medium text-primary hover:text-primary-dark border border-primary/20 px-4 py-2 rounded-lg transition-colors">
                                        Reorder
                                    </button>
                                ) : (
                                    <Link to={`/order/${order.id}`} className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors animate-pulse-slow">
                                        Track Order <ChevronRight size={16} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
