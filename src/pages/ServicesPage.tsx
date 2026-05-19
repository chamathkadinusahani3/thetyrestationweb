import React from 'react';
import { motion } from 'framer-motion';
import { ServicesSection } from '../components/ServicesSection';
import { CheckCircleIcon } from 'lucide-react';
import { Helmet } from "react-helmet-async";


export function ServicesPage() {
  return (
    <div className="min-h-screen bg-black pt-20">

      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Tyre Import, Export & Distribution | The Tyre Station</title>
        <meta
          name="description"
          content="We specialize in importing, exporting, and distributing premium tyres across Sri Lanka. Trusted by workshops, resellers, and corporate fleets."
        />
        <meta
          name="keywords"
          content="Tyre Station, Tyres Sri Lanka, Tyre Import, Tyre Export, Tyre Distribution, Premium Tyres, Tyre Delivery"
        />
        <meta name="author" content="The Tyre Station" />

        {/* Open Graph */}
        <meta property="og:title" content="Tyre Import, Export & Distribution | The Tyre Station" />
        <meta
          property="og:description"
          content="We specialize in importing, exporting, and distributing premium tyres across Sri Lanka. Trusted by workshops, resellers, and corporate fleets."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200&q=80"
        />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tyre Import, Export & Distribution | The Tyre Station" />
        <meta
          name="twitter:description"
          content="We specialize in importing, exporting, and distributing premium tyres across Sri Lanka. Trusted by workshops, resellers, and corporate fleets."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200&q=80"
        />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1527430253228-e93688616381?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-8"
          >
            <span className="text-yellow-400 font-semibold text-sm">
              Our Expertise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          >
            Tyre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}
              Import, Export & Distribution
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            We specialize in importing, exporting and distributing premium tyres
            across Sri Lanka – ensuring quality, reliability, and nationwide reach.
          </motion.p>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <ServicesSection />

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {' '}
                The Tyre Station
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Direct importer ensuring competitive wholesale pricing',
              'Strong global partnerships including our UK office (Nutyre UK)',
              'Island-wide distribution network',
              'Premium quality tyres with strict quality checks',
              'Fast delivery and reliable logistics',
              'Trusted by resellers, workshops, and corporate fleets'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20"
              >
                <CheckCircleIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-white/80 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
