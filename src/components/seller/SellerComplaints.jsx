import React from 'react';
import { MessageSquare } from 'lucide-react';

const SellerComplaints = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Customer Complaints</h2>
            <div className="bg-white dark:bg-slate-800 p-10 rounded-xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center h-64">
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-full mb-4">
                    <MessageSquare size={32} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Great Job!</h3>
                <p className="text-slate-500">You have no active complaints from customers.</p>
            </div>
        </div>
    );
};

export default SellerComplaints;
