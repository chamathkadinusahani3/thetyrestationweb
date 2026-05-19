import React, { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, SendIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function TyreCatalogue() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState(""); // <-- Added for tools search

  const categories = [
    "ALL",
    "PASSENGER CAR",
    "LIGHT TRUCK",
    "TRUCK & BUS",
    "OFF THE ROAD",
    "TOOLS",
  ];

  const tyres = [
     {
    id: 1,
    brand: "FORZA 001",
    pattern: "FORZA 001",
    desc: "Deliver a thrilling ride with maximum precision.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_FORZA_001_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/forza-001/",
  },
  {
    id: 2,
    brand: "FALCO S88",
    pattern: "FALCO S88",
    desc: "Perfect balance of dynamic appearance and sport-oriented performance.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_FALCO_S88_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/falco-s88/",
  },
  {
    id: 3,
    brand: "V-36",
    pattern: "V-36",
    desc: "Feel the greater stability and control.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_V-36_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/v-36/",

  },
  {
    id: 4,
    brand: "X-68+",
    pattern: "X-68+",
    desc: "Enjoy the ultimate handling and grip.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_X-68__img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/x-68-plus/",
  },
  {
    id: 5,
    brand: "SC-900",
    pattern: "SC-900",
    desc: "Quieter, Safer and Smoother Journey.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_SC-900_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/sc-900/",

  },
  {
    id: 6,
    brand: "SC-901",
    pattern: "SC-901",
    desc: "Cost-effective with long endurance.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_SC-901_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/sc-901/",
  },
  {
    id: 7,
    brand: "ST-51",
    pattern: "ST-51",
    desc: "Longevity and performance on the highway.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_ST-51_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/st-51/",
  },
  {
    id: 8,
    brand: "ST-55",
    pattern: "ST-55",
    desc: "Pure street performance.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_ST-55_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/st-55/",
  },
  {
    id: 9,
    brand: "SW-89",
    pattern: "SW-89",
    desc: "High-speed travel on snow and ice.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/PassengerCar/banner_product_SW-89_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/sw-89/",
  },
  {
    id: 10,
    brand: "KAIJU-2",
    pattern: "KAIJU-2",
    desc: "Meet your daily adventures on and off the road.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/LightTruck/banner_product_KAIJU-2_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/kaiju-2/",

  },
  {
    id: 11,
    brand: "SM-5",
    pattern: "SM-5",
    desc: "Balance performance over various terrains.",
    size: "",
    category: "PASSENGER CAR",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/LightTruck/banner_product_SM-5_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/sm-5/",

  },

  // --------------------
  // LIGHT TRUCK
  // --------------------
  {
    id: 12,
    brand: "PRESA M/T",
    pattern: "PRESA M/T",
    desc: "Experience go-anywhere performance with amazing traction.",
    size: "",
    category: "LIGHT TRUCK",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/LightTruck/banner_product_PRESA_M_T_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/presa-m-t/",

  },
  {
    id: 13,
    brand: "FUERTE K99",
    pattern: "FUERTE K99",
    desc: "Address the multi-purpose needs of modern commercial vehicles.",
    size: "",
    category: "LIGHT TRUCK",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/LightTruck/banner_product_FUERTE_K99_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/fuerte-k99/",

  },
  {
    id: 14,
    brand: "SM-1",
    pattern: "SM-1",
    desc: "Gain more mileage through extended periods of wear.",
    size: "",
    category: "LIGHT TRUCK",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/LightTruck/banner_product_SM-1_img_2x.png?v=202405291424",
    link: "https://kinto-tyres.lk/product/sm-1/",

  },

  // --------------------
  // TRUCK & BUS
  // --------------------
  {
    id: 15,
    brand: "KMX707",
    pattern: "KMX707",
    desc: "",
    size: "",
    category: "TRUCK & BUS",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/TruckBus/banner_product_KMX707_img_2x_1.webp?v=202405291424",
    link: "https://kinto-tyres.lk/product/kmx707/",

  },
  {
    id: 16,
    brand: "SLH101",
    pattern: "SLH101",
    desc: "",
    size: "",
    category: "TRUCK & BUS",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/TruckBus/banner_product_SLH101_img_2x.webp?v=202405291424",
    link: "https://kinto-tyres.lk/product/slh101/",
    
  },
  {
    id: 17,
    brand: "SLH100",
    pattern: "SLH100",
    desc: "",
    size: "",
    category: "TRUCK & BUS",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/TruckBus/banner_product_SLH100_img_2x.webp?v=202405291424",
    link: "https://kinto-tyres.lk/product/slh100/",

  },
  {
    id: 18,
    brand: "KMX700",
    pattern: "KMX700",
    desc: "",
    size: "",
    category: "TRUCK & BUS",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/TruckBus/banner_product_KMX700_img_2x-1.webp?v=202405291424",
    link: "https://kinto-tyres.lk/product/kmx700/",
  },
  {
    id: 19,
    brand: "KMX703",
    pattern: "KMX703",
    desc: "",
    size: "",
    category: "TRUCK & BUS",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/TruckBus/banner_product_KMX703_img_2x_1.webp?v=202405291424",
    link: "https://kinto-tyres.lk/product/kmx703/",
  },
  {
    id: 20,
    brand: "KMN606",
    pattern: "KMN606",
    desc: "",
    size: "",
    category: "TRUCK & BUS",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/JCbWKd3P2/TruckBus/banner_product_KMN606_img_2x_1.webp?v=202405291424",
    link: "https://kinto-tyres.lk/product/kmn606/",
  },

  // --------------------
  // OFF THE ROAD
  // --------------------
  {
    id: 21,
    brand: "E3L3/E3L3+/E3L3B/E3L3B+/E3L3C",
    pattern: "E3L3 SERIES",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/E3L3C_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/e3l3-e3l3-plus-e3l3b-e3l3b-plus-e3l3c/#sec67672682a72e5e33f0c9368adzv",
  },
  {
    id: 22,
    brand: "G2L2",
    pattern: "G2L2",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/G2L2_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/g2l2/",
  },
  {
    id: 23,
    brand: "C-1/L5-S",
    pattern: "C-1/L5-S",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/C-1_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/c-1-l5-s/",

  },
  {
    id: 24,
    brand: "R3",
    pattern: "R3",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/R3.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/r3/",

  },
  {
    id: 25,
    brand: "R4",
    pattern: "R4",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/R4_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/r4/",

  },
  {
    id: 26,
    brand: "XF336",
    pattern: "XF336",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/XF336_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/xf336/",

  },
  {
    id: 27,
    brand: "SKS-1/SKS-3",
    pattern: "SKS SERIES",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/SKS-1_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/sks-1-sks-3/",

  },
  {
    id: 28,
    brand: "R1-W",
    pattern: "R1-W",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/R1-W_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/r1-w/",

  },
  {
    id: 29,
    brand: "XF007/XF007A",
    pattern: "XF007 SERIES",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/XF007_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/xf007-xf007a/",

  },
  {
    id: 30,
    brand: "XF208",
    pattern: "XF208",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/XF208_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/xf208/",

  },
  {
    id: 31,
    brand: "KA-6",
    pattern: "KA-6",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/KA-6_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/ka-6/",

  },
  {
    id: 32,
    brand: "R1/R1+/R1-1/R1-2/R1-3/R1-4/R1-5",
    pattern: "R1 SERIES",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/R1-2_1.png?v=202405291424&x=47&y=0&w=266&h=421",
    link: "https://kinto-tyres.lk/product/r1r1r1-1r1-2r1-3r1-4r1-5/",

  },
  {
    id: 33,
    brand: "PR-1",
    pattern: "PR-1",
    desc: "",
    size: "",
    category: "OFF THE ROAD",
    image: "https://image.makewebeasy.net/makeweb/crop/JCbWKd3P2/OffTheRoad/PR-1_1.png?v=202405291424&x=46&y=15&w=266&h=388",
    link: "https://kinto-tyres.lk/product/pr-1/",

  },
    
  { id: 201, brand: "TYRE VULCANIZER(240V)", pattern: "", category: "TOOLS" },
  { id: 202, brand: "Cross Beam Adaptor", pattern: "", category: "TOOLS" },
  { id: 203, brand: "Wheel Nut 1.25 19-12xMM 1.25", pattern: "1006S-L27 HEX", category: "TOOLS" },
  { id: 204, brand: "Wheel Nut 1.5 19-12xMM 1.5", pattern: "1007S-L27 HEX", category: "TOOLS" },
  { id: 205, brand: "ADHESIVE WHEEL WEIGHT 6KG", pattern: "5G 10G*4 FE", category: "TOOLS" },
  { id: 206, brand: "Air hose reel", pattern: "AHC-34-3", category: "TOOLS" },
  { id: 207, brand: "Tiltback Tyre Changers (automatic)", pattern: "C233GB NAAR", category: "TOOLS" },
  { id: 208, brand: "3T Low Profile Garage Jack", pattern: "E1525C", category: "TOOLS" },
  { id: 209, brand: "2T Rachet Jack Stand with Safety Pin", pattern: "E1902", category: "TOOLS" },
  { id: 210, brand: "3T Rachet Jack Stands with Safety Pin", pattern: "E1903", category: "TOOLS" },
  { id: 211, brand: "Baseless 2 Post Lift 4T", pattern: "E2-4.0", category: "TOOLS" },
  { id: 212, brand: "10 Ton Welded hydraulic Bottle Jack", pattern: "E3110", category: "TOOLS" },
  { id: 213, brand: "20 Ton Welded Hydraulic Bottle Jack", pattern: "E3120", category: "TOOLS" },
  { id: 214, brand: "30 Ton Welded Hydraulic Bottle Jack", pattern: "E3130", category: "TOOLS" },
  { id: 215, brand: "50 Ton Hydraulic Bottle Jack", pattern: "E3150", category: "TOOLS" },
  { id: 216, brand: "10000PSI Aluminum Air Hydraulic Pump", pattern: "E51020", category: "TOOLS" },
  { id: 217, brand: "Air Chuck", pattern: "EAC512", category: "TOOLS" },
  { id: 218, brand: "Tyre Pressure Gauge-Normal", pattern: "ECG-008A", category: "TOOLS" },
  { id: 219, brand: "Tyre Pressure Gauge-Digital", pattern: "ECG-008B", category: "TOOLS" },
  { id: 220, brand: "Labour Saving Wrench", pattern: "EW-78A", category: "TOOLS" },
  { id: 221, brand: "ECCENTRIC CAMBER BOLT", pattern: "M10", category: "TOOLS" },
  { id: 222, brand: "ECCENTRIC CAMBER BOLT", pattern: "M12", category: "TOOLS" },
  { id: 223, brand: "ECCENTRIC CAMBER BOLT", pattern: "M13", category: "TOOLS" },
  { id: 224, brand: "ECCENTRIC CAMBER BOLT", pattern: "M14", category: "TOOLS" },
  { id: 225, brand: "ECCENTRIC CAMBER BOLT", pattern: "M15", category: "TOOLS" },
  { id: 226, brand: "ECCENTRIC CAMBER BOLT", pattern: "M16", category: "TOOLS" },
  { id: 227, brand: "ECCENTRIC CAMBER BOLT", pattern: "M17", category: "TOOLS" },
  { id: 228, brand: "Tyre Mounting Paste 1kg", pattern: "PRO-3001", category: "TOOLS" },
  { id: 229, brand: "Tyre Mounting Paste 3kg", pattern: "PRO-3003", category: "TOOLS" },
  { id: 230, brand: "Tyre Mounting Paste 5kg", pattern: "PRO-3005", category: "TOOLS" },
  { id: 231, brand: "Ten Socket Kits", pattern: "SOCKET-10", category: "TOOLS" },
  { id: 232, brand: "Three Sockets Kits", pattern: "SOCKETS-3", category: "TOOLS" },
  { id: 233, brand: "1TON Spring Compressor", pattern: "TL-10005", category: "TOOLS" },
  { id: 234, brand: "1000LBS Motorcycle Jack", pattern: "TL-31001", category: "TOOLS" },
  { id: 235, brand: "20 Ton Hydraulic Shop Press", pattern: "TL-5920", category: "TOOLS" },
  { id: 236, brand: "Tubless Repair Kit", pattern: "TRK-006", category: "TOOLS" },
  { id: 237, brand: "Tyre Valve Key", pattern: "VT-011", category: "TOOLS" },
  { id: 238, brand: "Tyre Valve Puller (Blue)", pattern: "VT-026A", category: "TOOLS" },
  { id: 239, brand: "Tyre Valve Puller (Green)", pattern: "VT-026B", category: "TOOLS" },


  ];

  const filteredTyres =
    activeCategory === "ALL"
      ? tyres.filter((t) => t.category !== "TOOLS")
      : tyres.filter((t) => t.category === activeCategory);

  // Filtered tools based on search
  const filteredTools =
    activeCategory === "TOOLS"
      ? filteredTyres.filter(
          (tool) =>
            tool.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.pattern.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Tyre Collection</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearchQuery(""); // reset search when switching category
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "border-yellow-400 text-yellow-400 hover:bg-yellow-400/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* -------------------------
            TOOLS SEARCH BAR
        -------------------------- */}
        {activeCategory === "TOOLS" && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search tools by name or pattern..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 rounded-lg border border-yellow-400 bg-black text-white placeholder-yellow-400"
            />
          </div>
        )}

        {/* -------------------------
            RENDER TOOLS AS LIST
        -------------------------- */}
        {activeCategory === "TOOLS" && (
          <div className="space-y-4">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="flex items-center justify-between p-4 bg-white/10 border border-yellow-400/20 rounded-lg"
                >
                  <div>
                    <p className="text-lg font-semibold">{tool.brand}</p>
                    <p className="text-yellow-400 text-sm">{tool.pattern}</p>
                  </div>

                  {/* Inquiry Button */}
                  <Link
                    to={`/contact?tyre=${encodeURIComponent(
                      tool.brand + " " + tool.pattern
                    )}`}
                    className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg flex items-center gap-2"
                  >
                    <SendIcon className="w-4 h-4" />
                    Inquiry
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-white/50 text-center">No tools found.</p>
            )}
          </div>
        )}

        {/* -------------------------
            NORMAL TYRE GRID
        -------------------------- */}
        {activeCategory !== "TOOLS" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTyres.map((tyre) => (
              <motion.div
                key={tyre.id}
                whileHover={{ scale: 1.05 }}
                className="p-5 bg-white/10 border border-yellow-400/20 rounded-xl"
              >
                {tyre.image ? (
                  <img src={tyre.image} className="w-full h-60 object-contain" />
                ) : (
                  <div className="w-full h-60 flex items-center justify-center text-yellow-400 border border-yellow-400/30 rounded-lg">
                    No Image Available
                  </div>
                )}

                <h3 className="text-xl font-semibold mt-4">{tyre.brand}</h3>
                <p className="text-yellow-400">{tyre.pattern}</p>

                <div className="flex gap-3 mt-5">
                  {tyre.link && (
                    <a
                      href={tyre.link}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2 border border-yellow-400 text-yellow-400 rounded-lg"
                    >
                      <EyeIcon className="w-4 h-4" />
                      View
                    </a>
                  )}

                  <Link
                    to={`/contact?tyre=${encodeURIComponent(tyre.pattern)}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-yellow-500 text-black font-semibold rounded-lg"
                  >
                    <SendIcon className="w-4 h-4" />
                    Inquiry
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
 