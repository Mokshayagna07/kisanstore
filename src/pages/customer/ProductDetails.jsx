import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2 } from 'lucide-react';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    // Mock Data
    const product = {
        name: "Desi Country Chicken (Live/Dressed) - 1.5kg",
        price: 650,
        originalPrice: 750,
        rating: 4.8,
        reviews: 245,
        description: "Pure organic free-range country chicken (Natukodi) raised in natural farm environments. Rich in protein and authentic taste. Available as live birds or professionally dressed/cleaned cuts.",
        images: [
            "https://images.unsplash.com/photo-1548550027-f4728d844c80?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1596773223846-99781b072236?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600"
        ]
    };

    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen py-12">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-12 mb-16">

                    {/* Left: Image Gallery */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <div className="aspect-square bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 relative group">
                            <img src={product.images[activeImage]} alt="Main Product" className="w-full h-full object-cover p-0 transform group-hover:scale-110 transition-transform duration-500" />
                            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">-15% OFF</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`w-24 h-24 rounded-xl border-2 flex-shrink-0 overflow-hidden ${activeImage === idx ? 'border-primary' : 'border-transparent bg-gray-50 dark:bg-slate-800'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-primary font-bold uppercase tracking-wide text-sm">Poultry / Meat</span>
                            <button className="text-slate-400 hover:text-primary transition-colors"><Share2 size={20} /></button>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill={s <= 4 ? "currentColor" : "none"} className={s > 4 ? "text-gray-300" : ""} />)}
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 font-medium">({product.reviews} Reviews)</span>
                            <span className="text-green-600 font-bold bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full text-xs">Fresh Stock</span>
                        </div>

                        <div className="flex items-end gap-3 mb-8">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">₹{product.price}</span>
                            <span className="text-xl text-slate-400 line-through mb-1">₹{product.originalPrice}</span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 border-b border-gray-100 dark:border-slate-800 pb-8">
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-xl">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-primary text-slate-600 dark:text-slate-300"><Minus size={20} /></button>
                                <span className="font-bold text-lg w-12 text-center text-slate-900 dark:text-white">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-primary text-slate-600 dark:text-slate-300"><Plus size={20} /></button>
                            </div>

                            {/* Buttons */}
                            <button className="flex-1 btn btn-primary gap-2">
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                            <button className="btn btn-outline gap-2 hover:bg-red-50 dark:hover:bg-red-900/10 hover:border-red-500 hover:text-red-500">
                                <Heart size={20} />
                            </button>
                        </div>

                        <button className="w-full btn bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 font-bold">
                            Buy Now
                        </button>

                    </div>
                </div>

                {/* Reviews & Description Tabs (Static Mockup) */}
                <div className="border-t border-gray-100 dark:border-slate-800 pt-12">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl">
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex justify-between border-b border-gray-200 dark:border-slate-700 pb-2"><span>Breed</span> <span className="font-semibold text-slate-900 dark:text-white">Desi (Country)</span></li>
                                <li className="flex justify-between border-b border-gray-200 dark:border-slate-700 pb-2"><span>Weight</span> <span className="font-semibold text-slate-900 dark:text-white">1.5kg - 1.8kg</span></li>
                                <li className="flex justify-between border-b border-gray-200 dark:border-slate-700 pb-2"><span>Feed</span> <span className="font-semibold text-slate-900 dark:text-white">Free Range / Organic</span></li>
                                <li className="flex justify-between border-b border-gray-200 dark:border-slate-700 pb-2"><span>Sourcing</span> <span className="font-semibold text-slate-900 dark:text-white">Local Farmers</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
