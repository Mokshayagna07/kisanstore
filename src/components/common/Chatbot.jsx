import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Send, MessageCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);
    const location = useLocation();

    // Determine context (Admin vs User)
    const isAdmin = location.pathname.includes('/admin');
    const pageName = location.pathname.split('/').pop() || 'Home';

    // Initial State - Welcome Message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    text: `Hi 👋 I'm your KisanStore Assistant. I can help you understand the ${isAdmin ? 'admin panel' : 'store'}.`,
                    sender: 'bot'
                }
            ]);
        }
    }, [isOpen, isAdmin, messages.length]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // FAQ Data
    const adminFAQs = [
        { q: "How to update stock?", a: "To update stock: \n• Go to 'Stock & Inventory'\n• Find the product\n• Click 'Update Qty'\n• Enter new amount & Save" },
        { q: "How to confirm an order?", a: "To confirm an order: \n• Navigate to 'Orders'\n• Select an order\n• Click the 'Confirm Order' button in the details panel." },
        { q: "What does low stock mean?", a: "Low Stock warning appears when inventory drops below the minimum threshold you set (default is usually 50 units)." },
        { q: "How to apply discounts?", a: "Go to 'Discounts & Pricing' → Click 'Create Promotion' → Select Product & Set Percentage." },
        { q: "How to resolve complaints?", a: "Open 'Complaints' → Click a ticket → Review issue → Use 'Mark Resolved' button once fixed." }
    ];

    const userFAQs = [
        { q: "Where is my order?", a: "You can track your order in the 'My Orders' section. You'll also receive SMS updates." },
        { q: "How do I place an order?", a: "Browse products → Add to Cart → Click Checkout → Enter Delivery Address → Pay & Confirm." },
        { q: "What payment methods are supported?", a: "We support UPI (GPay, PhonePe), Credit/Debit Cards, and Cash on Delivery (COD) for select locations." },
        { q: "How do I raise a complaint?", a: "Go to 'Support' or 'My Orders' → Select the order → Click 'Report Issue'." }
    ];

    const currentFAQs = isAdmin ? adminFAQs : userFAQs;

    const handleSend = (text) => {
        const questionText = text || inputValue.trim();
        if (!questionText) return;

        // Add User Message
        const newUserMsg = { id: Date.now(), text: questionText, sender: 'user' };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');

        // Simulate Bot Response
        setTimeout(() => {
            // Find a matching answer or default response
            const match = currentFAQs.find(faq => faq.q === questionText);
            const responseText = match
                ? match.a
                : "I'm a demo assistant. Please select one of the suggested topics below or contact support for complex queries.";

            setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'bot' }]);
        }, 600);
    };

    return (
        <>
            {/* Toggle Button (Closed State) */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center z-50 group hover:scale-105 transition-transform"
                >
                    <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse group-hover:opacity-30"></div>
                    <img src="/logo.png" alt="Chat" className="w-10 h-10 relative z-10 rounded-full object-cover" />
                    {/* Notification Dot */}
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                </button>
            )}

            {/* Chat Window (Open State) */}
            {isOpen && (
                <div className={`fixed bottom-6 right-6 w-[360px] max-w-[calc(100vw-48px)] h-[520px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300`}>

                    {/* Header */}
                    <div className="bg-green-600 p-4 flex items-center justify-between text-white shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 overflow-hidden">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">KisanStore Assistant</h3>
                                <p className="text-xs text-green-100 opacity-90">{isAdmin ? 'Admin Help' : 'Customer Help'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                                <Minus size={18} />
                            </button>
                            <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Context Chip */}
                    <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 p-2 text-center">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                            <HelpCircle size={12} />
                            You are viewing: <span className="text-blue-600 dark:text-blue-400 capitalize">{pageName.replace('-', ' ')}</span>
                        </span>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-slate-800">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none'
                                    }`}>
                                    <div className="whitespace-pre-line">{msg.text}</div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions (Horizontal Scroll) */}
                    <div className="border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-3 shrink-0">
                        <p className="text-xs font-semibold text-slate-400 mb-2 px-1 uppercase tracking-wider">Suggested Questions</p>
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {currentFAQs.map((faq, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(faq.q)}
                                    className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
                                >
                                    {faq.q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 shrink-0">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder={isAdmin ? "Ask about stock, orders..." : "Ask about products, delivery..."}
                                className="w-full pl-4 pr-12 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-slate-700 dark:text-white transition-all"
                            />
                            <button
                                onClick={() => handleSend()}
                                className="absolute right-2 p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!inputValue.trim()}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Chatbot;
