import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { generatePersonSchema, generateBreadcrumbSchema, siteConfig } from "../utils/seo-config";
import { Link } from "react-router-dom";
import { Award, Briefcase, Building2, Globe, TrendingUp, Users } from "lucide-react";

// Import director image
import directorImage from "../assets/team/member1.png";

export function DirectorPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Lilan Fernando - Managing Director", url: "/director" },
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#lilanfernando`,
    name: "Lilan Fernando",
    alternateName: "Mr. Lilan Fernando",
    jobTitle: "Managing Director",
    worksFor: {
      "@type": "Organization",
      name: "The Tyre Station (Private) Limited",
      url: siteConfig.siteUrl,
      description: "Leading tyre importer, exporter and distributor in Sri Lanka"
    },
    knowsAbout: [
      "Tyre Import & Export",
      "Wholesale Distribution",
      "Business Leadership",
      "International Trade",
      "Automotive Industry",
      "Supply Chain Management"
    ],
    award: [
      "Excellence in Best Customer Satisfaction Guarantee 2025",
      "Exclusive Distributor Certification - KINTO Tyres Sri Lanka"
    ],
    description: "Managing Director of The Tyre Station (Pvt) Ltd, leading Sri Lanka's premier tyre import, export and wholesale distribution company with over 42 years of industry experience.",
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin
    ].filter(Boolean),
  };

  const schemas = [
    personSchema,
    generateBreadcrumbSchema(breadcrumbItems),
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <SEO
        title="Lilan Fernando - Managing Director | The Tyre Station Sri Lanka"
        description="Meet Lilan Fernando, Managing Director of The Tyre Station (Pvt) Ltd. Leading Sri Lanka's premier tyre import, export and distribution company with 42+ years of excellence."
        keywords="Lilan Fernando, Lilan Fernando Managing Director, Lilan Fernando Tyre Station, Managing Director The Tyre Station, Lilan Fernando Sri Lanka, tyre distributor director, KINTO Tyres Sri Lanka Lilan Fernando"
        url="/director"
        schema={schemas}
        author="The Tyre Station (Pvt) Ltd"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Director Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400 shadow-2xl">
                    <img
                      src={directorImage}
                      alt="Lilan Fernando - Managing Director of The Tyre Station Sri Lanka"
                      className="w-full h-full object-cover"
                      itemProp="image"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Director Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              itemScope
              itemType="https://schema.org/Person"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-6"
              >
                <span className="text-yellow-400 font-semibold text-sm">
                  Leadership
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-black mb-4" itemProp="name">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Lilan Fernando
                </span>
              </h1>
              
              <p className="text-2xl text-white/80 mb-6" itemProp="jobTitle">
                Managing Director
              </p>

              <p className="text-xl text-white/60 mb-8" itemProp="worksFor">
                The Tyre Station (Private) Limited
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8" itemProp="description">
  Leading The Tyre Station since its establishment in <strong>2017</strong> in tyre import, 
  export, and wholesale distribution. Under his leadership, The Tyre Station has become 
  Sri Lanka's most trusted tyre distributor, serving dealers, retailers, and fleet operators 
  with premium-quality products and exceptional service.
</p>


              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg transition-all"
                >
                  About The Company
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-bold px-6 py-3 rounded-lg transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-center mb-16"
          >
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Achievements
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence in Customer Satisfaction 2025",
                description: "Awarded by Global Business Excellence Awards, presented by former President Maithripala Sirisena"
              },
              {
                icon: Briefcase,
                title: "Exclusive KINTO Distributor",
                description: "Authorized and exclusive distributor of KINTO Tyres in Sri Lanka"
              },
              {
                icon: TrendingUp,
                title: "Industry Leadership",
                description: "Leading The Tyre Station since 2017, establishing it as one of Sri Lanka's trusted tyre distributors"
              },
              {
                icon: Building2,
                title: "International Expansion",
                description: "Established NUTYRE UK office, expanding operations to the United Kingdom"
              },
              {
                icon: Users,
                title: "Nationwide Dealer Network",
                description: "Built extensive dealer network covering all regions of Sri Lanka"
              },
              {
                icon: Globe,
                title: "International Trade Expertise",
                description: "Expert in tyre import, export and international distribution logistics"
              }
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-white/70 leading-relaxed">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-24 bg-gradient-to-b from-black to-yellow-900/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Leadership Vision
              </span>
            </h2>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p className="text-xl font-semibold text-white">
                "Quality, Trust, and Long-term Customer Satisfaction"
              </p>

              <p>
                Throughout my career in the tyre industry, I have remained committed to 
                delivering the highest standards of quality and service. At The Tyre Station, 
                we don't just distribute tyres – we build lasting partnerships with our dealers 
                and customers.
              </p>

              <p>
                Our success over the past four decades has been built on three fundamental principles: 
                sourcing only premium quality products from trusted international manufacturers, 
                maintaining competitive wholesale pricing through efficient operations, and providing 
                reliable island-wide distribution with professional service.
              </p>

              <p>
                As we continue to grow and expand internationally, our focus remains on ensuring 
                that every dealer partner and end customer receives value-driven solutions that 
                meet international standards.
              </p>

              <div className="border-l-4 border-yellow-400 pl-6 mt-8 italic text-white">
                <p className="text-xl">
                  "I sincerely thank our customers, partners, and team members for their 
                  continued trust and support as we move forward together."
                </p>
                <p className="text-sm text-white/60 mt-4">
                  — Lilan Fernando, Managing Director
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Info CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Learn More About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              The Tyre Station
            </span>
          </motion.h2>

          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Discover how The Tyre Station, under the leadership of Lilan Fernando, 
            has become Sri Lanka's most trusted tyre import and distribution company.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg transition-all"
            >
              Company History
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-bold px-8 py-4 rounded-lg transition-all"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}