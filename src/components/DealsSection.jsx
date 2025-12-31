import React from 'react';

const DealsSection = () => {
    return (
        <section className="py-12 bg-white dark:bg-slate-900">
            <div className="container">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Deals of the Week</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Grab these limited-time offers while stocks last</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 dark:bg-slate-700/50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8 border border-orange-100 dark:border-slate-600">
                        <div className="flex-1 text-center sm:text-left">
                            <span className="bg-white dark:bg-slate-800 text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-4 inline-block">50% OFF</span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Organic Veggie Basket</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">A healthy mix of seasonal farm-fresh vegetables for your family.</p>
                            <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 text-white border-none">Order Basket</button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300" alt="Veggie Basket" className="w-48 h-48 object-contain mix-blend-multiply dark:mix-blend-normal" />
                    </div>

                    <div className="bg-green-50 dark:bg-slate-700/50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8 border border-green-100 dark:border-slate-600">
                        <div className="flex-1 text-center sm:text-left">
                            <span className="bg-white dark:bg-slate-800 text-green-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-4 inline-block">Flat ₹200 OFF</span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Desi Country Chicken</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">Free range, 100% organic-fed country chicken. Live or dressed.</p>
                            <button className="btn btn-primary bg-green-600 hover:bg-green-700 text-white border-none">Order Now</button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1548550027-f4728d844c80?auto=format&fit=crop&q=80&w=300" alt="Country Chicken" className="w-48 h-48 object-cover rounded-full shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealsSection;
