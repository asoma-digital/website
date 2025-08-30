import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isBetaPage = location.pathname === '/beta';

  return (
    <header className="header">
      <div className="container flex-between">

        {/* Logo */}
        <h1 className="logo">
          asoma<span className="text-primary-600">.</span>
        </h1>

        {/* Desktop Nav */}
        {!isBetaPage && (
          <nav className="nav-links desktop-nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Link to="/beta" className="nav-link">Join Beta</Link>
          </nav>
        )}

        {isBetaPage && (
          <nav className="nav-links desktop-nav">
            <Link to="/" className="nav-link">← Back to Home</Link>
          </nav>
        )}

        {/* Mobile toggle button */}
        {!isBetaPage && (
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {!isBetaPage && menuOpen && (
        <nav className="nav-links mobile-nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Link to="/beta" className="nav-link">Join Beta</Link>
        </nav>
      )}
    </header>
  );
}