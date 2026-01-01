import React from 'react';
import { User, MapPin, Phone, CreditCard } from 'lucide-react';

const SellerProfile = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">👨‍🌾</div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Ramesh Farms</h2>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mt-2">Verified Seller</span>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300">
                    Business Details
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                        <User className="text-slate-400" size={20} />
                        <div>
                            <p className="text-xs text-slate-500">Owner Name</p>
                            <p className="font-medium">Ramesh Kumar</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="text-slate-400" size={20} />
                        <div>
                            <p className="text-xs text-slate-500">Farm Location</p>
                            <p className="font-medium">Village Rampur, Dist. Pune, Maharashtra</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="text-slate-400" size={20} />
                        <div>
                            <p className="text-xs text-slate-500">Contact Number</p>
                            <p className="font-medium">+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <CreditCard className="text-slate-400" size={20} />
                        <div>
                            <p className="text-xs text-slate-500">Bank Details</p>
                            <p className="font-medium">HDFC Bank ••••• 8821</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerProfile;
