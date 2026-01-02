import React from 'react';
import { MapPin, Clock, CreditCard } from 'lucide-react';

const DeliveryInfo = () => {
    return (
        <section className="bg-slate-900 text-white py-4 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span>Delivering to <strong>Delhi NCR, Punjab, Haryana & UP</strong></span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-slate-700"></div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        <span>Next Day Delivery: <strong>Order before 4 PM</strong></span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-slate-700"></div>
                    <div className="flex items-center gap-2">
                        <CreditCard size={16} className="text-primary" />
                        <span>Accepting <strong>UPI, Cards & Cash on Delivery</strong></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryInfo;
