function TrustedBy() {
  const companies = ["LUMA", "VERTEX", "ORBIT", "NEXORA", "FLOWLY"];

  return (
    <section className="trusted-section">
      <div className="section-container">
        <p>Trusted by innovative teams at</p>

        <div className="trusted-logos">
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;