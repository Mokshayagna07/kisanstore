import React from 'react';
import { BarChart3 } from 'lucide-react';

const AnalyticsReport = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Reports & Analytics</h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <BarChart3 size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Analytics Dashboard</h3>
                <p className="text-slate-500">Detailed reports will appear here.</p>
            </div>
        </div>
    );
};

export default AnalyticsReport;
