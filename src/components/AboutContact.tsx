import { motion } from 'motion/react';
import { Instagram, MessageCircle, Download, ExternalLink } from 'lucide-react';

export default function AboutContact() {
  return (
    <section className="h-screen w-screen md:w-[100vw] flex-shrink-0 flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* About Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
            Agenda aberta para Freelancer
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sobre <span className="text-amber-500 italic">Mim</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 font-light">
            Me chamo Pedro, há mais de 5 anos ajudo empresas a crescer através de: Design Gráfico, Identidade Visual, Tráfego Pago, Social Media, Landing Pages de Alta Conversão e Edição de Vídeo.
          </p>
          
          <div className="flex items-center gap-4 text-white/50 text-sm mb-12">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Mogi Guaçu, Brazil
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/5519991309164" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-amber-400 hover:text-black transition-colors duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <Download size={20} />
              Baixar PDF
            </a>
          </div>
        </motion.div>

        {/* Contact Links & Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full flex flex-col justify-center items-center lg:items-end"
        >
          <div className="w-full max-w-md p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Conecte-se comigo</h3>
            
            <div className="space-y-4 relative z-10">
              <a 
                href="https://www.instagram.com/pdroli.dg" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/5 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 group/link"
              >
                <div className="flex items-center gap-4">
                  <Instagram className="text-amber-400" />
                  <span className="font-medium">@pdroli.dg</span>
                </div>
                <ExternalLink size={16} className="text-white/30 group-hover/link:text-amber-400 transition-colors" />
              </a>
              
              <a 
                href="https://www.behance.net/Pdrolidg" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/5 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300 group/link"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 flex items-center justify-center font-bold text-amber-400 bg-amber-400/10 rounded">Bē</div>
                  <span className="font-medium">Behance</span>
                </div>
                <ExternalLink size={16} className="text-white/30 group-hover/link:text-amber-400 transition-colors" />
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
              <p>© {new Date().getFullYear()} Pedro Oliveira.</p>
              <p>Todos os direitos reservados.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
