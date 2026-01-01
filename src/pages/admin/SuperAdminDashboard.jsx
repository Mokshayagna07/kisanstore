import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Shield, Users, Server, Activity, LogOut } from 'lucide-react';

const SuperAdminDashboard = () => {
    const { logout } = useAuth();

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 font-mono">
            <header className="h-16 border-b border-zinc-900 flex items-center justify-between px-8 bg-black">
                <div className="flex items-center gap-3">
                    <Shield className="text-red-600" size={24} />
                    <h1 className="text-lg font-bold tracking-widest uppercase">Super<span className="text-red-600">Admin</span> Core</h1>
                </div>
                <button onClick={logout} className="text-xs uppercase hover:text-red-500 font-bold tracking-wider flex items-center gap-2">
                    <LogOut size={14} /> Terminate Session
                </button>
            </header>

            <main className="p-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-zinc-900 p-6 border border-zinc-800 rounded">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xs uppercase text-zinc-500 font-bold">System Status</h3>
                            <Activity className="text-green-500" size={16} />
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">OPERATIONAL</p>
                        <p className="text-xs text-zinc-600">Uptime: 99.99%</p>
                    </div>
                    <div className="bg-zinc-900 p-6 border border-zinc-800 rounded">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xs uppercase text-zinc-500 font-bold">Global Users</h3>
                            <Users className="text-blue-500" size={16} />
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">142,059</p>
                        <p className="text-xs text-zinc-600">Across all roles</p>
                    </div>
                    <div className="bg-zinc-900 p-6 border border-zinc-800 rounded">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xs uppercase text-zinc-500 font-bold">Server Load</h3>
                            <Server className="text-orange-500" size={16} />
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">34%</p>
                        <p className="text-xs text-zinc-600">Optimal Performance</p>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded p-6">
                    <h2 className="text-sm font-bold uppercase text-red-500 mb-6 border-b border-zinc-800 pb-2">Critical Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button className="p-4 border border-zinc-800 hover:border-red-900 hover:bg-zinc-950 transition-all text-left group">
                            <span className="block text-xs text-zinc-500 mb-1 group-hover:text-red-500">Database</span>
                            <span className="font-bold text-white">Flush Cache</span>
                        </button>
                        <button className="p-4 border border-zinc-800 hover:border-red-900 hover:bg-zinc-950 transition-all text-left group">
                            <span className="block text-xs text-zinc-500 mb-1 group-hover:text-red-500">Security</span>
                            <span className="font-bold text-white">Audit Logs</span>
                        </button>
                        <button className="p-4 border border-zinc-800 hover:border-red-900 hover:bg-zinc-950 transition-all text-left group">
                            <span className="block text-xs text-zinc-500 mb-1 group-hover:text-red-500">Users</span>
                            <span className="font-bold text-white">Ban User</span>
                        </button>
                        <button className="p-4 border border-zinc-800 hover:border-red-900 hover:bg-zinc-950 transition-all text-left group">
                            <span className="block text-xs text-zinc-500 mb-1 group-hover:text-red-500">System</span>
                            <span className="font-bold text-white">Maintenance Mode</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SuperAdminDashboard;
