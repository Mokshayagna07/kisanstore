import React from 'react';
import { Settings } from 'lucide-react';

const AdminSettings = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">System Settings</h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <Settings size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Panel Settings</h3>
                <p className="text-slate-500">Configure your dashboard preferences here.</p>
            </div>
        </div>
    );
};

export default AdminSettings;
