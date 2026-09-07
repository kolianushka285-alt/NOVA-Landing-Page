function Stats() {
  const stats = [
    ["10K+", "Teams worldwide"],
    ["2.5M+", "Tasks completed"],
    ["40%", "Time saved"],
    ["99.9%", "Platform uptime"],
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map(([number, label]) => (
          <div className="stat" key={number}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;