import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "O Pedro transformou completamente a nossa identidade visual. O resultado superou todas as expectativas e o engajamento aumentou muito.",
    client: "Maria Silva",
    role: "CEO, EcoFashion",
    stats: "514 project views, 16 likes",
  },
  {
    text: "Profissionalismo e criatividade excepcionais. As landing pages que ele criou dobraram nossa taxa de conversão em menos de um mês.",
    client: "João Santos",
    role: "Diretor de Marketing, TechSolutions",
    stats: "Aumento de 30% em retenção",
  },
];

export default function Testimonials() {
  return (
    <section className="h-screen w-screen md:w-[120vw] lg:w-[100vw] flex-shrink-0 flex flex-col justify-center px-8 md:px-24 relative">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20 tracking-tight text-center"
        >
          O que dizem os <span className="text-amber-400 italic">Clientes</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10 group-hover:text-amber-500/20 transition-colors duration-500" />
              
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white/90">
                "{t.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-bold text-lg">{t.client}</h4>
                  <p className="text-sm text-amber-400">{t.role}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-white/60">
                    {t.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
