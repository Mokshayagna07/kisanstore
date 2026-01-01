import React from 'react';
import '../styles/ProductCard.css';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative">

            {/* Discount Badge */}
            {product.discount > 0 && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    -{product.discount}%
                </span>
            )}

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-colors z-10 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                <Heart size={18} />
            </button>

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-slate-700">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <div className="mb-2">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-gray-100 line-clamp-2 min-h-[40px] leading-tight mt-1 group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} className={i < product.rating ? "" : "text-gray-300 dark:text-slate-600"} />
                        ))}
                    </div>
                    <span className="text-xs text-slate-400">({product.reviews})</span>
                </div>

                {/* Price Adjustment */}
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                            <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
                        )}
                    </div>

                    <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white text-slate-900 dark:text-white px-3 py-2 rounded-lg transition-colors font-medium text-xs sm:text-sm">
                        <ShoppingCart size={16} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
