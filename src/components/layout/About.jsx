import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="py-32 md:py-64 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 md:gap-48 items-start relative z-10">
        <div className="space-y-16 md:space-y-24">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block"
            >
              Who We Are
            </motion.span>
            <h2 className="text-4xl md:text-8xl tracking-tight md:tracking-tighter leading-[0.95] md:leading-[0.85] break-normal">
              Who We <br className="hidden md:block" />{" "}
              <span className="text-white/30">Are.</span>
            </h2>
          </div>

          <div className="space-y-12 text-white/50 text-xl md:text-3xl font-light leading-relaxed max-w-2xl">
            <p>
              We are a team of expert developers and designers dedicated to creating impactful digital experiences. We focus on clean code, intuitive design, and scalable architecture to deliver products that bring real business value.
            </p>
            <p className="text-white/30 text-lg md:text-xl">
              We collaborate with businesses globally to build products that drive results and help them scale.
            </p>
          </div>
        </div>

        <div className="relative border-t md:border-t-0 md:border-l border-white/10 pt-16 md:pt-0 md:pl-24">
          <div className="space-y-24 md:space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <h4 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-accent mb-10 flex items-center gap-6">
                <span className="w-12 h-[1px] bg-accent/30 group-hover:w-20 transition-all duration-700" />
                Our Philosophy
              </h4>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-sm font-light pl-18">
                Clear communication. Technical excellence. User-centered design. We build solutions that last.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <h4 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-accent mb-10 flex items-center gap-6">
                <span className="w-12 h-[1px] bg-accent/30 group-hover:w-20 transition-all duration-700" />
                Global Reach
              </h4>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-sm font-light pl-18">
                Delivering high-quality digital products to ambitious brands around the world.
              </p>
            </motion.div>

            <div className="pt-16 pl-18">
              <button onClick={() => navigate('/about')} className="btn-core text-[10px] font-bold uppercase tracking-[0.3em]">
                <span className="btn-bg bg-accent" />
                <span className="relative z-10">Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
