import React, { useState } from 'react';
import { Tag, Plus, Calendar, ArrowRight, Trash2, CheckSquare, XSquare } from 'lucide-react';

const DiscountManager = () => {
    const [discounts] = useState([
        { id: 1, name: 'Kashmiri Apples', basePrice: 120, discount: 5, finalPrice: 114, startDate: '2023-10-25', endDate: '2023-11-05', status: 'Active' },
        { id: 2, name: 'Basmati Rice', basePrice: 140, discount: 10, finalPrice: 126, startDate: '2023-10-20', endDate: '2023-10-30', status: 'Expiring Soon' },
        { id: 3, name: 'Almond Milk', basePrice: 350, discount: 15, finalPrice: 297.5, startDate: '2023-11-01', endDate: '2023-11-10', status: 'Scheduled' },
        { id: 4, name: 'Farm Potatoes', basePrice: 25, discount: 0, finalPrice: 25, startDate: '-', endDate: '-', status: 'No Discount' },
    ]);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-[calc(100vh-140px)]">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Tag size={20} className="text-slate-500" /> Discounts & Promotions
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium shadow-sm shadow-purple-200">
                    <Plus size={16} /> Create Promotion
                </button>
            </div>

            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Product</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Base Price</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Discount</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Final Price</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Duration</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Status</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                        {discounts.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">{item.name}</td>
                                <td className="px-6 py-4 text-slate-500 line-through">₹{item.basePrice}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded font-bold border border-purple-100">{item.discount}% OFF</span>
                                </td>
                                <td className="px-6 py-4 font-bold text-green-600">₹{item.finalPrice}</td>
                                <td className="px-6 py-4 text-xs text-slate-500">
                                    {item.startDate} <span className="mx-1">→</span> {item.endDate}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full 
                                        ${item.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            item.status === 'Expiring Soon' ? 'bg-orange-100 text-orange-700' :
                                                item.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-slate-100 text-slate-500'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="text-slate-400 hover:text-red-500" title="Remove Discount"><Trash2 size={16} /></button>
                                        <button className="text-slate-400 hover:text-blue-500" title="Edit"><ArrowRight size={16} /></button>
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

export default DiscountManager;
