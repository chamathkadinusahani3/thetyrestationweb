import React from 'react';
import { motion } from 'framer-motion';
import { BrandsSection } from '../components/BrandsSection';
import { AwardIcon, ShieldCheckIcon, TrendingUpIcon } from 'lucide-react';
import { Helmet } from "react-helmet-async";


export function BrandsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Premium Tyre Brands | The Tyre Station</title>
        <meta
          name="description"
          content="Discover the premium tyre brands partnered with The Tyre Station. Quality, safety, and innovation for your vehicle in Sri Lanka."
        />
        <meta
          name="keywords"
          content="Tyre Station, Tyre Brands, Premium Tyres, Sri Lanka, Tyre Safety, Tyre Innovation"
        />
        <meta name="author" content="The Tyre Station" />

        {/* Open Graph / Social sharing */}
        <meta property="og:title" content="Premium Tyre Brands | The Tyre Station" />
        <meta
          property="og:description"
          content="Discover the premium tyre brands partnered with The Tyre Station. Quality, safety, and innovation for your vehicle in Sri Lanka."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
        />
        <meta property="og:url" content="https://yourwebsite.com/brands" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Tyre Brands | The Tyre Station" />
        <meta
          name="twitter:description"
          content="Discover the premium tyre brands partnered with The Tyre Station. Quality, safety, and innovation for your vehicle in Sri Lanka."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
        />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-8"
          >
            <span className="text-yellow-400 font-semibold text-sm">Trusted Partners</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          >
            Premium
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Brands
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            We partner with the world's leading tyre manufacturers to bring you the best in
            quality, performance, and innovation.
          </motion.p>
        </div>
      </section>

      {/* --- BRANDS CAROUSEL --- */}
      <BrandsSection />

      {/* --- BRAND VALUES --- */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {' '}
                Value
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AwardIcon,
                title: 'Quality Excellence',
                description:
                  'Only premium brands that meet our rigorous quality standards',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Safety First',
                description: 'Tyres tested and certified for maximum safety and reliability',
              },
              {
                icon: TrendingUpIcon,
                title: 'Innovation',
                description: 'Latest technology and advancements in tyre engineering',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
