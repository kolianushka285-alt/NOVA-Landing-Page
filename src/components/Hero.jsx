function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            <span>✦</span> AI-powered productivity platform
          </span>

          <h1>
            Build better.
            <br />
            <span>Work smarter.</span>
          </h1>

          <p>
            NOVA helps modern teams manage projects, automate repetitive work,
            and collaborate faster — all from one intelligent platform.
          </p>

          <div className="hero-buttons">
            <a href="#pricing" className="hero-primary">
              Start Free <span>→</span>
            </a>

            <a href="#product" className="hero-secondary">
              Book a Demo
            </a>
          </div>

          <div className="hero-trust">
            <span>✓</span> No credit card required
            <span>•</span>
            Free forever plan
          </div>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-window">
            <div className="dashboard-top">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>Workspace</span>
              <b>Live</b>
            </div>

            <div className="dashboard-body">
              <div className="dashboard-sidebar">
                <strong>NOVA.</strong>
                <span className="active">◉ Overview</span>
                <span>✓ Tasks</span>
                <span>◇ Projects</span>
                <span>◎ Calendar</span>
                <span>⚙ Settings</span>
              </div>

              <div className="dashboard-main">
                <div className="dashboard-heading">
                  <div>
                    <small>Monday, September 7</small>
                    <h3>Project Overview</h3>
                  </div>
                  <button>+ New task</button>
                </div>

                <div className="dashboard-project">
                  <div>
                    <small>Project Launch</small>
                    <strong>78%</strong>
                  </div>
                  <div className="progress">
                    <span></span>
                  </div>
                </div>

                <div className="dashboard-stats">
                  <div>
                    <small>Tasks</small>
                    <strong>128</strong>
                    <em>+18% this week</em>
                  </div>
                  <div>
                    <small>Completed</small>
                    <strong>94</strong>
                    <em>+24% this week</em>
                  </div>
                  <div>
                    <small>Efficiency</small>
                    <strong>92%</strong>
                    <em>Excellent</em>
                  </div>
                </div>

                <div className="activity">
                  <div className="activity-head">
                    <span>Recent activity</span>
                    <small>View all</small>
                  </div>

                  <div className="activity-item">
                    <b>✓</b>
                    <span>
                      <strong>Campaign strategy completed</strong>
                      2 minutes ago
                    </span>
                  </div>

                  <div className="activity-item">
                    <b>✦</b>
                    <span>
                      <strong>AI automated 12 tasks</strong>
                      18 minutes ago
                    </span>
                  </div>

                  <div className="activity-item">
                    <b>+</b>
                    <span>
                      <strong>New team member joined</strong>
                      1 hour ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="hero-bottom-text">
          Trusted by <strong>10,000+ teams</strong> worldwide
        </p>
      </div>
    </section>
  );
}

export default Hero;