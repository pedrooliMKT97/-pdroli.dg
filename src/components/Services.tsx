import { motion } from 'motion/react';
import { Monitor, PenTool, Video, TrendingUp, Share2, LayoutTemplate } from 'lucide-react';

const services = [
  { icon: PenTool, title: 'Design Gráfico', desc: 'Posts, Storys e Carrosseis' },
  { icon: Monitor, title: 'Identidade Visual', desc: 'Logos, stationery, 3D mockups' },
  { icon: Video, title: 'Edição de Vídeo', desc: 'Reels, TikTok, YouTube' },
  { icon: TrendingUp, title: 'Tráfego Pago', desc: 'Gestão de anúncios' },
  { icon: Share2, title: 'Social Media', desc: 'Estratégia e conteúdo' },
  { icon: LayoutTemplate, title: 'Landing Pages', desc: 'Alta conversão' },
];

export default function Services() {
  return (
    <section className="h-screen w-screen md:w-[120vw] lg:w-[100vw] flex-shrink-0 flex flex-col justify-center px-8 md:px-24 relative">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
        >
          Meus <span className="text-amber-400 italic">Serviços</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <service.icon className="w-10 h-10 text-amber-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/60">{service.desc}</p>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
