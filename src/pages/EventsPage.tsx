import React from 'react';
import { motion } from 'framer-motion';
import { EventsSection } from '../components/EventsSection';
import { SparklesIcon, BellIcon } from 'lucide-react';

export function EventsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">

      {/* Page Header */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)',
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
            <SparklesIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">
              What's Happening
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          >
            Events &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Promotions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto mb-8"
          >
            Discover exclusive deals, product launches, and educational
            workshops. Stay ahead with the latest from The Tyre Station.
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <EventsSection />

      
    </div>
  );
}
