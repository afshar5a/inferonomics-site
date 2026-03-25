const steps = [
  {
    number: "1",
    title: "Choose a scenario",
    description:
      "Select an architecture pattern and set your baseline assumptions.",
  },
  {
    number: "2",
    title: "Adjust parameters",
    description:
      "Change volume, prompt size, retrieval depth, caching, and pricing inputs.",
  },
  {
    number: "3",
    title: "Read the economics",
    description:
      "See cost curves, break-even points, and margin sensitivity in real time.",
  },
];

const SimulatorSection = () => (
  <section id="simulator" className="py-20 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Interactive Simulator
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Explore how architecture decisions affect cost, margin, and viability.
          Adjust inputs and see economic outcomes update in real time.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-display text-lg mb-3">
                {step.number}
              </div>

              <h3 className="font-display text-lg text-foreground mb-1">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-border bg-background">
        <div className="aspect-[16/10] md:aspect-[16/9]">
          <iframe
            src="https://inferonomics.streamlit.app/?embed=true"
            className="w-full h-full border-0"
            title="Inferonomics Simulator"
            loading="lazy"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  </section>
);

export default SimulatorSection;
