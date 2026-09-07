function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <a href="#home" className="footer-logo">
            NOVA
          </a>
          <p>
            Build better. Work smarter.
            <br />
            One intelligent workspace for modern teams.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <strong>Product</strong>
            <a href="#features">Features</a>
            <a href="#product">Workspace</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div>
            <strong>Company</strong>
            <a href="#solutions">Solutions</a>
            <a href="#testimonials">Customers</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NOVA. All rights reserved.</span>
        <span>Designed for modern teams.</span>
      </div>
    </footer>
  );
}

export default Footer;