import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Leaf, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Check if a role was passed from the previous page (e.g. Login)
    const initialRole = location.state?.initialRole || 'user';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(initialRole); // Initialize with passed role
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await signup(name, email, password, role);

        if (result.success) {
            if (role === 'seller') {
                navigate('/admin'); // Redirect sellers to their dashboard
            } else {
                navigate('/'); // Redirect customers to home
            }
        } else {
            setError(result.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700 animate-fade-in-up">
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <Leaf className="h-8 w-8 fill-current" />
                        <span className="text-slate-900 dark:text-white">Kisan<span className="text-primary">Store</span></span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Create Account</h2>
                <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Join thousands of farmers today</p>

                {error && (
                    <div className="mb-4 bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Role Toggle - Moved Outside Form for Stability */}
                <div className="flex bg-gray-100 dark:bg-slate-700 p-1 rounded-lg mb-6">
                    <button
                        type="button"
                        onClick={() => setRole('user')}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${role === 'user' ? 'bg-white dark:bg-slate-600 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        Customer
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('seller')}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${role === 'seller' ? 'bg-white dark:bg-slate-600 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        Farmer / Seller
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleSignup}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all"
                            placeholder="Ramesh Kumar"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all"
                            placeholder="farmer@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="text-center font-bold text-sm text-slate-700 dark:text-slate-300 pt-2">
                        Registering as: <span className="text-primary uppercase">{role === 'user' ? 'Customer' : 'Farmer / Seller'}</span>
                    </div>

                    <button
                        disabled={isLoading}
                        className="w-full btn btn-primary py-3.5 flex items-center justify-center gap-2"
                    >
                        {isLoading && <Loader2 className="animate-spin" size={18} />}
                        {isLoading ? 'Creating Account...' : (role === 'seller' ? 'Sign Up as Farmer' : 'Sign Up as Customer')}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
