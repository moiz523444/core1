import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How much will my project cost?",
    answer: "Every project is unique. We price based on the scope, timeline, and complexity. During our free discovery call, we'll listen to your needs and provide a transparent, upfront quote so there are no surprises later."
  },
  {
    id: 2,
    question: "How long does it typically take to launch?",
    answer: "For standard web applications, it usually takes between 4 to 8 weeks. More complex platforms or mobile apps may take 3 to 4 months. We establish strict deadlines on day one and stick to them."
  },
  {
    id: 3,
    question: "Do you provide support after the product is launched?",
    answer: "Absolutely. We don't just hand over the code and disappear. We offer post-launch maintenance, bug fixes, and feature updates to ensure your product scales as your business grows."
  },
  {
    id: 4,
    question: "What if I already have a design but need developers?",
    answer: "That works perfectly! We can take your existing Figma files or wireframes and bring them to life with clean, scalable code. We're happy to act purely as your technical execution partner."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-32 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        
        <div className="sticky top-32">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-6"
          >
            Clear Doubts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl tracking-tight leading-none mb-8"
          >
            Frequently Asked <br className="hidden md:block"/>
            <span className="text-white/30">Questions.</span>
          </motion.h2>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
            Everything you need to know about working with us. Can't find the answer you're looking for? Feel free to reach out.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left px-8 py-6 flex justify-between items-center group"
              >
                <h4 className="text-lg md:text-xl font-bold tracking-tight pr-8 group-hover:text-accent transition-colors duration-300">{faq.question}</h4>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300 group-hover:rotate-180">
                  {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-white/40 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
