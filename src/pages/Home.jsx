import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import DealsSection from '../components/DealsSection';

const Home = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <CategorySection />
            <FeaturedProducts title="Best Selling Seeds" />
            <DealsSection />
            <FeaturedProducts title="Recommended Equipment" />

            {/* Newsletter / Trust Markers */}
            <section className="py-16 bg-primary dark:bg-primary-dark text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4">Join 50,000+ Happy Farmers</h2>
                    <p className="text-primary-light/80 mb-8 max-w-xl mx-auto">Subscribe for exclusive agricultural tips, market price updates, and special discounts.</p>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl text-slate-900 outline-none" />
                        <button className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-xl transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
