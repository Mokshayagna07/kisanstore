import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Signup = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <Leaf className="h-8 w-8 fill-current" />
                        <span className="text-slate-900 dark:text-white">Kisan<span className="text-primary">Store</span></span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Create Account</h2>
                <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Join thousands of farmers today</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                        <input type="text" className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all" placeholder="Ramesh Kumar" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input type="email" className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all" placeholder="farmer@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                        <input type="password" className="w-full p-3 bg-gray-50 dark:bg-slate-700 rounded-xl outline-none focus:ring-2 ring-primary/50 text-slate-900 dark:text-white transition-all" placeholder="••••••••" />
                    </div>
                    <button className="w-full btn btn-primary py-3.5">Sign Up</button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
