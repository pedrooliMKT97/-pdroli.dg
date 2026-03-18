import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Brand Identity',
    category: 'Identidade Visual',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    desc: 'Criação de identidade visual completa para marca de moda sustentável.',
    results: '+40% engajamento',
  },
  {
    title: 'Social Media Kit',
    category: 'Design Gráfico',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    desc: 'Templates e estratégia de conteúdo para Instagram.',
    results: '10k novos seguidores',
  },
  {
    title: 'Packaging Design',
    category: 'Embalagem',
    image: 'https://images.unsplash.com/photo-1607006411066-43f4c8aa8f4b?q=80&w=2070&auto=format&fit=crop',
    desc: 'Design de embalagem premium para café artesanal.',
    results: 'Destaque no Behance',
  },
];

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section className="h-screen w-screen md:w-[60vw] lg:w-[40vw] flex-shrink-0 flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Projetos <span className="text-amber-400 italic">Destaque</span>
          </h2>
          <a href="https://www.behance.net/Pdrolidg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors w-max">
            Ver no Behance <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </section>

      {cases.map((c, i) => (
        <section 
          key={i} 
          className="h-screen w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 flex flex-col justify-center pr-8 md:pr-16 relative overflow-hidden"
        >
          <motion.div
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative w-full h-[60vh] rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
          >
            <img 
              src={c.image} 
              alt={c.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
              <p className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">{c.category}</p>
              <h3 className="text-3xl font-bold mb-4">{c.title}</h3>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/70 text-sm mb-4">{c.desc}</p>
                <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold">
                  {c.results}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
}
