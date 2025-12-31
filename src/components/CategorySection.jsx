import React from 'react';
import { Link } from 'react-router-dom';
import { Carrot, Apple, Egg, Bird, ChefHat, Milk } from 'lucide-react';

const categories = [
    { id: 1, name: 'Fresh Vegetables', icon: Carrot, color: 'bg-green-100 text-green-600', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Fresh Fruits', icon: Apple, color: 'bg-red-100 text-red-600', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Poultry (Hens/Cocks)', icon: Bird, color: 'bg-orange-100 text-orange-600', image: 'https://images.unsplash.com/photo-1548550027-f4728d844c80?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Farm Eggs', icon: Egg, color: 'bg-yellow-100 text-yellow-600', image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=80&w=400' },
    { id: 5, name: 'Dairy', icon: Milk, color: 'bg-blue-100 text-blue-600', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400' },
    { id: 6, name: 'Organic Spices', icon: ChefHat, color: 'bg-rose-100 text-rose-600', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400' },
];

const CategorySection = () => {
    return (
        <section className="py-12 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div className="container">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Shop by Category</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to="/shop"
                            className="group flex flex-col items-center bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-full h-32 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 flex flex-col items-center">
                                <div className={`p-3 rounded-full ${cat.color} mb-2`}>
                                    <cat.icon size={24} />
                                </div>
                                <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors text-center text-sm">{cat.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
