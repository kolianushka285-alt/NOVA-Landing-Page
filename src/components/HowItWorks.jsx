function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "◉",
      title: "Plan your work",
      text: "Bring your projects, tasks, and priorities together in one clear workspace.",
    },
    {
      number: "02",
      icon: "✦",
      title: "Automate the busywork",
      text: "Let NOVA handle repetitive tasks and streamline the workflows that slow you down.",
    },
    {
      number: "03",
      icon: "↗",
      title: "Grow faster",
      text: "Use real-time insights to make better decisions and keep your team moving forward.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="section-container">

        <div className="section-heading how-heading">
          <span className="section-label">HOW IT WORKS</span>

          <h2>
            From idea to impact,
            <br />
            <span>faster.</span>
          </h2>

          <p>
            Three simple steps to transform the way your team works.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              className={`step-card step-card-${index + 1}`}
              key={step.number}
            >
              <div className="step-glow"></div>

              <div className="step-top">
                <span>{step.number}</span>
                <b className="step-icon">{step.icon}</b>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              <div className="step-arrow">→</div>

              <div className="step-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;