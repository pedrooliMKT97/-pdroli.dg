import { motion } from 'motion/react';

export default function Hero() {
  const text = "Crio Experiências AUTÊNTICAS".split(" ");

  return (
    <section className="h-screen w-screen md:w-[100vw] flex-shrink-0 flex flex-col justify-center items-center relative px-8">
      <div className="max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-500 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-8"
        >
          Pedro Oliveira — Graphic Designer
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85]">
          {text.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-4">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.15 + 0.3,
                }}
              >
                {word === "AUTÊNTICAS" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 flex items-center gap-6"
        >
          <div className="w-16 h-[1px] bg-white/20" />
          <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
}
