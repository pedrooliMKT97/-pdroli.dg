import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Briefing', desc: 'Entendimento do projeto e objetivos do cliente.' },
  { num: '02', title: 'Research', desc: 'Pesquisa de mercado, referências e concorrência.' },
  { num: '03', title: 'Concept', desc: 'Criação de moodboards e primeiros rascunhos.' },
  { num: '04', title: 'Development', desc: 'Refinamento do design e aplicação em mockups.' },
  { num: '05', title: 'Delivery', desc: 'Entrega dos arquivos finais e manual da marca.' },
];

export default function Process() {
  return (
    <section className="h-screen w-screen md:w-[120vw] flex-shrink-0 flex flex-col justify-center px-8 md:px-24 relative bg-gradient-to-r from-transparent via-amber-900/5 to-transparent">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20 tracking-tight text-center"
        >
          Processo <span className="text-amber-500 italic">Criativo</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative flex flex-col items-center text-center w-full md:w-1/5 group"
            >
              <div className="w-24 h-24 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-amber-400 transition-colors duration-300">
                <span className="text-3xl font-mono text-white/50 group-hover:text-amber-400 transition-colors duration-300">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
