function HowItWorks() {
  const steps = [
    ["01", "◉", "Plan your work", "Bring your projects, tasks, and priorities together in one clear workspace."],
    ["02", "✦", "Automate the busywork", "Let NOVA handle repetitive tasks and streamline the workflows that slow you down."],
    ["03", "↗", "Grow faster", "Use real-time insights to make better decisions and keep your team moving forward."],
  ];

  return (
    <section className="how-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">HOW IT WORKS</span>
          <h2>
            From idea to impact,
            <br />
            <span>faster.</span>
          </h2>
          <p>Three simple steps to transform the way your team works.</p>
        </div>

        <div className="steps-grid">
          {steps.map(([number, icon, title, text]) => (
            <div className="step-card" key={number}>
              <div className="step-top">
                <span>{number}</span>
                <b>{icon}</b>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="step-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;