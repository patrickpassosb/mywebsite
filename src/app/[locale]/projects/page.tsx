export default function ProjectsIndex() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-32 pb-48">
      <h1 className="font-serif italic text-6xl leading-tight text-on-surface mb-8">
        Projects
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-12">
        A directory of systems, open source contributions, and personal infrastructure.
      </p>
      
      {/* List / Grid of Projects will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container p-8">
              <span className="font-mono text-[10px] tracking-widest uppercase text-outline">TBD</span>
              <h3 className="font-serif text-2xl mt-2 mb-4">Project Alpha</h3>
              <p className="text-on-surface-variant text-sm">Generic placeholder for future project.</p>
          </div>
          <div className="bg-surface-container p-8">
              <span className="font-mono text-[10px] tracking-widest uppercase text-outline">TBD</span>
              <h3 className="font-serif text-2xl mt-2 mb-4">Project Beta</h3>
              <p className="text-on-surface-variant text-sm">Generic placeholder for future project.</p>
          </div>
      </div>
    </section>
  );
}
