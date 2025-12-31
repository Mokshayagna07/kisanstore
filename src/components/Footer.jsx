import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 pt-16 pb-8 text-slate-600 dark:text-slate-400">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                {/* Brand */}
                <div>
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
                        <Leaf className="h-8 w-8 fill-current" />
                        <span className="text-slate-900 dark:text-white">Kisan<span className="text-primary">Store</span></span>
                    </Link>
                    <p className="mb-6 leading-relaxed">
                        India's largest digital marketplace for farmers. Quality seeds, fertilizers, and equipment delivered with trust.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link to="/shop" className="hover:text-primary transition-colors">Shop All Products</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/shop" className="hover:text-primary transition-colors">Sell on KisanStore</Link></li>
                        <li><Link to="/blog" className="hover:text-primary transition-colors">Farming Tips Blog</Link></li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Support</h3>
                    <ul className="space-y-3">
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link to="/returns" className="hover:text-primary transition-colors">Return Policy</Link></li>
                        <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Contact Info</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-1 text-primary" size={20} />
                            <span>123 Farmer's Market Rd,<br />New Delhi, India 110001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-primary" size={20} />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-primary" size={20} />
                            <span>support@kisanstore.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="container border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>&copy; {new Date().getFullYear()} KisanStore. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span>Made with <span className="text-red-500 animate-pulse">❤</span> for Farmers</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
