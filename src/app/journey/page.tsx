export default function JourneyPage() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        Journey
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-12">
        The chronological progression from early programming to building ambitious systems.
      </p>

      <div className="border-l border-surface-container ml-4 pl-8 space-y-16">
          <div>
              <span className="font-mono text-xs text-primary bg-surface-container-low px-2 py-1 relative -left-[45px] border border-surface-container">2024</span>
              <h3 className="font-serif text-2xl mt-4">Independent Builder & Entrepreneurship</h3>
              <p className="text-on-surface-variant mt-2 max-w-xl">Focusing on science-driven tech, autonomous agents, and systems architectures.</p>
          </div>
          <div>
              <span className="font-mono text-xs text-primary bg-surface-container-low px-2 py-1 relative -left-[45px] border border-surface-container">2023</span>
              <h3 className="font-serif text-2xl mt-4">Hackathon Competitions & Innovation</h3>
              <p className="text-on-surface-variant mt-2 max-w-xl">Winning and competing in international hackathons, building high-impact tech.</p>
          </div>
          <div>
              <span className="font-mono text-xs text-primary bg-surface-container-low px-2 py-1 relative -left-[45px] border border-surface-container">Past</span>
              <h3 className="font-serif text-2xl mt-4">Early Programming & Self-Taught Journey</h3>
              <p className="text-on-surface-variant mt-2 max-w-xl">Learning English, deep diving into engineering fundamentals, and transitioning into technical schools.</p>
          </div>
      </div>
    </section>
  );
}
