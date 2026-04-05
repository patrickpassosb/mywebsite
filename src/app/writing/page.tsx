export default function WritingPage() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        Writing &amp; Notes
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-12">
        Essays, experiments, reflections, and technical notes on software engineering.
      </p>

      <div className="space-y-4">
          <a href="#" className="block bg-surface-container-lowest p-8 border border-surface-container hover:border-primary transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-2xl">The Case for Deterministic Infrastructure</h3>
                  <span className="font-mono text-xs text-outline">TBD</span>
              </div>
              <p className="text-on-surface-variant">Placeholder for technical essay.</p>
          </a>
      </div>
    </section>
  );
}
