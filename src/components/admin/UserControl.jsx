import React from 'react';
import { Users, Search, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const UserControl = () => {
    const users = [
        { name: 'Ramesh Kumar', role: 'Seller', email: 'ramesh@kisan.com', status: 'Active' },
        { name: 'Priya Sharma', role: 'Customer', email: 'priya.s@gmail.com', status: 'Active' },
        { name: 'Amit Singh', role: 'Staff', email: 'amit.ops@kisan.com', status: 'Active' },
        { name: 'Fraud Account', role: 'Customer', email: 'hacker@spam.com', status: 'Blocked' },
        { name: 'Suresh Patel', role: 'Seller', email: 'suresh@farm.com', status: 'Pending' },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <Users className="text-blue-500" /> Global Users Directory
                </h3>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Search user..." className="pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm outline-none" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-xs uppercase font-bold text-slate-500">
                        <tr>
                            <th className="px-6 py-4">User Name</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {users.map((user, i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">{user.name}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase
                                        ${user.role === 'Admin' ? 'bg-red-100 text-red-600' :
                                            user.role === 'Staff' ? 'bg-blue-100 text-blue-600' :
                                                user.role === 'Seller' ? 'bg-green-100 text-green-600' :
                                                    'bg-slate-100 text-slate-600'}`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`flex items-center gap-1 font-bold text-xs
                                        ${user.status === 'Active' ? 'text-green-500' :
                                            user.status === 'Blocked' ? 'text-red-500' : 'text-orange-500'}`
                                    }>
                                        {user.status === 'Active' ? <CheckCircle size={12} /> : user.status === 'Blocked' ? <XCircle size={12} /> : <AlertTriangle size={12} />}
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-xs font-bold text-slate-500 hover:text-blue-500">Edit</button>
                                    <button className="text-xs font-bold text-red-500 hover:text-red-700">Ban</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserControl;
