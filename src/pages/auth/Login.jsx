
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Briefcase, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    // Separate State for Store Portal
    const [storeRole, setStoreRole] = useState('customer'); // 'customer' or 'seller'
    const [storeEmail, setStoreEmail] = useState('');
    const [storePassword, setStorePassword] = useState('');
    const [storeError, setStoreError] = useState('');

    // Separate State for Office Portal
    const [officeRole, setOfficeRole] = useState('staff'); // 'staff' or 'admin'
    const [officeEmail, setOfficeEmail] = useState('');
    const [officePassword, setOfficePassword] = useState('');
    const [officeError, setOfficeError] = useState('');

    const handleLogin = (e, type) => {
        e.preventDefault();

        const email = type === 'store' ? storeEmail : officeEmail;
        const password = type === 'store' ? storePassword : officePassword;
        const setError = type === 'store' ? setStoreError : setOfficeError;
        const selectedRole = type === 'store' ? storeRole : officeRole;

        setError(''); // Clear previous errors

        const result = login(email, password);

        if (result.success) {
            // Strict Role Enforcement
            const isPublicRole = result.role === 'user' || result.role === 'seller' || result.role === 'admin';
            const isInternalRole = result.role === 'staff' || result.role === 'super_admin';

            if (type === 'store' && isInternalRole) {
                setError("Staff account restricted. Please use the Office Portal pane.");
                return;
            }

            if (type === 'office' && isPublicRole) {
                setError("Public account. Please use the Store Portal pane.");
                return;
            }

            // Optional: Check if selected role matches actual role? 
            // For now, allow flow but ideally we warn if a Farmer logs in as Customer tab.
            // Let's rely on the dashboard redirect which is the ultimate truth.

            // Valid Login - Redirect
            switch (result.role) {
                case 'admin':
                case 'seller':
                    navigate('/admin');
                    break;
                case 'staff':
                    navigate('/staff/dashboard');
                    break;
                case 'super_admin':
                    navigate('/super-admin');
                    break;
                case 'user':
                    navigate('/');
                    break;
                default:
                    navigate('/');
            }
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Back to Home */}
            <Link to="/" className="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-2 transition-colors z-20 font-medium">
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 items-stretch">

                {/* === LEFT SIDE: STORE PORTAL (Customer / Seller) === */}
                <div className="flex flex-col h-full animate-in slide-in-from-left-8 duration-700">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                            <ShoppingCart className="w-8 h-8 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">Store Portal</h2>
                        <p className="text-slate-400 text-sm">Access for Customers & Farmers</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-center relative">
                        {/* ROLE SELECTOR TOGGLE */}
                        <div className="flex bg-slate-900/50 p-1 rounded-xl mb-8 border border-slate-700/50">
                            <button
                                type="button"
                                onClick={() => setStoreRole('customer')}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${storeRole === 'customer' ? 'bg-green-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                            >
                                Customer
                            </button>
                            <button
                                type="button"
                                onClick={() => setStoreRole('seller')}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${storeRole === 'seller' ? 'bg-green-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                            >
                                Farmer / Seller
                            </button>
                        </div>

                        {storeError && (
                            <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm text-center">
                                {storeError}
                            </div>
                        )}
                        <form onSubmit={(e) => handleLogin(e, 'store')} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">
                                    {storeRole === 'customer' ? 'Email or Mobile' : 'Farmer Email / ID'}
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    placeholder={storeRole === 'customer' ? "e.g. user@example.com" : "e.g. seller@kisan.com"}
                                    value={storeEmail}
                                    onChange={(e) => setStoreEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                    placeholder="••••••••"
                                    value={storePassword}
                                    onChange={(e) => setStorePassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-xs font-bold text-green-500 hover:text-green-400 transition-colors">Forgot Password?</a>
                            </div>
                            <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:to-green-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/25 transition-all active:scale-[0.98]">
                                Login as {storeRole === 'customer' ? 'Customer' : 'Farmer'}
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                            <p className="text-slate-400 text-sm">
                                {storeRole === 'customer' ? 'New Customer?' : 'New Farmer?'}
                                <Link to="/signup" className="text-green-500 font-bold hover:underline ml-1">
                                    {storeRole === 'customer' ? 'Create Account' : 'Register Here'}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* VISUAL DIVIDER (Hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2"></div>


                {/* === RIGHT SIDE: OFFICE PORTAL (Staff / Admin) === */}
                <div className="flex flex-col h-full animate-in slide-in-from-right-8 duration-700">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <Briefcase className="w-7 h-7 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">Office Portal</h2>
                        <p className="text-slate-400 text-sm">Access for Staff & Admins</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-center relative">
                        {/* ROLE SELECTOR TOGGLE */}
                        <div className="flex bg-slate-900/50 p-1 rounded-xl mb-8 border border-slate-700/50">
                            <button
                                type="button"
                                onClick={() => setOfficeRole('staff')}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${officeRole === 'staff' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                            >
                                Staff / Ops
                            </button>
                            <button
                                type="button"
                                onClick={() => setOfficeRole('admin')}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${officeRole === 'admin' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                            >
                                Administrator
                            </button>
                        </div>

                        {officeError && (
                            <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm text-center">
                                {officeError}
                            </div>
                        )}
                        <form onSubmit={(e) => handleLogin(e, 'office')} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">
                                    {officeRole === 'staff' ? 'Staff Email' : 'Admin ID'}
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder={officeRole === 'staff' ? "e.g. staff@kisan.com" : "e.g. admin@kisan.com"}
                                    value={officeEmail}
                                    onChange={(e) => setOfficeEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="••••••••"
                                    value={officePassword}
                                    onChange={(e) => setOfficePassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Spacer to align buttons visually with left side if needed, or margin */}
                            <div className="h-4"></div>

                            <button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:to-slate-500 text-white font-bold py-4 rounded-xl shadow-lg border border-slate-600 transition-all active:scale-[0.98]">
                                Authenticate as {officeRole === 'staff' ? 'Staff' : 'Admin'}
                            </button>
                        </form>

                        {/* Empty footer spacer to match height of left card if needed, or distinct footer */}
                        <div className="mt-8 pt-6 border-t border-slate-700/0 text-center opacity-0 pointer-events-none">
                            <p className="text-sm">Spacer</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;

