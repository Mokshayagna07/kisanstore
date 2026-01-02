import React from 'react';
import { FileText, Download } from 'lucide-react';

const ReportsPanel = () => {
    const reports = [
        { title: 'Monthly Revenue Report', desc: 'Consolidated earnings & commission' },
        { title: 'Seller Performance', desc: 'Top sellers, ratings & cancellations' },
        { title: 'User Growth & Retention', desc: 'New signups vs drop-offs' },
        { title: 'Complaint Trends', desc: 'Resolution times & common issues' },
        { title: 'Audit Trail Export', desc: 'Full security logs for compliance' },
        { title: 'Tax & Compliance', desc: 'GST input/output reports' },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <FileText className="text-orange-500" /> System Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report, i) => (
                    <div key={i} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 cursor-pointer transition-colors group">
                        <div className="flex items-start justify-between mb-3">
                            <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-slate-500 group-hover:text-blue-500 transition-colors">
                                <FileText size={20} />
                            </div>
                            <Download size={18} className="text-slate-400 group-hover:text-blue-500" />
                        </div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">{report.title}</h4>
                        <p className="text-xs text-slate-500">{report.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReportsPanel;
