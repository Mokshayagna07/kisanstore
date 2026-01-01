import React, { useState } from 'react';
import { Truck, MapPin, Calendar, Clock, AlertCircle, CheckCircle, Plus } from 'lucide-react';

const SupplierTracker = () => {
    const [shipments] = useState([
        { id: 'SHP-9001', supplier: 'Maharaj Orchards', product: 'Ratnagiri Alphonso Mangoes', qty: '500 Dozen', date: 'Today, 4:00 PM', status: 'On the Way', location: 'Near Pune Highway', delay: null },
        { id: 'SHP-9002', supplier: 'Punjab Fields Co.', product: 'Organic Basmati Rice', qty: '1000 kg', date: 'Tomorrow, 9:00 AM', status: 'Scheduled', location: 'Dispatched from Chandigarh', delay: null },
        { id: 'SHP-9003', supplier: 'Mahabaleshwar Farms', product: 'Fresh Strawberries', qty: '200 Boxes', date: 'Today, 2:00 PM', status: 'Delayed', location: 'Stuck at Toll Plaza', delay: 'Traffic Congestion' },
    ]);

    const getStatusStyle = (status) => {
        if (status === 'Delayed') return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
        if (status === 'On the Way') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
        return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-[calc(100vh-140px)]">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Truck size={20} className="text-slate-500" /> Incoming Shipments
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium shadow-sm shadow-blue-200">
                    <Plus size={16} /> Schedule Shipment
                </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-4">
                    {shipments.map((item) => (
                        <div key={item.id} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4 flex flex-col sm:flex-row items-center gap-6 group hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                            {/* Icon Column */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 shadow-sm">
                                    <Truck size={24} />
                                </div>
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg">{item.supplier}</h4>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">{item.product} • <span className="text-slate-800 dark:text-slate-200">{item.qty}</span></p>
                                <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 text-sm text-slate-500">
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                                    {item.delay && (
                                        <span className="flex items-center gap-1 text-red-600 font-medium"><AlertCircle size={14} /> {item.delay}</span>
                                    )}
                                </div>
                            </div>

                            {/* Date & Status */}
                            <div className="flex flex-col items-end gap-2 min-w-[140px]">
                                <div className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                                    <Calendar size={14} /> {item.date}
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(item.status)}`}>
                                    {item.status}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 border-l pl-6 border-slate-200 dark:border-slate-700">
                                <button className="p-2 hover:bg-green-100 text-green-600 rounded-full transition-colors" title="Mark Arrived">
                                    <CheckCircle size={20} />
                                </button>
                                <button className="p-2 hover:bg-red-100 text-red-600 rounded-full transition-colors" title="Report Delay">
                                    <Clock size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplierTracker;
