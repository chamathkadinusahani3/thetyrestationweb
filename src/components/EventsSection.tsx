import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, TagIcon, ArrowRightIcon, ClockIcon, MapPinIcon, XIcon } from 'lucide-react';
import news3 from '../assets/news3.jpeg';
import news4 from '../assets/news4.jpeg';

type Event = {
  id: number;
  title: string;
  category: string;
  date: string;
  endDate: string;
  time: string;
  location?: string;
  description: string;
  content?: string[];
  image: string;
  featured: boolean;
  link?: string;
};

const events: Event[] = [
  {
    id: 5,
    title: 'KINTO Tyres Sri Lanka Successfully Participates in The Motor Show 2026',
    category: 'News',
    date: '2026-09-11',
    endDate: '',
    time: '11th – 13th September 2026',
    location: 'BMICH, Colombo',
    description:
      'KINTO Tyres Sri Lanka marked its first ever BMICH exhibition at The Motor Show 2026, showcasing new tyre models, product consultations, special promotions and the KINTO Grand Draw.',
    content: [
      'KINTO Tyres Sri Lanka successfully participated in The Motor Show 2026, held from 11th to 13th September 2026 at BMICH, Colombo. This marked KINTO Tyres Sri Lanka’s first ever exhibition at BMICH, providing an exciting opportunity to strengthen brand awareness and connect with customers, dealers and automotive enthusiasts.',
      'Visitors to the KINTO stall experienced a range of KINTO tyre products and new models, received product consultations and enjoyed special promotions. Customers who placed tyre orders at the KINTO stall received special gifts as a token of appreciation.',
      'The KINTO Grand Draw was also a major attraction, giving visitors the opportunity to register for a chance to win a full set of KINTO tyres, with three lucky winners to be selected at random.',
      'KINTO Tyres Sri Lanka is proud to have successfully completed its first BMICH exhibition and looks forward to continuing to build stronger connections with customers and the automotive community.'
    ],
    image: news4,
    featured: true
  },
  {
    id: 4,
    title: 'KINTO Night of Champions 2026 Celebrates Dealer Excellence',
    category: 'News',
    date: '2026-09-05',
    endDate: '',
    time: 'Evening',
    location: 'Radisson Blu Hotel, Galle',
    description:
      'KINTO Tyres Sri Lanka hosted KINTO Night of Champions 2026 at Radisson Blu Hotel, Galle, celebrating 40 valued dealers and their families with 20 awards, including the prestigious VVIP Champion Awards.',
    content: [
      'KINTO Tyres Sri Lanka proudly hosted KINTO Night of Champions 2026 on 5th September 2026 at Radisson Blu Hotel, Galle, under the theme “Beyond Performance — Driven by Innovation. United for Growth.” The evening brought together 40 valued KINTO dealers and their families to celebrate their achievements, dedication and continued contribution to the growth of the KINTO brand.',
      'Distinguished guests included Mr. Joy Mopar Min, International Sales and Marketing Supervisor at KINTO Tyres; Ms. Nang Kham Nvet, International Sales and Marketing Supervisor at Fujita Giken Kinto Japan; Mr. M.P. Fernando, Chairman of The Tyre Station (Pvt) Ltd; Ms. Manel Ramanayake, Director of The Tyre Station (Pvt) Ltd; Mr. Dantha De Silva, Group CEO of The Tyre Station (Pvt) Ltd; and Mr. Wasantha Ruberu, Director of The Tyre Station (Pvt) Ltd.',
      'The ceremony recognized outstanding dealer performance through award categories, with 20 awards presented during the evening, including Local Tour Awards, Foreign Tour Awards and the prestigious VVIP Champion Awards. The KINTO Tyres Best Salesman of the Year Award was also presented to Mr. Amith Hemal, Senior Sales Executive.',
      'The celebration continued with dance performances, live music, a gala dinner and cocktail gathering, creating a memorable evening of appreciation and fellowship.',
      'KINTO Night of Champions 2026 was more than an awards ceremony—it was a celebration of achievement, dedication and the strong partnerships that continue to drive KINTO forward.',
      'KINTO Tyres Sri Lanka sincerely thanks all its dealers, families, guests, management and team members for being part of this special celebration as we continue moving Beyond Performance — Driven by Innovation. United for Growth.'
    ],
    image: news3,
    featured: true
  },
  {
    id: 1,
    title: 'Kinto Black Friday Sale',
    category: 'Promotion',
    date: '2024-11-29',
    endDate: '2024-12-02',
    time: 'All Day',
    description:
      'Kinto Tyres Sri Lanka launches its annual Black Friday Sale with special discounts through online E-Vouchers. Redeem at dealers by scanning the QR code during purchase.',
    image: 'https://kinto-tyres.lk/_next/static/media/cover-image.f8bd9f81.png',
    featured: true,
    link: 'https://www.facebook.com/share/r/1GNq7SDNSU/'
  },
  {
    id: 2,
    title: 'Kinto 11.11 Mega Sale',
    category: 'Promotion',
    date: '2024-11-11',
    endDate: '2024-11-15',
    time: 'All Day',
    description:
      'Kinto Tyres offers exclusive deals during the 11.11 Sale Week. Customers can claim an E-Voucher online and redeem it at participating dealers.',
    image: 'https://kinto-tyres.lk/_next/static/media/kintosideimage.1744526f.png',
    featured: true,
    link: 'https://www.facebook.com/share/r/17AKjUwYVm/'
  },
  {
    id: 3,
    title: 'Kinto Tyre Launch – Sri Lanka',
    category: 'Launch',
    date: '2025-01-09',
    endDate: '',
    time: 'January 2025',
    description:
      'Kinto Tyres officially launches in Sri Lanka with a new Japanese-technology tyre range. The event showcases new tyre models and special launch offers.',
    image: 'https://kinto.blr1.digitaloceanspaces.com/uploads/1762988239385-651782143-kinto.jpg',
    featured: true,
    link: 'https://www.facebook.com/share/v/1D5UHjxY2q/'
  }
];

const categories = ['All', 'News', 'Promotion', 'Launch', 'Workshop'];

const categoryColors: Record<string, string> = {
  News: 'from-red-500 to-red-700',
  Promotion: 'from-yellow-400 to-yellow-600',
  Launch: 'from-blue-400 to-blue-600',
  Workshop: 'from-green-400 to-green-600'
};

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openEvent, setOpenEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (!openEvent) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenEvent(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openEvent]);

  const filteredEvents =
    selectedCategory === 'All'
      ? events
      : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">

      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Events &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {' '}Promotions
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Stay updated with our latest promotions, product launches, and workshops.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-[0_0_20px_rgba(255,215,0,0.5)]'
                  : 'bg-white/5 backdrop-blur-sm border border-yellow-400/20 text-white/70 hover:border-yellow-400/50 hover:text-yellow-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all">

                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img src={event.image} alt={event.title} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[event.category]} text-white text-xs font-bold shadow-lg`}>
                      {event.category}
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-black/80 backdrop-blur-sm border border-yellow-400/30">
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-sm font-bold">{formatDate(event.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-white/60 text-sm mb-3">
                    <ClockIcon className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>

                  {event.location && (
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-3">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {event.endDate && (
                    <div className="flex items-center space-x-2 text-yellow-400 text-sm mb-4">
                      <TagIcon className="w-4 h-4" />
                      <span>Valid until {formatDate(event.endDate)}</span>
                    </div>
                  )}

                  {/* CTA: external link, or full story in a modal */}
                  {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all"
                      >
                        <span>Learn More</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </motion.button>
                    </a>
                  ) : (
                    <motion.button
                      onClick={() => setOpenEvent(event)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative z-10 w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all"
                    >
                      <span>Read Full Story</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>

                {/* Glow Effect */}
                {event.featured && (
                  <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {openEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenEvent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.article
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="event-modal-title"
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-950 border border-yellow-400/30 shadow-2xl"
            >
              <button
                onClick={() => setOpenEvent(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-yellow-400 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>

              <img src={openEvent.image} alt={openEvent.title} className="w-full h-auto" />

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-yellow-400 text-sm mb-4">
                  <span className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{formatDate(openEvent.date)}</span>
                  </span>
                  {openEvent.location && (
                    <span className="flex items-center space-x-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{openEvent.location}</span>
                    </span>
                  )}
                </div>

                <h3 id="event-modal-title" className="text-2xl sm:text-3xl font-black text-white mb-6">
                  {openEvent.title}
                </h3>

                <div className="space-y-4 text-white/75 leading-relaxed">
                  {(openEvent.content ?? [openEvent.description]).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
