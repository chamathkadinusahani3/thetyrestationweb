import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: "What does The Tyre Station (Pvt) Ltd do?",
      a: "The Tyre Station is a leading tyre importer, exporter, and distributor in Sri Lanka. We supply quality tyres to retail customers, dealers, resellers, corporate fleets, and government institutions.",
    },
    {
      q: "How long have you been in the tyre industry?",
      a: "Our journey began in 1983 under the name Anura Tyres. The Tyre Station (Pvt) Ltd was established in 2017, carrying forward over 42 years of trusted experience.",
      
    },
    {
      q: "Which tyre brands do you officially represent?",
      a: "We are the authorized brand agent in Sri Lanka for Kapsen (since 2019), Kinto (since 2024), Landspider, Plus many other internationally recognized brands.",
      
    },
    {
      q: "Do you provide island-wide delivery?",
      a: "Yes. We offer fast, one-day delivery anywhere in Sri Lanka using our efficient logistics and cab service.",
    },
    {
      q: "Do you supply tyres to wholesalers and retailers?",
      a: "Yes. We supply wholesale businesses, retail shops, resellers, corporate fleets, and government institutions.",
    },
    {
      q: "Can I buy tyres directly from you?",
      a: "Yes. We primarily focus on wholesale and distribution, but individual customers can place orders through our hotline..",
    },
    {
      q: "What type of tyres do you supply?",
      a: "We supply tyres for passenger cars, light trucks, trucks & buses, and off-the-road vehicles.",
    },
    {
      q: "How do I check availability or request a quotation?",
      a: "Contact us via hotline (+94 713 885 885), email (info@thetyrestation.lk), or  through the Contact/Quotation form on our website.",
    },
    {
      q: "Do you offer export services?",
      a: "Yes.We export selected tyre brands and sizes to international buyers upon request.",
    },
    {
      q: "Do your tyres come with a warranty?",
      a: "Yes.All tyres distributed by us come with a manufacturer warranty against factory defects.Warranty period varies depending on the brand.",
    },
    {
      q: "Where are your tyres imported from?",
      a: "We source tyres from leading manufacturers in China and Thailand.",
    },
    {
      q: "How can I partner with The Tyre Station?",
      a: "We welcome partnerships with dealers, suppliers, and corporate clients. Contact our hotline or send a message through our website to begin a partnership.",
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <h2 className="text-center text-4xl font-extrabold text-white mb-10">
        Frequently Asked{" "}
        <span className="text-yellow-400">Questions</span>
      </h2>

      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-white/10 bg-white/5 rounded-lg">
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="text-white text-lg font-medium">
                {item.q}
              </span>

              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>

            {/* Animated Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-white/80"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
