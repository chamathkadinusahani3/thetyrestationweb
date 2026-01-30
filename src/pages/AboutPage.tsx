import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

/* Team Images */
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
import member15 from "../assets/team/member15.png";
import member17 from "../assets/team/member17.png";
import member18 from "../assets/team/member18.png";

/* Achievements */
import award1 from "../assets/achievements/award1.png";
import award2 from "../assets/achievements/award2.png";

const team = [
  { name: "Lilan Fernando", role: "Managing Director", image: member1 },
  { name: "Dantha De Silva", role: "Chief Executive Officer", image: member2 },
  { name: "Osman Gunawardane", role: "Sales Manager", image: member3 },
  { name: "Chinthaka Udayanga", role: "Head of Accounts ", image: member4 },
  { name: "Ruvini Liyanage", role: "Business Coordinator", image: member5 },
  { name: "Isharaka Perera", role: "Corporate Manager", image: member6 },
  { name: "Shehara Withanage", image: member7 },
  { name: "Amith Hemal", image: member8 },
  { name: "Ramodya Hansani", image: member9 },
  { name: "Ashara Athugala", image: member10 },
  { name: "B D A Ishara", image: member11 },
  { name: "Lahiru Priyankara", image: member12 },
  { name: "Isuru Chamod", image: member13 },
  { name: "Sandun Sameera", image: member14 },
  { name: "Chaminda Priyadarshana", image: member15 },
  { name: "Chamathka Gamage", image: member17 },
  { name: "Siyasari Sandanayaka", image: member18 },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Helmet>
  <title>About Us | The Tyre Station Sri Lanka</title>

  <meta
    name="description"
    content="Learn about The Tyre Station (PVT) LTD, our leadership, awards, and team. Led by Managing Director Mr. Lilan Fernando, delivering trusted tyre solutions in Sri Lanka."
  />

  <meta
    name="keywords"
    content="The Tyre Station Sri Lanka, Lilan Fernando, Managing Director Lilan Fernando, tyre distributor Sri Lanka, Kinto Tyres Sri Lanka"
  />
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

{/* --- DIRECTOR MESSAGE SECTION --- */}
<section className="py-24 border-t border-white/10">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Director Image */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div
        className="w-80 h-96 rounded-3xl overflow-hidden 
                   border-2 border-yellow-400/40 shadow-2xl
                   bg-gradient-to-br from-yellow-400/10 to-black"
      >
        <img
          src={member1}
          alt="Mr. Lilan Fernando - Managing Director"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Director Message */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold mb-6">
        Message from the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          Director
        </span>
      </h2>

      <p className="text-white/80 text-lg leading-relaxed mb-5">
        Welcome to <strong>The Tyre Station (Private) Limited</strong>.
        Our journey has always been driven by a commitment to quality,
        trust, and long-term customer satisfaction.
      </p>

      <p className="text-white/80 text-lg leading-relaxed mb-5">
        With over four decades of experience in the tyre industry, we
        continue to focus on delivering reliable products, professional
        service, and value-driven solutions that meet international standards.
      </p>

      <p className="text-white/80 text-lg leading-relaxed mb-8">
        I sincerely thank our customers, partners, and team members for
        their continued trust and support as we move forward together.
      </p>

      <div className="border-l-4 border-yellow-400 pl-4">
        <p className="font-semibold text-xl">Mr. Lilan Fernando</p>
        <p className="text-white/60">Managing Director</p>
        <p className="text-white/60">The Tyre Station (PVT) LTD</p>
      </div>
    </motion.div>

  </div>
</section>


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
  {team.slice(1).map((member, index) => (
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
{/* --- AWARDS & CERTIFICATIONS (DIRECTOR LED) --- */}
<section className="py-24 border-t border-white/10">
  <div className="max-w-6xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-bold text-center mb-16"
    >
      Awards &{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
        Certifications
      </span>
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* AWARD 1 */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-white/10 to-white/5 
             border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-xl"
>
  <div className="w-full h-72 mb-6 overflow-hidden rounded-xl bg-black/20">
    <img
      src={award1}
      alt="Excellence in Best Customer Satisfaction Guarantee 2025"
      className="w-full h-full object-cover"
    />
  </div>

  <h3 className="text-2xl font-semibold mb-4">
    Excellence in Best Customer Satisfaction Guarantee – 2025
  </h3>

  <p className="text-white/70 leading-relaxed mb-4">
    This award recognizes <strong>The Tyre Station (PVT) LTD</strong>, the exclusive distributor of <strong>KINTO Tyres in Sri Lanka</strong>, for outstanding achievement in delivering exceptional customer satisfaction and service quality.
  </p>

  <p className="text-white/70 leading-relaxed mb-4">
    The certificate was proudly presented by the <strong>Global Business Excellence Awards – 2025</strong> and handed over by <strong>His Excellency Maithripala Sirisena, former President of Sri Lanka</strong>, acknowledging the company’s consistent commitment to customer care, reliability, and professional business practices.
  </p>

  <p className="text-sm text-yellow-400 italic">
    Achieved under the leadership of Director <strong>Mr. Lilan Fernando</strong>
  </p>
</motion.div>


      {/* AWARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-white/10 to-white/5 
                   border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-xl"
      >
        <div className="w-full h-72 mb-6 overflow-hidden rounded-xl bg-black/20">
          <img
            src={award2}
            alt="Exclusive Distributor Certification"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Certification of Exclusive Distributor
        </h3>

        <p className="text-white/70 leading-relaxed mb-4">
          This certification officially confirms that{" "}
          <strong>The Tyre Station (PVT) LTD</strong> is the authorized and
          exclusive distributor of <strong>KINTO Tyres</strong> in Sri Lanka.
        </p>

        <p className="text-white/70 leading-relaxed mb-4">
          It validates our trusted partnership and commitment to maintaining
          international quality and distribution standards.
        </p>

        <p className="text-sm text-yellow-400 italic">
          Awarded under the leadership of Director Mr. Lilan Fernando
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























