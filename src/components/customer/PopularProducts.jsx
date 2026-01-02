import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    const scrollRef = useRef(null);

    const products = [
        { id: 1, name: 'Kashmiri Apples', price: 120, unit: 'kg', image: '🍎' },
        { id: 2, name: 'Fresh Broccoli', price: 60, unit: 'pc', image: '🥦' },
        { id: 3, name: 'Organic Bananas', price: 40, unit: 'dozen', image: '🍌' },
        { id: 4, name: 'Red Onions', price: 35, unit: 'kg', image: '🧅' },
        { id: 5, name: 'Desi Eggs', price: 80, unit: 'dozen', image: '🥚' },
        { id: 6, name: 'Gir Cow Milk', price: 90, unit: 'litre', image: '🥛' },
        { id: 7, name: 'Basmati Rice', price: 110, unit: 'kg', image: '🍚' },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-12 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Popular Today</h2>
                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[200px] bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-4 snap-start hover:shadow-md transition-shadow">
                            <div className="h-32 bg-white dark:bg-slate-700/50 rounded-lg flex items-center justify-center text-4xl mb-4">
                                {product.image}
                            </div>
                            <h3 className="font-bold text-slate-800 dark:text-white truncate">{product.name}</h3>
                            <p className="text-sm text-slate-500 mb-4">₹{product.price} / {product.unit}</p>

                            <div className="flex items-center gap-2">
                                <div className="flex-1 flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 px-2 py-1">
                                    <button className="text-slate-400 hover:text-primary">-</button>
                                    <span className="text-sm font-medium">1</span>
                                    <button className="text-slate-400 hover:text-primary">+</button>
                                </div>
                                <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                                    <Plus size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
