import React from 'react';
import { ShieldCheck, Truck, BadgePercent, Sprout } from 'lucide-react';

const TrustStrip = () => {
    const features = [
        { icon: <Sprout size={24} />, title: "Direct from Farmers", desc: "No middlemen involved" },
        { icon: <ShieldCheck size={24} />, title: "Quality Assured", desc: "Handpicked fresh produce" },
        { icon: <BadgePercent size={24} />, title: "Fair Prices", desc: "Best market rates" },
        { icon: <Truck size={24} />, title: "Fast Delivery", desc: "Local express shipping" },
    ];

    return (
        <section className="bg-green-50/50 dark:bg-green-900/10 border-y border-green-100 dark:border-green-900/30 py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-800 border border-green-100 dark:border-slate-700 shadow-sm">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 dark:text-white text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
