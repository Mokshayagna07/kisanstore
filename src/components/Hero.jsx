import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ShieldCheck, Leaf, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'Dragon Fruits', price: '₹120/kg', rating: 4.8, image: 'https://images.unsplash.com/photo-1527776495208-4122d2c1e860?auto=format&fit=crop&q=80&w=600' },
    { name: 'Kashmiri Apples', price: '₹180/kg', rating: 4.9, image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=600' },
    { name: 'Organic Kiwi', price: '₹250/kg', rating: 4.7, image: 'https://images.unsplash.com/photo-1596522354195-e84de8c75734?auto=format&fit=crop&q=80&w=600' },
    { name: 'Fresh Guava', price: '₹60/kg', rating: 4.5, image: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?auto=format&fit=crop&q=80&w=600' },
    { name: 'Nagpur Oranges', price: '₹80/kg', rating: 4.6, image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600' }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % categories.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[85vh] bg-slate-900 overflow-hidden flex items-center">
            {/* Background Gradients */}
            <div className="absolute top-0 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl mx-auto lg:mx-0">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-300">#1 Marketplace for Organic Produce</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Fresh From <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Farm to Home
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Order 100% organic vegetables, fruits, and poultry directly from verified farmers. No middlemen, ensuring the best price for you and the farmer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to="/shop" className="group relative px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-600/25 flex items-center justify-center gap-2">
                            Start Shopping
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/login" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center">
                            Become a Seller
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={20} className="text-green-500" />
                            <span className="text-sm font-medium">100% Organic</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Truck size={20} className="text-green-500" />
                            <span className="text-sm font-medium">Fast Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Leaf size={20} className="text-green-500" />
                            <span className="text-sm font-medium">Eco Friendly</span>
                        </div>
                    </div>
                </div>

                {/* Right Content: 3D-style Featured Product */}
                <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">
                    {/* Abstract Circle Background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl transform scale-75"></div>

                    {/* Active Product Card */}
                    <div className="relative w-80 md:w-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl transform transition-all duration-700 hover:scale-105">
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            Bestseller
                        </div>

                        <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden group">
                            <img
                                src={categories[currentIndex].image}
                                alt={categories[currentIndex].name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex items-center gap-1 mb-1">
                                    <Star size={14} className="text-yellow-400 fill-current" />
                                    <span className="text-xs font-bold">{categories[currentIndex].rating}</span>
                                </div>
                                <p className="text-sm opacity-90">Fresh Arrival</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{categories[currentIndex].name}</h3>
                                    <p className="text-slate-400 text-sm">Direct from Nagpur Farms</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-green-400">{categories[currentIndex].price}</p>
                                    <p className="text-xs text-slate-500 line-through">₹{(parseInt(categories[currentIndex].price.replace(/\D/g, '')) * 1.2).toFixed(0)}</p>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg">
                                Add to Cart
                            </button>
                        </div>

                        {/* Progress Indicators */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                            {categories.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-green-500' : 'bg-slate-700'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
