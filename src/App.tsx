import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import FloatingAssets from './components/FloatingAssets';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import AboutContact from './components/AboutContact';

export default function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollWidth = () => {
      if (scrollContainerRef.current) {
        setScrollWidth(scrollContainerRef.current.scrollWidth - window.innerWidth);
      }
    };

    // Small delay to ensure all components are rendered and images are loaded
    const timeoutId = setTimeout(updateScrollWidth, 100);
    
    window.addEventListener('resize', updateScrollWidth);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateScrollWidth);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollWidth]);

  return (
    <div className="bg-[#030303] text-white min-h-screen font-sans selection:bg-amber-500/30">
      <CustomCursor />
      <FloatingAssets />
      
      <div ref={targetRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div 
            ref={scrollContainerRef}
            style={{ x }} 
            className="flex h-screen w-max items-center"
          >
            <Hero />
            <Services />
            <Process />
            <CaseStudies />
            <Testimonials />
            <AboutContact />
            <div className="w-[10vw] flex-shrink-0" /> {/* Spacer to allow scrolling to the end */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
