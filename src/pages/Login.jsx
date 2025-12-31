import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, User, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [role, setRole] = useState('user'); // 'user' or 'admin'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Force role check logic manually for the demo to ensure correct login type
        if (role === 'admin' && email !== 'admin@kisan.com') {
            setError('Invalid Admin Email. Try admin@kisan.com');
            return;
        }

        const result = login(email, password);

        if (result.success) {
            if (result.role === role) {
                if (result.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                setError(`This account is not authorized as ${role === 'admin' ? 'Admin' : 'User'}`);
            }
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">

                {/* Brand */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <Leaf className="h-8 w-8 fill-current" />
                        <span className="text-slate-900 dark:text-white">Kisan<span className="text-primary">Store</span></span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6">Welcome Back</h2>

                {/* Role Tabs */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-slate-700 rounded-xl mb-8">
                    <button
                        onClick={() => { setRole('user'); setEmail(''); setPassword(''); setError(''); }}
                        className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${role === 'user' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
                    >
                        <User size={18} /> Login
                    </button>
                    <button
                        onClick={() => { setRole('admin'); setEmail('admin@kisan.com'); setPassword(''); setError(''); }}
                        className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${role === 'admin' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
                    >
                        <ShieldCheck size={18} /> Admin / Owner
                    </button>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            {role === 'admin' ? 'Admin Email' : 'Email Address'}
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all"
                            placeholder={role === 'admin' ? "admin@kisan.com" : "farmer@example.com"}
                            required
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                            {role === 'user' && <a href="#" className="text-sm text-primary hover:underline">Forgot?</a>}
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all"
                            placeholder="••••••••"
                            required
                        />
                        {role === 'admin' && <p className="text-xs text-slate-400 mt-2">Hint: Use <b>admin123</b></p>}
                    </div>
                    <button className="w-full btn btn-primary py-3.5">
                        {role === 'admin' ? 'Login to Dashboard' : 'Sign In to Shop'}
                    </button>
                </form>

                {role === 'user' && (
                    <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                        Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Create Account</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
