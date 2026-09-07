import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="nav-logo" onClick={closeMenu}>
          NOVA
        </a>

        <div
          id="main-navigation"
          className={`nav-menu ${open ? "open" : ""}`}
        >
          <div className="nav-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#product" onClick={closeMenu}>Product</a>
            <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </div>

          <a
            href="#final-cta"
            className="nav-button"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;