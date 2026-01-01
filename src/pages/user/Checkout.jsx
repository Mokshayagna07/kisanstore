import React from 'react';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout = () => {
    return (
        <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12">
            <div className="container max-w-5xl">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-6">

                        {/* Address Section */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Truck className="text-primary" /> Shipping Address
                            </h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                <input type="text" placeholder="Last Name" className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                <input type="text" placeholder="Phone Number" className="col-span-1 md:col-span-2 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                <input type="text" placeholder="Address" className="col-span-1 md:col-span-2 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                <input type="text" placeholder="City" className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                <input type="text" placeholder="Pincode" className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                            </form>
                        </div>

                        {/* Payment */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <CreditCard className="text-primary" /> Payment Method
                            </h2>
                            <div className="space-y-4">
                                <label className="flex items-center gap-4 p-4 border border-primary bg-primary/5 rounded-xl cursor-pointer">
                                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-slate-900 dark:text-white">UPI / Net Banking</span>
                                    <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Fastest</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-gray-300">
                                    <input type="radio" name="payment" className="w-5 h-5 text-primary" />
                                    <span className="text-slate-700 dark:text-slate-300">Credit / Debit Card</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-gray-300">
                                    <input type="radio" name="payment" className="w-5 h-5 text-primary" />
                                    <span className="text-slate-700 dark:text-slate-300">Cash on Delivery</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    {/* Sticky Summary */}
                    <div className="w-full lg:w-[350px]">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 sticky top-24">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Order Summary</h3>
                            <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                                <div className="flex justify-between"><span>Items (2)</span><span>₹480</span></div>
                                <div className="flex justify-between"><span>Delivery</span><span>Free</span></div>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-slate-900 dark:text-white border-t border-gray-100 dark:border-slate-700 pt-4 mb-6">
                                <span>Total</span>
                                <span>₹480</span>
                            </div>
                            <button className="w-full btn btn-primary flex items-center justify-center gap-2">
                                <ShieldCheck size={20} /> Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
