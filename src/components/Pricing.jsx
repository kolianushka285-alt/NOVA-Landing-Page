function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "For individuals getting started",
      features: ["Up to 3 projects", "Basic AI automation", "Task management", "Community support"],
    },
    {
      name: "Pro",
      price: "$19",
      description: "For growing teams",
      popular: true,
      features: ["Unlimited projects", "Advanced AI automation", "Team collaboration", "Powerful analytics"],
    },
    {
      name: "Business",
      price: "$49",
      description: "For scaling organizations",
      features: ["Everything in Pro", "Advanced security", "Priority support", "Custom workflows"],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">PRICING</span>
          <h2>
            Simple plans.
            <br />
            <span>Powerful results.</span>
          </h2>
          <p>Choose a plan that fits your team and scale as you grow.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`pricing-card ${plan.popular ? "popular" : ""}`} key={plan.name}>
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

              <h3>{plan.name}</h3>
              <p>{plan.description}</p>

              <div className="price">
                {plan.price}
                <span>/month</span>
              </div>

              <a href="#final-cta" className="pricing-button">
                Get started
              </a>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;