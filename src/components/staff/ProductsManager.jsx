import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, MoreHorizontal } from 'lucide-react';

const ProductsManager = () => {
    const products = [
        { id: 1, name: 'Fresh Tomatoes', category: 'Vegetables', price: 40, stock: 150, status: 'In Stock' },
        { id: 2, name: 'Basmati Rice', category: 'Grains', price: 120, stock: 500, status: 'In Stock' },
        { id: 3, name: 'Potatoes', category: 'Vegetables', price: 30, stock: 0, status: 'Out of Stock' },
        { id: 4, name: 'Organic Honey', category: 'Others', price: 450, stock: 25, status: 'Low Stock' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                    <Plus size={20} />
                    Add Product
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs uppercase">
                            <th className="p-4">Product Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Stock</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-sm">
                                <td className="p-4 font-medium text-slate-900 dark:text-white">{product.name}</td>
                                <td className="p-4 text-slate-500">{product.category}</td>
                                <td className="p-4 font-bold">₹{product.price}</td>
                                <td className="p-4">{product.stock} kg</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${product.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                            product.status === 'Out of Stock' ? 'bg-red-100 text-red-700' :
                                                'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16} /></button>
                                        <button className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16} /></button>
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

export default ProductsManager;
