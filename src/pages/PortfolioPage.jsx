import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PORTFOLIO_DATA } from '../data/portfolio.jsx'

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const textRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRefs.current, 
        { y: '100%', opacity: 0, rotateZ: 2 },
        { y: '0%', opacity: 1, rotateZ: 0, duration: 1.8, stagger: 0.15, ease: 'power4.out', delay: 0.1 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-white selection:text-black pt-32">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 md:px-12 py-20 flex flex-col items-start justify-center min-h-[60vh] border-b border-white/5">
        <span className="eyebrow mb-8 text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block">Recent Work</span>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[0] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">OUR</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[1] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-outline">FEATURED</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[2] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">PROJECTS.</h1>
        </div>
        
        <p className="mt-12 font-mono text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Explore a curated selection of platforms, applications, and systems we've engineered for industry leaders worldwide.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {PORTFOLIO_DATA.map((project, idx) => {
            const Wrapper = project.link ? 'a' : Link;
            const wrapperProps = project.link 
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : { to: `/portfolio/${project.id}` };

            return (
              <Wrapper key={idx} {...wrapperProps} className="group flex flex-col gap-8 block">
                <div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 overflow-hidden rounded-[3rem] border border-white/5">
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color}`} />
                </div>
                
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                  <div className="flex-1 space-y-6">
                    <div>
                      <span className="mb-4 text-[10px] font-bold tracking-[0.3em] uppercase text-accent/50">{project.category}</span>
                      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white group-hover:text-accent transition-colors mt-2">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-white/10 font-mono text-xs uppercase text-zinc-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">The Challenge</h4>
                      <p className="font-mono text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">The Solution</h4>
                      <p className="font-mono text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
                    </div>
                    {project.link && (
                      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest group-hover:text-white text-zinc-400 transition-colors mt-4">
                        Visit Live Site <ArrowUpRight size={16} />
                      </div>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>

    </main>
  )
}
