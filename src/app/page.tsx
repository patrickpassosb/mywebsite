import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
              Building high-impact technical systems
            </span>
            <h1 className="font-serif italic text-6xl md:text-8xl leading-tight text-on-surface mb-8">
              Architecting agentic <br />
              systems &amp; ambitious <br />
              digital structures.
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
              Patrick Passos is a builder and systems thinker focused on the intersection of
              deterministic engineering and autonomous agency.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/projects" className="bg-primary text-on-primary px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-primary-container transition-all">
                Projects
              </Link>
              <Link href="/journey" className="border border-outline-variant px-10 py-4 font-mono text-sm uppercase tracking-widest text-on-surface hover:bg-surface-container-low transition-all">
                Journey
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:col-span-3 text-right">
            <div className="font-mono text-[10px] uppercase text-outline leading-loose tracking-widest">
              EST. 2024<br />
              OS_BUILD: 1.0.4<br />
              LAT: 40.7128° N<br />
              LNG: 74.0060° W
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Building Now (Bento Grid) */}
      <section className="bg-surface-container-low py-32 px-8" id="systems">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
            <h2 className="font-serif italic text-4xl text-on-surface">What I’m Building Now</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-outline mt-4 md:mt-0">
              ACTIVE_PROCESSES [03]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Box 1 */}
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-mono text-secondary text-sm mb-8 block">01</span>
                <h3 className="font-serif text-2xl mb-4">Autonomous Infrastructure</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Developing self-healing environments using large action models to minimize operational latency.
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                View Status <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-mono text-secondary text-sm mb-8 block">02</span>
                <h3 className="font-serif text-2xl mb-4">Deterministic Agents</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  A framework for LLM orchestration that guarantees verifiable output paths through symbolic logic constraints.
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                View Status <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-surface-container-lowest p-12 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-mono text-secondary text-sm mb-8 block">03</span>
                <h3 className="font-serif text-2xl mb-4">Modular OS</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Redefining the personal workspace as a composable set of technical primitives for deep work and high output.
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-mono text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                View Status <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-32 px-8" id="projects">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24">
            <h2 className="font-serif italic text-5xl mb-6">Selected Projects</h2>
            <div className="h-px w-32 bg-primary"></div>
          </div>

          <div className="space-y-48">
            {/* Generic Project Placeholder 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="relative overflow-hidden aspect-video bg-surface-container">
                  <img
                    alt="Project Placeholder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_W7-wUREfB_nbr8LMaIPtoa6yVG6BbOjkaTiFq4L2Q2KW_YmUrKK2yWHCo-W7J93QlsJCNhNGlGFehPgt-R6iwduolC74YwgZkjx78LUBdgPCh3HOydEzIoWAG3Hdc9UdOVhDWd2qbh3Jjmv5uqoehaay20Aa6590xAoWNkSmmrrIQqhGtGpGIFgTVizjKrTiPR70K98jIsQ0YOWXgZx6PiWW7cjFCacZ05wGn33gItVynKHbNm5jS-C71uA97dkCs3kMy5sFcLU"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/5"></div>
                </div>
              </div>
              <div className="md:col-span-5 md:pl-12">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-outline mb-4 block">Engine: TBD</span>
                <h3 className="font-serif text-4xl mb-6">Project Alpha</h3>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Placeholder text for your future project description. A distributed compute network designed specifically for hosting autonomous agents at the edge.
                </p>
                <div className="font-mono text-[11px] uppercase tracking-widest space-y-2 mb-10 text-on-surface">
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Stack</span>
                    <span>Stack / TBD</span>
                  </div>
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Status</span>
                    <span>Stable</span>
                  </div>
                </div>
                <a href="/projects/alpha" className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-primary group">
                  View Case Study <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                </a>
              </div>
            </div>

            {/* Generic Project Placeholder 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1 md:pr-12">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-outline mb-4 block">Architecture: TBD</span>
                <h3 className="font-serif text-4xl mb-6">Project Beta</h3>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Placeholder text for your second project description. A visual programming environment for designing complex logic chains in AI systems.
                </p>
                <div className="font-mono text-[11px] uppercase tracking-widest space-y-2 mb-10 text-on-surface">
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Stack</span>
                    <span>Stack / TBD</span>
                  </div>
                  <div className="flex justify-between border-b border-surface-container py-2">
                    <span className="text-outline">Status</span>
                    <span>Beta Testing</span>
                  </div>
                </div>
                <a href="/projects/beta" className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-primary group">
                  View Case Study <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                </a>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="relative overflow-hidden aspect-video bg-surface-container">
                  <img
                    alt="Project Placeholder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXGY8kPtYon7HLQR_sMTBTk7sEVmtzYPtTmensMVY-E0VYZoNkEsDPOJxLVi2tC89qe-_5qVsyUPGckNcDnMPzoYu1DXl3DDoBORnLWLoIou63AFuOK7ARzg91e_6HR2lwjg_zRCsSSmn_LosojKdfWmLH1A-QaoOT-B5qEv_EqsHYlejfynxWjO29u3SumRamyiFjH0YlQkDcQwJ4DHfu_ZkCOhCRfDSMmhjrnA84UYl-s5NkYjGIFgCURpGmTM8SeUyfU5e0Qts"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/5"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How I Build (Engineering Principles) */}
      <section className="bg-[#1a1c1c] text-[#f9f9f9] py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="font-serif italic text-5xl mb-8">Building <br />Philosophy</h2>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#717786]">Core engineering principles</p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-serif text-xl mb-6 text-secondary-container">Deterministic Systems</h4>
                <p className="text-[#c1c6d7] leading-relaxed">Complexity should never breed unpredictability. I build systems where the outcome is a mathematical certainty, not a statistical probability.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-6 text-secondary-container">Minimalist Engineering</h4>
                <p className="text-[#c1c6d7] leading-relaxed">Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away from the codebase.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-6 text-secondary-container">Agency as a Partner</h4>
                <p className="text-[#c1c6d7] leading-relaxed">AI isn&apos;t a replacement for the builder, but a high-fidelity partner that extends our cognitive reach across vast technical surfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Preview */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif italic text-4xl">Journey Preview</h2>
            <Link href="/journey" className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary">View Full Log</Link>
          </div>
          <div className="border-t border-surface-container">
            <div className="grid grid-cols-12 py-8 border-b border-surface-container group hover:bg-surface-container-low transition-colors px-4">
              <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">PRESENT</div>
              <div className="col-span-12 md:col-span-4 font-serif text-xl mt-2 md:mt-0">Software Engineer & Builder</div>
              <div className="col-span-12 md:col-span-6 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                Focused on ambitious technology and writing highly deterministic applications.
              </div>
            </div>
            <div className="grid grid-cols-12 py-8 border-b border-surface-container group hover:bg-surface-container-low transition-colors px-4">
              <div className="col-span-12 md:col-span-2 font-mono text-xs text-outline pt-1">HACKATHON</div>
              <div className="col-span-12 md:col-span-4 font-serif text-xl mt-2 md:mt-0">Global Hackathon Project</div>
              <div className="col-span-12 md:col-span-6 font-body text-on-surface-variant leading-relaxed mt-2 md:mt-0">
                Built and developed high-impact projects under strict time constraints.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing / Notes Preview */}
      <section className="py-32 px-8" id="writing">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-serif italic text-4xl">Writing &amp; Notes</h2>
            <Link href="/writing" className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary">
              View All Content
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <Link href="/writing/placeholder-1" className="bg-surface-container p-8 h-80 flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all group duration-500">
              <span className="font-mono text-[10px] tracking-widest uppercase text-outline group-hover:text-primary-fixed">TBD</span>
              <h4 className="font-serif text-xl leading-snug">The Case for Deterministic Engineering</h4>
              <span className="material-symbols-outlined text-right group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
            <Link href="/writing/placeholder-2" className="bg-surface-container p-8 h-80 flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-all group duration-500">
              <span className="font-mono text-[10px] tracking-widest uppercase text-outline group-hover:text-primary-fixed">TBD</span>
              <h4 className="font-serif text-xl leading-snug">Systems Thinking</h4>
              <span className="material-symbols-outlined text-right group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface py-48 px-8 border-t border-surface-container" id="contact">
        <div className="max-w-screen-md mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8 block">Ready to Build?</span>
          <h2 className="font-serif italic text-6xl md:text-7xl mb-12">Let’s connect.</h2>
          <p className="text-on-surface-variant text-lg mb-16 leading-relaxed">
            Always open to discussing agentic systems, infrastructure challenges, or ambitious technical collaborations.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:patrickpassosb@gmail.com" className="bg-primary text-on-primary px-12 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-primary-container transition-all">
              Email Me directly
            </a>
            <a href="https://t.me/patrickpassos" target="_blank" rel="noopener noreferrer" className="border border-outline-variant px-12 py-5 font-mono text-sm uppercase tracking-widest w-full md:w-auto hover:bg-surface-container-low transition-all">
              Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
