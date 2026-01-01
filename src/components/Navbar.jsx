import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { ShoppingCart, Menu, X, Search, Sun, Moon, User, ChevronDown, Leaf, ShieldCheck, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { user, logout } = useAuth();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
            <div className="container h-16 flex items-center justify-between gap-4">

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary mr-auto lg:mr-0">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-slate-900 dark:text-white">Kisan<span className="text-primary">Store</span></span>
                </Link>

                {/* Desktop: Category Dropdown */}
                <div className="hidden lg:relative lg:flex items-center group cursor-pointer z-50">
                    <span className="flex items-center font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
                        Categories <ChevronDown size={16} className="ml-1" />
                    </span>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div className="py-2">
                            {['Vegetables', 'Fruits', 'Poultry', 'Eggs', 'Dairy', 'Spices'].map((item) => (
                                <Link key={item} to="/shop" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Search Bar (Desktop) */}
                <div className="hidden lg:flex flex-1 max-w-xl mx-4 relative group">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for vegetables, fruits, poultry..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-slate-800 border-2 border-transparent focus:border-primary rounded-full outline-none transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-gray-400"
                    />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 lg:gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-colors"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Login / Profile / Logout */}
                    {user ? (
                        <div className="hidden lg:flex items-center gap-4">
                            <Link to={user.role === 'admin' ? '/admin' : '/profile'} className="flex items-center gap-2 p-1.5 pr-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 font-medium transition-colors border border-transparent hover:border-gray-200 dark:hover:border-slate-700">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <User size={18} />
                                </div>
                                <span className="text-sm">{user.name}</span>
                            </Link>
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 rounded-full transition-colors"
                            >
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            {/* Admin Link */}
                            <Link to="/login" className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                <ShieldCheck size={18} />
                                <span>Admin</span>
                            </Link>

                            {/* Sign In Button */}
                            <Link to="/login" className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-slate-200 dark:shadow-none">
                                <User size={18} />
                                <span>Login / Sign Up</span>
                            </Link>
                        </div>
                    )}

                    {/* Cart */}
                    <Link to="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-slate-700 dark:text-slate-200 transition-colors">
                        <ShoppingCart size={22} />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                            2
                        </span>
                    </Link>
                </div>
            </div>

            {/* Mobile Search Bar (Below Header) */}
            <div className="lg:hidden px-4 pb-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-lg text-sm border-none outline-none focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200"
                    />
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Drawer Content */}
                <div className={`absolute top-0 left-0 w-[280px] h-full bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-4">
                        <div className="px-4 space-y-1">
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Categories</div>
                            {['Vegetables', 'Fruits', 'Poultry', 'Eggs', 'Dairy', 'Spices'].map((item) => (
                                <Link
                                    key={item}
                                    to="/shop"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-slate-800 hover:text-primary rounded-lg transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}

                            <div className="my-4 border-b border-gray-100 dark:border-slate-800"></div>

                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</div>
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg">Sign In</Link>
                            <Link to="/orders" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg">My Orders</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
