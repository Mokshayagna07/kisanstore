import React from 'react';
import { MapPin, Sprout } from 'lucide-react';

const FarmerSpotlight = () => {
    const farmers = [
        { name: "Rajinder Singh", location: "Punjab", crop: "Organic Wheat", avatar: "👨‍🌾" },
        { name: "Lakshmi Devi", location: "Karnataka", crop: "Fresh Vegetables", avatar: "👩‍🌾" },
        { name: "Suresh Patil", location: "Maharashtra", crop: "Alphonso Mangoes", avatar: "🤠" },
    ];

    return (
        <section className="py-16 bg-orange-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Meet Our Farmers</h2>
                    <p className="text-slate-600 dark:text-slate-400">The hardworking hands behind your fresh food.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {farmers.map((farmer, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-20 h-20 mx-auto bg-orange-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-white dark:border-slate-800 shadow-sm">
                                {farmer.avatar}
                            </div>
                            <h3 className="text-xl font-bold text-center text-slate-800 dark:text-white mb-1">{farmer.name}</h3>
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4">
                                <MapPin size={14} /> {farmer.location}
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg text-center text-sm font-medium flex items-center justify-center gap-2">
                                <Sprout size={16} /> {farmer.crop}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FarmerSpotlight;
