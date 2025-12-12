import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";


import member1 from "../assets/team/member1.png";
import member2 from "../assets/team/member2.png";
import member3 from "../assets/team/member3.png";
import member4 from "../assets/team/member4.png";
import member5 from "../assets/team/member5.png";
import member6 from "../assets/team/member6.png";
import member7 from "../assets/team/member7.png";
import member8 from "../assets/team/member8.png";
import member9 from "../assets/team/member9.png";
import member10 from "../assets/team/member10.png";
import member11 from "../assets/team/member11.png";
import member12 from "../assets/team/member12.png";
import member13 from "../assets/team/member13.png";
import member14 from "../assets/team/member14.png";
import { Helmet } from "react-helmet-async";




const team = [
  { name: "Lilan Fernando", role: "Chairman", image: member1 },
  { name: "Dantha De Silva", role: "Chief Executive Officer", image: member2 },
  { name: "Osman Gunawardane", role: "Sales Manager", image: member3 },
  { name: "Chinthaka Udayanga", role: "Head of Accountant", image: member4 },
  { name: "Ruvini Liyanage", role: "Coodinator", image: member5 },
  { name: "Shehara Withanage", image: member6 },
  { name: "Amith Hemal", image: member7 },
  { name: "Ramodya Hansani", image: member8 },
  { name: "Ashara Athugala", image: member9 },
  { name: "B D A Ishara", image: member10 },
  { name: "Lahiru Priyankara", image: member11 },
  { name: "Isuru Chamod", image: member12 },
  { name: "Sandun Sameera", image: member13 },
  { name: "Chaminda Priyadarshana", image: member14 },
];


export function AboutPage() {
  const [selectedYear, setSelectedYear] = useState("2024");

 
  const achievements = {
    "2024": [
      {
        title: "Best Customer Service Award 2024",
        desc: "Recognized for outstanding customer satisfaction and premium service delivery across Sri Lanka.",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Medal_icon.png",
      },
      {
        title: "Top Retail Performance Award",
        desc: "Awarded for excellence in tyre retail operations and distributor satisfaction.",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Gold_medal_icon.png",
      },
    ],
    "2023": [
      {
        title: "Quality Assurance Excellence",
        desc: "Awarded for maintaining high standards in tyre quality and safety performance.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Crystal_award.png",
      },
    ],
  };

  return (
    
    <div className="min-h-screen bg-black text-white pt-20">
      <Helmet>
  <title>About Us | The Tyre Station</title>
  <meta name="description" content="Learn more about The Tyre Station: 42+ years of premium tyre service, trusted team, awards, and UK operations under NUTYRE." />
  <meta name="keywords" content="Tyre Station, Tyres Sri Lanka, Premium Tyres, UK Office, NUTYRE, Tyre Services" />
  <meta name="author" content="The Tyre Station" />

  {/* Open Graph / Social sharing */}
  <meta property="og:title" content="About Us | The Tyre Station" />
  <meta property="og:description" content="Learn more about The Tyre Station: 42+ years of premium tyre service, trusted team, awards, and UK operations under NUTYRE." />
  <meta property="og:image" content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80" />
  <meta property="og:url" content="https://yourwebsite.com/about" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Us | The Tyre Station" />
  <meta name="twitter:description" content="Learn more about The Tyre Station: 42+ years of premium tyre service, trusted team, awards, and UK operations under NUTYRE." />
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80" />
</Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-yellow-400/30 mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            Learn More About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              The Tyre Station
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Over 42 years of trusted tyre excellence, service, and innovation in Sri Lanka.
          </motion.p>
        </div>
      </section>

      {/* --- WHO WE ARE SECTION --- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-yellow-400 mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/80 leading-relaxed text-lg"
          >
            Founded in 1983 under <strong>Anura Tyres</strong> and re-established as
            <strong> The Tyre Station (Pvt) Ltd</strong> in 2017.
            <br /><br />
            With <strong>42+ years of industry excellence</strong>, we serve customers,
            dealers, government, and corporate fleets with premium global tyre brands.
          </motion.p>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Vision</h2>
            <p className="text-white/80 text-lg">
              To be Sri Lanka’s most trusted and accessible tyre solutions provider.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Mission</h2>
            <p className="text-white/80 text-lg">
              To deliver premium quality tyres and professional services
              that ensure safety, performance, and long-term customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
{/* --- TEAM SECTION --- */}
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-bold mb-12"
    >
      Meet Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
        Team
      </span>
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="p-6 bg-gradient-to-br from-white/10 to-white/5 
                     backdrop-blur-xl border border-yellow-400/20 rounded-2xl"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 
                          border-2 border-yellow-400/40 shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="font-semibold text-white">{member.name}</h3>
          <p className="text-white/60 text-sm">{member.role}</p>
        </motion.div>
      ))}
    </div>

    {/* Dealer Map Section with paragraph */}
    <div className="max-w-3xl mx-auto mt-12 text-center">
      <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-bold mb-12"
    >
      Explore Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
        Dealers
      </span>
    </motion.h2>
      <p className="text-white/70 text-lg mb-6">
        Looking for a dealer near you? Our nationwide network ensures you can find a trusted Tyre Station dealer wherever you are. Explore our dealer locations and plan your visit easily.
      </p>
      <a
  href="#/dealer-map"
  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg transition"
>
  View Dealers
</a>
    </div>

  </div>
</section>



      {/* --- ACHIEVEMENTS SECTION --- */}
      {/* --- ACHIEVEMENTS SECTION (NO TABS) --- */}
<section className="py-24 border-t border-white/10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-4">Awards & Achievements</h2>
    <p className="text-white/70 max-w-2xl mx-auto mb-12">
      Recognizing our commitment to excellence, service quality, and industry leadership.
    </p>

    {/* Achievement Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* ACHIEVEMENT 1 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-gradient-to-br from-white/10 to-white/5 
                   border border-white/10 rounded-xl backdrop-blur-xl"
      >
        <div className="w-64 h-64 mx-auto mb-4 overflow-hidden rounded-xl bg-black/20 flex items-center justify-center">
          <img
            src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/533258661_122151859934766694_2669735018629448771_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=eLGyj4ZlroMQ7kNvwEKUnU1&_nc_oc=AdkksHZhNL7DNvkhXNZ-SowEJRX5cdisEAjTbRa3hrXupzME6SjQE-hoz5J548S_DSo&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=caxW4XXgGdamogQ7qjqU1A&oh=00_AfkJFRTyzkDV_bApR83RYzgcvQ7mLZNuFi46_Kjr8SmqZg&oe=69384733"
            className="w-full h-full object-cover"
            alt="award"
          />
        </div>

        <h3 className="text-xl font-semibold mb-2">Excellence in Best Customer Statisfaction Garantee 2025</h3>
        <p className="text-white/60 text-sm">
          Certificate is proudly presented for outstanding achivement as the Excellence in Best Customer Statisfaction Garantee presented to The Tyre Station (PVT) LTD by Global Bussiness Excellence Awards 2025.
        </p>
      </motion.div>

      {/* ACHIEVEMENT 2 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="p-6 bg-gradient-to-br from-white/10 to-white/5 
                   border border-white/10 rounded-xl backdrop-blur-xl"
      >
        <div className="w-64 h-64 mx-auto mb-4 overflow-hidden rounded-xl bg-black/20 flex items-center justify-center">
          <img
            src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/475211198_122113934924713133_2978547881813512913_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RuW2d_qINmkQ7kNvwGc0E3b&_nc_oc=Adlm1_X5qql-Wrt3TkOdmvSZIm24zlCZpcKEa35OswkBdZOTVvvB5luxLP6VorKiz04&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=hmOHf_yzGxJYu-7j4YJKYw&oh=00_AfkaBPixKG2rK1Cte_zxdSsuYh__bbEu4qAWCIwBT8748g&oe=693867F8"
            className="w-full h-full object-cover"
            alt="award"
          />
        </div>

        <h3 className="text-xl font-semibold mb-2">Certification Of Exclusive Distributor</h3>
        <p className="text-white/60 text-sm">
          Certify that The Tyre Station (PVT) LTD is the distributor of Kinto Tyres in Sri Lanka .
        </p>
      </motion.div>

    </div>
  </div>
</section>


{/* --- UK OFFICE HIGHLIGHT SECTION (with Logo) --- */}
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6">

    <div
      className="p-10 rounded-2xl border border-yellow-500/30 
                 bg-gradient-to-br from-yellow-500/10 to-yellow-500/20
                 backdrop-blur-xl shadow-2xl"
    >
      {/* Logo */}
      <div className="w-32 h-32 mx-auto mb-6">
        <img
          src="https://www.nutyre.co.uk/static/media/Logo-01.e67281f7396dbf4eb8df.png"
          alt="NUTYRE Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">
        NUTYRE – Our UK Office
      </h2>

      <p className="text-white/80 text-lg text-center max-w-3xl mx-auto mb-10">
        We proudly operate in the United Kingdom under the brand <span className="text-yellow-400 font-semibold">NUTYRE</span>,  
        offering professional tyre services, mobile fitting, home delivery, and nationwide tyre solutions with complete customer assurance.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="bg-black/40 border border-yellow-400/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">✔ Buy with Assurance</h3>
          <p className="text-white/60">Enjoy a lifetime guarantee on every tyre purchased.</p>
        </div>
        <div className="bg-black/40 border border-yellow-400/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">⭐ Rated Excellent on Trustpilot</h3>
          <p className="text-white/60">4.5 out of 5 stars — trusted by many across the UK.</p>
        </div>
        <div className="bg-black/40 border border-yellow-400/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">🚐 Mobile Fitting Service</h3>
          <p className="text-white/60">Get tyres fitted at your home, workplace, or roadside.</p>
        </div>
      </div>

      {/* Address */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold text-white mb-2">UK Office Location</h3>
        <p className="text-white/70">132, Great North Road, Hatfield, AL9 5JN</p>
        <p className="text-white/70 mt-1">📞 07311 694 631 / 01707 912085</p>
        <p className="text-white/70">✉️ info@nutyre.co.uk</p>
      </div>
    </div>

  </div>
</section>


    </div>
  );
}
