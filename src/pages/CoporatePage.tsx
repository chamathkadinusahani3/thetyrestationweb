import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Globe,
  Award,
  ShieldCheck,
  TrendingUp,
  Users,
  MapPin,
  Phone,
  Mail,
  Wrench,
  Star,
  CheckCircle,
  Package,
  Zap,
  Target,
  Heart,
  Leaf,
  ArrowRight,
} from "lucide-react";

const clients = [
  {
    name: "Telesonic",
    sector: "Electronics",
    since: "Since 1979",
    logo: "/thetyrestationweb/clients/telesonic.png",
  },
  {
    name: "David Gram Stores",
    sector: "Retail",
    logo: "/thetyrestationweb/clients/david-gram.png",
  },
  {
    name: "Kalubowitiyana Tea",
    sector: "Tea Industry",
    logo: "/thetyrestationweb/clients/kalubowitiyana.png",
  },
  {
    name: "John Keells Group",
    sector: "Conglomerate",
    logo: "/thetyrestationweb/clients/john-keells.png",
  },
  {
    name: "Municipal Council of Colombo",
    sector: "Government",
    logo: "/clients/colombo-council.png",
  },
  {
    name: "Galahitiya Tea Factory",
    sector: "Tea Industry",
    logo: "/thetyrestationweb/clients/galahitiya.png",
  },
  {
    name: "KDU",
    sector: "Education",
    logo: "/thetyrestationweb/clients/kdu.png",
  },
  {
    name: "Saru Blue Sapphire Hotel",
    sector: "Hospitality",
    logo: "/thetyrestationweb/clients/blue-sapphire.png",
  },
  {
    name: "Lyceum International Schools",
    sector: "Education",
    logo: "/thetyrestationweb/clients/lyceum.png",
  },
  {
    name: "Wewelkandura Tea Factory",
    sector: "Tea Industry",
    logo: "/clients/wewelkandura.png",
  },
  {
    name: "ICS",
    sector: "Industry",
    logo: "/thetyrestationweb/clients/ics.png",
  },
  {
    name: "Ceylon Electricity Board",
    sector: "Utilities",
    logo: "/thetyrestationweb/clients/ceb.png",
  },
  {
    name: "Raigam",
    sector: "FMCG",
    logo: "/clients/raigam.png",
  },
  {
    name: "Mal-Key",
    sector: "Industry",
    logo: "/thetyrestationweb/clients/malkey.png",
  },
  {
    name: "Arya Hospital",
    sector: "Healthcare",
    logo: "/clients/arya.png",
  },
  {
    name: "Grand Monarch Hotel",
    sector: "Hospitality",
    logo: "/thetyrestationweb/clients/grand-monarch.png",
  },
  {
    name: "Cemento",
    sector: "Construction",
    logo: "/clients/cemento.png",
  },
  {
    name: "CES",
    sector: "Industry",
    logo: "/thetyrestationweb/clients/ces.png",
  },
  {
    name: "BHP",
    sector: "Agriculture",
    logo: "/thetyrestationweb/clients/bhp.png",
  },
  {
    name: "Rapid Creation",
    sector: "Creative",
    logo: "/thetyrestationweb/clients/rapid-creation.png",
  },
  {
    name: "Moratuwa Municipal Council",
    sector: "Government",
    logo: "/thetyrestationweb/clients/maharagama-council.png",
  },
];

const brands = [
  "Michelin",
  "Bridgestone",
  "Dunlop",
  "Goodyear",
  "Yokohama",
  "Maxxis",
  "Federal",
  "CEAT",
  "Ferentino",
  "Falken",
  "Kapsen",
  "DSI",
  "Timsun",
  "GRI",
  "Kinto",
  "Landspider",
];

const services = [
  {
    icon: Wrench,
    label: "Computerized 3D Wheel Alignment",
  },
  {
    icon: Target,
    label: "Wheel Balancing",
  },
  {
    icon: Zap,
    label: "Camber Repair",
  },
  {
    icon: ShieldCheck,
    label: "Suspension Repair",
  },
  {
    icon: Package,
    label: "Battery Testing & Charging",
  },
  {
    icon: Leaf,
    label: "Nitrogen Air Inflating",
  },
  {
    icon: Star,
    label: "Alloy Wheels Repair",
  },
  {
    icon: TrendingUp,
    label: "Tyre Re-Treading & Re-Building",
  },
];

const products = [
  "Tyres",
  "Tubes",
  "Flaps",
  "Batteries",
  "Alloy Wheels",
  "Wheel Nuts",
  "Motor Oils",
  "Car Care Products",
  "Tools & Equipment",
  "Accessories",
];

const outlets = [
  {
    no: "01. Anura Tyres Pvt Ltd",
    location: "Kalawana Road, Nivithigala",
    province: "Sabaragamuwa Province, Sri Lanka",
  },
  {
    no: "02. Anura Tyres Pvt Ltd",
    location: "Mathugama Road, Kalawana",
    province: "Sabaragamuwa Province, Sri Lanka",
  },
  {
    no: "03. Anura Tyres Pvt Ltd",
    location: "Ratnapura 70000",
    province: "Sabaragamuwa Province, Sri Lanka",
  },
  {
    no: "04. Anura Tyres Pvt Ltd",
    location: "Pannipitiya, Highlevel Road",
    province: "Colombo, Western Province, Sri Lanka",
  },
  {
    no: "UK . Nutyre UK Ltd",
    location: "132 Great North Rd, Birchwood, Hatfield AL9 5JN",
    province: "United Kingdom",
    isOverseas: true,
  },
];

const values = [
  {
    icon: TrendingUp,
    title: "Pursue Growth & Learning",
    desc: "Continuously investing in knowledge and capability across our workforce.",
  },
  {
    icon: Heart,
    title: "Open & Honest Relationships",
    desc: "Building trust through transparency with customers and partners.",
  },
  {
    icon: Users,
    title: "Positive Team Spirit",
    desc: "A family-driven culture dedicated to exceptional customer service.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    desc: "Committed to sustainable and responsible business practices.",
  },
  {
    icon: Star,
    title: "Creative Innovation",
    desc: "Pursuing advanced technology and innovative automotive solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Integrity",
    desc: "Strong values that differentiate our business and service quality.",
  },
];

const stats = [
  {
    number: "40+",
    label: "Years Experience",
    sub: "Founded 1983",
  },
  {
    number: "250+",
    label: "Dealer Network",
    sub: "Islandwide",
  },
  {
    number: "16+",
    label: "Premium Brands",
    sub: "Authorized Dealer",
  },
  {
    number: "5",
    label: "Branch Locations",
    sub: "Sri Lanka & UK",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;

    const duration = 1500;

    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const Gold = ({ children }: any) => (
  <span
    className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
  >
    {children}
  </span>
);

function SectionLabel({ children }: any) {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/20 bg-white/[0.03] backdrop-blur-xl text-yellow-400 text-[11px] uppercase tracking-[0.2em] font-bold mb-6">
      <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,1)]" />
      {children}
    </div>
  );
}

export default function CorporatePage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-hidden">
      {/* HERO */}
     <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-24 px-6">
        {/* BACKGROUND */}
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-150px] left-[-120px] w-[420px] h-[420px] bg-amber-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <SectionLabel>
            Trusted Corporate Partner Since 1983
          </SectionLabel>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8">
  Corporate
  <br />
  <Gold>Partnerships</Gold>
</h1>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-9">
            ANURA TYRES & THE TYRE STATION proudly serve Sri Lanka’s leading
            businesses, commercial fleets, factories, institutions, and
            organizations with trusted tyre solutions, automotive services,
            advanced wheel technology, and nationwide distribution support.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-8"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter
                    target={parseInt(item.number)}
                    suffix={item.number.replace(/[0-9]/g, "")}
                  />
                </div>

                <div className="font-bold text-white text-lg mb-1">
                  {item.label}
                </div>

                <div className="text-sm text-zinc-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Corporate Excellence</SectionLabel>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-20">
            Why Businesses <Gold>Trust Us</Gold>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {[
              {
                icon: ShieldCheck,
                title: "Trusted Service",
                desc: "Over four decades of professional service, trusted products, and customer-focused support.",
              },
              {
                icon: Globe,
                title: "Islandwide Network",
                desc: "Serving businesses across Sri Lanka with branches and 250+ dealer partners.",
              },
              {
                icon: TrendingUp,
                title: "Advanced Technology",
                desc: "State-of-the-art wheel alignment, balancing, and tyre management systems.",
              },
              {
                icon: Users,
                title: "Corporate Support",
                desc: "Dedicated fleet support, business partnerships, and after-sales assistance.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-9 backdrop-blur-2xl"
              >
                <div className="absolute top-[-70px] right-[-70px] w-[180px] h-[180px] bg-yellow-500/10 rounded-full blur-[70px]" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center mb-7 shadow-[0_0_40px_rgba(250,204,21,0.35)]">
                  <card.icon size={28} className="text-black" />
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {card.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>About Our Company</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-8">
                Driving Automotive
                <br />
                <Gold>Excellence Since 1983</Gold>
              </h2>

              <div className="space-y-6 text-zinc-400 leading-9">
                <p>
                  Anura Tyres Pvt Ltd was founded in 1983 as an authorized
                  tyre dealer specializing in tyres, tubes, flaps, and
                  batteries. Through professionalism and market trust, the
                  company rapidly became one of Sri Lanka’s recognized tyre
                  trading and distribution businesses.
                </p>

                <p>
                  Building on decades of experience, The Tyre Station Pvt Ltd
                  was launched in 2017 to strengthen modern retail services,
                  wheel technology, suspension repair, and corporate fleet
                  solutions.
                </p>

                <p>
                  Today, our business network spans across Sri Lanka with
                  branches in Ratnapura, Kalawana, Nivithigala, and Pannipitiya
                  while also expanding internationally through NuTyre UK Ltd.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Vision */}
              <div className="rounded-[32px] border border-yellow-500/10 bg-gradient-to-br from-yellow-500/10 to-transparent p-8">
                <div className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-bold mb-4">
                  Vision
                </div>

                <p className="text-zinc-300 leading-8">
                  To become the No.1 importing, trading, services &
                  distribution company for tyres and automotive solutions in
                  Sri Lanka.
                </p>
              </div>

              {/* Mission */}
              <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8">
                <div className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-bold mb-4">
                  Mission
                </div>

                <p className="text-zinc-300 leading-8">
                  Delivering efficiency, flexibility, quality service, and
                  trusted customer relationships through professional
                  automotive solutions.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Authorized Dealer",
                  "Corporate Fleet Support",
                  "Advanced Wheel Technology",
                  "Professional Service",
                  "Trusted Distribution Network",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="px-4 py-2 rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Products & Services</SectionLabel>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black mb-20">
            Premium Automotive
            <br />
            <Gold>Solutions</Gold>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* SERVICES */}
            <div className="rounded-[36px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10">
              <h3 className="text-2xl font-black mb-10">
                Our Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {services.map((service) => (
                  <div
                    key={service.label}
                    className="rounded-2xl border border-white/5 bg-black/30 p-5 flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <service.icon
                        size={20}
                        className="text-yellow-400"
                      />
                    </div>

                    <div className="text-zinc-300 text-sm leading-7 font-medium">
                      {service.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="space-y-8">
              <div className="rounded-[36px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10">
                <h3 className="text-2xl font-black mb-8">
                  Product Categories
                </h3>

                <div className="flex flex-wrap gap-3">
                  {products.map((product) => (
                    <div
                      key={product}
                      className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-300 text-sm font-medium"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-yellow-500/10 bg-gradient-to-br from-yellow-500/10 to-transparent p-10">
                <h3 className="text-2xl font-black mb-8">
                  Main Brands
                </h3>

                <div className="flex flex-wrap gap-3">
                  {brands.map((brand) => (
                    <div
                      key={brand}
                      className="px-4 py-3 rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm font-bold"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-28 px-6 border-y border-white/5 bg-white/[0.02]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <SectionLabel>Trusted Partnerships</SectionLabel>

      <h2 className="text-[clamp(2rem,5vw,4rem)] font-black mb-6">
        Our Main <Gold>Clients</Gold>
      </h2>

      <p className="max-w-3xl mx-auto text-zinc-400 leading-9">
        Proudly serving leading organizations, hospitals, institutions,
        factories, government authorities, and commercial fleets across
        Sri Lanka.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {clients.map((client) => (
        <div
          key={client.name}
          className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-zinc-900/90 to-black backdrop-blur-2xl p-8 hover:border-yellow-500/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]"
        >
          {/* glow */}
          <div className="absolute top-[-70px] right-[-70px] w-[180px] h-[180px] bg-yellow-500/10 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* top accent */}
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 mb-8" />

          {/* logo */}
          <div className="relative z-10 w-full h-28 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black p-5 flex items-center justify-center mb-8 overflow-hidden border border-white/5">
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(250,204,21,0.45)] drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]"
            />
          </div>

          {/* content */}
          <div className="relative z-10">
            <h3 className="text-xl font-black text-white mb-3 leading-snug">
              {client.name}
            </h3>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 uppercase tracking-[0.12em] text-[10px] font-bold mb-5">
              {client.sector}
            </div>

            {client.since && (
              <div className="text-zinc-500 text-sm font-medium">
                {client.since}
              </div>
            )}
          </div>

          {/* hover border */}
          <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-yellow-400/10 pointer-events-none transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* OUTLETS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Branch Network</SectionLabel>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black mb-20">
            Our Global
            <br />
            <Gold>Presence</Gold>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {outlets.map((outlet) => (
              <div
                key={outlet.location}
                className={`rounded-[30px] p-8 border ${
                  outlet.isOverseas
                    ? "border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-transparent"
                    : "border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.02]"
                }`}
              >
                <div className="text-yellow-400 text-sm font-black tracking-[0.2em] mb-6">
                  {outlet.no}
                </div>

                <MapPin className="text-yellow-400 mb-5" size={26} />

                <h3 className="font-bold text-lg mb-4 leading-8">
                  {outlet.location}
                </h3>

                <p className="text-zinc-500 leading-7 text-sm">
                  {outlet.province}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>Core Values</SectionLabel>

            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black mb-6">
              What Defines
              <br />
              <Gold>Our Business</Gold>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center mb-7">
                  <value.icon className="text-black" size={26} />
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {value.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-yellow-500/10 to-transparent p-14 text-center">
          <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] bg-yellow-500/10 rounded-full blur-[90px]" />

          <div className="relative z-10">
            <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(250,204,21,0.4)]">
              <Building2 className="text-black" size={42} />
            </div>

            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-8">
              Let’s Build A
              <br />
              <Gold>Long-Term Partnership</Gold>
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-300 text-lg leading-9 mb-12">
              Whether you operate a fleet, logistics company, factory,
              institution, hotel, or corporate organization, The Tyre Station
              is ready to deliver trusted tyre solutions and professional
              automotive support tailored to your business.
            </p>

            <Link to="/contact">
  <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-500 text-black font-black text-lg hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(250,204,21,0.45)] transition-all duration-300 shadow-[0_0_45px_rgba(250,204,21,0.35)]">
    Contact Corporate Team
    <ArrowRight size={22} />
  </button>
</Link>
          </div>
        </div>
      </section>
    </div>
  );
}