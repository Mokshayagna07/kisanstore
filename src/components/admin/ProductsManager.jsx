import React, { useState } from 'react';
import { Package, Edit, Trash2, Plus, Upload, Filter, Search, MoreVertical, FileDown, CheckCircle, XCircle } from 'lucide-react';

const ProductsManager = () => {
    // Mock Data
    const [products] = useState([
        { id: 'P-101', name: 'Kashmiri Apples', category: 'Fruits', unit: 'kg', cost: 80, price: 120, discount: 5, tax: 5, status: 'Active', image: '🍎' },
        { id: 'P-102', name: 'Organic Turmeric', category: 'Spices', unit: 'packet', cost: 40, price: 65, discount: 0, tax: 12, status: 'Active', image: '🍠' },
        { id: 'P-103', name: 'Basmati Rice', category: 'Grains', unit: 'kg', cost: 90, price: 140, discount: 10, tax: 0, status: 'Active', image: '🍚' },
        { id: 'P-104', name: 'Fresh Coriander', category: 'Vegetables', unit: 'bunch', cost: 10, price: 20, discount: 0, tax: 0, status: 'Inactive', image: '🌿' },
        { id: 'P-105', name: 'Almond Milk', category: 'Beverages', unit: 'litre', cost: 200, price: 350, discount: 15, tax: 18, status: 'Active', image: '🥛' },
    ]);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-[calc(100vh-140px)]">
            {/* Header / Actions */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search products by name, category..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                        <Upload size={16} /> Bulk Upload
                    </button>
                    <button className="flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium shadow-sm shadow-green-200">
                        <Plus size={16} /> Add Product
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Product Name</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Category</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Cost</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Selling Price</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700 text-center">Disc. %</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700 text-center">Tax %</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700">Status</th>
                            <th className="px-6 py-4 border-b dark:border-slate-700 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-lg">
                                            {product.image}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800 dark:text-white">{product.name}</p>
                                            <p className="text-xs text-slate-400">{product.unit}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs border border-slate-200 dark:border-slate-600">
                                        {product.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-500">₹{product.cost}</td>
                                <td className="px-6 py-4 font-medium">₹{product.price}</td>
                                <td className="px-6 py-4 text-center text-slate-500">{product.discount > 0 ? product.discount + '%' : '-'}</td>
                                <td className="px-6 py-4 text-center text-slate-500">{product.tax > 0 ? product.tax + '%' : '0%'}</td>
                                <td className="px-6 py-4">
                                    {product.status === 'Active' ? (
                                        <div className="flex items-center gap-1.5 text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full w-fit">
                                            <CheckCircle size={12} /> <span className="text-xs font-semibold">Active</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full w-fit">
                                            <XCircle size={12} /> <span className="text-xs font-semibold">Inactive</span>
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Edit">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Disable">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination / Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex justify-between items-center">
                <span>Showing 5 of 148 products</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700">Previous</button>
                    <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsManager;
