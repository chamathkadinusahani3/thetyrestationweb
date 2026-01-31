import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from "../components/FAQ";
import SEO from '../components/SEO';
import {
  pageConfigs,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebPageSchema,
  generateFAQSchema,
} from '../utils/seo-config';

export function HomePage() {
  // FAQ data for schema
  const faqData = [
    {
      question: "What types of tyres does The Tyre Station import and distribute?",
      answer: "We import and distribute a comprehensive range of premium tyres including passenger car tyres, SUV tyres, commercial vehicle tyres, truck tyres, and specialty tyres from internationally recognized manufacturers."
    },
    {
      question: "Do you offer wholesale pricing for tyre dealers?",
      answer: "Yes, we specialize in B2B wholesale distribution with competitive pricing for authorized dealers, retailers, and bulk buyers across Sri Lanka and international markets."
    },
    {
      question: "What areas do you deliver to in Sri Lanka?",
      answer: "We provide island-wide distribution coverage across all major cities and regions in Sri Lanka, ensuring reliable delivery to our dealer network."
    },
    {
      question: "How can I become an authorized dealer for The Tyre Station?",
      answer: "You can apply to become an authorized dealer by visiting our dealer registration page or contacting us directly at +94 71 3 885 885 or info@thetyrestation.lk"
    },
    {
      question: "What brands do you distribute?",
      answer: "We are the exclusive distributor of KINTO Tyres in Sri Lanka and also distribute other premium international tyre brands. Contact us for our complete brand portfolio."
    }
  ];

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebPageSchema(pageConfigs.home),
    generateFAQSchema(faqData),
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title={pageConfigs.home.title}
        description={pageConfigs.home.description}
        keywords={pageConfigs.home.keywords}
        url={pageConfigs.home.path}
        schema={schemas}
      />

      <HeroSection />

      {/* Quick Links Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Explore Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {' '}
                Services
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mt-4">
              Leading tyre import, export and wholesale distribution solutions for dealers across Sri Lanka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Tyre Import & Export',
                path: '/services',
                description: 'Trusted tyre distributor and reliable export services across Sri Lanka',
                schema: 'Service'
              },
              {
                title: 'Our Trusted Brands',
                path: '/brands',
                description: 'Wholesale tyre distributor for dealers and businesses',
                schema: 'Product'
              },
              {
                title: 'Latest Updates',
                path: '/events',
                description: 'News from the best tyre import company in Sri Lanka',
                schema: 'Event'
              },
              {
                title: 'About Us',
                path: '/about',
                description: 'Learn about The Tyre Station — your trusted tyre and automotive solutions partner in Sri Lanka',
                schema: 'AboutPage'
              },
              {
                title: 'Contact Us',
                path: '/contact',
                description: 'Reach The Tyre Station — Sri Lanka tyre distribution experts',
                schema: 'ContactPage'
              }
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.path} itemProp="url">
                  <motion.article
                    itemScope
                    itemType={`https://schema.org/${item.schema}`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl"
                    />

                    <h3 
                      itemProp="name"
                      className="relative text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors"
                    >
                      {item.title}
                    </h3>
                    <p 
                      itemProp="description"
                      className="relative text-white/60 mb-4"
                    >
                      {item.description}
                    </p>

                    <div className="relative flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn more</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Partnership Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              How to Become a Dealer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                ?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-white/80 text-lg mb-4 font-semibold">
              Join The Tyre Station — Build a Stronger Future Together
            </p>

            <p className="max-w-2xl mx-auto text-white/70 text-lg mb-8">
              Partner with The Tyre Station — a trusted tyre distributor and supplier in Colombo and across Sri Lanka — and grow your business with premium brands, competitive pricing, and reliable nationwide support. Together, we ensure quality, performance, and success for every customer you serve.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dealer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg transition-all w-full sm:w-auto text-center"
              >
                Click Here To Join
              </Link>

              <a
                href="#/dealer-map"
                className="bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black 
                text-yellow-400 font-bold px-6 py-3 rounded-lg transition-all w-full sm:w-auto text-center"
              >
                View Dealers
              </a>
            </div>
          </div>
        </div>
      </section>
 
      <FAQ />
    </div>
  );
}