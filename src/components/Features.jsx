function Features() {
  const features = [
    ["✦", "AI Automation", "Automate repetitive tasks and let AI handle the busywork so your team can focus on what matters."],
    ["✓", "Smart Task Management", "Organize tasks, set priorities, track progress, and keep every project moving forward."],
    ["◎", "Team Collaboration", "Bring your team together with shared workspaces, real-time updates, and seamless communication."],
    ["↗", "Powerful Analytics", "Turn your work data into clear insights and make faster, smarter decisions with confidence."],
    ["◇", "Workflow Optimization", "Build efficient workflows that eliminate bottlenecks and help your team get more done."],
    ["◈", "Secure Workspace", "Keep your projects and business data protected with a secure workspace built for modern teams."],
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">FEATURES</span>
          <h2>
            Everything you need
            <br />
            <span>to work smarter.</span>
          </h2>
          <p>
            Powerful tools designed to help your team stay organized,
            automate work, and achieve more together.
          </p>
        </div>

        <div className="features-grid">
          {features.map(([icon, title, description]) => (
            <div className="feature-card" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="feature-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;