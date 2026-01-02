import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        { q: "How do I place an order?", a: "Simply browse our 'Shop' section, add items to your cart, and proceed to checkout. You can pay via UPI, Card, or COD." },
        { q: "How do I track my order?", a: "Go to 'Profile > My Orders' to see real-time status updates from packing to delivery." },
        { q: "Do you offer returns?", a: "Yes, if the produce received is damaged or not fresh, you can raise a return request within 24 hours of delivery." },
        { q: "Where do you source from?", a: "All our produce is sourced directly from registered local farmers in Punjab and Haryana, ensuring maximum freshness." }
    ];

    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                                {item.q}
                                {openIndex === idx ? <Minus size={20} className="text-slate-400" /> : <Plus size={20} className="text-slate-400" />}
                            </button>
                            <div className={`px-4 text-slate-600 dark:text-slate-300 transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
