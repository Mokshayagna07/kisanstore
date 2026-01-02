import React, { useState } from 'react';
import { Filter, ChevronDown, Star } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

const ProductListing = () => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    return (
        <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-8">
            <div className="container flex flex-col lg:flex-row gap-8">

                {/* Mobile Filter Toggle */}
                <button
                    className="lg:hidden flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm"
                    onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                >
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><Filter size={20} /> Filters</span>
                    <ChevronDown className={`transform transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Sidebar Filters */}
                <aside className={`w-full lg:w-1/4 lg:block ${isMobileFiltersOpen ? 'block' : 'hidden'} space-y-6`}>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 sticky top-24">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filters</h3>
                            <button className="text-sm text-primary hover:underline">Clear All</button>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Categories</h4>
                            <div className="space-y-2">
                                {['Vegetables', 'Fruits', 'Poultry', 'Eggs', 'Dairy', 'Spices'].map(cat => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/25" />
                                        <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Price Range</h4>
                            <div className="flex items-center gap-2 mb-2">
                                <input type="number" placeholder="Min" className="w-full bg-gray-50 dark:bg-slate-700 p-2 rounded-lg text-sm outline-none border focus:border-primary" />
                                <span className="text-gray-400">-</span>
                                <input type="number" placeholder="Max" className="w-full bg-gray-50 dark:bg-slate-700 p-2 rounded-lg text-sm outline-none border focus:border-primary" />
                            </div>
                        </div>

                        {/* Rating Filter */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Customer Ratings</h4>
                            <div className="space-y-2">
                                {[4, 3, 2].map(rating => (
                                    <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/25" />
                                        <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
                                            ))}
                                            <span className="text-xs ml-1">& Up</span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button className="w-full btn btn-primary mt-4">
                            Done
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {/* Sort Header */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                        <p className="text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">12</span> results of 124</p>

                        <div className="flex items-center gap-4">
                            <select className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-gray-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-primary cursor-pointer">
                                <option>Sort by: Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="h-[400px]">
                                <ProductCard product={product} />
                            </div>
                        ))}
                        {products.map(product => (
                            <div key={`${product.id}-dup`} className="h-[400px]">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination Mockup */}
                    <div className="flex justify-center mt-12 gap-2">
                        <button className="w-10 h-10 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-white hover:border-primary dark:hover:bg-slate-700 transition-colors">1</button>
                        <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">2</button>
                        <button className="w-10 h-10 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-white hover:border-primary dark:hover:bg-slate-700 transition-colors">3</button>
                        <span className="flex items-end px-2 text-gray-400">...</span>
                        <button className="w-10 h-10 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-white hover:border-primary dark:hover:bg-slate-700 transition-colors">12</button>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default ProductListing;
