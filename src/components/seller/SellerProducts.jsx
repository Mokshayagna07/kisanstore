import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';

const SellerProducts = () => {
    // Mock Data for Products
    const [products, setProducts] = useState([
        { id: 101, name: 'Fresh Tomatoes', category: 'Vegetables', price: 40, stock: 45, status: 'Available' },
        { id: 102, name: 'Organic Potatoes', category: 'Vegetables', price: 30, stock: 0, status: 'Out of Stock' },
        { id: 103, name: 'Green Chilli', category: 'Vegetables', price: 60, stock: 12, status: 'Low Stock' },
    ]);

    return (
        <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search your products..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Plus size={20} /> Add New Product
                </button>
            </div>

            {/* Products Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs uppercase font-medium">
                        <tr>
                            <th className="p-4">Product Name</th>
                            <th className="p-4 hidden sm:table-cell">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Stock</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-4 font-medium text-slate-900 dark:text-white">{product.name}</td>
                                <td className="p-4 hidden sm:table-cell text-slate-500">{product.category}</td>
                                <td className="p-4 font-bold text-slate-700 dark:text-slate-300">₹{product.price}</td>
                                <td className="p-4 text-slate-600 dark:text-slate-400">{product.stock} kg</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${product.status === 'Available' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                                            product.status === 'Out of Stock' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' :
                                                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30'
                                        }`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded dark:hover:bg-blue-900/20"><Edit size={16} /></button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded dark:hover:bg-red-900/20"><Trash2 size={16} /></button>
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

export default SellerProducts;
