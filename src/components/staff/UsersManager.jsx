import React from 'react';
import { Mail, Phone, ShoppingBag, Clock, MoreHorizontal } from 'lucide-react';

const UsersManager = () => {
    // Mock Data
    const users = [
        { id: 101, name: "Amit Sharma", contact: "9876543210", email: "amit@example.com", orders: 45, spend: 12500, lastActive: "2 mins ago", status: "Active" },
        { id: 102, name: "Priya Verma", contact: "9123456780", email: "priya@example.com", orders: 12, spend: 3400, lastActive: "1 day ago", status: "Active" },
        { id: 103, name: "Rahul Singh", contact: "8899776655", email: "rahul@test.com", orders: 2, spend: 450, lastActive: "1 week ago", status: "Inactive" },
        { id: 104, name: "Sneha Gupta", contact: "7766554433", email: "sneha@mail.com", orders: 89, spend: 45000, lastActive: "5 mins ago", status: "VIP" },
        { id: 105, name: "Vikram Das", contact: "9988001122", email: "vikram@web.com", orders: 0, spend: 0, lastActive: "2 months ago", status: "Inactive" },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Users Management</h2>

            {/* Users Table */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-4 py-3">User Name</th>
                            <th className="px-4 py-3">Contact Info</th>
                            <th className="px-4 py-3 text-center">Orders</th>
                            <th className="px-4 py-3 text-right">Total Spend</th>
                            <th className="px-4 py-3">Last Active</th>
                            <th className="px-4 py-3 text-center">Status</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-4 py-2">
                                    <div className="font-medium text-slate-900 dark:text-white">{user.name}</div>
                                    <div className="text-xs text-slate-400">ID: #{user.id}</div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2 text-xs text-slate-500"><Phone size={12} /> {user.contact}</div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500"><Mail size={12} /> {user.email}</div>
                                </td>
                                <td className="px-4 py-2 text-center text-slate-900 dark:text-white font-medium">{user.orders}</td>
                                <td className="px-4 py-2 text-right text-slate-900 dark:text-white">₹{user.spend.toLocaleString()}</td>
                                <td className="px-4 py-2 text-slate-500 text-xs"><Clock size={12} className="inline mr-1" /> {user.lastActive}</td>
                                <td className="px-4 py-2 text-center">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${user.status === 'VIP' ? 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300' :
                                            user.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300' :
                                                'bg-gray-50 text-gray-600 border-gray-200 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500"><MoreHorizontal size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManager;
