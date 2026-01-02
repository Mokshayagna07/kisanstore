import React from 'react';
import { ShieldAlert } from 'lucide-react';

const SecurityLogs = () => {
    const logs = [
        { user: 'admin@kisan.com', action: 'System Login', date: '2023-10-25 10:42 AM', ip: '192.168.1.1', level: 'Info' },
        { user: 'staff@kisan.com', action: 'Approved Seller #442', date: '2023-10-25 09:15 AM', ip: '192.168.1.12', level: 'Success' },
        { user: 'unknown', action: 'Failed Login (Wait)', date: '2023-10-25 04:00 AM', ip: '45.22.12.11', level: 'Warning' },
        { user: 'admin@kisan.com', action: 'Changed Tax Settings', date: '2023-10-24 11:00 PM', ip: '192.168.1.1', level: 'Critical' },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <ShieldAlert className="text-purple-500" /> Security Audit Logs
                </h3>
            </div>
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                <thead className="bg-slate-50 dark:bg-slate-900 text-xs uppercase font-bold text-slate-500">
                    <tr>
                        <th className="px-6 py-4">User</th>
                        <th className="px-6 py-4">Action</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">IP Address</th>
                        <th className="px-6 py-4">Level</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                    {logs.map((log, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                            <td className="px-6 py-3 font-medium">{log.user}</td>
                            <td className="px-6 py-3">{log.action}</td>
                            <td className="px-6 py-3 font-mono text-xs">{log.date}</td>
                            <td className="px-6 py-3 font-mono text-xs text-slate-400">{log.ip}</td>
                            <td className="px-6 py-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border
                                    ${log.level === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                                        log.level === 'Warning' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                            'bg-blue-50 text-blue-600 border-blue-100'}`
                                }>
                                    {log.level}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SecurityLogs;
