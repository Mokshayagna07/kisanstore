import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SellCta = () => {
    return (
        <section className="py-16 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-3xl overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                        <div className="text-white space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Sell Your Produce Directly to Customers</h2>
                            <p className="text-green-100 text-lg">Join India's fastest growing digital mandi. No middlemen, just fair prices and direct profits.</p>

                            <ul className="space-y-3">
                                {['Zero Commission on first 100 orders', 'Direct Bank Transfer within 24 hours', 'Easy Inventory Management App'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="bg-white/20 p-1 rounded-full"><CheckCircle size={16} /></div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/signup?type=farmer" className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg shadow-green-900/20 mt-4">
                                Start Selling <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
                            {/* Graphic Illustration Placeholder */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center border border-white/20 shadow-2xl relative">
                                <span className="text-9xl animate-bounce-slow">🚜</span>
                                <div className="absolute -bottom-4 -right-4 bg-white text-green-700 px-4 py-2 rounded-lg shadow-lg font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 5000+ Farmers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellCta;
