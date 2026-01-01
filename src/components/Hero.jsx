// CSS moved to global or imported here
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'Dragon Fruits', image: 'https://images.unsplash.com/photo-1585059895524-72359e06138a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fresh Guava', image: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jack Fruit', image: 'https://images.unsplash.com/photo-1563114008-0be443063f28?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kashmiri Apples', image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&q=80&w=400' },
    { name: 'Nagpur Oranges', image: 'https://images.unsplash.com/photo-1547514354-d3d8ee2e1307?auto=format&fit=crop&q=80&w=400' },
    { name: 'Organic Kiwi', image: 'https://images.unsplash.com/photo-1585059895524-72359e06138a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Green Grams', image: 'https://images.unsplash.com/photo-1613728913988-999d3e8705f1?auto=format&fit=crop&q=80&w=400' },
    { name: 'Red Grams', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe726e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Black Grams', image: 'https://images.unsplash.com/photo-1613728913105-eb894817d23e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Tender Coconut', image: 'https://images.unsplash.com/photo-1624471455431-309d2f6f3669?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fresh Lemons', image: 'https://images.unsplash.com/photo-1582280267232-0949d0347898?auto=format&fit=crop&q=80&w=400' },
    { name: 'Custard Apple', image: 'https://images.unsplash.com/photo-1631868310068-c11c97a5c68f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Robusta Banana', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400' },
    { name: 'Erode Tamarind', image: 'https://images.unsplash.com/photo-1605296830722-1d5423877994?auto=format&fit=crop&q=80&w=400' },
    { name: 'Farm Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fresh Sugarcane', image: 'https://images.unsplash.com/photo-1549421262-10f745cdb92b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Raw Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
    { name: 'Golden Wheat', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Paddy', image: 'https://images.unsplash.com/photo-1536631818221-c22f604ec283?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sweet Corn', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bottle Gourd', image: 'https://images.unsplash.com/photo-1533519782559-694435948f90?auto=format&fit=crop&q=80&w=400' },
    { name: 'Red Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400' },
    { name: 'Purple Brinjal', image: 'https://images.unsplash.com/photo-1614737722749-3ae016937e25?auto=format&fit=crop&q=80&w=400' },
    { name: 'Ladys Finger', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f9bfc?auto=format&fit=crop&q=80&w=400' },
    { name: 'Farm Eggs', image: 'https://images.unsplash.com/photo-1598965628792-c6c736296062?auto=format&fit=crop&q=80&w=400' },
    { name: 'Live Hens', image: 'https://images.unsplash.com/photo-1548550027-f4728d844c80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Little Chicks', image: 'https://images.unsplash.com/photo-1566311026574-c6843472d559?auto=format&fit=crop&q=80&w=400' },
    { name: 'Rooster (Cock)', image: 'https://images.unsplash.com/photo-1569587114660-f655ae25170d?auto=format&fit=crop&q=80&w=400' },
    { name: 'A2 Pure Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Organic Jaggery', image: 'https://images.unsplash.com/photo-1622485521943-7f8e77c570f7?auto=format&fit=crop&q=80&w=400' },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Scroll up to the last visible pair (n-1)
                const nextIndex = prevIndex + 1;
                return nextIndex >= categories.length - 1 ? 0 : nextIndex;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-slate-900 pt-8 pb-12 lg:pt-12 lg:pb-20">
            {/* Background Image (Subtle) */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1625246333195-bf43701235b2?auto=format&fit=crop&q=80&w=1920"
                    alt=""
                    className="w-full h-full object-cover opacity-20 blur-sm"
                />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <div className="text-left animate-fade-in-up md:pl-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/50 text-sm font-semibold mb-6 backdrop-blur-sm">
                        #1 Marketplace for Farmers
                    </span>
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                        Empowering Farmers, <br />
                        <span className="text-primary-light">Running the Nation</span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                        Direct farm-to-table marketplace for organic vegetables, fruits, and poultry. No middlemen, just pure quality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/shop" className="btn btn-primary bg-accent hover:bg-accent-hover border-transparent text-white shadow-orange-500/20 py-3 px-8 text-lg">
                            Shop Fresh Produce <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link to="/login" className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-slate-900 py-3 px-8 text-lg">
                            Sell Your Produce
                        </Link>
                    </div>
                </div>

                {/* Right: Auto-Scrolling Images (2 per row) */}
                <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-2xl">
                    <div
                        className="flex transition-transform duration-[1500ms] ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                    >
                        {categories.map((cat, index) => (
                            <div key={index} className="min-w-[50%] h-full relative group cursor-pointer flex-shrink-0 p-2">
                                <Link to="/shop" className="block w-full h-full relative overflow-hidden rounded-2xl">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                        <h3 className="text-white font-bold text-xl">{cat.name}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
