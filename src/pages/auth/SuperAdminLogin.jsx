import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SuperAdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (email !== 'super@kisan.com') {
            setError('Unauthorized Access');
            return;
        }

        const result = login(email, password);

        if (result.success && result.role === 'super_admin') {
            navigate('/super-admin');
        } else {
            setError('Invalid Super Admin Credentials');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-2xl">
                <div className="flex justify-center mb-8">
                    <Shield className="h-10 w-10 text-red-600" />
                </div>

                <h2 className="text-xl font-mono font-bold text-center text-zinc-400 mb-8 tracking-widest uppercase">
                    Restricted Access
                </h2>

                {error && (
                    <div className="bg-red-900/30 border border-red-900 text-red-500 p-3 rounded mb-6 text-xs font-mono text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-3 rounded text-sm focus:border-red-900 focus:outline-none focus:ring-1 focus:ring-red-900/50 font-mono placeholder-zinc-700"
                            placeholder="AUTH_ID"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-3 rounded text-sm focus:border-red-900 focus:outline-none focus:ring-1 focus:ring-red-900/50 font-mono placeholder-zinc-700"
                            placeholder="ACCESS_KEY"
                            required
                        />
                    </div>
                    <button className="w-full bg-red-700 hover:bg-red-800 text-white font-mono uppercase text-xs font-bold py-3 rounded tracking-wider transition-colors flex items-center justify-center gap-2">
                        <Lock size={14} /> Authenticate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SuperAdminLogin;
