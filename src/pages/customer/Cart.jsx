import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Mock Initial Data: Using relevant organic produce items
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Fresh Kashmiri Apples",
            pack: "1kg",
            price: 180,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 2,
            name: "Dragon Fruits (Red Flesh)",
            pack: "1kg",
            price: 120,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1527776495208-4122d2c1e860?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 3,
            name: "Organic Brown Eggs",
            pack: "12 pcs",
            price: 140,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=80&w=200"
        }
    ]);

    // Update Page Title
    useEffect(() => {
        document.title = `Shopping Cart (${cartItems.length}) | KisanStore`;
    }, [cartItems]);

    // Handlers
    const handleIncrement = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecrement = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const handleDelete = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculations
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 40;
    const tax = Math.round(subtotal * 0.05); // 5% Tax
    const total = subtotal + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-6">
                    <ShoppingBag size={48} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your Cart is Empty</h2>
                <p className="text-slate-500 mb-8">Looks like you haven't added any fresh produce yet.</p>
                <Link to="/shop" className="btn btn-primary">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Shopping Cart ({cartItems.length} items)</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Cart Items List */}
                    <div className="flex-1 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row gap-6 items-center animate-fade-in-up">
                                <div className="w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.name}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.pack}</p>
                                    <span className="text-primary font-bold text-lg">₹{item.price}</span>
                                </div>

                                <div className="flex items-center bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-1">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 transition-colors shadow-sm disabled:opacity-50"
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-10 text-center font-bold text-slate-900 dark:text-white">{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 transition-colors shadow-sm"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-3 rounded-xl transition-colors"
                                    title="Remove Item"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-[380px]">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 sticky top-24">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Shipping</span>
                                    {shipping === 0 ? (
                                        <span className="text-green-500 font-bold">Free</span>
                                    ) : (
                                        <span className="font-medium text-slate-900 dark:text-white">₹{shipping}</span>
                                    )}
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Tax (5% GST)</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹{tax}</span>
                                </div>
                                <div className="border-t border-gray-100 dark:border-slate-700 my-2"></div>
                                <div className="flex justify-between text-xl font-bold text-slate-900 dark:text-white">
                                    <span>Total</span>
                                    <span>₹{total}</span>
                                </div>
                            </div>

                            <Link to="/checkout" className="w-full btn btn-primary py-4 flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                                Proceed to Checkout
                                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="mt-6 flex flex-col items-center gap-2 text-xs text-slate-400">
                                <p>🔒 100% Safe & Secure Payments</p>
                                <p>Free shipping on orders above ₹500</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
