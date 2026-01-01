import React from 'react';
import Hero from '../../components/Hero';
import CategorySection from '../../components/CategorySection'; // Keeping existing Category Section as requested ("Category section" was in existing sections list)
import TrustStrip from '../../components/user/TrustStrip';
import PopularProducts from '../../components/user/PopularProducts';
import FarmerSpotlight from '../../components/user/FarmerSpotlight';
import SellCta from '../../components/user/SellCta';
import DeliveryInfo from '../../components/user/DeliveryInfo';
import FaqSection from '../../components/user/FaqSection';

const Home = () => {
    return (
        <main className="min-h-screen">
            <Hero />

            {/* 1. Trust & Value Strip (Below Hero) */}
            <TrustStrip />

            {/* Existing Categories */}
            <CategorySection />

            {/* 2. Popular Products */}
            <PopularProducts />

            {/* 3. Farmer Highlight */}
            <FarmerSpotlight />

            {/* 4. Sell on KisanStore */}
            <SellCta />

            {/* 5. Delivery & Coverage Info */}
            <DeliveryInfo />

            {/* 6. FAQ Preview */}
            <FaqSection />

            {/* Newsletter (Existing) */}
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
