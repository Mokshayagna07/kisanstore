import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Truck, Package, ShoppingBag, MapPin, Phone, MessageCircle, Download, ChevronLeft } from 'lucide-react';

const OrderTracking = () => {
    const { id } = useParams();
    const [progress, setProgress] = useState(0);

    // Mock Steps
    const steps = [
        { status: 'Order Confirmed', date: 'Today, 9:00 AM', desc: 'Your order has been verified.', completed: true, icon: <ShoppingBag size={20} /> },
        { status: 'Packed', date: 'Today, 11:30 AM', desc: 'Farmer has packed your fresh produce.', completed: true, icon: <Package size={20} /> },
        { status: 'Shipped', date: 'Today, 2:00 PM', desc: 'Handed over to local delivery partner.', completed: true, icon: <Truck size={20} /> },
        { status: 'Out for Delivery', date: 'Today, 2:30 PM', desc: 'Ramesh is on the way to your location.', completed: false, current: true, icon: <MapPin size={20} /> },
        { status: 'Delivered', date: 'Estimated 3:15 PM', desc: 'Handover at doorstep.', completed: false, icon: <Check size={20} /> },
    ];

    useEffect(() => {
        // Simple animation simulation
        const timer = setTimeout(() => setProgress(65), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <Link to="/orders" className="inline-flex items-center text-slate-500 hover:text-primary mb-6 transition-colors">
                    <ChevronLeft size={20} /> Back to My Orders
                </Link>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Order #{id || 'ORD-2983'}</h1>
                            <p className="text-sm text-slate-500">Placed on Today, 9:00 AM</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
                                <Download size={16} /> Invoice
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                                <MessageCircle size={16} /> Help
                            </button>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="p-8">
                        <div className="relative">
                            {/* Connecting Line Background */}
                            <div className="absolute left-6 top-8 bottom-8 w-1 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                            {/* Connecting Line Progress (Animated) */}
                            <div className="absolute left-6 top-8 w-1 bg-green-500 rounded-full transition-all duration-1000 ease-out" style={{ height: `${progress}%` }}></div>

                            <div className="space-y-8">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="relative flex items-start gap-6 group">
                                        {/* Icon Bubble */}
                                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500
                                            ${step.completed || step.current ? 'bg-green-500 border-green-100 dark:border-green-900 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300'}`}>
                                            {step.completed ? <Check size={20} /> : step.icon}
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 pt-2 transition-all duration-500 ${step.completed || step.current ? 'opacity-100' : 'opacity-60'}`}>
                                            <div className="flex justify-between items-start">
                                                <h3 className={`font-bold text-lg ${step.current ? 'text-green-600' : 'text-slate-800 dark:text-white'}`}>{step.status}</h3>
                                                <span className="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{step.date}</span>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery & Product Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Delivery Address */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Delivery Details</h3>
                        <div className="flex items-start gap-3 mb-4">
                            <MapPin className="text-slate-400 mt-1" size={20} />
                            <div>
                                <p className="font-bold text-slate-800 dark:text-white">Home</p>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    H.No 42, Green Avenue,<br />
                                    Near Farmer Market, Sector 12,<br />
                                    New Delhi - 110001
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                                🚲
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">Delivery Partner</p>
                                <p className="text-xs text-slate-500">Ramesh Kumar (+91 98*** **210)</p>
                            </div>
                            <button className="ml-auto p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors">
                                <Phone size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Product Summary</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Kashmiri Apples', qty: '2 kg', price: 240, img: '🍎' },
                                { name: 'Fresh Coriander', qty: '1 bunch', price: 20, img: '🌿' },
                                { name: 'Basmati Rice', qty: '2 kg', price: 280, img: '🍚' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-xl">
                                        {item.img}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-slate-800 dark:text-white">{item.name}</p>
                                        <p className="text-xs text-slate-500">Qty: {item.qty}</p>
                                    </div>
                                    <span className="font-bold text-slate-700 dark:text-slate-300">₹{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                            <span className="text-sm text-slate-500">Total Amount</span>
                            <span className="text-lg font-bold text-primary">₹540</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
