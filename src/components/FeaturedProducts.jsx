import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const FeaturedProducts = ({ title }) => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-slate-900/50">
            <div className="container">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4">
                        {title || "Featured Products"}
                    </h2>
                    <button className="text-primary font-medium hover:text-primary-dark flew items-center gap-1 transition-colors text-sm">
                        See All <ArrowRight size={16} className="inline" />
                    </button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative -mx-4 px-4 overflow-x-auto scrollbar-hide pb-4">
                    <div className="flex gap-4 w-max min-w-full">
                        {products.map((product) => (
                            <div key={product.id} className="w-[220px] sm:w-[250px] shrink-0">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
