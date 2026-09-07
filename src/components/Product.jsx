function Product() {
  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <div className="product-content">
          <span className="section-label">ONE POWERFUL WORKSPACE</span>

          <h2>
            Your work,
            <br />
            <span>in one place.</span>
          </h2>

          <p>
            NOVA brings projects, tasks, conversations, and automation together
            so your team can focus on meaningful work instead of managing
            busywork.
          </p>

          <div className="product-points">
            <div className="product-point">
              <div className="point-icon">✓</div>
              <div>
                <h3>Everything connected</h3>
                <p>Keep your projects, tasks, and team communication organized in one workspace.</p>
              </div>
            </div>

            <div className="product-point">
              <div className="point-icon">✦</div>
              <div>
                <h3>AI that works for you</h3>
                <p>Let NOVA automate repetitive work and help your team make faster decisions.</p>
              </div>
            </div>

            <div className="product-point">
              <div className="point-icon">↗</div>
              <div>
                <h3>Built to scale</h3>
                <p>From small teams to growing companies, NOVA adapts to the way you work.</p>
              </div>
            </div>
          </div>

          <a href="#pricing" className="product-button">
            Explore NOVA →
          </a>
        </div>

        <div className="product-visual">
          <div className="product-window">
            <div className="window-top">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>NOVA Workspace</span>
              <b>● Live</b>
            </div>

            <div className="workspace-body">
              <div className="workspace-sidebar">
                <strong>NOVA.</strong>
                <span className="active">◉ Overview</span>
                <span>✓ My Tasks</span>
                <span>◇ Projects</span>
                <span>◎ Calendar</span>
                <span>⚙ Settings</span>
              </div>

              <div className="workspace-main">
                <small>Monday, September 7</small>
                <h3>Good morning, Team 👋</h3>

                <div className="workspace-cards">
                  <div>
                    <small>Active Projects</small>
                    <strong>24</strong>
                    <em>+12% this month</em>
                  </div>
                  <div>
                    <small>Tasks Completed</small>
                    <strong>186</strong>
                    <em>+28% this month</em>
                  </div>
                  <div>
                    <small>Team Efficiency</small>
                    <strong>94%</strong>
                    <em>Excellent</em>
                  </div>
                </div>

                <div className="workspace-chart">
                  <div>
                    <span>Team productivity</span>
                    <small>Last 7 days</small>
                  </div>

                  <div className="chart-bars">
                    <i style={{ height: "45%" }}></i>
                    <i style={{ height: "65%" }}></i>
                    <i style={{ height: "52%" }}></i>
                    <i style={{ height: "78%" }}></i>
                    <i style={{ height: "68%" }}></i>
                    <i style={{ height: "88%" }}></i>
                    <i style={{ height: "96%" }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;