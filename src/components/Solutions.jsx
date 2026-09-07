function Solutions() {
  const solutions = [
    ["01", "For Startups", "Move fast, stay focused, and build a strong foundation without unnecessary complexity."],
    ["02", "For Teams", "Give everyone one shared workspace to collaborate, organize, and get work done."],
    ["03", "For Businesses", "Scale your workflows, automate operations, and make decisions with better data."],
    ["04", "For Remote Teams", "Keep distributed teams aligned with clear communication and connected workflows."],
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">SOLUTIONS</span>
          <h2>
            Built for the way
            <br />
            <span>you work.</span>
          </h2>
          <p>Whether you're starting small or scaling fast, NOVA grows with you.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map(([number, title, text]) => (
            <div className="solution-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#pricing">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;