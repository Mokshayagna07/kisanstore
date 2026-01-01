import React from 'react';
import { Package, AlertTriangle } from 'lucide-react';

const SellerStock = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Stock Management</h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <Package size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Inventory Overview</h3>
                <p className="text-slate-500 mb-6">Track your product stock levels here.</p>
                <div className="p-4 bg-yellow-50 text-yellow-800 rounded border border-yellow-200 inline-flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <span className="text-sm font-bold">Alert: 'Potatoes' are Out of Stock!</span>
                </div>
            </div>
        </div>
    );
};

export default SellerStock;
