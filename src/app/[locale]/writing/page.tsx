export default function WritingPage() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        Writing &amp; Notes
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-16">
        Essays, experiments, reflections, and technical notes on software engineering.
      </p>

      <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-outline block mb-6">
          Status · Incoming
        </span>
        <h3 className="font-serif italic text-3xl text-on-surface mb-4">
          First essays are being compiled.
        </h3>
        <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Long-form notes on agentic systems, deterministic infrastructure, and
          building ambitious technology will appear here soon.
        </p>
      </div>
    </section>
  );
}
