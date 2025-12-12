import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";

// Import logos
import kintoLogo from "../assets/brands/kinto.png";
import kapsenLogo from "../assets/brands/kapsen.png";
import tracmaxLogo from "../assets/brands/tracmax.png";
import eagleLogo from "../assets/brands/eaglepro.png";
import landspiderLogo from "../assets/brands/landspider.png";
import yokohamaLogo from "../assets/brands/yokohama.png";
import hauvrexLogo from "../assets/brands/hauvrex.png";

const brands = [
  { name: "Kinto", url: "https://kinto-tyres.lk/", logo: kintoLogo },
  {
    name: "Kapsen",
    url: "https://www.facebook.com/p/Kapsen-Tyres-Sri-Lanka-100067097928973/",
    logo: kapsenLogo,
  },
  {
    name: "Tracmax",
    url: "https://www.facebook.com/p/Tracmax-Sri-Lanka-100089991192907/",
    logo: tracmaxLogo,
  },
  { name: "Eagle Pro", url: "https://www.eagleprotools.com/", logo: eagleLogo },
  {
    name: "Landspider",
    url: "https://landspidertire.com/landspider/index.html",
    logo: landspiderLogo,
  },
  { name: "Yokohama", url: "https://www.yokohamatire.com/", logo: yokohamaLogo },
  { name: "Hauvrex", url: "http://www.hauvrex.com/", logo: hauvrexLogo },
];

export function BrandsSection() {
  const stripRef = useRef(null);
  const [stripWidth, setStripWidth] = useState(0);

  useEffect(() => {
    if (stripRef.current) {
      setStripWidth(stripRef.current.scrollWidth / 2); // half because we duplicate the content
    }
  }, []);

  return (
    <section id="brands" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Trusted
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {" "}
              Brands
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Premium tyres from world-leading manufacturers
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Strip */}
          <div
            ref={stripRef}
            className="flex"
            style={{
              width: "max-content",
              animation: stripWidth
                ? `scroll ${stripWidth / 50}s linear infinite` // adjust speed
                : "none",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.a
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="group flex-shrink-0 px-4"
              >
                <div className="relative px-10 py-6 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/50 transition-all flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl blur-xl"
                  />

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-28 h-20 object-contain mb-3 shadow-[0_0_35px_#fef08a80] rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)] p-2"
                  />

                  <div className="relative flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {brand.name}
                    </h3>
                    <ExternalLinkIcon className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
