import React from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12">
            <div className="container">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Shopping Cart (2 items)</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Cart Items List */}
                    <div className="flex-1 space-y-6">
                        {[1, 2].map((item) => (
                            <div key={item} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row gap-6 items-center">
                                <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-24 h-24 object-contain" />

                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Nano Urea (Liquid) Fertilizer</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">500ml Pack</p>
                                    <span className="text-primary font-bold">₹240</span>
                                </div>

                                <div className="flex items-center border border-gray-200 dark:border-slate-600 rounded-lg">
                                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"><Minus size={16} /></button>
                                    <span className="w-8 text-center font-bold text-slate-900 dark:text-white">1</span>
                                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"><Plus size={16} /></button>
                                </div>

                                <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 p-2 rounded-full transition-colors">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-[350px]">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 sticky top-24">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Subtotal</span>
                                    <span>₹480</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Shipping</span>
                                    <span className="text-green-500 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Tax (GST)</span>
                                    <span>₹24</span>
                                </div>
                                <div className="border-t border-gray-100 dark:border-slate-700 my-4"></div>
                                <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
                                    <span>Total</span>
                                    <span>₹504</span>
                                </div>
                            </div>

                            <Link to="/checkout" className="w-full btn btn-primary flex items-center justify-between group">
                                Proceed to Checkout
                                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <p className="text-xs text-center text-gray-400 mt-4">Safe & Secure Payments</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
