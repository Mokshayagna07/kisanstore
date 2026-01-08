import React from 'react';
import '../styles/ProductCard.css';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">

            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay & Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="p-3 bg-white text-slate-900 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white" title="Add to Cart">
                        <ShoppingCart size={20} />
                    </button>
                    <button className="p-3 bg-white text-slate-900 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-red-500 hover:text-white" title="Add to Wishlist">
                        <Heart size={20} />
                    </button>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.discount > 0 && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                            {product.discount}% OFF
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{product.rating}</span>
                    </div>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">Farm-fresh and organic sourced directly from growers.</p>

                <div className="mt-auto flex items-end justify-between border-t border-slate-100 dark:border-slate-700 pt-3">
                    <div>
                        <p className="text-xs text-slate-400 line-through mb-0.5">₹{product.originalPrice}</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">₹{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
