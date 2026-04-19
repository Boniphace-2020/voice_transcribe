import { motion } from "motion/react";
import { 
  Building2, 
  ChevronRight, 
  Target, 
  Users, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle2, 
  Menu, 
  X,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Building2,
    title: "Strategic Consulting",
    description: "Expert guidance to navigate complex market dynamics and scale your business effectively."
  },
  {
    icon: TrendingUp,
    title: "Investment Management",
    description: "Portfolio optimization and wealth preservation strategies tailored for sustainable growth."
  },
  {
    icon: Globe2,
    title: "International Trade",
    description: "Seamless global logistics and supply chain solutions connecting markets across continents."
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessment",
    description: "Comprehensive security and operational risk audits to safeguard your corporate assets."
  }
];

const testimonials = [
  {
    name: "Sarah Johnstone",
    role: "CEO, TechNorth",
    content: "Baraka Company transformed our supply chain logic. Their expertise is unmatched in the region."
  },
  {
    name: "David Mbeki",
    role: "Director, GreenHouse Africa",
    content: "Working with the Baraka team felt like a true partnership. They value blessings in every deal."
  },
  {
    name: "Elena Rossi",
    role: "Founder, Rossi Logistics",
    content: "Precision, integrity, and a global perspective. Exactly what we needed for our expansion."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-ink overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-all duration-500">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-light tracking-[4px] text-accent">BARAKA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {['Services', 'About', 'Insights', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-medium text-ink-dim hover:text-accent transition-colors uppercase tracking-[2px]">
                {item}
              </a>
            ))}
            <button className="border border-accent text-accent px-8 py-2.5 text-[11px] font-medium hover:bg-accent hover:text-bg transition-all uppercase tracking-[2px] active:scale-95">
              Inquire
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border-theme p-8 flex flex-col gap-6 shadow-2xl"
          >
            {['Services', 'About', 'Insights', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-ink-dim hover:text-accent uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <button className="w-full border border-accent text-accent py-4 font-bold uppercase tracking-widest">
              Private Access
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <span className="hero-label block mb-8">Established 1984</span>
            <h1 className="text-6xl md:text-8xl font-serif text-ink leading-[1.1] font-light mb-10 italic">
              The Art of Enduring<br /> 
              Value and Abundance.
            </h1>
            <p className="text-xl text-ink-dim mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Baraka Company bridges the gap between historical wisdom and modern strategy, 
              curating a legacy that transcends generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border border-accent text-accent px-12 py-5 font-light text-[13px] uppercase tracking-[3px] hover:bg-accent hover:text-bg transition-all duration-500 group active:scale-95">
                Inquire Privately <ArrowUpRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="text-ink-dim px-12 py-5 font-light text-[13px] uppercase tracking-[3px] hover:text-ink transition-all">
                The Heritage Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border-theme bg-surface">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[
            { label: "Assets Under Advisory", value: "$4.2B" },
            { label: "Global Offices", value: "12" },
            { label: "Year Heritage", value: "40+" },
            { label: "Selective Acceptance", value: "0.1%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-light text-ink mb-2">{stat.value}</div>
              <div className="text-[10px] text-accent font-medium uppercase tracking-[2px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-bg">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8 font-light italic">Strategic Disciplines</h2>
            <p className="text-lg text-ink-dim font-light leading-relaxed">
              Our bespoke investment frameworks are tailored to the unique spiritual and financial objectives of our partners.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service.title}
                variants={itemVariants}
                className="elegant-card p-10 group cursor-default"
              >
                <div className="w-12 h-12 border border-border-theme flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-500">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-light text-accent mb-4 italic">
                  {service.title}
                </h3>
                <p className="text-ink-dim leading-relaxed text-[13px] font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-40 overflow-hidden bg-surface text-ink relative border-y border-border-theme">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="relative z-10 p-1 border border-border-theme"
             >
                <img 
                  src="https://picsum.photos/seed/elegant-heritage/800/800" 
                  alt="Baraka Heritage" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:opacity-90 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
             <div className="absolute -bottom-8 -right-8 glass-nav px-10 py-12 hidden md:block max-w-[280px]">
                <p className="text-sm font-serif italic text-accent leading-relaxed">"Integrity is the primary currency. We operate with radical transparency."</p>
             </div>
          </div>

          <div className="flex flex-col gap-10">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight font-light">
              Ethical Stewardship <br /><span className="text-accent italic">Transcending</span> Generations.
            </h2>
            <p className="text-ink-dim text-lg leading-relaxed font-light">
              We leverage decades of market insight to protect and grow substantial assets across global jurisdictions. 
              Our commitment is to the preservation of both capital and character.
            </p>
            <div className="space-y-6">
              {[
                { title: "The Legacy", text: "Protecting historical wisdom in modern markets." },
                { title: "The Standard", text: "Uncompromising integrity across every border." },
                { title: "The Global Hub", text: "A curated network of specialists in key jurisdictions." }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></div>
                  <div>
                    <h4 className="font-light text-ink mb-1 uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-ink-dim text-sm font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-bg">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-24">
            <span className="text-accent font-medium text-[10px] uppercase tracking-[4px] mb-4 block">Personal Accounts</span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink font-light italic">Voices of Excellence.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-12 elegant-card group"
              >
                <div className="flex gap-2 mb-10">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-accent rounded-full"></div>
                  ))}
                </div>
                <p className="text-ink-dim mb-10 italic leading-relaxed font-light text-sm">"{t.content}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale opacity-50 border border-border-theme">
                    <img 
                      src={`https://picsum.photos/seed/${t.name}/100/100`} 
                      alt={t.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-light text-ink uppercase tracking-widest text-[11px]">{t.name}</div>
                    <div className="text-[10px] text-accent uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-bg relative border-t border-border-theme">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <span className="text-accent font-medium text-[10px] uppercase tracking-[4px] mb-8 block">Concierge</span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 font-light italic leading-tight">Begin Your <br />Private Consultation.</h2>
            <p className="text-lg text-ink-dim mb-16 font-light leading-relaxed max-w-lg">
              Our regional hubs are discreetly located to provide dedicated advisory. 
              Experience the convergence of tradition and performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex gap-6 items-start">
                <Phone className="w-4 h-4 text-accent mt-1" />
                <div>
                  <div className="text-[10px] text-accent uppercase font-bold tracking-[2px] mb-2">Direct</div>
                  <div className="text-sm font-light text-ink tracking-widest">+1 (555) 722 452</div>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Mail className="w-4 h-4 text-accent mt-1" />
                <div>
                  <div className="text-[10px] text-accent uppercase font-bold tracking-[2px] mb-2">Nexus</div>
                  <div className="text-sm font-light text-ink tracking-widest">nexus@barakaco.com</div>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div>
                  <div className="text-[10px] text-accent uppercase font-bold tracking-[2px] mb-2">Global HQ</div>
                  <div className="text-sm font-light text-ink tracking-widest leading-loose">Heights, Nairobi, KE</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-12 lg:p-16 border border-border-theme rounded-[4px]">
            <form className="space-y-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="border-b border-border-theme pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold text-accent uppercase tracking-[2px] mb-2 block">First Name</label>
                  <input type="text" className="w-full bg-transparent border-none text-ink font-light focus:outline-none" />
                </div>
                <div className="border-b border-border-theme pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold text-accent uppercase tracking-[2px] mb-2 block">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-none text-ink font-light focus:outline-none" />
                </div>
              </div>
              <div className="border-b border-border-theme pb-4 focus-within:border-accent transition-colors">
                <label className="text-[10px] font-bold text-accent uppercase tracking-[2px] mb-2 block">Corporate Email</label>
                <input type="email" className="w-full bg-transparent border-none text-ink font-light focus:outline-none" />
              </div>
              <div className="border-b border-border-theme pb-4 focus-within:border-accent transition-colors">
                <label className="text-[10px] font-bold text-accent uppercase tracking-[2px] mb-2 block">Inquiry Type</label>
                <select className="w-full bg-transparent border-none text-ink font-light focus:outline-none appearance-none">
                  <option className="bg-surface">Strategic Advisory</option>
                  <option className="bg-surface">Asset Stewardship</option>
                  <option className="bg-surface">Private Partnership</option>
                </select>
              </div>
              <button className="w-full border border-accent text-accent py-6 text-[12px] uppercase tracking-[4px] hover:bg-accent hover:text-bg transition-all duration-500 font-medium active:scale-[0.98]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-bg border-t border-border-theme text-ink">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-10">
                <div className="w-8 h-8 border border-accent flex items-center justify-center">
                  <Building2 className="text-accent w-4 h-4" />
                </div>
                <span className="text-xl font-serif font-light tracking-[4px] text-accent">BARAKA</span>
              </div>
              <p className="text-ink-dim max-w-sm mb-10 leading-relaxed font-light text-sm italic">
                Protecting historical wisdom in modern markets. We operate with radical transparency and deep respect for tradition.
              </p>
            </div>
            
            <div>
              <h5 className="text-accent font-bold mb-8 text-[10px] uppercase tracking-[3px]">Legacy</h5>
              <ul className="space-y-6 text-ink-dim text-[11px] uppercase tracking-[1px] font-light">
                <li><a href="#" className="hover:text-ink transition-colors">History</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">Stewardship</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">Board</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">Ethics</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-accent font-bold mb-8 text-[10px] uppercase tracking-[3px]">Regional Nexus</h5>
              <ul className="space-y-6 text-ink-dim text-[11px] uppercase tracking-[1px] font-light">
                <li>Nairobi</li>
                <li>London</li>
                <li>Singapore</li>
                <li>Dubai</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-border-theme flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="text-[10px] text-ink-dim uppercase tracking-[2px] font-light">
              © {new Date().getFullYear()} Baraka Company. Established 1984.
            </div>
            <div className="flex gap-10 text-[10px] text-ink-dim uppercase tracking-[2px] font-light">
              <a href="#" className="hover:text-accent">Privacy</a>
              <a href="#" className="hover:text-accent">Legal</a>
              <a href="#" className="hover:text-accent">Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
